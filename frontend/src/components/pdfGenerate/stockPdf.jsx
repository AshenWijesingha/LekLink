import jsPDF from "jspdf";
import "jspdf-autotable";

export default function StockPdf(props) {
  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Stock Report";
    const headers = [["Title", "Brand", "Quantity", "Price"]];

    const data = props.data.map(elt => [elt.Title, elt.Brand, elt.Quantity, elt.Price]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save(`stock_${getFormattedTime()}.pdf`)
  }

  function getFormattedTime() {
    var today = new Date();
    var y = today.getFullYear();
    // JavaScript months are 0-based.
    var m = today.getMonth() + 1;
    var d = today.getDate();
    var h = today.getHours();
    var mi = today.getMinutes();
    var s = today.getSeconds();
    return y + "-" + m + "-" + d + "-" + h + "-" + mi + "-" + s;
  }

  return (
    <button onClick={() => exportPDF()} className="btn primary-btn sfont-size" ><i class="fas fa-download"></i> Stock Report</button>
  )
}