import networkx as nx
import matplotlib.pyplot as plt
from bokeh.plotting import figure, output_file, show, from_networkx
from bokeh.io import curdoc
from bokeh.models import Circle, MultiLine, GraphRenderer, Label, Text, Arrow, NormalHead, Select, ImageURL
from bokeh.embed import autoload_static
from bokeh.themes import built_in_themes
from bokeh.resources import CDN
from bokeh.layouts import column
import sys
import pymongo
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://FindDsc:DsC595851@cluster0.3euxl.mongodb.net/FindDscDb?retryWrites=true&w=majority")
db = cluster['FindDscDb']
collection_nodes = db['Nodes']
collection_edges = db['Edges']
results_nodes = collection_nodes.find()
results_edges = collection_edges.find()

G=nx.Graph()
for i in results_nodes:
    G.add_node(i['name'],pos=tuple(i['pos']))

for i in results_edges:
    G.add_edge(i['node1'],i['node2'],weight=i['weight'])

#--------------------------------------------------------------------------------------#
# source = "BackGate"
# destination  = "Room1004"
source=str(sys.argv[1])
destination=str(sys.argv[2])

#fetching x,y coordinates from Nodes
pos=nx.get_node_attributes(G,'pos')

#html outputfile name
#output_file("TryHtml.html")

#Name of node is visible while hovering
hov_tooltips = [("Name","@index")]

#customizing plot
plot = figure(tooltips = hov_tooltips,width=1335,height=650, tools="pan,wheel_zoom,reset,zoom_in,zoom_out", 
            toolbar_location="above")

#finding shortest paths
#best path
path1 = nx.shortest_path(G,source,destination,weight='weight',method='dijkstra')
#alternative paths
x = nx.shortest_simple_paths(G,source,destination)

all_pathsnodes = []
path2 = []
path3 = []
for i in range(2):
    all_pathsnodes.append(next(x))

#finding path 2
path2 = all_pathsnodes[0]
path2_edges = set(zip(path2,path2[1:]))

#finding path 3
path3 = all_pathsnodes[1]
path3_edges = set(zip(path3,path3[1:]))

path2_foredges = path2
path3_foredges = path3

# removing extra nodes from the lists of path2 & path3
# path2 = list(set(path2) - set(path1))
# path3 = list(set(path3) - set(path2) - set(path1))


#creating bokeh's GraphRenderer from Networkx graph
graph = from_networkx(G, layout_function=pos,center=(0,0))

#Finding x,y coordinates of shortest path that is given in path1 
pos_dict_1 = {}
pos_dict_2 = {}
pos_dict_3 = {}
for key,val in pos.items():
    if key in path1:
        pos_dict_1.setdefault(key,[]).append(val)
    if key in path2:
        pos_dict_2.setdefault(key,[]).append(val)
    if key in path3:
        pos_dict_3.setdefault(key,[]).append(val)

xvals_1 = []
yvals_1 = []   
xvals_2 = []
yvals_2 = []      
xvals_3 = []
yvals_3 = []

for i in path1:
    pos_tup = pos_dict_1[i][0]
    xvals_1.append(pos_tup[0])
    yvals_1.append(pos_tup[1])
    
for i in path2:
    pos_tup = pos_dict_2[i][0]
    xvals_2.append(pos_tup[0])
    yvals_2.append(pos_tup[1])

for i in path3:
    pos_tup = pos_dict_3[i][0]
    xvals_3.append(pos_tup[0])
    yvals_3.append(pos_tup[1])


#Path2 edges
plot.line(x=xvals_2, y=yvals_2, line_alpha=1.0, line_color='#88E0EF', line_width=5, name=None,legend_label='Path2')

#Path1 edges
plot.line(x=xvals_1, y=yvals_1, line_alpha=1.0, line_color='#00b300', line_width=5, name=None,legend_label='Optimal Path')


#starting and end node of path2
plot.circle(x=xvals_2[0], y=yvals_2[0], size=30, fill_color = '#88E0EF',legend_label='Path2')
plot.circle(x=xvals_2[len(xvals_2)-1], y=yvals_2[len(xvals_2)-1], size=30, fill_color = '#88E0EF',legend_label='Path2')

#path2
for i in range(1,len(xvals_2)-1):
    plot.circle(x=xvals_2[i],y=yvals_2[i],size=20,fill_color = '#88E0EF', legend_label='Path2')

#coloring the shortest paths nodes with help of x,y vals calculated above#548CFF
#change size of start and end nodes
plot.circle(x=xvals_1[0], y=yvals_1[0], size=30, fill_color = '#00b300',legend_label='Optimal Path')
plot.circle(x=xvals_1[len(xvals_1)-1], y=yvals_1[len(xvals_1)-1], size=30, fill_color = '#00b300',legend_label='Optimal Path')

#path1
for i in range(1,len(xvals_1)-1):
    plot.circle(x=xvals_1[i], y=yvals_1[i], size=20, fill_color = '#00b300', legend_label='Optimal Path')


# #path3
# for i in range(len(xvals_3)):
#     plot.circle(x=xvals_3[i],y=yvals_3[i],size=27, fill_color='#707070', legend_label='Path3')

for i in range(len(xvals_1)-1):
    plot.add_layout(Arrow(end=NormalHead(size=10),x_start=xvals_1[i],
    y_start=yvals_1[i],x_end=xvals_1[i+1],y_end=yvals_1[i+1],line_width=0))

#coloring the edges for shortest paths
path1_color, path2_color, path3_color ,normal_color ='#00b300', '#4bcfe7', 'black', 'black'

#legend click disable or enable
plot.legend.click_policy="hide"

