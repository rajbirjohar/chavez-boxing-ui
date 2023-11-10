import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, i as renderSlot, j as renderComponent, k as renderHead, u as unescapeHTML } from './astro_4883113a.mjs';
import cslx from 'clsx';
import { s as styles$3, a as styles$4 } from './index.946ca619_a6386252.mjs';
import { $ as $$Image } from './pages/generic_712ebc26.mjs';
import { s as styles$5 } from './index.e6300cef_9ce5e1f9.mjs';
import { s as styles$6 } from './_id_.1cb9546d_301d3080.mjs';
import { s as styles, a as styles$1 } from './about.fe921b26_cc41e5c3.mjs';
import { s as styles$2 } from './about.ef3d5646_18791d47.mjs';
import { s as styles$7 } from './about.6365b320_cc40f89f.mjs';

const $$Astro$g = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/rajbir/Projects/chavez-boxing/chavez-boxing-ui/node_modules/.pnpm/astro@3.4.4_sass@1.69.5_typescript@5.2.2/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$f = createAstro();
const $$Index$6 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Index$6;
  const directories = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Programs",
      path: "/#programs"
    },
    {
      name: "Pricing",
      path: "/#pricing"
    },
    {
      name: "Recipes",
      path: "/recipes"
    },
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Contact",
      path: "#contact"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(styles.header, "class")}><nav${addAttribute(styles.nav, "class")}>${directories.map((directory) => renderTemplate`<a${addAttribute(directory.path, "href")}>${directory.name}</a>`)}</nav></header>`;
}, "/Users/rajbir/Projects/chavez-boxing/chavez-boxing-ui/src/core/Header/index.astro", void 0);

const $$Astro$e = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$;
  const {
    size = 24,
    strokeWidth = 2,
    width = size,
    height = size,
    stroke = "currentColor",
    strokeLinecap = "round",
    strokeLinejoin = "round",
    fill = "none",
    viewBox = "0 0 24 24"
  } = Astro2.props ?? {};
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(Astro2.props.class, "class")}${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(fill, "fill")}${addAttribute(viewBox, "viewBox")}${addAttribute(stroke, "stroke")}${addAttribute(strokeWidth, "stroke-width")}${addAttribute(strokeLinecap, "stroke-linecap")}${addAttribute(strokeLinejoin, "stroke-linejoin")}>${renderSlot($$result, $$slots["default"])}</svg>`;
}, "/Users/rajbir/Projects/chavez-boxing/chavez-boxing-ui/node_modules/.pnpm/lucide-astro@0.265.0_astro@3.4.4/node_modules/lucide-astro/dist/.Layout.astro", void 0);
const Layout = $$;

const $$Astro$d = createAstro();
const $$ArrowLeftToLine = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ArrowLeftToLine;
  return renderTemplate`${renderComponent($$result, "Layout", Layout, { ...Astro2.props }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<path d="M3 19V5"></path><path d="m13 6-6 6 6 6"></path><path d="M7 12h14"></path>` })}`;
}, "/Users/rajbir/Projects/chavez-boxing/chavez-boxing-ui/node_modules/.pnpm/lucide-astro@0.265.0_astro@3.4.4/node_modules/lucide-astro/dist/ArrowLeftToLine.astro", void 0);
const ArrowLeftToLine = $$ArrowLeftToLine;

const $$Astro$c = createAstro();
const $$BadgeCheck = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$BadgeCheck;
  return renderTemplate`${renderComponent($$result, "Layout", Layout, { ...Astro2.props }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path>` })}`;
}, "/Users/rajbir/Projects/chavez-boxing/chavez-boxing-ui/node_modules/.pnpm/lucide-astro@0.265.0_astro@3.4.4/node_modules/lucide-astro/dist/BadgeCheck.astro", void 0);
const BadgeCheck = $$BadgeCheck;

