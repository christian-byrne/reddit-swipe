/**
 * @author Christian P. Byrne
 * @from Sep 21
 *
 * @todo
 *      1. auto refresh when runnig low on posts of page
 *      2. ublock settings
 *      3. youtube version
 *
 *
 */

class Page {
  constructor() {
    this.table = this.getTable();
    this.posts = this.refreshPosts();
  }
  getTable = () => {
    return document.querySelector("div#siteTable");
  };

  refreshPosts = () => {
    return Array.from(this.table.querySelectorAll("div")).filter(
      (d) => d.classList[0] == "thing"
    );
  };
}

class Post {
  constructor(li, options) {
    const defaults = {
      hideButtonStyle: {
        position: "relative",
        background: "red",
        float: "right",
        opacity: ".87",
        borderRadius: "4px",
        width: "30%",
      },
      addHideButton: true
    };
    Object.assign(defaults, options);
    this.options = defaults;
    this.main = li;
    this.thumbnail = li.querySelector("a.thumbnail");
    this.height = window.getComputedStyle(this.thumbnail).height;
    this.hideBtn = this.createButton();
    this.interactions = this.getInteractionsList();

    if ( defaults.addHideButton ) {
        this.appendButton();
    }
  }

  getInteractionsList = () => {
    return Array.from(this.main.querySelectorAll("li"));
  };

  /**
   *
   * @param {String} keyword Word contained in the visible text of the interaction
   *    (e.g., "hide" or "share").
   */
  findInteraction = (keyword) => {
    for (const li of this.interactions) {
      if (li.querySelector("a").innerHTML.lower().contains(keyword.lower())) {
        return li;
      }
    }
  };

  /**
   * Return the list element that contains the hide button.
   *
   * @param   {HTMLDivElement}    postEl
   * @returns {HTMLLIElement}     The argument's HTMLLis"hide" button
   */
  getHideButton = () => {
    return Array.from(postEl.querySelectorAll("li")).filter(
      (li) => li.firstElementChild.tagName == "FORM"
    )[0];
  };

  appendButton = () => {
    this.main.querySelector("div.entry").appendChild(this.hideBtn);
  };

  createButton = () => {
    Object.assign(this.options.hideButtonStyle, {
      height: this.height,
    });
    let styleProps = Object.entries(this.options.hideButtonStyle);

    let btn = document.createElement("div");
    for (const [property, value] of styleProps) {
      btn.style[property] = value;
    }

    return btn;
  };
}


const page = new Page();
const post1 = page.posts[0];
const postC = new Post(post1);