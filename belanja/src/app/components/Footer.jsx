export default function Footer({ items }) {
    if (items.length == 0) {
        return <footer className="stats">Daftar belanja masih kosong!</footer>
    }
    const totalItem = items.length;
    const checkedItem = items.filter((item) => item.checked).length;
    const percentage = Math.round((checkedItem / totalItem) * 100);
    return <footer className="stats">Ada {totalItem} barang di daftar belanjaan, {checkedItem} barang sudah dibeli ({percentage}%)</footer>
}
