// 🛠️ استيراد الأدوات
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

// 📡 إعداد السيرفر
const app = express();
const PORT = 5000;

// 🧠 Middleware
app.use(cors()); // يسمح للـ React يتصل بالسيرفر
app.use(express.json()); // يحوّل JSON لجسم مقروء

// 📁 مكان حفظ البيانات
const filePath = path.join(__dirname, "bookings.json");

// ✳️ تأكد من وجود الملف
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]));
}

// 📩 استقبال الحجز
app.post("/api/bookings", (req, res) => {
  const newBooking = req.body; // البيانات اللي جات من React

  // ⏬ نقرأ الداتا القديمة
  const oldBookings = JSON.parse(fs.readFileSync(filePath));

  // ➕ نضيف الحجز الجديد
  oldBookings.push(newBooking);

  // 💾 نكتبهم من جديد في الملف
  fs.writeFileSync(filePath, JSON.stringify(oldBookings, null, 2));

  // ✅ نرد على العميل (React)
  res.status(201).json({ message: "Booking saved successfully!" });
});

// 🚀 تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