const $$Astro$b = createAstro();
const $$Facebook = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Facebook;
  return renderTemplate`${renderComponent($$result, "Layout", Layout, { ...Astro2.props }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>` })}`;
}, "/Users/rajbir/Projects/chavez-boxing/chavez-boxing-ui/node_modules/.pnpm/lucide-astro@0.265.0_astro@3.4.4/node_modules/lucide-astro/dist/Facebook.astro", void 0);
const Facebook = $$Facebook;

const $$Astro$a = createAstro();
const $$Instagram = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Instagram;
  return renderTemplate`${renderComponent($$result, "Layout", Layout, { ...Astro2.props }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>` })}`;
}, "/Users/rajbir/Projects/chavez-boxing/chavez-boxing-ui/node_modules/.pnpm/lucide-astro@0.265.0_astro@3.4.4/node_modules/lucide-astro/dist/Instagram.astro", void 0);
const Instagram = $$Instagram;

const $$Astro$9 = createAstro();
const $$Mail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${renderComponent($$result, "Layout", Layout, { ...Astro2.props }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>` })}`;
}, "/Users/rajbir/Projects/chavez-boxing/chavez-boxing-ui/node_modules/.pnpm/lucide-astro@0.265.0_astro@3.4.4/node_modules/lucide-astro/dist/Mail.astro", void 0);
const Mail = $$Mail;

const $$Astro$8 = createAstro();
const $$Phone = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Phone;
  return renderTemplate`${renderComponent($$result, "Layout", Layout, { ...Astro2.props }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>` })}`;
}, "/Users/rajbir/Projects/chavez-boxing/chavez-boxing-ui/node_modules/.pnpm/lucide-astro@0.265.0_astro@3.4.4/node_modules/lucide-astro/dist/Phone.astro", void 0);
const Phone = $$Phone;

const $$Astro$7 = createAstro();
const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$5;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(styles$1.footer, "class")} id="contact"><div${addAttribute(styles$1.content, "class")}><div${addAttribute(styles$1.column, "class")}><h3>Location</h3><address>2952 N 16th St, Phoenix, AZ 85016</address></div><div${addAttribute(styles$1.column, "class")}><h3>Hours</h3><ul${addAttribute(styles$1.hours, "class")}><li${addAttribute(styles$1.day, "class")}><span>Mon</span> Fri: 2 - 9:30pm</li><li${addAttribute(styles$1.day, "class")}><span>Sat</span> 12 - 4:30pm</li><li${addAttribute(styles$1.day, "class")}><span>Sun</span> Closed</li></ul></div><div${addAttribute(styles$1.column, "class")}><h3>Contact</h3><div><a href="tel:602-277-5662"${addAttribute(styles$1.link, "class")}>${renderComponent($$result, "Phone", Phone, {})}
623-206-2639
</a><a${addAttribute(styles$1.link, "class")}>${renderComponent($$result, "Mail", Mail, {})}
chavez_boxing@yahoo.com
</a></div></div><div${addAttribute(styles$1.column, "class")}><h3>Socials</h3><div><a${addAttribute(styles$1.link, "class")}>${renderComponent($$result, "Facebook", Facebook, {})}
Facebook
</a><a${addAttribute(styles$1.link, "class")}>${renderComponent($$result, "Instagram", Instagram, {})}
Instagram
</a></div></div></div></footer>`;
}, "/Users/rajbir/Projects/chavez-boxing/chavez-boxing-ui/src/core/Footer/index.astro", void 0);

const $$Astro$6 = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$4;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="
        Chavez Boxing Gym is a boxing gym located in the heart of Downtown Phoenix. 
        We offer boxing classes for all ages and skill levels. We focus on 
        teaching the fundamentals of boxing and self-defense. We also offer
        personal training and private lessons.
      "><link rel="sitemap" href="/sitemap-index.xml"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="viewport" content="width=device-width"><title>Chavez Boxing Gym ${title && `| ${title}`}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head><body>${renderComponent($$result, "Header", $$Index$6, {})}<main${addAttribute(styles$2.main, "class")}>${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Index$5, {})}</body></html>`;
}, "/Users/rajbir/Projects/chavez-boxing/chavez-boxing-ui/src/layouts/Layout/index.astro", void 0);

const hero = {"src":"/_astro/hero.bcc521a1.png","width":1792,"height":1024,"format":"png"};

