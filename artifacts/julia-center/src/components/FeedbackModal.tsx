import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Send, X } from "lucide-react";

interface FeedbackModalProps {
  open: boolean;
  onClose: () => void;
}

export default function FeedbackModal({ open, onClose }: FeedbackModalProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const reset = () => {
    setRating(0);
    setHoverRating(0);
    setReviewName("");
    setReviewText("");
    setSubmitted(false);
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 300);
  };

  const handleSubmit = () => {
    if (!rating) return;
    const stars = "⭐".repeat(rating);
    const name = reviewName.trim() || "زبونة كريمة";
    const text = reviewText.trim();
    const msg = encodeURIComponent(
      `تقييم جديد من ${name}\n${stars} (${rating}/5)${text ? `\nالتعليق: ${text}` : ""}`
    );
    window.open(`https://wa.me/962770754031?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const labels = ["", "ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز! 🌟"];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-full max-w-md bg-background border border-white/40 rounded-3xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-5 flex items-center justify-between border-b border-white/20">
                <h2 className="text-xl font-black text-foreground">اتركي تقييمك ⭐</h2>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-colors"
                >
                  <X size={16} className="text-foreground" />
                </button>
              </div>

              <div className="p-6">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <div className="text-5xl mb-4">🌸</div>
                    <h3 className="text-xl font-black text-foreground mb-2">شكراً لك!</h3>
                    <p className="text-muted-foreground mb-6">تم إرسال تقييمك، نقدّر ثقتك بمركز جوليا.</p>
                    <div className="flex gap-3 justify-center">
                      <Button
                        className="rounded-full bg-primary text-white px-6"
                        onClick={reset}
                      >
                        تقييم آخر
                      </Button>
                      <Button variant="outline" className="rounded-full px-6" onClick={handleClose}>
                        إغلاق
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <>
                    {/* Stars */}
                    <div className="text-center mb-6">
                      <p className="text-foreground font-semibold mb-4">كيف كانت تجربتك؟</p>
                      <div className="flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="transition-transform hover:scale-125 active:scale-110 touch-manipulation"
                          >
                            <Star
                              size={44}
                              className={`transition-colors ${
                                star <= (hoverRating || rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-muted-foreground/25"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                      {rating > 0 && (
                        <motion.p
                          key={rating}
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-primary font-bold mt-2 text-sm"
                        >
                          {labels[rating]}
                        </motion.p>
                      )}
                    </div>

                    {/* Name */}
                    <div className="mb-3">
                      <label className="block text-foreground font-semibold mb-1.5 text-sm">اسمك (اختياري)</label>
                      <input
                        type="text"
                        value={reviewName}
                        onChange={e => setReviewName(e.target.value)}
                        placeholder="مثال: سارة"
                        className="w-full rounded-xl border border-border bg-white/60 px-4 py-2.5 text-right text-foreground text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>

                    {/* Comment */}
                    <div className="mb-5">
                      <label className="block text-foreground font-semibold mb-1.5 text-sm">تعليقك (اختياري)</label>
                      <textarea
                        value={reviewText}
                        onChange={e => setReviewText(e.target.value)}
                        placeholder="شاركينا تجربتك مع خدماتنا..."
                        rows={3}
                        className="w-full rounded-xl border border-border bg-white/60 px-4 py-2.5 text-right text-foreground text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                      />
                    </div>

                    <Button
                      onClick={handleSubmit}
                      disabled={!rating}
                      className="w-full rounded-full bg-primary hover:bg-primary/90 text-white py-5 text-base font-bold shadow-md disabled:opacity-40"
                    >
                      <Send size={16} className="ml-2" />
                      إرسال التقييم عبر واتساب
                    </Button>
                    {!rating && (
                      <p className="text-center text-muted-foreground text-xs mt-2">اختاري عدد النجوم أولاً</p>
                    )}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
