// Hàm xử lý khi người dùng chọn dịch vụ cày sao
function calculatePrice() {
    const sao = parseFloat(document.getElementById("sao-input").value);
    let price = 0;

    if (sao === 2) {
        price = 1500; // Giá cho 2 sao
    } else if (sao === 1) {
        price = 750; // Giá cho 1 sao
    } else if (sao === 0.5) {
        price = 375; // Giá cho 0.5 sao
    } else {
        alert("Vui lòng nhập số sao hợp lệ (0.5, 1 hoặc 2).");
        return;
    }

    // Hiển thị giá tính toán
    document.getElementById("price-display").innerHTML = `Giá cày sao: ${price} nghìn VNĐ`;
}

// Hàm xử lý bảng giá cày rank khi người dùng chọn
function calculateRankPrice() {
    const rankFrom = document.getElementById("rank-from").value;
    const rankTo = document.getElementById("rank-to").value;
    let price = 0;

    // Tính giá dựa trên lựa chọn rank
    if (rankFrom === "Đồng" && rankTo === "Huyền Thoại") {
        price = 30; // 30 nghìn
    } else if (rankFrom === "Huyền Thoại" && rankTo === "Đại Cao Thủ") {
        price = 70; // 70 nghìn
    } else if (rankFrom === "Đại Cao Thủ" && rankTo === "Thách Đấu 6") {
        price = 80; // 80 nghìn
    } else if (rankFrom === "Thách Đấu 6" && rankTo === "Thách Đấu 4") {
        price = 100; // 100 nghìn
    } else if (rankFrom === "Thách Đấu 4" && rankTo === "Thách Đấu 3") {
        price = 120; // 120 nghìn
    } else {
        alert("Vui lòng chọn đúng cặp rank.");
        return;
    }

    // Hiển thị giá tính toán
    document.getElementById("rank-price-display").innerHTML = `Giá cày rank: ${price} nghìn VNĐ`;
}

// Event listeners cho form cày sao và cày rank
document.getElementById("calculate-sao-btn").addEventListener("click", calculatePrice);
document.getElementById("calculate-rank-btn").addEventListener("click", calculateRankPrice);
