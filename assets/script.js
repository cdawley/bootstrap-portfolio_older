// javascript function toggles 'd-none' class for displaying main contents of bootstrap page
// contents in general have class 'custom-_content', individual links have unique id's

function toggleVisible (id) {

    // gather all classes named 'custom_content' in an array
var els = document.getElementsByClassName('custom_content');

    // go through array and make sure all 'custom content' classes have 'd-none' class
for (var i = 0; i < els.length; i++) els[i].classList.add('d-none');

    // remove 'd-none' class from from the content you want to display
document.getElementById(id).classList.toggle('d-none');

}