document.addEventListener('DOMContentLoaded', function() {
    // 导航菜单项点击事件
    const navItems = document.querySelectorAll('.nav-item');
    const sectionTitle = document.querySelector('.supplier-cards h2');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有active类
            navItems.forEach(i => i.classList.remove('active'));
            
            // 添加active类到当前点击的项
            this.classList.add('active');
            
            // 更新标题
            const categoryName = this.querySelector('a').textContent.trim();
            sectionTitle.textContent = categoryName;
            
            // 在实际应用中，这里可以添加加载对应类别供应商数据的逻辑
        });
    });
    
    // 搜索功能实现（如果需要可以添加）
    
    // 卡片hover效果增强
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-4px)';
        });
    });
}); 