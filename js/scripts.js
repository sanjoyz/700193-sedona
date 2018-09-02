var b = document.getElementById('search-button-id');
var fisible = false;
b.onclick = function() {
  if (fisible) {
    document.getElementById('search-form-id').style.display = 'none';
    fisible = false;
  } else {
    document.getElementById('search-form-id').style.display = 'block';
    fisible = true;
  }
}
