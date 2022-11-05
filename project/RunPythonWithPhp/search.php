<html>
    <head>
        <title>
            Search The Path
        </title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href="./search.css">
        
       
    </head>
    <body>
    <form class="row g-3 " action="./output.php" method="post">
           
            
           <div class="col-md-6 col-lg-4">
             <label for="Source" class="form-label">Source</label>
             <input type="text" list="Tags"class="form-control" id="src" name="source" required autocomplete="on"  placeholder="SOURCE" required>
           </div>
           <div class="col-md-6 col-lg-4" >
             <label for="Destination" class="form-label">Destination</label>
             <input type="text" list="Tags" class="form-control" id="desc" name="destination" required autocomplete="on"  placeholder="DESTINATION" required>
           </div>
           <div class="col-md-12 col-lg-4">
               
               <button type='submit' class='submitbtn' >Submit</button>
           </div>
           
           </div>
           
         </form>
          
          </div>

          <datalist id="Tags">
              
        <!--Outdoor Points-->
            <option value="MainGate">
            <option value="OutdoorOffice">
            <option value="T-section">
            <option value="T-section2">
            <option value="T-section3">
            <option value="CollegeGarden">
            <option value="MainEntrance">
            <option value="NCCGround">
            <option value="NCCGround1">
            <option value="NCCGround2">
            <option value="Canteen">
            <option value="Parking">
            <option value="BasketballCourt">
            <option value="RoseGarden">
            <option value="BRLobby">
            <option value="Parking">
            <option value="GreenLobby">
            <option value="CollegePlayground">
            <option value="BackGate">
            <option value="">
            <option value="">

        <!--Stairs-->
            <option value="Stairs1GF">
            <option value="Stairs2GF">
            <option value="Stairs3GF">
            <option value="Stairs5GF">
            <option value="Stairs4GF">
            <option value="Stairs6GF">
            <option value="Stairs4F1">
            <option value="Stairs1F1">
            <option value="Stairs5F1">
            <option value="Stairs6F1">
            <option value="Stairs2F1">
            <option value="Stairs3F1">

        <!--Offices-->
            <option value="PrincipalsOffice">
            <option value="AdminOffice">
            <option value="CSHoDOffice">
            <option value="">

        <!--Lab Rooms-->
            <option value="PhyLab3">
            <option value="CSLab1">
            <option value="CSLab2">
            <option value="ChemLab1">
            <option value="ChemLab2">
            <option value="PhyLab1">
            <option value="PhyLab2">
            <option value="">
            <option value="">
            <option value="">
            <option value="">
            
        <!--TP Rooms-->
            <option value="">
            <option value="">
        
        <!--Staff Rooms-->
            <option value="StaffRoom1">
            <option value="">
            <option value="">
            <option value="">
            <option value="">
        
        <!--Classrooms-->
            <option value="Room1">
            <option value="Room2">
            <option value="Room3">
            <option value="Room1003">
            <option value="Room1004">
            <option value="Room4">
            <option value="Room5">
            <option value="Room6">
            <option value="Room7">
            <option value="Room8">
            <option value="Room9">
            <option value="Room10">
            <option value="Room11">
            <option value="Room12">
            <option value="Room101">
            <option value="Room102">
            <option value="Room103">
            <option value="Room104">
            <option value="Room1001">
            <option value="Room1002">
            <option value="Room1003">
            <option value="Room1004">
        
        <!--BRrooms-->
            <option value="BRoom1">
            <option value="BRoom2">
            <option value="BRoom3">
            <option value="BRoom4">
            <option value="BRoom5">
            <option value="BRoom6">
        <!--Others-->
            <otpion value="DyalSinghStatue">
            <option value="NSBEntrance">
            <option value="DisconnectedLobby">
            <option value="Library">
            <option value="Amphitheatre">
            <option value="ConferenceHall">
            <option value="FoyerRoom">
            <option value="MedicalRoom">
            <option value="CanteenEntrance">
            <option value="Canteen">
            <option value="DSCEve">
            <option value="GirlsCommonRoom">
            <option value="ConnectingLobby">
            <option value="">

        <!--Toilets-->
            <option value="MensWashroom3">
            <option value="MensWashroom2">
            <option value="MensWashroom1">
            <option value="WomensWashroom1">
            <option value="WomensWashroom2">
            <option value="WomensWashroom3">
            <option value="">

        </datalist>
    </body>
</html>