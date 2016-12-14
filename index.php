<?php
$start = $_GET['start'];
$end = $_GET['end'];
?>
<!DOCTYPE html>
<html>
<head>
    <style>
     html { height: 100% }
     body { height: 100%; margin: 0px; padding: 0px }
     #map { height: 100% }

    </style>
</head>
<body>
<!--
<form>
    From :<input type="text" name="from" id="start" value="<?php echo $start; ?>">
    To :<input type="text" name="to" id="end" value="<?php echo $end; ?>">
    <button type="button" onclick="display()">Submit</button>
</form>
-->
<div id="map"></div>
<script type="text/javascript" src="loadmap.js">
</script>


<script 
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtc8-_xNscO4567FqNG1wpWqd14dmdRS4&callback=initMap">
</script>
<script>
var start = decodeURI("<?php echo $start; ?>");
var end = decodeURI("<?php echo $end; ?>");
</script>
<script type="text/javascript" src="input.js">
</script>
</body>
</html>