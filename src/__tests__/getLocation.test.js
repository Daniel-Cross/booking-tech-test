import '../testSetup'
import getLocation from '../services/getLocation'
import axios from 'axios'
jest.mock('axios')

axios.get.mockImplementation(() =>
  Promise.resolve({
    results: {
      isGooglePowered: false,
      docs: [
        {
          country: 'United Kingdom',
          lng: -2.27472,
          city: 'Manchester',
          searchType: 'L',
          alternative: ['GB,UK,England,Manchester Airport'],
          bookingId: 'airport-38566',
          placeType: 'A',
          placeKey: '1472187',
          iata: 'MAN',
          countryIso: 'gb',
          locationId: '38566',
          name: 'Manchester Airport',
          ufi: 900038550,
          isPopular: true,
          region: 'Greater Manchester',
          lang: 'en',
          lat: 53.3536
        }
      ]
    }
  })
);

describe('getLocation', () => {

  it('should return the correct endpoint based on mock data', done => {
    expect.assertions(2)
    expect(axios.get).not.toHaveBeenCalled()
    getLocation('my search query').then(data => {
      expect(axios.get).toHaveBeenCalledWith(
        `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=my search query`
      )
      done()
    })
  })
})