const $$Astro$5 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$3;
  const { cta } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cslx(styles$3.card, Astro2.props.class), "class")}>${renderSlot($$result, $$slots["default"])}${cta && cta}</div>`;
}, "/Users/rajbir/Projects/chavez-boxing/chavez-boxing-ui/src/core/Card/index.astro", void 0);

const $$Astro$4 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "Layout", $$Index$4, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section${addAttribute(styles$4.hero, "class")}><div${addAttribute(styles$4.content, "class")}><h1 id="home"${addAttribute(styles$4.title, "class")}><span${addAttribute(styles$4.intro, "class")}>Welcome to</span><br>
Chavez Boxing Gym
</h1><p${addAttribute(styles$4.subtitle, "class")}>Where Grit Meets Grace</p></div><div${addAttribute(styles$4.overlay, "class")}></div>${renderComponent($$result2, "Image", $$Image, { "src": hero, "alt": "Image of big red boxing gloves", "class": styles$4.heroimage })}</section><section${addAttribute(styles$4.section, "class")}><h1 id="programs"${addAttribute(styles$4.title, "class")}>What We Offer</h1><p${addAttribute(styles$4.prose, "class")}>
We offer a variety of programs to suit your needs. Whether you're looking
      to get in shape or train for a match, we've got you covered.
</p><div${addAttribute(styles$4.cards, "class")}>${renderComponent($$result2, "Card", $$Index$3, {}, { "default": ($$result3) => renderTemplate`<h2${addAttribute(styles$4.title, "class")}>Tailored Mastery</h2><p>
Step into the world of amateur boxing with guidance from the best in
          the ring. Our program offers more than just technique; it's a
          comprehensive journey through the art and heart of boxing.
</p><p>
You'll learn to move and think like a boxer, with rigorous training
          that tests your limits and competitions that showcase your growing
          prowess. Join the ranks of the devoted, where every match is a step
          closer to glory.
</p>` })}${renderComponent($$result2, "Card", $$Index$3, {}, { "default": ($$result3) => renderTemplate`<h2${addAttribute(styles$4.title, "class")}>Health and Fitness</h2><p>
Our health and fitness services go beyond the conventional. We don't
          just build muscles; we craft athletes.
</p><p>
Whether you're looking to shed pounds, enhance endurance, or simply
          lead a healthier lifestyle, our holistic approach to fitness
          underlines strength, conditioning, and nutrition.
</p><p>
With trusted equipment and a supportive environment, we make every
          heartbeat count towards your ultimate fitness goals.
</p>` })}${renderComponent($$result2, "Card", $$Index$3, {}, { "default": ($$result3) => renderTemplate`<h2${addAttribute(styles$4.title, "class")}>Amateur Boxing</h2><p>
Step into the world of amateur boxing with guidance from the best in
          the ring. Our program offers more than just technique; it's a
          comprehensive journey through the art and heart of boxing.
</p><p>
You'll learn to move and think like a boxer, with rigorous training
          that tests your limits and competitions that showcase your growing
          prowess. Join the ranks of the devoted, where every match is a step
          closer to glory.
</p>` })}</div></section><section${addAttribute(styles$4.section, "class")}><h1 id="pricing"${addAttribute(styles$4.title, "class")}>Affordable Pricing</h1><p${addAttribute(styles$4.prose, "class")}>
We believe that boxing should be accessible to everyone. That's why we
      offer a variety of pricing options to suit your needs. We work with you to
      find the best plan for your budget and schedule.
</p><div${addAttribute(cslx(styles$4.cards, styles$4.pricing), "class")}>${renderComponent($$result2, "Card", $$Index$3, {}, { "default": ($$result3) => renderTemplate`<div${addAttribute(styles$4.heading, "class")}><h2${addAttribute(styles$4.title, "class")}>Beginner Package</h2><p${addAttribute(styles$4.price, "class")}>$220</p><p>
If you are new to boxing, this package is a great way to get
            started. You'll learn the basics of boxing and get a feel for the
            sport.