edge_attrs = {}
for (start_node, end_node) in G.edges():
    # edge_color = path1_color if (start_node in path1 and end_node in path1) else normal_color
    if (start_node in path1 and end_node in path1):
        edge_color = path1_color
    elif (start_node in path2_foredges and end_node in path2_foredges):
        edge_color = path2_color
    elif (start_node in path3_foredges and end_node in path3_foredges):
        edge_color = path3_color
    else:
        edge_color = normal_color

    edge_attrs[(start_node, end_node)] = edge_color

nx.set_edge_attributes(G, edge_attrs, "edge_color")

#Global edges and Nodes
graph_renderer = from_networkx(G, layout_function=pos)
graph_renderer.edge_renderer.glyph = MultiLine(line_color="edge_color", line_alpha=0.1, line_width=1.5)
graph_renderer.node_renderer.glyph = Circle(size=2, fill_color='#FFFDDE',fill_alpha=0.2)
plot.renderers.append(graph_renderer)

#Bold and inc size of start and end node
plot.text(x=xvals_1[0]-0.18, y=yvals_1[0], text=[path1[0]], angle=1, text_alpha=1, text_font_style='bold', text_font_size={'value': '12pt'})
plot.text(x=xvals_1[len(xvals_1)-1]-0.18, y=yvals_1[len(xvals_1)-1], text=[path1[len(xvals_1)-1]], angle=1, text_alpha=1, text_font_style='bold', text_font_size={'value': '12pt'})
# printing the nodes' names for path1
for i in range(1,len(path1)-1):
    plot.text(x=xvals_1[i]-0.18, y=yvals_1[i], text=[path1[i]], angle=1, text_alpha=1, text_font_size={'value': '10pt'})

# printing the nodes' names for path2 
path2_temp = []
for i in path2:
    if i not in path1:
        path2_temp.append(i)

for i in range(len(path2_temp)):
    path2_temp_pos_dict = {}
    for key,val in pos.items():
        if key in path2_temp:
            path2_temp_pos_dict.setdefault(key,[]).append(val)
    
    xvals_temp_2=[]
    yvals_temp_2=[]
    for j in path2_temp:
        pos_tup = path2_temp_pos_dict[j][0]
        xvals_temp_2.append(pos_tup[0])
        yvals_temp_2.append(pos_tup[1])

    plot.text(x=xvals_temp_2[i]-0.18, y=yvals_temp_2[i], text=[path2_temp[i]], angle=1, text_alpha=1, text_font_size={'value': '10pt'})

# printing the nodes' names for path3
# path3_temp = []
# for i in path3:
#     if i not in path1 and i not in path2:
#         path3_temp.append(i)

# for i in range(len(path3_temp)):
#     path3_temp_pos_dict = {}
#     for key,val in pos.items():
#         if key in path3_temp:
#             path3_temp_pos_dict.setdefault(key,[]).append(val)
    
#     xvals_temp_3=[]
#     yvals_temp_3=[]
#     for j in path3_temp:
#         pos_tup = path3_temp_pos_dict[j][0]
#         xvals_temp_3.append(pos_tup[0])
#         yvals_temp_3.append(pos_tup[1])

#     plot.text(x=xvals_temp_3[i]-0.18, y=yvals_temp_3[i], text=[path3_temp[i]], angle=1, text_alpha=1, text_font_size={'value': '10pt'})

#Hide x,y axis
plot.xaxis.visible = False
plot.yaxis.visible = False
plot.xgrid.visible = False
plot.ygrid.visible = False

#reverse the label oder
plot.legend.items = plot.legend.items[::-1]

#Seprating line
plot.line(x=[-15,12], y=[5, 5], line_alpha=0.5, line_width=1.0, line_dash='dotdash')
plot.text(x=8.5, y=4.7, text=["Separator between GF and Floor1"],text_font_size={'value': '10pt'})

# #Room Icons:
# rooms = []
# for i in path1:
#     if "Room" in i:
#         rooms.append(i)
# room_x = []
# room_y = []
# for i in rooms:
#     pos_tup = pos_dict_1[i][0]
#     room_x.append(pos_tup[0])
#     room_y.append(pos_tup[1])
# for i in range(len(rooms)):
#     room = ImageURL(url=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EbshVMuXoRIFqIZDtjEJ9IfGnvj76pWRyMeYEySXcrD12K9wXcMekfxNFGNQIdehocQ&usqp=CAU"]
#     ,x=room_x[i] - 0.5 ,y=room_y[i] + 0.25,h=1,w=0.8)
#     plot.add_glyph(room)

#showing shortest path on terminal
delimiter=' --> '
pathstr=delimiter.join(path1)
#readjusting the output without "\n"
#pathstr=pathstr.replace("\n","")

#displaying path on Website
#print("<div id='pathstr'> \n<b>Path from",source.replace("\n",""),"to",destination.replace("\n",""),":</b><br>")
print("<div id='pathstr'> \n<b>Path from",source,"to",destination,":</b><br>")
#print(pathstr,"<br>")

print("<b>",path1[0],"</b>", end=" --> ") 
for i in range(1, len(path1)-1):
    print(path1[i], end=" --> ")
print("<b>",path1[len(path1)-1],"</b> <br>", end="")

#cost
cost = nx.shortest_path_length(G,source,destination,weight='weight',method='dijkstra')
cost=round(cost,2)
print("<b>Distance: ",cost,"metres </b></div>")

js, tag = autoload_static(plot, CDN, 'graphjs.js')

with open('C:\\xampp\\htdocs\\project\\RunPythonWithPhp\\graphjs.js', 'w') as f1:
    f1.write(js)
with open('C:\\xampp\\htdocs\\project\\RunPythonWithPhp\\tag.TXT', 'w') as f2:
    f2.write(tag)

#show(plot)