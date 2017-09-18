import myapp from '../../src/redux/myapp';

describe("my app", function () {
    it("Increment button should work", function () {
        let valueBeforeClicked = parseInt(document.getElementById("text").innerText);

        let bt = document.getElementById('inc');
        bt.click();

        let actualValue = parseInt(document.getElementById("text").innerText);

        expect(actualValue).toBe(valueBeforeClicked + 1);
    })

    it("Decrement button should work", function () {
        let valueBeforeClicked = parseInt(document.getElementById("text").innerText);

        let bt = document.getElementById('dec');
        bt.click();

        let actualValue = parseInt(document.getElementById("text").innerText);

        expect(actualValue).toBe(valueBeforeClicked - 1);
    })
    
})