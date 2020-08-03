var automation= {}
module.exports = {
    beforeEach: browser => {
        automation = browser.page.checkpoint2Page()
        automation
            .navigate()
    },
    after: browser => {
        automation
            .end()
    },
    //Odds & Evens - Should sort into odd and even outputs
    'Odds & Evens': browser => {
        automation
            .setValue('input[name="evenOddInput"]', ['1,3,5,2,4,6'])
            .click('@splitButton')
            .expect.element('span[name="evenResults"]').text.to.equal('Evens: [2,4,6]')
            browser.expect.element('span[name="oddResults"]').text.to.equal('Odds: [1,3,5]')
    },
    //Filter Object - Should filter objects with specified properties
    'Filter Object': browser => {
        browser
            .setValue('input[name="objectFilterInput"]', ['hairColor'])
            .click('button[name="objectFilterButton"]')
            .expect.element('span[name="objectFilterResults"]').text.to.contain('brown')
    },
    //Filter String - Should filter by inputted string 
    'Filter String': browser => {
        browser
            .setValue('#nameFilterInput', ['Je'])
            .click('#nameFilterButton')
            .expect.element('span[name="nameFilterResults"]').text.to.contain('Filtered Names: [ "Jessica", "Jennifer" ]')
    },
    //Palindrome - Should verify whether the input string is a Palindrome or not
    'Palindrome': browser => {
        browser
            .setValue('input[name="palindromeInput"]', ['hannah'])
            .click('button[name="palindromeButton"]')
            .expect.element('span[name="palindromeResults"]').text.to.contain('true')
    },
    //Sum - Should display the output from the two numbers in the input line
    'Sum': browser => {
        browser
            .setValue('input[name="sumInput1"]', ['2'])
            .setValue('input[name="sumInput2"]', ['5'])
            .click('button[name="sumButton"]')
            .expect.element('span[name="sumResults"]').text.to.contain('7')
    },
}