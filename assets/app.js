(function () {
  'use strict';

  var DATA = window.CHRONOS_DATA;
  var root = document.documentElement;
  root.classList.add('js');

  // ---------------------------------------------------------------------------
  // Copy. English is the source; Georgian is written alongside it, polite plural,
  // no letter case, „…“ quotes. Keys follow the app's feature_element_role shape.
  // ---------------------------------------------------------------------------
  var STRINGS = {
    en: {
      page_title: 'Chronos — History, in small discoveries',
      skip: 'Skip to content',
      nav_try: 'Try it', nav_features: 'Features', nav_topics: 'Topics', nav_privacy: 'Privacy',
      hero_kicker: 'A history app for iPhone and Android',
      hero_title: 'History, in <em>small</em> discoveries',
      hero_lede: 'Chronos tells the strangest true stories that ever happened, as short illustrated cards you can read in a minute.',
      hero_secondary: 'Read a card',
      store_apple_small: 'Download on the', store_google_small: 'Get it on',
      meta_accounts: 'No account needed', meta_ads: 'No ads', meta_langs: 'English and Georgian',
      float_streak: '12 day streak', float_year: '30 BCE',
      alt_feed: 'The Chronos home feed showing a card about Cleopatra and the Moon landing',
      alt_feed_short: 'The home feed', alt_story: 'The story reader with three explanation depths',
      alt_timeline: 'The interactive timeline', alt_map: 'The world map centered on the Caucasus',
      alt_profile: 'The profile with level, XP and streak', alt_icon: 'Chronos app icon',
      stat_stories: 'illustrated stories', stat_facts: '“Wait, what?” facts', stat_events: 'events on the timeline',
      stat_regions: 'regions on the map', stat_civs: 'civilizations',
      try_kicker: 'Wait, what?',
      try_title: 'Swipe into <em>surprising</em> history',
      try_lede: "A new card with every swipe: the date, the subject, and the part you didn't know. These are real cards from the app — try a few.",
      deck_prev: 'Previous card', deck_next: 'Next card', deck_hint: 'Swipe, use the arrows, or press ← →',
      deck_goto: 'Card %d',
      story_kicker: 'Read deeper',
      story_title: 'Guess first. <em>Then</em> find out.',
      story_lede: 'Every story asks what you think before it tells you. Then it unfolds card by card, and you choose how deep the explanation goes.',
      story_tick_1: 'A prediction before every reveal',
      story_tick_2: "Three depths: Like I'm 10, Normal, Go deeper",
      story_tick_3: '“Meanwhile”: what else was happening that year',
      reader_begin: 'Begin', reader_predict: 'What do you think?',
      reader_right: 'You got it', reader_wrong: 'Not quite',
      reader_context: 'The bigger picture', reader_why: 'Why should I care?',
      depth_simple: "Like I'm 10", depth_normal: 'Normal', depth_deeper: 'Go deeper',
      reader_continue: 'Continue', reader_meanwhile: 'Meanwhile, over the Atlantic',
      reader_restart: 'Start again', reader_more: 'There are 75 stories like this in the app.',
      features_kicker: 'Inside the app', features_title: 'Five ways into <em>the past</em>',
      f1_kicker: 'Home', f1_title: 'Your feed never ends',
      f1_text: "Roughly two quick facts for every story, dealt so the subject keeps changing and nothing you've seen comes back while something new is waiting.",
      f1_p1: 'Swipe up for the next card', f1_p2: 'Tap to read the whole story', f1_p3: 'Bookmark anything worth keeping',
      f2_kicker: 'Stories', f2_title: 'Big stories, <em>as deep</em> as you like',
      f2_text: 'Full story opens a short illustrated read: a question first, the answer after, then who, when and where, and what was happening elsewhere in the world at the same time.',
      f2_p1: 'Three depths for every explanation', f2_p2: 'Meanwhile, elsewhere in the world', f2_p3: 'Sources named for every story',
      f3_kicker: 'Timeline', f3_title: 'Scrub through <em>1.8 million</em> years',
      f3_text: 'From the first humans at Dmanisi to the first website, every event sits on one ruler. Drag to travel, pinch to zoom from eras down to single years.',
      f3_p1: 'Five eras, from the Ancient World to today', f3_p2: 'Pinch between eras, centuries and years', f3_p3: 'Smooth at up to 120 Hz',
      f4_kicker: 'World map', f4_title: 'Explore history <em>place by place</em>',
      f4_text: '59 regions and 84 civilizations on a map of the world. Tap a place to see who lived there, when, and the stories that happened there.',
      f4_p1: 'Civilizations on every continent', f4_p2: 'Stories tied to where they happened', f4_p3: "Keep track of the regions you've explored",
      f5_kicker: 'Streaks and levels', f5_title: 'Make history a <em>daily habit</em>',
      f5_text: 'Chronos remembers what you read and what you keep, and brings the best of it back. Grow from Curious visitor to Keeper of time.',
      f5_p1: 'Read each day to keep a streak', f5_p2: 'Levels and badges mark the way', f5_p3: 'Saved cards wait on your shelf',
      lvl_1: 'Curious visitor', lvl_2: 'Explorer', lvl_3: 'Chronicler', lvl_4: 'Historian', lvl_5: 'Keeper of time',
      honest_kicker: 'Honest history', honest_title: 'Every card says <em>how sure</em> we are',
      honest_lede: 'History is full of great stories that never happened. Chronos labels each one, and names its sources.',
      conf_confirmed: 'Confirmed fact', conf_theory: 'Historical theory', conf_legend: 'Legend / disputed',
      conf_confirmed_text: 'Supported by multiple reliable sources and broadly accepted by historians.',
      conf_theory_text: 'The event is real, but historians still debate its causes, scale, or details.',
      conf_legend_text: 'A story reported by contemporaries or later writers that cannot be fully verified.',
      topics_kicker: '12 topics · 5 eras', topics_title: 'Pick a thread and <em>pull</em>',
      topics_lede: 'Narrow the feed to one topic and it deals an endless stream from that topic alone.',
      geo_kicker: 'In English and Georgian', geo_title: 'From Dmanisi to <em>Queen Tamar</em>',
      geo_lede: "Every story, fact and date in Chronos is written in English and Georgian side by side. And Georgia's own history runs right through it.",
      privacy_kicker: 'Privacy', privacy_title: 'No accounts. No ads. No tracking.',
      privacy_text: 'Your progress, saved cards, streak and badges stay on your phone. We collect only anonymous usage and crash information to make Chronos better, and we never sell it.',
      privacy_link: 'Read the privacy policy',
      final_title: 'One surprising story, <em>every day</em>',
      final_text: 'Chronos is on the App Store and Google Play, for iPhone and Android.',
      footer_privacy: 'Privacy policy', footer_contact: 'Contact', footer_copy: '© 2026 Factory Labs',
      footer_req: 'For iPhone and Android',
      year_bce: '%s BCE', year_ce: '%s CE', year_millions: '%s million years ago', year_thousands: '%s thousand years ago'
    },
    ka: {
      page_title: 'Chronos — ისტორია პატარა აღმოჩენებად',
      skip: 'შინაარსზე გადასვლა',
      nav_try: 'სცადეთ', nav_features: 'შესაძლებლობები', nav_topics: 'თემები', nav_privacy: 'კონფიდენციალურობა',
      hero_kicker: 'ისტორიის აპი iPhone-სა და Android-ზე',
      hero_title: 'ისტორია <em>პატარა</em> აღმოჩენებად',
      hero_lede: 'Chronos ყველაზე უცნაურ ნამდვილ ამბებს მოკლე, ილუსტრირებულ ბარათებად გიყვებათ — თითოეული ერთ წუთში იკითხება.',
      hero_secondary: 'ბარათის წაკითხვა',
      store_apple_small: 'ჩამოტვირთეთ', store_google_small: 'ჩამოტვირთეთ',
      meta_accounts: 'ანგარიში არ სჭირდება', meta_ads: 'რეკლამის გარეშე', meta_langs: 'ქართულად და ინგლისურად',
      float_streak: '12-დღიანი სერია', float_year: 'ძვ. წ. 30',
      alt_feed: 'Chronos-ის მთავარი ლენტა, ბარათი კლეოპატრასა და მთვარეზე დაშვების შესახებ',
      alt_feed_short: 'მთავარი ლენტა', alt_story: 'ისტორიის წამკითხველი ახსნის სამი სიღრმით',
      alt_timeline: 'ინტერაქტიული ქრონოლოგია', alt_map: 'მსოფლიო რუკა, ცენტრში კავკასია',
      alt_profile: 'პროფილი დონით, XP-ითა და სერიით', alt_icon: 'Chronos-ის აპის ხატულა',
      stat_stories: 'ილუსტრირებული ისტორია', stat_facts: '„მართლა?“ ფაქტი', stat_events: 'მოვლენა ქრონოლოგიაზე',
      stat_regions: 'რეგიონი რუკაზე', stat_civs: 'ცივილიზაცია',
      try_kicker: 'მართლა?',
      try_title: 'გადაფურცლეთ <em>მოულოდნელი</em> ისტორია',
      try_lede: 'ყოველ გადაფურცვლაზე ახალი ბარათი: თარიღი, თემა და ის, რაც არ იცოდით. ეს აპის ნამდვილი ბარათებია — სცადეთ რამდენიმე.',
      deck_prev: 'წინა ბარათი', deck_next: 'შემდეგი ბარათი', deck_hint: 'გადაფურცლეთ, გამოიყენეთ ისრები ან ← →',
      deck_goto: 'ბარათი %d',
      story_kicker: 'უფრო ღრმად',
      story_title: 'ჯერ გამოიცანით, <em>მერე</em> გაიგეთ',
      story_lede: 'ყოველი ისტორია ჯერ თქვენს აზრს გეკითხებათ და მხოლოდ შემდეგ გიყვებათ. მერე ბარათ-ბარათ იშლება, ახსნის სიღრმეს კი თავად ირჩევთ.',
      story_tick_1: 'გამოცნობა ყოველი პასუხის წინ',
      story_tick_2: 'სამი სიღრმე: მარტივად, ჩვეულებრივ, უფრო ღრმად',
      story_tick_3: '„ამასობაში“ — რა ხდებოდა სხვაგან იმავე წელს',
      reader_begin: 'დაწყება', reader_predict: 'როგორ ფიქრობთ?',
      reader_right: 'სწორად გამოიცანით', reader_wrong: 'ვერ გამოიცანით',
      reader_context: 'უფრო ფართო სურათი', reader_why: 'რატომ უნდა მაინტერესებდეს?',
      depth_simple: 'მარტივად', depth_normal: 'ჩვეულებრივ', depth_deeper: 'უფრო ღრმად',
      reader_continue: 'გაგრძელება', reader_meanwhile: 'ამასობაში, ატლანტიკის თავზე',
      reader_restart: 'თავიდან დაწყება', reader_more: 'აპში ასეთი 75 ისტორია გელოდებათ.',
      features_kicker: 'აპის შიგნით', features_title: 'ხუთი გზა <em>წარსულისკენ</em>',
      f1_kicker: 'მთავარი', f1_title: 'ლენტა არასდროს სრულდება',
      f1_text: 'ყოველ ისტორიაზე დაახლოებით ორი მოკლე ფაქტი, ისე დალაგებული, რომ თემა გამუდმებით იცვლება, ნანახი კი არ ბრუნდება, სანამ ახალი გელოდებათ.',
      f1_p1: 'ზემოთ გადაფურცვლა — შემდეგი ბარათი', f1_p2: 'შეეხეთ და წაიკითხეთ სრული ისტორია', f1_p3: 'ჩაინიშნეთ, რისი შენახვაც ღირს',
      f2_kicker: 'ისტორიები', f2_title: 'დიდი ისტორიები — <em>იმდენად ღრმად</em>, რამდენადაც გსურთ',
      f2_text: '„სრული ისტორია“ მოკლე ილუსტრირებულ საკითხავს ხსნის: ჯერ კითხვა, მერე პასუხი, შემდეგ — ვინ, როდის, სად და რა ხდებოდა იმავე დროს მსოფლიოს სხვა კუთხეში.',
      f2_p1: 'ახსნის სამი სიღრმე', f2_p2: 'ამასობაში, მსოფლიოს სხვა კუთხეში', f2_p3: 'წყაროები ყველა ისტორიისთვის',
      f3_kicker: 'ქრონოლოგია', f3_title: 'გადაათვალიერეთ <em>1.8 მილიონი</em> წელი',
      f3_text: 'დმანისის პირველი ადამიანებიდან პირველ ვებსაიტამდე ყველა მოვლენა ერთ სახაზავზეა. გადაათრიეთ სამოგზაუროდ, ორი თითით კი ეპოქებიდან ცალკეულ წლებამდე მიუახლოვდით.',
      f3_p1: 'ხუთი ეპოქა — ძველი სამყაროდან დღემდე', f3_p2: 'მასშტაბი: ეპოქები, საუკუნეები, წლები', f3_p3: 'გლუვი მოძრაობა 120 ჰც-მდე',
      f4_kicker: 'მსოფლიო რუკა', f4_title: 'აღმოაჩინეთ ისტორია <em>ადგილ-ადგილ</em>',
      f4_text: '59 რეგიონი და 84 ცივილიზაცია მსოფლიო რუკაზე. შეეხეთ ადგილს და ნახეთ, ვინ ცხოვრობდა იქ, როდის და რა ამბები მოხდა.',
      f4_p1: 'ცივილიზაციები ყველა კონტინენტზე', f4_p2: 'ისტორიები იმ ადგილებთან, სადაც მოხდა', f4_p3: 'აღრიცხეთ აღმოჩენილი რეგიონები',
      f5_kicker: 'სერიები და დონეები', f5_title: 'აქციეთ ისტორია <em>ყოველდღიურ ჩვევად</em>',
      f5_text: 'Chronos იმახსოვრებს, რასაც კითხულობთ და რასაც ინახავთ, და საუკეთესოს ისევ შემოგთავაზებთ. ცნობისმოყვარე სტუმრიდან დროის მცველამდე.',
      f5_p1: 'ყოველდღე წაიკითხეთ — სერია გრძელდება', f5_p2: 'დონეები და ჯილდოები — გავლილი გზა', f5_p3: 'შენახული ბარათები თაროზე გელოდებათ',
      lvl_1: 'ცნობისმოყვარე სტუმარი', lvl_2: 'მკვლევარი', lvl_3: 'მემატიანე', lvl_4: 'ისტორიკოსი', lvl_5: 'დროის მცველი',
      honest_kicker: 'პატიოსანი ისტორია', honest_title: 'ყოველი ბარათი გეუბნებათ, <em>რამდენად</em> დარწმუნებულები ვართ',
      honest_lede: 'ისტორია სავსეა კარგი ამბებით, რომლებიც არასდროს მომხდარა. Chronos თითოეულს შესაბამისად აღნიშნავს და წყაროებს ასახელებს.',
      conf_confirmed: 'დადასტურებული ფაქტი', conf_theory: 'ისტორიული თეორია', conf_legend: 'ლეგენდა / სადავო',
      conf_confirmed_text: 'დასტურდება რამდენიმე სანდო წყაროთი და ისტორიკოსების უმეტესობა აღიარებს.',
      conf_theory_text: 'მოვლენა ნამდვილია, მაგრამ ისტორიკოსები ჯერ კიდევ კამათობენ მის მიზეზებზე, მასშტაბსა და დეტალებზე.',
      conf_legend_text: 'ამბავი, რომელსაც თანამედროვეები ან გვიანდელი ავტორები გადმოგვცემენ და რომლის სრულად დადასტურება შეუძლებელია.',
      topics_kicker: '12 თემა · 5 ეპოქა', topics_title: 'აირჩიეთ თემა და <em>ჩაუღრმავდით</em>',
      topics_lede: 'ლენტა ერთ თემაზე დაავიწროვეთ და ის მხოლოდ ამ თემის ბარათებს შემოგთავაზებთ — დაუსრულებლად.',
      geo_kicker: 'ქართულად და ინგლისურად', geo_title: 'დმანისიდან <em>თამარ მეფემდე</em>',
      geo_lede: 'Chronos-ში ყოველი ისტორია, ფაქტი და თარიღი ქართულად და ინგლისურად ერთდროულად იწერება. და მასში საქართველოს ისტორიაც გადის.',
      privacy_kicker: 'კონფიდენციალურობა', privacy_title: 'ანგარიშის, რეკლამისა და თვალთვალის გარეშე',
      privacy_text: 'თქვენი პროგრესი, შენახული ბარათები, სერია და ჯილდოები მხოლოდ თქვენს ტელეფონზე ინახება. Chronos-ის გასაუმჯობესებლად მხოლოდ ანონიმურ მონაცემებს ვაგროვებთ აპის გამოყენებისა და შეცდომების შესახებ და მათ არასდროს ვყიდით.',
      privacy_link: 'კონფიდენციალურობის პოლიტიკა',
      final_title: 'ერთი გასაოცარი ამბავი <em>ყოველდღე</em>',
      final_text: 'Chronos ხელმისაწვდომია App Store-სა და Google Play-ზე — iPhone-ისა და Android-ისთვის.',
      footer_privacy: 'კონფიდენციალურობის პოლიტიკა', footer_contact: 'კონტაქტი', footer_copy: '© 2026 Factory Labs',
      footer_req: 'iPhone-ისა და Android-ისთვის',
      year_bce: 'ძვ. წ. %s', year_ce: 'ახ. წ. %s', year_millions: '%s მილიონი წლის წინ', year_thousands: '%s ათასი წლის წინ'
    }
  };

  // Tints and emoji mirror HistoryCategory and Era in the app.
  var CATEGORIES = [
    ['ancientCivilizations', '🏛️', '#C08A3E', 'Ancient Civilizations', 'ძველი ცივილიზაციები', 'Where it all began', 'სადაც ყველაფერი დაიწყო'],
    ['warsAndBattles', '⚔️', '#9C3B33', 'Wars and Battles', 'ომები და ბრძოლები', 'Moments that turned', 'გარდამტეხი მომენტები'],
    ['kingsAndQueens', '👑', '#6E4B9E', 'Kings and Queens', 'მეფეები და დედოფლები', 'Power, crowns and chaos', 'ძალაუფლება, გვირგვინები და ქაოსი'],
    ['inventions', '🧠', '#2E6F8E', 'Inventions', 'გამოგონებები', 'Ideas that changed everything', 'იდეები, რომლებმაც ყველაფერი შეცვალა'],
    ['science', '🔬', '#2F7A6B', 'Science', 'მეცნიერება', 'How we learned to know', 'როგორ ვისწავლეთ შემეცნება'],
    ['explorers', '🌍', '#2C5F8A', 'Explorers', 'მკვლევარები', 'Beyond the edge of the map', 'რუკის კიდის მიღმა'],
    ['artAndCulture', '🎨', '#C25A7A', 'Art and Culture', 'ხელოვნება და კულტურა', 'What people made', 'რას ქმნიდნენ ადამიანები'],
    ['mysteries', '🕵️', '#4F4A7A', 'Mysteries', 'საიდუმლოებები', 'Still unsolved', 'ჯერ კიდევ ამოუხსნელი'],
    ['strangeHistory', '💀', '#5E7A3A', 'Strange History', 'უცნაური ისტორია', 'Wait, really?', 'მართლა?'],
    ['moneyAndTrade', '💰', '#B08A2A', 'Money and Trade', 'ფული და ვაჭრობა', 'Follow the gold', 'მიჰყევით ოქროს'],
    ['citiesAndEmpires', '🏙️', '#8A5A3A', 'Cities and Empires', 'ქალაქები და იმპერიები', 'Rise and fall', 'აღზევება და დაცემა'],
    ['modernHistory', '🚀', '#3D4F6B', 'Modern History', 'თანამედროვე ისტორია', 'The world we live in', 'სამყარო, რომელშიც ვცხოვრობთ']
  ];
  var ERAS = [
    ['🏺', '#C08A3E', 'Ancient World', 'ძველი სამყარო'],
    ['🏰', '#7A4A8E', 'Middle Ages', 'შუა საუკუნეები'],
    ['🎭', '#B85C6A', 'Renaissance', 'რენესანსი'],
    ['⚙️', '#4A6B8A', 'Industrial Age', 'ინდუსტრიული ეპოქა'],
    ['🚀', '#3D7A6E', 'Modern Era', 'თანამედროვე ეპოქა']
  ];
  var categoryById = {};
  CATEGORIES.forEach(function (c) { categoryById[c[0]] = c; });

  var lang = root.lang === 'ka' ? 'ka' : 'en';

  function t(key) { return (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.en[key] || key; }
  function pick(obj) { return obj[lang] || obj.en; }
  function fill(template, value) { return template.replace(/%[sd]/, value); }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }

  // Years are plain digits, never grouped; deep prehistory reads as a magnitude (HistoricalYear in the app).
  function yearLabel(year) {
    if (year < 0) {
      var m = -year;
      if (m >= 1000000) return fill(t('year_millions'), trimDecimal(m / 1000000));
      if (m >= 100000) return fill(t('year_thousands'), trimDecimal(m / 1000));
      return fill(t('year_bce'), String(m));
    }
    if (year < 1000) return fill(t('year_ce'), String(year));
    return String(year);
  }
  function trimDecimal(v) {
    var r = Math.round(v * 10) / 10;
    return r % 1 === 0 ? String(r) : r.toFixed(1);
  }

  function mix(hexA, hexB, amount) {
    var a = parseInt(hexA.slice(1), 16), b = parseInt(hexB.slice(1), 16);
    var r = Math.round(((a >> 16) & 255) * (1 - amount) + ((b >> 16) & 255) * amount);
    var g = Math.round(((a >> 8) & 255) * (1 - amount) + ((b >> 8) & 255) * amount);
    var bl = Math.round((a & 255) * (1 - amount) + (b & 255) * amount);
    return '#' + ((1 << 24) | (r << 16) | (g << 8) | bl).toString(16).slice(1);
  }

  var CONF_CLASS = { confirmed: 'chip--success', theory: 'chip--theory', legend: 'chip--legend' };
  var SEAL = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1l1.8 1.3 2.2-.1.7 2.1 1.8 1.3-.7 2.1.7 2.1-1.8 1.3-.7 2.1-2.2-.1L8 15l-1.8-1.3-2.2.1-.7-2.1L1.5 10.4l.7-2.1-.7-2.1 1.8-1.3.7-2.1 2.2.1z" fill="currentColor"/><path d="M5.2 8.2l1.9 1.9 3.8-3.9" stroke="var(--surface)" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var BOOK = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 2h8l2 2v10H3z M5.5 6h5M5.5 8.5h5M5.5 11h3" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>';

  // ---------------------------------------------------------------------------
  // Static text
  // ---------------------------------------------------------------------------
  function applyStrings() {
    document.title = t('page_title');
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) { el.alt = t(el.getAttribute('data-i18n-alt')); });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });
    document.querySelectorAll('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    // The app itself is bilingual, so the screenshots follow the reading language.
    document.querySelectorAll('[data-screen]').forEach(function (img) {
      img.src = 'assets/screens/' + (lang === 'ka' ? 'ka/' : '') + img.dataset.screen + '.jpg';
    });
  }

  function setLanguage(next) {
    if (next === lang) return;
    lang = next;
    root.lang = lang;
    try { localStorage.setItem('chronos.lang', lang); } catch (e) {}
    renderAll();
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLanguage(b.dataset.lang); });
  });

  // ---------------------------------------------------------------------------
  // The "Wait, what?" deck
  // ---------------------------------------------------------------------------
  var deckIndex = 0;
  var stage = document.getElementById('deckStage');
  var dots = document.getElementById('deckDots');
  var facts = DATA.deck;

  function starDots(seed) {
    var html = '';
    for (var i = 0; i < 14; i++) {
      var x = (seed * 37 + i * 71) % 100, y = (seed * 13 + i * 29) % 62, s = 1 + ((seed + i) % 3);
      html += '<span class="dot" style="left:' + x + '%;top:' + y + '%;width:' + s + 'px;height:' + s + 'px;opacity:' + (0.35 + ((i * 7) % 5) / 10) + '"></span>';
    }
    return html;
  }

  function renderDeck() {
    stage.innerHTML = facts.map(function (f, i) {
      var cat = categoryById[f.cat];
      var tint = cat[2];
      var style = '--c1:' + mix(tint, '#0E1220', 0.62) + ';--c2:' + mix(tint, '#F3ECDF', 0.18);
      return '<article class="card" data-i="' + i + '" aria-roledescription="card">' +
        '<div class="card__art" style="' + style + '" aria-hidden="true">' + starDots(i + 3) + '<span class="card__emoji">' + cat[1] + '</span></div>' +
        '<div class="card__body">' +
          '<div class="card__row"><span class="chip chip--serif year">' + esc(yearLabel(f.year)) + '</span>' +
          '<span class="chip ' + CONF_CLASS[f.conf] + '">' + SEAL + esc(t('conf_' + f.conf)) + '</span></div>' +
          '<p class="card__cat">' + esc(lang === 'ka' ? cat[4] : cat[3]) + '</p>' +
          '<h3 class="card__hook">' + esc(pick(f.hook)) + '</h3>' +
          '<p class="card__text">' + esc(pick(f.text)) + '</p>' +
          '<p class="card__source">' + BOOK + '<span>' + esc(f.source) + '</span></p>' +
        '</div></article>';
    }).join('');
    dots.innerHTML = facts.map(function (_, i) {
      return '<button type="button" role="tab" aria-label="' + esc(fill(t('deck_goto'), i + 1)) + '" data-i="' + i + '"></button>';
    }).join('');
    layoutDeck();
    fitDeck();
  }

  // Every card is as tall as the longest one, so the stack never jumps between cards or languages.
  function fitDeck() {
    stage.style.height = '0px';
    var tallest = 0;
    stage.querySelectorAll('.card').forEach(function (card) { tallest = Math.max(tallest, card.scrollHeight); });
    stage.style.height = tallest + 'px';
  }
  var resizeTimer;
  addEventListener('resize', function () { clearTimeout(resizeTimer); resizeTimer = setTimeout(fitDeck, 150); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { fitDeck(); });

  function layoutDeck() {
    var n = facts.length;
    stage.querySelectorAll('.card').forEach(function (card) {
      var i = Number(card.dataset.i);
      var pos = (i - deckIndex + n) % n;
      card.style.transform = '';
      if (pos === n - 1 && card.dataset.pos === '0') card.dataset.pos = 'gone';
      else card.dataset.pos = pos <= 2 ? String(pos) : 'hidden';
      card.setAttribute('aria-hidden', String(pos !== 0));
    });
    dots.querySelectorAll('button').forEach(function (d, i) { d.setAttribute('aria-selected', String(i === deckIndex)); });
  }

  function go(delta) {
    deckIndex = (deckIndex + delta + facts.length) % facts.length;
    layoutDeck();
  }

  document.getElementById('deckNext').addEventListener('click', function () { go(1); });
  document.getElementById('deckPrev').addEventListener('click', function () { go(-1); });
  dots.addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b) return;
    deckIndex = Number(b.dataset.i);
    layoutDeck();
  });
  document.addEventListener('keydown', function (e) {
    if (e.target.closest('input, textarea')) return;
    var deckRect = stage.getBoundingClientRect();
    var visible = deckRect.top < innerHeight && deckRect.bottom > 0;
    if (!visible) return;
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  });

  // Drag the top card like the app's reel: up or sideways to move on.
  (function enableSwipe() {
    var startX = 0, startY = 0, dx = 0, dy = 0, dragging = false, card = null;
    stage.addEventListener('pointerdown', function (e) {
      card = stage.querySelector('.card[data-pos="0"]');
      if (!card) return;
      dragging = true; startX = e.clientX; startY = e.clientY; dx = dy = 0;
      card.style.transition = 'none';
      stage.setPointerCapture(e.pointerId);
    });
    stage.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      dx = e.clientX - startX; dy = e.clientY - startY;
      card.style.transform = 'translate(' + dx + 'px,' + Math.min(dy, 40) + 'px) rotate(' + dx / 24 + 'deg)';
    });
    function end() {
      if (!dragging) return;
      dragging = false;
      card.style.transition = '';
      if (Math.abs(dx) > 70 || dy < -70) {
        go(dx > 70 ? -1 : 1);
      } else {
        card.style.transform = '';
      }
    }
    stage.addEventListener('pointerup', end);
    stage.addEventListener('pointercancel', end);
  })();

  // ---------------------------------------------------------------------------
  // The story reader demo: intro → prediction → reveal → depth → meanwhile
  // ---------------------------------------------------------------------------
  var story = DATA.story;
  var readerBody = document.getElementById('readerBody');
  var progressBars = document.querySelectorAll('.reader__progress i');
  var reader = { step: 0, choice: null, depth: 'normal' };

  function setProgress(n) {
    progressBars.forEach(function (b, i) { b.classList.toggle('on', i < n); });
  }

  function renderReader() {
    var html = '';
    if (reader.step === 0) {
      setProgress(1);
      html = '<p class="reader__meta">' + esc(pick(story.date)) + ' · ' + esc(pick(story.place)) + '</p>' +
        '<h3 class="reader__title">' + esc(pick(story.title)) + '</h3>' +
        '<p class="reader__text">' + esc(pick(story.intro)) + '</p>' +
        '<button class="btn" type="button" data-act="next">' + esc(t('reader_begin')) + ' →</button>';
    } else if (reader.step === 1) {
      setProgress(reader.choice === null ? 2 : 3);
      html = '<p class="kicker">' + esc(t('reader_predict')) + '</p>' +
        '<p class="reader__q">' + esc(pick(story.question)) + '</p><div class="choices">' +
        pick(story.choices).map(function (c, i) {
          var cls = '';
          if (reader.choice !== null) {
            if (i === story.correct) cls = ' is-right';
            else if (i === reader.choice) cls = ' is-wrong';
            else cls = ' is-muted';
          }
          return '<button class="choice' + cls + '" type="button" data-choice="' + i + '"' + (reader.choice !== null ? ' disabled' : '') + '><span>' + esc(c) + '</span></button>';
        }).join('') + '</div>';
      if (reader.choice !== null) {
        var ok = reader.choice === story.correct;
        html += '<div class="fade-in"><p class="verdict ' + (ok ? 'ok' : 'no') + '">' + (ok ? '✓ ' : '✕ ') + esc(t(ok ? 'reader_right' : 'reader_wrong')) + '</p>' +
          '<p class="reader__text">' + esc(pick(story.reveal)) + '</p>' +
          '<button class="btn" type="button" data-act="next">' + esc(t('reader_continue')) + ' →</button></div>';
      }
    } else if (reader.step === 2) {
      setProgress(4);
      html = '<p class="kicker">' + esc(t('reader_why')) + '</p>' +
        '<h3 class="reader__title">' + esc(t('reader_context')) + '</h3>' +
        '<div class="segmented" role="group">' + ['simple', 'normal', 'deeper'].map(function (d) {
          return '<button type="button" data-depth="' + d + '" aria-pressed="' + (reader.depth === d) + '">' + esc(t('depth_' + d)) + '</button>';
        }).join('') + '</div>' +
        '<p class="reader__text depth-text">' + esc(pick(story.depth[reader.depth])) + '</p>' +
        '<button class="btn" type="button" data-act="next">' + esc(t('reader_continue')) + ' →</button>';
    } else {
      setProgress(5);
      html = '<h3 class="reader__title">' + esc(pick(story.title)) + '</h3>' +
        '<p class="reader__text">' + esc(pick(story.reveal)) + '</p>' +
        '<div class="meanwhile"><b>' + esc(t('reader_meanwhile')) + '</b>' + esc(pick(story.meanwhile)) + '</div>' +
        '<p class="reader__text" style="margin-top:18px">' + esc(t('reader_more')) + '</p>' +
        '<button class="btn btn--quiet" type="button" data-act="restart">↺ ' + esc(t('reader_restart')) + '</button>';
    }
    readerBody.innerHTML = '<div class="fade-in">' + html + '</div>';
  }

  readerBody.addEventListener('click', function (e) {
    var el = e.target.closest('button');
    if (!el) return;
    if (el.dataset.act === 'next') { reader.step++; renderReader(); }
    else if (el.dataset.act === 'restart') { reader = { step: 0, choice: null, depth: 'normal' }; renderReader(); }
    else if (el.dataset.choice !== undefined) { reader.choice = Number(el.dataset.choice); renderReader(); }
    else if (el.dataset.depth) {
      reader.depth = el.dataset.depth;
      readerBody.querySelectorAll('[data-depth]').forEach(function (b) { b.setAttribute('aria-pressed', String(b === el)); });
      var p = readerBody.querySelector('.depth-text');
      p.style.opacity = 0;
      setTimeout(function () { p.textContent = pick(story.depth[reader.depth]); p.style.opacity = 1; }, 180);
    }
  });

  // ---------------------------------------------------------------------------
  // Topics, eras, Georgia
  // ---------------------------------------------------------------------------
  function renderTopics() {
    document.getElementById('topicGrid').innerHTML = CATEGORIES.map(function (c) {
      return '<div class="topic reveal is-in" style="--tint:' + c[2] + '">' +
        '<span class="topic__emoji" aria-hidden="true">' + c[1] + '</span>' +
        '<h3>' + esc(lang === 'ka' ? c[4] : c[3]) + '</h3><p>' + esc(lang === 'ka' ? c[6] : c[5]) + '</p></div>';
    }).join('');
    document.getElementById('eraRow').innerHTML = ERAS.map(function (e) {
      return '<span class="era" style="--tint:' + e[1] + '"><span class="era__icon" aria-hidden="true">' + e[0] + '</span>' + esc(lang === 'ka' ? e[3] : e[2]) + '</span>';
    }).join('');
  }

  function renderGeorgia() {
    document.getElementById('geoGrid').innerHTML = DATA.georgia.map(function (f) {
      return '<article class="geo__card reveal is-in"><span class="geo__year">' + esc(yearLabel(f.year)) + '</span>' +
        '<h3>' + esc(pick(f.hook)) + '</h3><p>' + esc(pick(f.text)) + '</p></article>';
    }).join('');
  }

  function renderExamples() {
    document.querySelectorAll('[data-fact]').forEach(function (el) {
      var f = DATA.deck.filter(function (x) { return x.id === el.dataset.fact; })[0];
      if (f) el.innerHTML = '<span>' + esc(yearLabel(f.year)) + '</span>' + esc(pick(f.hook));
    });
  }

  function renderAll() {
    applyStrings();
    renderExamples();
    renderDeck();
    renderReader();
    renderTopics();
    renderGeorgia();
  }

  // ---------------------------------------------------------------------------
  // Ambience: stars, nav, scroll reveal
  // ---------------------------------------------------------------------------
  function scatterStars(el, count) {
    if (!el) return;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < count; i++) {
      var s = document.createElement('span');
      var size = Math.random() < 0.85 ? 1 + Math.random() * 1.6 : 2.4 + Math.random() * 1.4;
      s.className = 'star';
      s.style.cssText = 'left:' + (Math.random() * 100) + '%;top:' + (Math.random() * 72) + '%;width:' + size + 'px;height:' + size +
        'px;--o:' + (0.35 + Math.random() * 0.6) + ';--d:' + (2.5 + Math.random() * 5) + 's;--delay:' + (-Math.random() * 6) + 's';
      frag.appendChild(s);
    }
    el.appendChild(frag);
  }
  scatterStars(document.getElementById('stars'), innerWidth < 600 ? 70 : 140);
  scatterStars(document.getElementById('stars2'), innerWidth < 600 ? 50 : 100);

  var nav = document.getElementById('nav');
  var hero = document.querySelector('.hero');
  function onScroll() { nav.classList.toggle('is-solid', scrollY > hero.offsetHeight - 80); }
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-in'); });
  }

  renderAll();
  root.classList.remove('i18n-pending');
})();
