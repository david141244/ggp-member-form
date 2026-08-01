// ওয়েবসাইট ব্যাকএন্ড বা ফর্মে ইউজার কোনো ফাইল সিলেক্ট করলে নির্দিষ্ট সাইজে প্রিভিউ দেখার কোড
function previewResizedImage(input, targetImgId, targetWidth, targetHeight) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var img = new Image();
            img.src = e.target.result;
            img.onload = function () {
                var canvas = document.createElement('canvas');
                canvas.width = targetWidth;
                canvas.height = targetHeight;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
                
                // সেট করা নির্দিষ্ট সাইজের ইমেজ পাওয়া যাবে
                document.getElementById(targetImgId).src = canvas.toDataURL('image/jpeg');
            }
        }
        reader.readAsDataURL(input.files[0]);
    }
}