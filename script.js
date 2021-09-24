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

    this.postObjs = [];
    this.initPosts();

    this.minHeight = this.minPostHeight();
    this.minHeightPx = `${this.minHeight}px`;

    this.addHideButtons();
  }

  /**
   * Get px height (as number) of shortet post on page not including ads or
   * promoted posts.
   *
   * @returns {number} Height (in terms of px) of the shortest post on page.
   */
  minPostHeight = () => {
    let heights = [];
    for (const post of this.postObjs) {
      heights.push(post.heightInt);
    }
    return Math.min(...heights);
  };

  getTable = () => {
    return document.querySelector("div#siteTable");
  };

  refreshPosts = () => {
    let ret = [];
    for (const post of Array.from(this.table.querySelectorAll("div"))) {
      // First class in classList is "thing" -- should be improved.
      // Don't include adds/promoted posts because they have special configurations which
      // screw up the other functions.
      if (
        post.classList[0] == "thing" &&
        !post.classList.contains("promoted")
      ) {
        ret.push(post);
      }
    }
    return ret;
  };

  initPosts = () => {
    for (const post of this.posts) {
      let obj = new Post(post);
      this.postObjs.push(obj);
    }
  };

  addHideButtons = () => {
    for (const post of this.postObjs) {
      post.insertHideBtn(this.minHeightPx);
    }
  };
}

class Post {
  constructor(li, options) {
    const defaults = {
      refHeight: false,
      refHeightInt: false,
      hideBtn: false,
      btnOffset: false,
      hideButtonStyle: {
        position: "relative",
        cursor: "pointer",
        float: "right",
        opacity: ".87",
        borderRadius: "4px",
        width: "25%",
        fontSize: "1.1rem",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Varela Round, sans-serif",
        background: "linear-gradient(to bottom, #f64f59, #c471ed, #12c2e9)",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      },
    };
    Object.assign(defaults, options);
    Object.assign(this, defaults);
    this.main = li;

    this.thumbnail = li.querySelector("a.thumbnail");
    this.height = window.getComputedStyle(this.main).height;
    this.heightInt = this.height.substring(0, this.height.length - 2);

    this.interactions = this.getInteractionsList();
  }

  insertHideBtn = (uniformHeight) => {
    this.refHeight = uniformHeight;
    this.refHeightInt = this.refHeight.substring(0, this.refHeight.length - 2);
    this.btnOffset = `${(this.heightInt - this.refHeightInt) / 2}px`;

    this.hideBtn = this.createButton();
    this.addHideText();
    this.appendButton();
  };

  fracOfHeight = (fraction) => {
    return `${this.refHeightInt * fraction}px`;
  };

  styleElement = (el, styleProps) => {
    for (const [property, value] of styleProps) {
      el.style[property] = value;
    }
  };

  addHideText = () => {
    let txt = document.createElement("div");
    txt.innerHTML = "HIDE";
    let style = {
      color: "white",
      textAlign: "center",
      padding: `${this.fracOfHeight(0.33)} 0px ${this.fracOfHeight(0.33)} 0px`,
      lineHeight: this.fracOfHeight(0.33),
    };
    this.styleElement(txt, Object.entries(style));
    this.hideBtn.appendChild(txt);
  };

  getInteractionsList = () => {
    return Array.from(this.main.querySelectorAll("li"));
  };

  /**
   *
   * @param {String} keyword Word contained in the visible text of the
   *    interaction (e.g., "hide" or "share").
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
    this.main.querySelector("div.entry").prepend(this.hideBtn);
  };

  createButton = () => {
    Object.assign(this.hideButtonStyle, {
      height: this.refHeight,
      marginTop: this.btnOffset,
    });
    let styleProps = Object.entries(this.hideButtonStyle);

    let btn = document.createElement("div");
    this.styleElement(btn, styleProps);

    return btn;
  };
}

const page = new Page();
