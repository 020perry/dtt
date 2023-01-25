import { createStore } from 'vuex'
import axios from 'axios';


export default createStore({
    state: {
        houses: JSON.parse(localStorage.getItem('houses')) || [],
        currentHouse: {},
        listings: [],
        errors: [],
    },
    getters: {
        currentHouse: (state) => {
            return state.currentHouse;
        },
        houses: (state) => {
            return state.houses;
        },
        errors: state => state.errors,
    },
    mutations: {
        setHouses(state, houses) {
            state.houses = houses;
        },
        addNewHouse(state, newHouse) {
            state.houses.push(newHouse);
        },
        setCurrentHouse(state, houseId) {
            state.currentHouse = state.houses.find((house) => house.id === parseInt(houseId));
        },
        ADD_ERROR(state, error) {
            state.errors.push(error)
        },
        CLEAR_ERRORS(state) {
            state.errors = []
        },
        removeHouse(state, houseId) {
            state.houses = state.houses.filter(house => house.id !== houseId);
        },
        updateListing(state, { houseId, streetName, description, price, bedrooms, bathrooms, size, zip, city, hasGarage, constructionYear, houseNumber, numberAddition }) {
            const house = state.houses.find(house => house.id === houseId);
            house.streetName = streetName;
            house.description = description;
            house.price = price;
            house.bedrooms = bedrooms;
            house.bathrooms = bathrooms;
            house.size = size;
            house.zip = zip;
            house.city = city;
            house.hasGarage = hasGarage;
            house.constructionYear = constructionYear;
            house.houseNumber = houseNumber;
            house.numberAddition = numberAddition;
        }


    },
    actions: {
        async fetchHouses({ commit }) {
            const apiKey = '1dFwqJ4OpMzAkL2WvTCrxgoZSDhKn_UH';
            const apiUrl = 'https://api.intern.d-tt.nl/api/houses';
            try {
                const response = await axios.get(apiUrl, {
                    headers: {
                        'x-api-key': apiKey,
                    },
                });
                // store to local storage
                localStorage.setItem('houses', JSON.stringify(response.data));
                commit('setHouses', response.data);
            } catch (error) {
                console.error(error);
            }
        },
        setCurrentHouse({ commit }, houseId) {
            commit('setCurrentHouse', houseId);
        },

        async deleteHouse({ commit }, houseId) {
            const apiKey = '1dFwqJ4OpMzAkL2WvTCrxgoZSDhKn_UH';
            axios.delete(`https://api.intern.d-tt.nl/api/houses/${houseId}`, {
                headers: {
                    'x-api-Key': apiKey,
                }
            })
                .then(() => {
                    // remove the house from the store
                    commit('removeHouse', houseId);
                    alert('House deleted');
                })
                .catch((error) => {
                    // console.error(error.response.data.error);
                    if (error.response.data.error) {
                        alert(error.response.data.error)
                    } else {
                        alert('Something went wrong')
                    }
                    // handle error
                });
        },
        async createHouse({ commit }, newHouse) {
            console.log(newHouse);
            const apiKey = '1dFwqJ4OpMzAkL2WvTCrxgoZSDhKn_UH';
            const myHeaders = new Headers();
            myHeaders.append('X-Api-Key', apiKey);

            const formData = new FormData();
            formData.append('price', newHouse.price);
            formData.append('bedrooms', newHouse.bedrooms);
            formData.append('bathrooms', newHouse.bathrooms);
            formData.append('size', newHouse.size);
            formData.append('streetName', newHouse.streetName);
            formData.append('houseNumber', newHouse.houseNumber);
            formData.append('numberAddition', newHouse.numberAddition);
            formData.append('zip', newHouse.postalCode);
            formData.append('city', newHouse.city);
            formData.append('constructionYear', newHouse.constructionYear);
            formData.append('hasGarage', newHouse.hasGarage);
            formData.append('description', newHouse.description);
            formData.append('image', newHouse.image);

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formData,
                redirect: 'follow',
            };

            try {
                const response = await fetch('https://api.intern.d-tt.nl/api/houses', requestOptions);
                const result = await response.json();
                //  push to houses array
                commit('addNewHouse', result);
                return result;
            } catch (error) {
                console.error(error);
            }
        },
        async updateListing({ commit }, listingData) {
            try {
                const houseId = listingData.houseId;
                const formData = new FormData();
                formData.append('price', listingData.price);
                formData.append('bedrooms', listingData.bedrooms);
                formData.append('bathrooms', listingData.bathrooms);
                formData.append('size', listingData.size);
                formData.append('streetName', listingData.streetName);
                formData.append('houseNumber', listingData.houseNumber);
                formData.append('numberAddition', listingData.numberAddition);
                formData.append('zip', listingData.postalCode);
                formData.append('city', listingData.city);
                formData.append('constructionYear', listingData.constructionYear);
                formData.append('hasGarage', listingData.hasGarage);
                  formData.append('description', listingData.description);
                const apiKey = '1dFwqJ4OpMzAkL2WvTCrxgoZSDhKn_UH';
                const url = `https://api.intern.d-tt.nl/api/houses/${houseId}`;
                const options = {
                    method: 'POST',
                    headers: {
                        'X-Api-Key': apiKey
                    },
                    body: formData
                };
                const response = await fetch(url, options);
                if (response.ok) {
                    commit('updateListing', listingData);
                } else {
                    throw new Error(response.statusText);
                }
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        uploadImage({ commit }, { houseId, image }) {
            const apiKey = '1dFwqJ4OpMzAkL2WvTCrxgoZSDhKn_UH';
            const url = `https://api.intern.d-tt.nl/api/houses/${houseId}/upload`;
            const formData = new FormData();
            formData.append('image', image);
            const options = {
                method: 'POST',
                headers: {
                    'X-Api-Key': apiKey
                },
                body: formData
            };
            fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    commit('updateListing', data);
                }
                )
                .catch(error => console.error(error));
        },

    },
    modules: {
    },
});
