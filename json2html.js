export default function json2html(data) {
    // Start the table with a custom attribute
    let html = `<table data-user="anushka.dodla@gmail.com">`;
    
    // Add table headers
    html += `
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    // Loop through data and add table rows
    data.forEach(item => {
        html += `
            <tr>
                <td>${item.Name}</td>
                <td>${item.Age}</td>
                <td>${item.Gender || ''}</td>
            </tr>
        `;
    });

    // Close the tbody and table tags
    html += `</tbody></table>`;
    
    return html;
}
