const SHEET_ID = '1U0v-_cJUCYHRciWuehTzPvhAuFovrxQgpczjFdv9K3Q';
function doGet() {
return HtmlService.createTemplateFromFile('index.html')
.evaluate()
.setTitle('Contact Form');
}
function include(filename) {
return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
function submitForm(data) {
const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
sheet.appendRow([
new Date(),
data.name,
data.email,
data.message
]);
return 'success';
}