</p><ul${addAttribute(styles$4.list, "class")}><li${addAttribute(styles$4.item, "class")}>${renderComponent($$result3, "BadgeCheck", BadgeCheck, {})} Two classes per week</li><li${addAttribute(styles$4.item, "class")}>${renderComponent($$result3, "BadgeCheck", BadgeCheck, {})} One-on-one training</li><li${addAttribute(styles$4.item, "class")}>${renderComponent($$result3, "BadgeCheck", BadgeCheck, {})} Free gym access</li></ul></div>` })}${renderComponent($$result2, "Card", $$Index$3, {}, { "default": ($$result3) => renderTemplate`<div${addAttribute(styles$4.heading, "class")}><h2${addAttribute(styles$4.title, "class")}>Intermediate Package</h2><p${addAttribute(styles$4.price, "class")}>$300</p><p>
If you're looking to increase your skill level, this package is for
            you. Increased training will help you hone your technique and
            prepare you for the ring.
</p><ul${addAttribute(styles$4.list, "class")}><li${addAttribute(styles$4.item, "class")}>${renderComponent($$result3, "BadgeCheck", BadgeCheck, {})} Three classes per week</li><li${addAttribute(styles$4.item, "class")}>${renderComponent($$result3, "BadgeCheck", BadgeCheck, {})} One-on-one training</li><li${addAttribute(styles$4.item, "class")}>${renderComponent($$result3, "BadgeCheck", BadgeCheck, {})} Free gym access</li></ul></div>` })}${renderComponent($$result2, "Card", $$Index$3, {}, { "default": ($$result3) => renderTemplate`<div${addAttribute(styles$4.heading, "class")}><h2${addAttribute(styles$4.title, "class")}>Bundle Package</h2><p${addAttribute(styles$4.price, "class")}>
$200<span${addAttribute(styles$4.disclaimer, "class")}> per person</span></p><p>
Want to bring a friend? This package is perfect for you. You'll get
            to train together and push each other to the next level.
</p><ul${addAttribute(styles$4.list, "class")}><li${addAttribute(styles$4.item, "class")}>${renderComponent($$result3, "BadgeCheck", BadgeCheck, {})} Discount for two people</li><li${addAttribute(styles$4.item, "class")}>${renderComponent($$result3, "BadgeCheck", BadgeCheck, {})} One-on-one training</li><li${addAttribute(styles$4.item, "class")}>${renderComponent($$result3, "BadgeCheck", BadgeCheck, {})} Free gym access</li></ul></div>` })}</div><p${addAttribute(styles$4.prose, "class")}>
If you would like to train with Head Coach Pete, rates start at
<strong>$275</strong> for <strong>eight sessions</strong>.
</p></section><section${addAttribute(styles$4.section, "class")}><h1${addAttribute(styles$4.title, "class")}>Join The Family</h1><p${addAttribute(styles$4.prose, "class")}${addAttribute({
    textAlign: "left"
  }, "style")}>
Step into Chavez Boxing Gym and feel the pulse of legacy - a space where
      each punch and every bead of sweat writes a story of determination. Here,
      we strip away the superfluous and focus on what truly matters: the power
      of community, the respect for straightforward hard work, and the
      commitment to personal excellence.
</p><p${addAttribute(styles$4.prose, "class")}${addAttribute({
    textAlign: "left"
  }, "style")}>
In our haven for hard hitters, fancy frills don't make the fighter -
      tenacity does. Under the glow of bare bulbs and echoed in the rhythm of
      speed bags, you'll find a community forged in the fire of shared struggle
      and mutual support. We're not just a gym; we're a close-knit family that
      grows stronger together, with every session and every challenge met
      head-on.
</p><p${addAttribute(styles$4.prose, "class")}${addAttribute({
    textAlign: "left"
  }, "style")}>
Our doors are open to those who have the heart to step into the ring of
      life with unflinching courage. Whether you're lacing up gloves for the
      first time or you're a seasoned contender, here is where you'll be honed
      and tested, where you'll learn that being a champion starts with showing
      up - for yourself and for your team.
</p><p${addAttribute(styles$4.prose, "class")}><strong>
Take the step. Commit to the core of boxing. No fluff, no distractions -
        just you, the bag, and a band of brothers and sisters who will never let
        you down.
</strong></p><a href="#contact"${addAttribute({
    border: "none"
  }, "style")}><button${addAttribute(styles$4.cta, "class")}>Step Into The Ring</button></a></section>` })}`;
}, "/Users/rajbir/Projects/chavez-boxing/chavez-boxing-ui/src/pages/index.astro", void 0);

const $$file$3 = "/Users/rajbir/Projects/chavez-boxing/chavez-boxing-ui/src/pages/index.astro";
const $$url$3 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  const res = await fetch(`
    ${"http://localhost:8000/api"}/recipes
