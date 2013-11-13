d3.selection.prototype.ich = d3.selection.enter.prototype.ich = function(id,d) {
  var thisSelection = (d) ? this.datum(d) : this;
  thisSelection.html(function (d) {
                  return ich[id](d);
                });
};