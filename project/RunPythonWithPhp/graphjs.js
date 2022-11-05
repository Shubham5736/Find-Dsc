(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("064912dc-5bc2-4275-96f8-c928e527e7a4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '064912dc-5bc2-4275-96f8-c928e527e7a4' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.0.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"382295fb-c648-437a-9708-6b774888d78d":{"defs":[],"roots":{"references":[{"attributes":{"axis":{"id":"1015"},"coordinates":null,"dimension":1,"group":null,"ticker":null,"visible":false},"id":"1018","type":"Grid"},{"attributes":{"callback":null,"tooltips":[["Name","@index"]]},"id":"1024","type":"HoverTool"},{"attributes":{},"id":"1023","type":"ZoomOutTool"},{"attributes":{},"id":"1257","type":"UnionRenderers"},{"attributes":{},"id":"1020","type":"WheelZoomTool"},{"attributes":{},"id":"1019","type":"PanTool"},{"attributes":{"source":{"id":"1180"}},"id":"1182","type":"CDSView"},{"attributes":{},"id":"1021","type":"ResetTool"},{"attributes":{},"id":"1022","type":"ZoomInTool"},{"attributes":{},"id":"1258","type":"Selection"},{"attributes":{"label":{"value":"Optimal Path"},"renderers":[{"id":"1068"},{"id":"1129"},{"id":"1153"}]},"id":"1082","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#00b300"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":30},"x":{"value":2},"y":{"value":-3.5}},"id":"1151","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"1064"},"glyph":{"id":"1065"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1067"},"nonselection_glyph":{"id":"1066"},"view":{"id":"1069"}},"id":"1068","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1149"}},"id":"1154","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"1149"},"glyph":{"id":"1150"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1152"},"nonselection_glyph":{"id":"1151"},"view":{"id":"1154"}},"id":"1153","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#00b300","line_width":5,"x":{"field":"x"},"y":{"field":"y"}},"id":"1067","type":"Line"},{"attributes":{"data":{"x":[1,2],"y":[-4,-3.5]},"selected":{"id":"1081"},"selection_policy":{"id":"1080"}},"id":"1064","type":"ColumnDataSource"},{"attributes":{},"id":"1259","type":"UnionRenderers"},{"attributes":{"line_color":"#00b300","line_width":5,"x":{"field":"x"},"y":{"field":"y"}},"id":"1065","type":"Line"},{"attributes":{"source":{"id":"1064"}},"id":"1069","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#00b300"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":30},"x":{"value":2},"y":{"value":-3.5}},"id":"1152","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#00b300","line_width":5,"x":{"field":"x"},"y":{"field":"y"}},"id":"1066","type":"Line"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"field":"edge_color"},"line_width":{"value":1.5}},"id":"1192","type":"MultiLine"},{"attributes":{},"id":"1173","type":"UnionRenderers"},{"attributes":{},"id":"1174","type":"Selection"},{"attributes":{},"id":"1260","type":"Selection"},{"attributes":{},"id":"1080","type":"UnionRenderers"},{"attributes":{},"id":"1081","type":"Selection"},{"attributes":{"tools":[{"id":"1019"},{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"}]},"id":"1025","type":"Toolbar"},{"attributes":{},"id":"1261","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"1046"},"glyph":{"id":"1047"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1049"},"nonselection_glyph":{"id":"1048"},"view":{"id":"1051"}},"id":"1050","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"end":{"id":"1175"},"group":null,"line_width":{"value":0},"source":{"id":"1244"},"start":null,"x_end":{"value":2},"x_start":{"value":1},"y_end":{"value":-3.5},"y_start":{"value":-4}},"id":"1176","type":"Arrow"},{"attributes":{},"id":"1262","type":"Selection"},{"attributes":{"size":{"value":10}},"id":"1175","type":"NormalHead"},{"attributes":{"coordinates":null,"data_source":{"id":"1180"},"glyph":{"id":"1197"},"group":null,"hover_glyph":null,"view":{"id":"1182"}},"id":"1181","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"edge_renderer":{"id":"1185"},"group":null,"inspection_policy":{"id":"1237"},"layout_provider":{"id":"1191"},"node_renderer":{"id":"1181"},"selection_policy":{"id":"1236"}},"id":"1178","type":"GraphRenderer"},{"attributes":{"coordinates":null,"group":null},"id":"1052","type":"Title"},{"attributes":{"data":{"index":["MainGate","OutdoorOffice","T-section","T-section2","T-section3","CollegeGarden","MainEntrance","NCCGround1","NCCGround2","NCCGround","PrincipalsOffice","AdminOffice","Stairs1GF","DyalSinghStatue","NSBEntrance","Stairs2GF","PhyLab3","CSHoDOffice","Stairs3GF","CSLab1","CSLab2","MensWashroom3","Room1","Room2","Room3","DisconnectedLobby","MensWashroom2","Library","Amphitheatre","Stairs5GF","ChemLab1","ChemLab2","PhyLab1","PhyLab2","MensWashroom1","WomensWashroom1","Stairs4GF","BasketballCourt","RoseGarden","BRLobby","BRoom1","BRoom2","BRoom3","BRoom4","BRoom5","BRoom6","Parking","GreenLobby","ConferenceHall","FoyerRoom","MedicalRoom","Stairs6GF","CanteenEntrance","Canteen","DSCEve","CollegePlayground","BackGate","Room4","Room5","Room6","StaffRoom1","Room7","Room8","Room9","Room10","Room11","Room12","Stairs4F1","Stairs1F1","Stairs5F1","GirlsCommonRoom","WomensWashroom2","Room101","Room102","Room103","Room104","Stairs6F1","ConnectingLobby","Stairs2F1","Room1001","Room1002","Room1003","Room1004","WomensWashroom3","Stairs3F1"],"pos":[[1,-4],[2,-3.5],[1,-3],[7,-3],[-5,-1.5],[3,-2],[0,-1],[-0.5,-2],[-9,-1.5],[-5,-3],[1,0],[-1,0],[0,1],[0,0],[1,1],[0.5,2],[0.5,3],[1,3],[1.5,3],[0.5,4],[1,4],[2,4],[-2,0],[-3,0],[-4,0],[-5,0],[-4,1],[-5,3],[-1.5,3],[-4.5,-0.5],[2,0],[3,0],[4,0],[5,0],[4,1],[5,1],[6,-0.5],[10,0],[9.5,-3.5],[7.5,0],[7.5,-1],[7.5,-0.5],[7.5,0.5],[7.5,1.2],[7.5,2],[7.5,2.8],[4.5,-3],[-3.5,2],[-6.5,1],[-6,-1],[-7,-1],[-8,-0.5],[-9,0],[-10,0],[-9,3],[-12,2.5],[-14,0],[-4,7],[-3,7],[-2,7],[-1,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7],[0,8],[-5.2,6.5],[-5,6],[-6,6.5],[-7,7.5],[-7,6.5],[-8,7.5],[-8,6.5],[-9,7],[1.5,9],[0.5,10],[1.5,11],[1.5,12],[1.5,13],[2.5,13],[4,13],[3.5,12]]},"selected":{"id":"1268"},"selection_policy":{"id":"1267"}},"id":"1180","type":"ColumnDataSource"},{"attributes":{"data":{"edge_color":["#00b300","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black"],"end":["OutdoorOffice","T-section","T-section","Parking","CollegeGarden","MainEntrance","Parking","BRoom1","Parking","RoseGarden","MainEntrance","DisconnectedLobby","NCCGround2","BRoom1","NCCGround1","DyalSinghStatue","NCCGround","NCCGround","CanteenEntrance","DyalSinghStatue","ChemLab1","NSBEntrance","DyalSinghStatue","Amphitheatre","Room1","DyalSinghStatue","Stairs1F1","Stairs2GF","CSHoDOffice","PhyLab3","Stairs2F1","CSHoDOffice","CSLab1","CSLab1","CSLab2","MensWashroom3","Stairs3GF","MensWashroom3","Stairs3F1","CSLab2","Room2","Amphitheatre","Amphitheatre","Room3","GreenLobby","MensWashroom2","DisconnectedLobby","Stairs5GF","Library","Stairs5GF","GreenLobby","ConferenceHall","FoyerRoom","CanteenEntrance","GreenLobby","DSCEve","CanteenEntrance","GreenLobby","Stairs5F1","ChemLab2","PhyLab1","MensWashroom1","PhyLab2","Stairs4GF","WomensWashroom1","BRLobby","Stairs4F1","BRLobby","BRoom1","BRoom2","BRoom3","BRoom2","BRoom4","BRoom5","BRoom6","CanteenEntrance","FoyerRoom","MedicalRoom","Stairs6GF","MedicalRoom","Stairs6GF","CanteenEntrance","Stairs6F1","Canteen","DSCEve","BackGate","CollegePlayground","BackGate","GirlsCommonRoom","Stairs5F1","Room5","Room6","StaffRoom1","Room7","Stairs1F1","Stairs1F1","Room8","ConnectingLobby","Room9","Room10","Room11","Room12","Stairs4F1","GirlsCommonRoom","WomensWashroom2","Room101","Room102","Room103","Room102","Room104","Stairs6F1","Room104","Stairs6F1","Stairs2F1","Room1001","Room1002","Stairs3F1","Room1003","Room1004","Stairs3F1","Stairs3F1"],"start":["MainGate","MainGate","OutdoorOffice","OutdoorOffice","T-section","T-section","T-section","T-section2","T-section2","T-section2","T-section3","T-section3","T-section3","CollegeGarden","MainEntrance","MainEntrance","NCCGround1","NCCGround2","NCCGround2","PrincipalsOffice","PrincipalsOffice","PrincipalsOffice","AdminOffice","AdminOffice","AdminOffice","Stairs1GF","Stairs1GF","NSBEntrance","NSBEntrance","NSBEntrance","Stairs2GF","PhyLab3","PhyLab3","CSHoDOffice","CSHoDOffice","CSHoDOffice","CSHoDOffice","Stairs3GF","Stairs3GF","CSLab1","Room1","Room1","Room2","Room2","Room2","Room3","Room3","Room3","DisconnectedLobby","DisconnectedLobby","DisconnectedLobby","DisconnectedLobby","DisconnectedLobby","DisconnectedLobby","Library","Library","Library","Amphitheatre","Stairs5GF","ChemLab1","ChemLab2","PhyLab1","PhyLab1","PhyLab2","PhyLab2","PhyLab2","Stairs4GF","BasketballCourt","RoseGarden","BRLobby","BRLobby","BRoom1","BRoom3","BRoom4","BRoom5","GreenLobby","ConferenceHall","ConferenceHall","ConferenceHall","FoyerRoom","MedicalRoom","Stairs6GF","Stairs6GF","CanteenEntrance","CanteenEntrance","Canteen","DSCEve","CollegePlayground","Room4","Room4","Room4","Room5","Room6","StaffRoom1","StaffRoom1","Room7","Room7","Room7","Room8","Room9","Room10","Room11","Room12","Stairs5F1","GirlsCommonRoom","WomensWashroom2","WomensWashroom2","Room101","Room101","Room102","Room103","Room103","Room104","ConnectingLobby","Stairs2F1","Room1001","Room1002","Room1002","Room1003","Room1004","WomensWashroom3"],"weight":[31,42,36,39,13,45,18,25,25,20,74,11.5,38,40,12,8.5,77,48,17,13,15.6,15,15,30,20,5,10,10,22,17,10,7,5,5,5,15,8,10,10,5,14,31,33,14,21,5,23,7,19,16,28,15,15,39,30,75,54,35,10,15.6,15.6,5,15.6,15.6,5,25,10,40,30,6,6,7,7,7,7,78,5,13,16,10,7,13,10,6,43,126,53,53,12.1,7.1,14.2,14.2,14.2,14.2,7,7,14.2,8,14.2,14.2,14.2,14.2,7.1,7,7,20,20,15.6,5,15.6,7.8,5,7.8,8,7,10,10,10,5,7,7]},"selected":{"id":"1270"},"selection_policy":{"id":"1269"}},"id":"1184","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-15,12],"y":[5,5]},"selected":{"id":"1262"},"selection_policy":{"id":"1261"}},"id":"1214","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1046"}},"id":"1051","type":"CDSView"},{"attributes":{"data":{"x":[1,2],"y":[-4,-3.5]},"selected":{"id":"1061"},"selection_policy":{"id":"1060"}},"id":"1046","type":"ColumnDataSource"},{"attributes":{"angle":{"value":1},"text_color":{"value":"black"},"text_font_size":{"value":"12pt"},"text_font_style":{"value":"bold"},"x":{"value":1.82},"y":{"value":-3.5}},"id":"1209","type":"Text"},{"attributes":{"label":{"value":"Path2"},"renderers":[{"id":"1050"},{"id":"1087"},{"id":"1107"}]},"id":"1063","type":"LegendItem"},{"attributes":{"coordinates":null,"data_source":{"id":"1184"},"glyph":{"id":"1192"},"group":null,"hover_glyph":null,"view":{"id":"1186"}},"id":"1185","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#88E0EF","line_width":5,"x":{"field":"x"},"y":{"field":"y"}},"id":"1049","type":"Line"},{"attributes":{"line_alpha":0.5,"line_color":"#1f77b4","line_dash":[2,4,6,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"1215","type":"Line"},{"attributes":{"source":{"id":"1184"}},"id":"1186","type":"CDSView"},{"attributes":{"fill_color":{"value":"#88E0EF"},"line_color":{"value":"#1f77b4"},"size":{"value":30},"x":{"value":1},"y":{"value":-4}},"id":"1084","type":"Circle"},{"attributes":{"line_color":"#88E0EF","line_width":5,"x":{"field":"x"},"y":{"field":"y"}},"id":"1047","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#88E0EF","line_width":5,"x":{"field":"x"},"y":{"field":"y"}},"id":"1048","type":"Line"},{"attributes":{},"id":"1263","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"1102"},"selection_policy":{"id":"1101"}},"id":"1083","type":"ColumnDataSource"},{"attributes":{"graph_layout":{"AdminOffice":[-1,0],"Amphitheatre":[-1.5,3],"BRLobby":[7.5,0],"BRoom1":[7.5,-1],"BRoom2":[7.5,-0.5],"BRoom3":[7.5,0.5],"BRoom4":[7.5,1.2],"BRoom5":[7.5,2],"BRoom6":[7.5,2.8],"BackGate":[-14,0],"BasketballCourt":[10,0],"CSHoDOffice":[1,3],"CSLab1":[0.5,4],"CSLab2":[1,4],"Canteen":[-10,0],"CanteenEntrance":[-9,0],"ChemLab1":[2,0],"ChemLab2":[3,0],"CollegeGarden":[3,-2],"CollegePlayground":[-12,2.5],"ConferenceHall":[-6.5,1],"ConnectingLobby":[1.5,9],"DSCEve":[-9,3],"DisconnectedLobby":[-5,0],"DyalSinghStatue":[0,0],"FoyerRoom":[-6,-1],"GirlsCommonRoom":[-5,6],"GreenLobby":[-3.5,2],"Library":[-5,3],"MainEntrance":[0,-1],"MainGate":[1,-4],"MedicalRoom":[-7,-1],"MensWashroom1":[4,1],"MensWashroom2":[-4,1],"MensWashroom3":[2,4],"NCCGround":[-5,-3],"NCCGround1":[-0.5,-2],"NCCGround2":[-9,-1.5],"NSBEntrance":[1,1],"OutdoorOffice":[2,-3.5],"Parking":[4.5,-3],"PhyLab1":[4,0],"PhyLab2":[5,0],"PhyLab3":[0.5,3],"PrincipalsOffice":[1,0],"Room1":[-2,0],"Room10":[4,7],"Room1001":[1.5,11],"Room1002":[1.5,12],"Room1003":[1.5,13],"Room1004":[2.5,13],"Room101":[-7,7.5],"Room102":[-7,6.5],"Room103":[-8,7.5],"Room104":[-8,6.5],"Room11":[5,7],"Room12":[6,7],"Room2":[-3,0],"Room3":[-4,0],"Room4":[-4,7],"Room5":[-3,7],"Room6":[-2,7],"Room7":[1,7],"Room8":[2,7],"Room9":[3,7],"RoseGarden":[9.5,-3.5],"StaffRoom1":[-1,7],"Stairs1F1":[0,8],"Stairs1GF":[0,1],"Stairs2F1":[0.5,10],"Stairs2GF":[0.5,2],"Stairs3F1":[3.5,12],"Stairs3GF":[1.5,3],"Stairs4F1":[7,7],"Stairs4GF":[6,-0.5],"Stairs5F1":[-5.2,6.5],"Stairs5GF":[-4.5,-0.5],"Stairs6F1":[-9,7],"Stairs6GF":[-8,-0.5],"T-section":[1,-3],"T-section2":[7,-3],"T-section3":[-5,-1.5],"WomensWashroom1":[5,1],"WomensWashroom2":[-6,6.5],"WomensWashroom3":[4,13]}},"id":"1191","type":"StaticLayoutProvider"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#88E0EF"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":30},"x":{"value":1},"y":{"value":-4}},"id":"1085","type":"Circle"},{"attributes":{"source":{"id":"1083"}},"id":"1088","type":"CDSView"},{"attributes":{"angle":{"value":1},"text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"12pt"},"text_font_style":{"value":"bold"},"x":{"value":0.8200000000000001},"y":{"value":-4}},"id":"1204","type":"Text"},{"attributes":{"coordinates":null,"data_source":{"id":"1083"},"glyph":{"id":"1084"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1086"},"nonselection_glyph":{"id":"1085"},"view":{"id":"1088"}},"id":"1087","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"formatter":{"id":"1055"},"group":null,"major_label_policy":{"id":"1056"},"ticker":{"id":"1016"},"visible":false},"id":"1015","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#88E0EF"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":30},"x":{"value":1},"y":{"value":-4}},"id":"1086","type":"Circle"},{"attributes":{},"id":"1101","type":"UnionRenderers"},{"attributes":{},"id":"1264","type":"Selection"},{"attributes":{"angle":{"value":1},"text_color":{"value":"black"},"text_font_size":{"value":"12pt"},"text_font_style":{"value":"bold"},"x":{"value":0.8200000000000001},"y":{"value":-4}},"id":"1203","type":"Text"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"1082"},{"id":"1063"}]},"id":"1062","type":"Legend"},{"attributes":{},"id":"1102","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#FFFDDE"},"size":{"value":2}},"id":"1197","type":"Circle"},{"attributes":{},"id":"1012","type":"BasicTicker"},{"attributes":{"data":{"text":["MainGate"]},"selected":{"id":"1258"},"selection_policy":{"id":"1257"}},"id":"1202","type":"ColumnDataSource"},{"attributes":{},"id":"1005","type":"DataRange1d"},{"attributes":{"data":{"text":["OutdoorOffice"]},"selected":{"id":"1260"},"selection_policy":{"id":"1259"}},"id":"1208","type":"ColumnDataSource"},{"attributes":{},"id":"1003","type":"DataRange1d"},{"attributes":{"angle":{"value":1},"text_alpha":{"value":0.2},"text_color":{"value":"black"},"text_font_size":{"value":"12pt"},"text_font_style":{"value":"bold"},"x":{"value":0.8200000000000001},"y":{"value":-4}},"id":"1205","type":"Text"},{"attributes":{"coordinates":null,"data_source":{"id":"1202"},"glyph":{"id":"1203"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1205"},"nonselection_glyph":{"id":"1204"},"view":{"id":"1207"}},"id":"1206","type":"GlyphRenderer"},{"attributes":{},"id":"1237","type":"NodesOnly"},{"attributes":{"source":{"id":"1202"}},"id":"1207","type":"CDSView"},{"attributes":{"angle":{"value":1},"text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"12pt"},"text_font_style":{"value":"bold"},"x":{"value":1.82},"y":{"value":-3.5}},"id":"1210","type":"Text"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[2,4,6,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"1216","type":"Line"},{"attributes":{},"id":"1265","type":"UnionRenderers"},{"attributes":{},"id":"1266","type":"Selection"},{"attributes":{"angle":{"value":1},"text_alpha":{"value":0.2},"text_color":{"value":"black"},"text_font_size":{"value":"12pt"},"text_font_style":{"value":"bold"},"x":{"value":1.82},"y":{"value":-3.5}},"id":"1211","type":"Text"},{"attributes":{"coordinates":null,"data_source":{"id":"1208"},"glyph":{"id":"1209"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1211"},"nonselection_glyph":{"id":"1210"},"view":{"id":"1213"}},"id":"1212","type":"GlyphRenderer"},{"attributes":{},"id":"1267","type":"UnionRenderers"},{"attributes":{"source":{"id":"1208"}},"id":"1213","type":"CDSView"},{"attributes":{},"id":"1268","type":"Selection"},{"attributes":{"source":{"id":"1214"}},"id":"1219","type":"CDSView"},{"attributes":{"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":4.7}},"id":"1221","type":"Text"},{"attributes":{"coordinates":null,"data_source":{"id":"1214"},"glyph":{"id":"1215"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1217"},"nonselection_glyph":{"id":"1216"},"view":{"id":"1219"}},"id":"1218","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_dash":[2,4,6,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"1217","type":"Line"},{"attributes":{"text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":4.7}},"id":"1222","type":"Text"},{"attributes":{},"id":"1055","type":"BasicTickFormatter"},{"attributes":{"data":{"text":["Separator between GF and Floor1"]},"selected":{"id":"1264"},"selection_policy":{"id":"1263"}},"id":"1220","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"1220"},"glyph":{"id":"1221"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1223"},"nonselection_glyph":{"id":"1222"},"view":{"id":"1225"}},"id":"1224","type":"GlyphRenderer"},{"attributes":{},"id":"1056","type":"AllLabels"},{"attributes":{"fill_color":{"value":"#88E0EF"},"line_color":{"value":"#1f77b4"},"size":{"value":30},"x":{"value":2},"y":{"value":-3.5}},"id":"1104","type":"Circle"},{"attributes":{},"id":"1058","type":"BasicTickFormatter"},{"attributes":{"text_alpha":{"value":0.2},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":4.7}},"id":"1223","type":"Text"},{"attributes":{},"id":"1269","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#88E0EF"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":30},"x":{"value":2},"y":{"value":-3.5}},"id":"1105","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"1124"},"selection_policy":{"id":"1123"}},"id":"1103","type":"ColumnDataSource"},{"attributes":{},"id":"1270","type":"Selection"},{"attributes":{},"id":"1059","type":"AllLabels"},{"attributes":{},"id":"1123","type":"UnionRenderers"},{"attributes":{"source":{"id":"1103"}},"id":"1108","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"1103"},"glyph":{"id":"1104"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1106"},"nonselection_glyph":{"id":"1105"},"view":{"id":"1108"}},"id":"1107","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1220"}},"id":"1225","type":"CDSView"},{"attributes":{"axis":{"id":"1011"},"coordinates":null,"group":null,"ticker":null,"visible":false},"id":"1014","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#88E0EF"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":30},"x":{"value":2},"y":{"value":-3.5}},"id":"1106","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"1148"},"selection_policy":{"id":"1147"}},"id":"1125","type":"ColumnDataSource"},{"attributes":{},"id":"1016","type":"BasicTicker"},{"attributes":{},"id":"1124","type":"Selection"},{"attributes":{},"id":"1060","type":"UnionRenderers"},{"attributes":{},"id":"1061","type":"Selection"},{"attributes":{},"id":"1007","type":"LinearScale"},{"attributes":{},"id":"1236","type":"NodesOnly"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#00b300"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":30},"x":{"value":1},"y":{"value":-4}},"id":"1127","type":"Circle"},{"attributes":{"fill_color":{"value":"#00b300"},"line_color":{"value":"#1f77b4"},"size":{"value":30},"x":{"value":1},"y":{"value":-4}},"id":"1126","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"1174"},"selection_policy":{"id":"1173"}},"id":"1149","type":"ColumnDataSource"},{"attributes":{},"id":"1148","type":"Selection"},{"attributes":{"source":{"id":"1125"}},"id":"1130","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"1125"},"glyph":{"id":"1126"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1128"},"nonselection_glyph":{"id":"1127"},"view":{"id":"1130"}},"id":"1129","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#00b300"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":30},"x":{"value":1},"y":{"value":-4}},"id":"1128","type":"Circle"},{"attributes":{"fill_color":{"value":"#00b300"},"line_color":{"value":"#1f77b4"},"size":{"value":30},"x":{"value":2},"y":{"value":-3.5}},"id":"1150","type":"Circle"},{"attributes":{},"id":"1009","type":"LinearScale"},{"attributes":{"below":[{"id":"1011"}],"center":[{"id":"1014"},{"id":"1018"},{"id":"1062"},{"id":"1176"}],"height":650,"left":[{"id":"1015"}],"renderers":[{"id":"1050"},{"id":"1068"},{"id":"1087"},{"id":"1107"},{"id":"1129"},{"id":"1153"},{"id":"1178"},{"id":"1206"},{"id":"1212"},{"id":"1218"},{"id":"1224"}],"title":{"id":"1052"},"toolbar":{"id":"1025"},"toolbar_location":"above","width":1335,"x_range":{"id":"1003"},"x_scale":{"id":"1007"},"y_range":{"id":"1005"},"y_scale":{"id":"1009"}},"id":"1002","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1147","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"1266"},"selection_policy":{"id":"1265"}},"id":"1244","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"formatter":{"id":"1058"},"group":null,"major_label_policy":{"id":"1059"},"ticker":{"id":"1012"},"visible":false},"id":"1011","type":"LinearAxis"}],"root_ids":["1002"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"382295fb-c648-437a-9708-6b774888d78d","root_ids":["1002"],"roots":{"1002":"064912dc-5bc2-4275-96f8-c928e527e7a4"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();