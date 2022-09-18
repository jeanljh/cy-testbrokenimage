it('test broken image', () => {
  cy.visit('https://the-internet.herokuapp.com/broken_images')
  cy.get('div.example > img')
  .then(e => {
      for (let i = 0; i < e.length; i++) {
          /**check naturalWidth property of the element. if naturalWidth > 0 then image is not broken */
          cy.log(`image ${i}:`, e[i].naturalWidth ? 'valid image' : 'broken image')
      }
  })
})