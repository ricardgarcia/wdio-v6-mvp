import router from '../support/router';


class googlePage {

  get searchInput() { return $('input.gLFyf.gsfi'); }
  get searchButton() { return $('input.gNO89b'); }
  get results() { return $('div#hdtb-msb'); }

  search () {
    this.searchInput.waitForDisplayed();
    this.searchInput.setValue("Wikipedia");
    this.searchButton.click();
  }

  checkResults () {
    this.results.waitForDisplayed();
    return true;
  }

}

export default new googlePage();