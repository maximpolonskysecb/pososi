let model = document.querySelector(".modelContent");

        function ShowLoc() {
            model.style.display = "block";

            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    let latitude = position.coords.latitude;
                    let longitude = position.coords.longitude;

                    let map = L.map('map').setView([latitude, longitude], 13);
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        maxZoom: 18,
                    }).addTo(map);

                    let start = L.marker([latitude, longitude]).addTo(map);
                    function findCafes(lat, lon) { 
            let url = `https://nominatim.openstreetmap.org/search?format=json&q=cafe&limit=5&bounded=1&viewbox=${lon-0.005},${lat+0.005},${lon+0.005},${lat-0.005}`; 
 
            fetch(url) 
                .then(response => response.json()) 
                .then(data => { 
                    data.forEach(cafe => { 
                        let marker = L.marker([cafe.lat, cafe.lon]).addTo(map); 
                        marker.bindPopup(`<b>${cafe.display_name}</b>`); 
                    }); 
                }) 
                .catch(error => console.log(error)); 
        } 
        findCafes(latitude,longitude)
                });
            } else {
                console.log('Geolocation is not available.');
            }
        }

        function HideLoc() {
            model.style.display = "none";
        }
