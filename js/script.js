document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit', function(e){
    // let mailto handle actual sending; show quick UI feedback
    alert('感谢您的留言！表单将使用默认邮箱发送。');
  });
});
