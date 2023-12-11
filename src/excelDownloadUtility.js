// excelDownloadUtility.js

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const generateExcelFile = (data, fileName) => {
	// Create a new workbook
	const workbook = XLSX.utils.book_new();

	// Convert data to worksheet
	const worksheet = XLSX.utils.json_to_sheet(data);

	// Add the worksheet to the workbook
	XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");

	// Create a buffer from the workbook
	const buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });

	// Use file-saver to trigger the download
	saveAs(new Blob([buffer]), fileName);
};

export default generateExcelFile;
