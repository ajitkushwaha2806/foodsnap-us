"use client";
import * as Yup from "yup";
import posthog from "posthog-js";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "@/components/ui/button";
import { useAppConfigStore } from "@/stores/app-config.store";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { User, Phone, Loader2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Name is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Enter a valid 10-digit number")
    .required("WhatsApp number is required"),
});

const FieldError = ({ touched, error }) => {
  if (!touched || !error) return null;
  return (
    <motion.p
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-xs font-medium text-red-500 mt-1.5 px-1"
    >
      {error}
    </motion.p>
  );
};

export default function ReserveSeatDialog({ open, onOpenChange }) {
  const plan = useAppConfigStore((state) => state.plan);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Dialog open={open} onOpenChange={(val) => { if (!isSubmitting) onOpenChange(val); }}>
      <DialogContent className="z-[100] border-0 p-0 w-[95vw] max-w-[480px] bg-white rounded-[24px] shadow-2xl flex flex-col overflow-hidden max-h-[90vh]">
        <div className="px-6 pt-8 pb-5 sm:px-8 bg-white border-b border-zinc-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] relative z-10">
          <DialogHeader>
            <DialogTitle className="text-left text-2xl font-extrabold text-zinc-900 tracking-tight">
              Get Instant Access
            </DialogTitle>
            <DialogDescription className="text-left text-zinc-500 text-sm mt-1.5 font-medium leading-relaxed">
              Enter your name and WhatsApp number to get started with Foodsnap Pro.
            </DialogDescription>
          </DialogHeader>
        </div>

        <Formik
          initialValues={{
            name: "",
            phone: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            setIsSubmitting(true);
            try {
              // Fire lead captured events
              posthog.capture("lead_captured", { plan_id: plan?._id, phone: values.phone, name: values.name });
              if (typeof window !== "undefined" && window.fbq) {
                window.fbq("track", "Lead", { content_name: "Foodsnap Pro Library" });
              }

              // Save Lead 
              await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: values.name.trim(),
                  phone: values.phone.trim(),
                  planId: plan?._id,
                  businessActivity: "Foodsnap Pro Customer"
                }),
              });

              toast.success("Thanks! We will contact you shortly.");
              resetForm();
              onOpenChange(false);
            } catch (error) {
              console.error("Failed to save lead", error);
              toast.error("Something went wrong. Please try again.");
            } finally {
              setIsSubmitting(false);
            }
          }}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form className="flex flex-col bg-white overflow-hidden">
              <div className="overflow-x-hidden overflow-y-auto px-6 py-6 sm:px-8 relative space-y-6">
                
                <div className="space-y-2">
                  <label className="text-[13px] font-bold tracking-wide text-zinc-800 uppercase">Full Name</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-zinc-400 group-focus-within:text-emerald-500 transition-colors" />
                    </div>
                    <Field
                      name="name"
                      placeholder="e.g. John Doe"
                      className="w-full h-[52px] pl-12 pr-4 bg-zinc-50 hover:bg-zinc-100/50 border border-zinc-200 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 rounded-xl text-base font-medium transition-all outline-none"
                    />
                  </div>
                  <FieldError touched={touched.name} error={errors.name} />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold tracking-wide text-zinc-800 uppercase">WhatsApp Number</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-zinc-400 group-focus-within:text-emerald-500 transition-colors" />
                    </div>
                    <Field
                      name="phone"
                      type="tel"
                      maxLength={10}
                      placeholder="2125551234"
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, "");
                        setFieldValue("phone", val);
                      }}
                      className="w-full h-[52px] pl-12 pr-4 bg-zinc-50 hover:bg-zinc-100/50 border border-zinc-200 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 rounded-xl text-base font-medium transition-all outline-none"
                    />
                  </div>
                  <FieldError touched={touched.phone} error={errors.phone} />
                </div>
              </div>

              <div className="px-6 py-5 sm:px-8 bg-white border-t border-zinc-100 flex items-center gap-3">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-14 flex-1 bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-6 w-6 animate-spin" />
                  ) : (
                    <>
                      Sign Up Now <ArrowRight className="w-5 h-5 ml-1" />
                    </>
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}