`);
  const recipes = await res.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Index$4, { "title": "Recipes" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<article${addAttribute(styles$5.article, "class")}><h1>Recipes</h1><p${addAttribute(styles$5.prose, "class")}>
In the ring and in life, the right nutrition can make all the difference.
      That's why our coach doesn't just train your body; they feed your ambition
      with a collection of healthy, easy-to-prepare recipes designed to keep you
      fighting fit. Each dish is packed with the nutrients you need to recover
      from a hard session, build muscle, and maintain energy levels throughout
      the day.
</p><div${addAttribute(styles$5.recipes, "class")}>${recipes.docs.map((recipe) => renderTemplate`<div${addAttribute(styles$5.recipe, "class")}><a${addAttribute(`/recipes/${recipe.id}`, "href")}><h2${addAttribute(styles$5.title, "class")}>${unescapeHTML(recipe.title)}</h2></a><p${addAttribute(styles$5.description, "class")}>${unescapeHTML(recipe.description)}</p></div>`)}</div></article>` })}`;
}, "/Users/rajbir/Projects/chavez-boxing/chavez-boxing-ui/src/pages/recipes/index.astro", void 0);

const $$file$2 = "/Users/rajbir/Projects/chavez-boxing/chavez-boxing-ui/src/pages/recipes/index.astro";
const $$url$2 = "/recipes";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  const { recipe } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description"${addAttribute(recipe.description, "content")}><link rel="sitemap" href="/sitemap-index.xml"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="viewport" content="width=device-width"><title>Chavez Boxing Gym ${recipe.title && `| ${recipe.title}`}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head><body>${renderComponent($$result, "Header", $$Index$6, {})}<main${addAttribute(styles$6.main, "class")}><article${addAttribute(styles$6.article, "class")}><header${addAttribute(styles$6.header, "class")}><a href="/recipes"${addAttribute(styles$6.back, "class")}>${renderComponent($$result, "ArrowLeftToLine", ArrowLeftToLine, { "size": 20 })}
Back to Recipes
</a><h1${addAttribute(styles$6.title, "class")}>${unescapeHTML(recipe.title)}</h1><p${addAttribute(styles$6.description, "class")}>${unescapeHTML(recipe.description)}</p></header><hr><section${addAttribute(styles$6.section, "class")}><h2>Ingredients</h2><div>${unescapeHTML(recipe.ingredients_html)}</div></section><section${addAttribute(styles$6.section, "class")}><h2>Instructions</h2><div>${unescapeHTML(recipe.instructions_html)}</div></section></article></main>${renderComponent($$result, "Footer", $$Index$5, {})}</body></html>`;
}, "/Users/rajbir/Projects/chavez-boxing/chavez-boxing-ui/src/layouts/RecipeLayout/index.astro", void 0);

const $$Astro$1 = createAstro();
async function getStaticPaths() {
  let data = await fetch(`
  ${"http://localhost:8000/api"}/recipes  
`);
  let recipes = await data.json();
  const paths = recipes.docs.map((recipe) => {
    return {
      params: { id: recipe.id },
      props: {
        recipe
      }
    };
  });
  return paths;
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$id;
  const { recipe } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "RecipeLayout", $$Index, { "recipe": recipe })}`;
}, "/Users/rajbir/Projects/chavez-boxing/chavez-boxing-ui/src/pages/recipes/[id].astro", void 0);

const $$file$1 = "/Users/rajbir/Projects/chavez-boxing/chavez-boxing-ui/src/pages/recipes/[id].astro";
const $$url$1 = "/recipes/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file$1,
	getStaticPaths,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Index$4, { "title": "About" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<article${addAttribute(styles$7.article, "class")}><h1>About Coach Pete</h1><p>This is the about page</p></article>` })}`;
}, "/Users/rajbir/Projects/chavez-boxing/chavez-boxing-ui/src/pages/about.astro", void 0);

const $$file = "/Users/rajbir/Projects/chavez-boxing/chavez-boxing-ui/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _id_ as _, index as a, about as b, index$1 as i };
