
import printJS from "print-js";

export function downloadPDF(cols, results) {
    
    const columnsFormat = cols.map(item => {
         return {
            field: item.field,
            label: item.title,
            formatData: item.render
         }
    })
    const fieldsResult = Object.keys(results[0])
    const resultFormat = results.map(res => {
        const formatRes = fieldsResult.reduce((prev, current) => {
            const optionsCol = columnsFormat.find(item => item.field === current)
            return {
                ...prev,
                [optionsCol.label]: optionsCol.formatData ? optionsCol.formatData(res) : res[current],
            }
        }, {})
        return formatRes
     })
  
    printJS({
        printable: resultFormat,
        properties: columnsFormat.map(item => item.label),
        type: "json",
        style:
            '.checkboxes { display: none !important; } .report-head, .btn-sm, .listBalance, input[type="checkbox"] { display: none !important; } h2 { font-size: 16px !important; }',
    });
}

