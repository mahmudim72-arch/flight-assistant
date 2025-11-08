// دستیار هوشمند خرید بلیط - MeliCharter
console.log("🤖 دستیار خرید بلیط فعال شد");

// ایجاد المان دستیار
const assistant = document.createElement('div');
assistant.innerHTML = `
    <div id="assistantContainer" style="
        position: fixed; 
        bottom: 20px; 
        left: 20px; 
        z-index: 10000;
        font-family: Tahoma, Arial, sans-serif;
    ">
        <!-- دکمه دستیار -->
        <button onclick="toggleAssistant()" style="
            width: 60px; 
            height: 60px; 
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white; 
            border: none; 
            border-radius: 50%; 
            font-size: 24px; 
            cursor: pointer; 
            box-shadow: 0 5px 20px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
        ">🤖</button>
        
        <!-- پنجره چت -->
        <div id="assistantChat" style="
            position: absolute;
            bottom: 70px;
            left: 0;
            width: 300px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            display: none;
            overflow: hidden;
        ">
            <!-- هدر -->
            <div style="
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                padding: 15px;
                text-align: center;
                font-weight: bold;
                font-size: 16px;
            ">دستیار خرید بلیط</div>
            
            <!-- محتوای چت -->
            <div id="chatMessages" style="
                height: 200px;
                padding: 15px;
                overflow-y: auto;
                background: #f8f9fa;
                font-size: 14px;
            ">
                <div style="
                    background: white;
                    padding: 10px;
                    border-radius: 10px;
                    margin-bottom: 10px;
                    border: 1px solid #e9ecef;
                ">
                    <strong>سلام! 👋</strong><br>
                    من دستیار خرید بلیط شما هستم. می‌تونم در خرید راهنماییتون کنم!
                </div>
            </div>
            
            <!-- دکمه‌های اقدام -->
            <div style="
                padding: 15px;
                background: white;
                border-top: 1px solid #e9ecef;
                display: flex;
                gap: 10px;
            ">
                <button onclick="startGuidance()" style="
                    flex: 1;
                    padding: 10px;
                    background: #28a745;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 14px;
                ">شروع راهنمایی</button>
                
                <button onclick="closeAssistant()" style="
                    flex: 1;
                    padding: 10px;
                    background: #6c757d;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 14px;
                ">بستن</button>
            </div>
        </div>
    </div>
`;

// اضافه کردن به صفحه
document.body.appendChild(assistant);

// توابع
function toggleAssistant() {
    const chat = document.getElementById('assistantChat');
    chat.style.display = chat.style.display === 'block' ? 'none' : 'block';
}

function closeAssistant() {
    document.getElementById('assistantChat').style.display = 'none';
}

function addMessage(text) {
    const messages = document.getElementById('chatMessages');
    const message = document.createElement('div');
    message.style = "background: white; padding: 10px; border-radius: 10px; margin-bottom: 10px; border: 1px solid #e9ecef;";
    message.innerHTML = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
}

function startGuidance() {
    addMessage('🎯 <strong>راهنمایی شروع شد!</strong><br>من قدم به قدم کنار شما هستم...');
    
    // راهنمایی ساده
    setTimeout(() => addMessage('۱. ابتدا شهر <strong>مبدأ</strong> را انتخاب کنید'), 1000);
    setTimeout(() => addMessage('۲. سپس شهر <strong>مقصد</strong> را انتخاب کنید'), 3000);
    setTimeout(() => addMessage('۳. <strong>تاریخ پرواز</strong> را مشخص کنید'), 5000);
    setTimeout(() => addMessage('۴. روی دکمه <strong>جستجو</strong> کلیک کنید'), 7000);
    setTimeout(() => addMessage('🎉 <strong>تبریک!</strong> حالا می‌تونید پرواز مورد نظر را انتخاب کنید'), 9000);
}

// هایلایت المان‌ها روی هاور
document.addEventListener('mouseover', function(e) {
    if (e.target.matches('input, select, button')) {
        e.target.style.boxShadow = '0 0 0 2px #28a745';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.matches('input, select, button')) {
        e.target.style.boxShadow = '';
    }
});
