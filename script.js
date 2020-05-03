window.addEventListener("resize", function(event) {
  var bricks = Array.prototype.slice.call(
    document.querySelector(".masonry-brick")
  );
  bricks.forEach(function(brick) {
    brick.classlist.add("transition");
  });
});
