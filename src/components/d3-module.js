import * as d3 from 'd3'
import * as d3_queue from 'd3-queue'
import * as topojson from 'topojson'

const width = window.screen.width
// const height = window.screen.height
// const width = 500
const height = 500
const config = {
  speed: 0.0,
  verticalTilt: -30,
  horizontalTilt: 0
}
// let locations = []
let svg, markerGroup

let projection, initialScale, path, center, zoom

export function init() {
    svg = d3.select('svg').attr('width', width).attr('height', height)
    markerGroup = svg.append('g')
    projection = d3.geoOrthographic()
    initialScale = projection.scale()
    path = d3.geoPath().projection(projection)
    center = [width/2, height/2]

    drawGlobe()
    drawGraticule()
    enableRotation()
    performZoom()
}

function drawGlobe() {
    d3_queue.queue()
    // .defer(d3.json, 'https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/world-110m.json')
    .defer(d3.json, 'world.json')
    // .defer(d3.json, 'locations.json')
    .await((error, worldData) => {
        // console.log('locationData', locationData)
        svg.selectAll(".segment")
        .data(topojson.feature(worldData, worldData.objects.countries).features)
        .enter().append("path")
        .attr("class", "segment")
        .attr("d", path )
        .style("stroke", "#888")
        .style("stroke-width", "1px")
        .style("fill", (d, i) => '#e5e5e5')
        .style("opacity", ".6");
        // locations = locationData;
        // drawMarkers()
    })
}


function performZoom() {
    // zoom = d3.behavior.zoom(true)
    // .translate(projection.origin())
    // .scale(projection.scale())
    // .scaleExtent([100, 800])
    // .on("zoom", move);
}

function drawGraticule() {
    const graticule = d3.geoGraticule().step([10, 10])

    svg.append("path")
        .datum(graticule)
        .attr("class", "graticule")
        .attr("d", path)
        .style("fill", "#fff")
        .style("stroke", "#ccc");
}

function move() {
    console.log('event', d3.event)
    // if(d3.event){
    //     var origin = [d3.event.translate[0] * -1, d3.event.translate[1]];
    //
    //     projection.scale(scale);
    //     path.pointRadius(2 * scale / scale0);
    //
    //     projection.origin(origin);
    //     circle.origin(origin);
    //
    //     //globe and stars spin in the opposite direction because of the projection mode
    //     var spaceOrigin = [origin[0] * -1, origin[1] * -1];
    //     space.origin(spaceOrigin);
    //     redraw();
    // }
}


function enableRotation() {
    // d3.timer((elapsed) => {
    //     projection.rotate([config.speed * elapsed - 120, config.verticalTilt, config.horizontalTilt])
    //     svg.selectAll("path").attr("d", path)
    //     drawMarkers()
    // })

    projection.rotate([config.speed * 1 - 120, config.verticalTilt, config.horizontalTilt])
    svg.selectAll("path").attr("d", path)
    // drawMarkers()
}

export function drawMarkers(locations) {
    console.log('drawMarkers',locations )
    const markers = markerGroup.selectAll('circle')
        .data(locations)
    markers
        .enter()
        .append('circle')
        .merge(markers)
        .attr('cx', d => projection([d.longitude, d.latitude])[0])
        .attr('cy', d => projection([d.longitude, d.latitude])[1])
        .attr('fill', d => {
            const coordinate = [d.longitude, d.latitude]
            const gdistance = d3.geoDistance(coordinate, projection.invert(center))
            return gdistance > 1.57 ? 'none' : 'steelblue';
        })
        .attr('r', 7);

    markerGroup.each(function () {
        this.parentNode.appendChild(this);
    });
}
