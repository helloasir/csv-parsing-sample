import Papa from "papaparse";

// handle importing csv
document.querySelector("#file-input").addEventListener("change", (e) => {
  console.log("file selected");
  parseCsv(e.target.files[0]);
});

/**
 *
 * @param {File} file The CSV file being imported
 */
async function parseCsv(file) {
  Papa.parse(file, {
    header: true,
    complete: (results) => {
      // results object contains data and errors if any
      console.log(results);

      if (results.errors.length > 0) {
        const lineNumbers = results.errors.map(error => error.row).join(', ')
        alert(`Import failed on ${results.errors.length > 1 ? 'lines' : 'line'} ${lineNumbers}. Please correct the errors and try again.`)
        return;
      }

      const data = results.data;
      console.log(data);

      // Do something with the data here. Array of objects with keys same as column names
    }
  });
}
