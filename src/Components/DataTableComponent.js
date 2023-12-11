import React, { useState } from "react";
import { Card, Button, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import generateExcelFile from "../excelDownloadUtility";

const DataTableComponent = () => {
		let [showTable, setShowTable] = useState(false);
		let [data, setData] = useState([]);

		const handleButtonClick = () => {
			// Dummy data for the Excel file
			setData([
				{
					out: "Percentage of ECD committees meetings regularly (R)",
					DISAGGREGATION: "Total",
					unit: "Number",
					Q1: 12,
					Q2: 10,
					Q3: 0,
					Q4: 8,
				},
				{
					out: "Percentage of ECD committees meetings regularly (R)",
					DISAGGREGATION: "Total",
					unit: "Number",
					Q1: 12,
					Q2: 10,
					Q3: 0,
					Q4: 8,
				},
			]);
			console.log(data)

			// Trigger Excel download
			// generateExcelFile(data, "Data.xlsx");

			// Set state to show the custom table
			setShowTable(true);
		};

		const download = () => {
			// Trigger Excel download
			generateExcelFile(data, "Data.xlsx");

		};

		const handleTableClose = () => {
			// Set state to hide the custom table
			setShowTable(false);
		};

		return (
			<div>
				<Card style={{ width: "48%", margin: "0 1%" }}>
					<div style={{ padding: "16px" }}>
						<h3>Data Card</h3>
						<p>.</p>
						<Button variant="contained" color="primary" onClick={handleButtonClick}>
							Monitoring Plan and Report
						</Button>
						<br />
						<br />

						<Button variant="contained" color="primary" onClick={handleButtonClick}>
							POM Table Data
						</Button>
						<br />
						<br />

						<Button variant="contained" color="primary" onClick={handleButtonClick}>
							Participant Table
						</Button>
					</div>
				</Card>
				<br />

				{/* Conditionally render the custom table based on state */}
				{showTable && (
					<Card style={{ width: "90%", margin: "0 1%" }}>
						<div style={{ padding: "16px" }}>
							{/* Your custom table component with Material-UI */}
							<Button
								variant="contained"
								color="primary"
								onClick={download}
								startIcon={<SaveAltIcon />}
							>
								Download Excel
							</Button>
							<TableContainer>
								<Table>
									<TableHead>
										<TableRow>
											<TableCell>OUTPUT INDICATORS</TableCell>
											<TableCell>DISAGGREGATION</TableCell>
											<TableCell>UNIT OF MEASURE</TableCell>
											<TableCell>Q1</TableCell>
											<TableCell>Q2</TableCell>
											<TableCell>Q3</TableCell>
											<TableCell>Q4</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{data.map((d) => (
											<TableRow>
												<TableCell>{d.out}</TableCell>
												<TableCell>{d.DISAGGREGATION}</TableCell>
												<TableCell>{d.unit}</TableCell>
												<TableCell>{d.Q1}</TableCell>
												<TableCell>{d.Q2}</TableCell>
												<TableCell>{d.Q3}</TableCell>
												<TableCell>{d.Q4}</TableCell>
											</TableRow>
										))}
										{/* Add more rows as needed */}
									</TableBody>
								</Table>
							</TableContainer>

							{/* Add a button or UI element to close the custom table */}
							<Button variant="contained" color="secondary" onClick={handleTableClose}>
								Close Table
							</Button>
						</div>
					</Card>
				)}
			</div>
		);

	// const [showDataTable, setShowDataTable] = useState(false);

	// const handleButtonClick1 = () => {
	// 	// Handle button click logic here
	// 	console.log("Button clicked");
	// 	setShowDataTable(true);
	// };

	// const handleButtonClick = () => {
	// 	// Handle button click logic here
	// 	console.log("Button clicked");
	// 	// setShowDataTable(true);
	// };
	// const handleDataTableClose = () => {
	// 	// Set state to hide the DataTable
	// 	setShowDataTable(false);
	// };

	// return (
	// 	<div className={classes.container}>
	// 		
	// 		<Card>
	// 			{/* Conditionally render DataTable based on state */}
	// 			{showDataTable && (
	// 				<div>
	// 					<DataTable>
	// 						<DataTableToolbar>
	// 							<div style={{ display: "flex", justifyContent: "space-between" }}>
	// 								<div>
	// 									<Button secondary>Filter</Button>
	// 									<Button tertiary>Export CSV</Button>
	// 								</div>
	// 								<div>
	// 									{/* <InputField
	// 										type="text"
	// 										placeholder="Search..."
	// 										onChange={(value) => console.log("Search:", value)}
	// 									/> */}
	// 								</div>
	// 							</div>
	// 						</DataTableToolbar>
	// 						<DataTableHead>
	// 							<DataTableCell>OUTPUT INDICATORS</DataTableCell>
	// 							<DataTableCell>DISAGGREGATION 2</DataTableCell>
	// 							<DataTableCell>UNIT OF MEASURE</DataTableCell>
	// 							<DataTableCell>Q1</DataTableCell>
	// 							<DataTableCell>Q2</DataTableCell>
	// 							<DataTableCell>Q3</DataTableCell>
	// 							<DataTableCell>Q4</DataTableCell>
	// 						</DataTableHead>
	// 						<DataTableBody>
	// 							<DataTableRow>
	// 								<DataTableCell>{`Percentage of ECD committees meetings regularly (R)`}</DataTableCell>
	// 								<DataTableCell>TOTAL</DataTableCell>
	// 								<DataTableCell>Number</DataTableCell>
	// 								<DataTableCell>4</DataTableCell>
	// 								<DataTableCell>2</DataTableCell>
	// 								<DataTableCell>0</DataTableCell>
	// 								<DataTableCell>0</DataTableCell>
	// 							</DataTableRow>
	// 						</DataTableBody>
	// 					</DataTable>

	// 					{/* Add a button or UI element to close the DataTable */}
	// 					<Button secondary onClick={handleDataTableClose}>
	// 						Close DataTable
	// 					</Button>
	// 				</div>
	// 			)}
	// 		</Card>
	// 	</div>
	// );
};

export default DataTableComponent;
