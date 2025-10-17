import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 🧩 If you later connect to a backend to verify Razorpay payment:
export const paymentVerify = createAsyncThunk(
  "payment/verify",
  async (paymentData, { rejectWithValue }) => {
    try {
      // Example: send to your backend to verify Razorpay signature
      // const response = await fetch("https://your-server.com/api/verify-payment", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(paymentData),
      // });
      // const result = await response.json();
      // return result;

      // For now, simulate verification success:
     await new Promise((resolve) => setTimeout(resolve, 1000));
return {
  message_type: "success",
  message: "Payment verified successfully",
  data: {
    payment_id: paymentData?.razorpay_payment_id || "dummy_payment_id",
    order_id: paymentData?.razorpay_order_id || "dummy_order_id",
    signature: paymentData?.razorpay_signature || "dummy_signature",
  },
};

    } catch (error) {
      return rejectWithValue(error.message || "Payment verification failed");
    }
  }
);

const PaymentSlice = createSlice({
  name: "payment",
  initialState: {
    loading: false,
    success: false,
    error: null,
    amount: null,
    orderId: null,
    paymentId: null,
    paymentStatus: null,
  },
  reducers: {
    startPayment: (state, action) => {
      state.loading = true;
      state.error = null;
      state.amount = action.payload?.amount || 0;
      state.orderId = action.payload?.orderId || null;
      state.success = false;
      state.paymentStatus = "pending";
    },
    setPaymentSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.paymentStatus = "success";
      state.paymentId = action.payload.paymentId;
    },
    setPaymentFailed: (state, action) => {
      state.loading = false;
      state.success = false;
      state.paymentStatus = "failed";
      state.error = action.payload;
    },
    resetPayment: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.amount = null;
      state.orderId = null;
      state.paymentId = null;
      state.paymentStatus = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(paymentVerify.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(paymentVerify.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.paymentStatus = "verified";
        state.paymentId = action.payload?.data?.payment_id || null;
        state.orderId = action.payload?.data?.order_id || null;
      })
      .addCase(paymentVerify.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.paymentStatus = "verification_failed";
        state.error = action.payload || "Verification failed";
      });
  },
});

export const {
  startPayment,
  setPaymentSuccess,
  setPaymentFailed,
  resetPayment,
} = PaymentSlice.actions;

export default PaymentSlice.reducer;
