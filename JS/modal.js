

$(document).ready(function () {
  // الزر الأول
  $("#btnDetails1").click(function () {
    $("#modalContent").load("msg1.html"); 
    $("#exampleModal").modal("show");
  });

  // الزر الثاني
  $("#btnDetails2").click(function () {
    $("#modalContent").load("msg2.html"); 
    $("#exampleModal").modal("show");
  });
});

// Toast Notification عند إرسال الفورم
$(document).ready(function () {
  $(".contact-form form").on("submit", function (e) {
    e.preventDefault(); // يمنع إعادة تحميل الصفحة

    // عرض إشعار نجاح
    toastr.success("تم إرسال البيانات بنجاح ✅", "نجاح");

    // إذا حاب تنظف الحقول بعد الإرسال
    $(this).trigger("reset");
  });
});
