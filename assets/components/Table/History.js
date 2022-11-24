
var t = $('#display').DataTable();

var review = "<button data-title='review'><img src='https://icons.veryicon.com/png/o/education-technology/smart-campus-1/view-details-2.png' type='button' data-toggle='modal' data-target='#modal-reviewed'/></button ><button data-title='delete'><span class='material-icons mx-2'  data-toggle='modal' data-target='#deletRow-modal'>delete</span></button >";
var localstatus = localStorage.getItem("status");
var approve = "<span style='color: green;'>APPROVE</span>"; 
var reject = "<span style='color: red;'>REJECT</span>";
let num = 0;

t.row.add([num + 1, 'Sokha', "chan", "Phcum Ben", "12/07/2022", approve, review]).draw(false);
t.row.add([num + 2, 'MArk', "jackson", "title", "12/06/2022", approve, review]).draw(false);
t.row.add([num + 3, 'Thida', "karl", "Phcum Ben", "12/07/2022", approve, review]).draw(false);
t.row.add([num + 4, 'Daro', "krosa", "title", "12/05/2022", reject, review]).draw(false);
t.row.add([num + 5, 'vireak', "chan", "Phcum Ben", "12/09/2022", reject, review]).draw(false);
t.row.add([num + 6, 'Kosal', "vicheka", "title", "13/07/2022",reject, review]).draw(false);
t.row.add([num + 7, 'Kjoool', "Rosa", "title", "24/05/2022", reject, review]).draw(false);
t.row.add([num + 8, 'forlto', "chanao", "Phcum Ben", "31/09/2022", reject, review]).draw(false);
t.row.add([num+9, 'candaal', "ghiloo", "title", "12/10/2022", reject, review]).draw(false);
//
t.row.add([num+10, 'Sokha', "chan", "Phcum Ben", "12/07/2022", approve, review]).draw(false);
t.row.add([num+11, 'MArk', "jackson", "title", "12/06/2022", approve, review]).draw(false);
t.row.add([num+12, 'Thida', "karl", "Phcum Ben", "12/07/2022", approve, review]).draw(false);
t.row.add([num+13, 'Daro', "krosa", "title", "12/05/2022", reject, review]).draw(false);
t.row.add([num+14, 'vireak', "chan", "Phcum Ben", "12/09/2022", reject, review]).draw(false);
t.row.add([num+15, 'Kosal', "vicheka", "title", "13/07/2022",reject, review]).draw(false);
t.row.add([num+16, 'Kjoool', "Rosa", "title", "24/05/2022", reject, review]).draw(false);
t.row.add([num+17, 'forlto', "chanao", "Phcum Ben", "31/09/2022", reject, review]).draw(false);
t.row.add([num+18, 'candaal', "ghiloo", "title", "12/10/2022", reject, review]).draw(false);