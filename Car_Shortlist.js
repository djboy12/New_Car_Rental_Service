var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
var allPlayers = Array.from(document.querySelectorAll('.player'));
var checked = {};

getChecked('Segment');
getChecked('Brand');
getChecked('Fule_Type');
getChecked('Seating_Capacity');

Array.prototype.forEach.call(allCheckboxes, function (el) {
  el.addEventListener('change', toggleCheckbox);
});

function toggleCheckbox(e) {
  getChecked(e.target.name);
  setVisibility();
}

function getChecked(name) {
  checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
    return el.value;
  });
}

function setVisibility() {
  allPlayers.map(function (el) {
    var Segment = checked.Segment.length ? _.intersection(Array.from(el.classList), checked.startingReserves).length : true;
    var Brand = checked.Brand.length ? _.intersection(Array.from(el.classList), checked.injured).length : true;
    var Fule_Type = checked.Fule_Type.length ? _.intersection(Array.from(el.classList), checked.position).length : true;
    var Seating_capacity = checked.Seating_capacity.length ? _.intersection(Array.from(el.classList), checked.nbaTeam).length : true;
    if (Segment && Brand && Fule_Type && Seating_capacity) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  });
}