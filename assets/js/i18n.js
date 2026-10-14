/* VoxStarion — bilingual UI dictionary (English / Indonesian).
 *
 * window.VOXSTARION_I18N = { en: {...}, id: {...} }
 *   Every user-visible string on the site, keyed by dotted path.
 *   HTML references keys via data-i18n / data-i18n-html /
 *   data-i18n-meta / data-i18n-aria attributes.
 *
 * window.VoxStarionI18n — runtime: getPreferredLang(), applyLanguage(),
 *   toggleLanguage(), t(). Called from assets/js/main.js on
 *   DOMContentLoaded. This file must load BEFORE main.js (all deferred).
 *
 * Not translated by design: brand name "VoxStarion", tagline
 * "Play Beyond. Learn Within.", game names, {{PLACEHOLDER}} tokens,
 * email addresses, URLs, filenames.
 */
window.VOXSTARION_I18N = {
  "en": {
    "meta.title.home": "VoxStarion — Play Beyond. Learn Within.",
    "meta.title.about": "About — VoxStarion",
    "meta.title.privacy": "Privacy Policy — VoxStarion",
    "meta.title.terms": "Terms of Service — VoxStarion",
    "meta.title.contact": "Contact — VoxStarion",
    "meta.description.home": "VoxStarion is an independent game studio crafting small, delightful games that spark curiosity. Play Beyond. Learn Within.",
    "meta.description.about": "About VoxStarion — an independent game studio. Our story, philosophy, vision, mission, and values.",
    "meta.description.privacy": "VoxStarion Privacy Policy — how we handle information across our website and games. Draft pending verification.",
    "meta.description.terms": "VoxStarion Terms of Service — the rules for using our website and games. Draft pending review.",
    "meta.description.contact": "Contact VoxStarion — questions, feedback, game support, or collaboration ideas.",
    "a11y.skip": "Skip to content",
    "a11y.main_nav": "Main navigation",
    "a11y.mobile_nav": "Mobile navigation",
    "a11y.footer_nav": "Footer navigation",
    "a11y.home_link": "VoxStarion home",
    "a11y.open_menu": "Open menu",
    "a11y.switch_to_dark": "Switch to dark mode",
    "a11y.switch_to_light": "Switch to light mode",
    "a11y.toc": "Table of contents",
    "a11y.contact_options": "Contact options",
    "nav.home": "Home",
    "nav.games": "Games",
    "nav.about": "About",
    "nav.contact": "Contact",
    "lang.switch_to_id": "Switch to Indonesian",
    "lang.switch_to_en": "Switch to English",
    "lang.language_label": "Language",
    "footer.home": "Home",
    "footer.about": "About",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.contact": "Contact",
    "footer.rights": "© <span data-year>2026</span> VoxStarion. All rights reserved.",
    "legal.eyebrow": "LEGAL",
    "legal.effective_label": "Effective date:",
    "legal.updated_label": "Last updated:",
    "home.eyebrow": "INDEPENDENT GAME STUDIO",
    "home.hero_sub": "Small games. Big discoveries. We create playful experiences that spark curiosity and make every moment of play meaningful.",
    "home.cta_games": "Explore Our Games",
    "home.cta_about": "Meet VoxStarion",
    "home.values_heading": "What Drives Our Games",
    "home.values_sub": "Three simple ideas shape everything we build.",
    "home.value1_title": "Fun First",
    "home.value1_desc": "We believe the best experiences start with pure enjoyment.",
    "home.value2_title": "Curiosity Always",
    "home.value2_desc": "Every challenge is a chance to explore, discover, and grow.",
    "home.value3_title": "Made for Everyone",
    "home.value3_desc": "Thoughtful games designed to be approachable and rewarding.",
    "home.games_heading": "Our Games",
    "home.games_sub": "Little worlds worth exploring — each one crafted to be easy to pick up and hard to put down.",
    "home.badge_testing": "In Testing",
    "home.badge_dev": "In Development",
    "home.lr_desc": "A fast, casual word and trivia challenge. Catch falling letters, build words, and beat the clock.",
    "home.ls_desc": "Retro snake meets word and trivia puzzles. Gobble letters, solve clues, and grow your streak.",
    "home.ss_desc": "A pencil-sketch arcade shooter. Pilot a hand-drawn squadron through waves of doodled danger.",
    "home.genre_label": "Genre:",
    "home.platform_label": "Platform:",
    "home.status_testing": "Status: in testing — public release coming soon.",
    "home.status_dev": "Status: in development.",
    "home.release_note": "Release status is updated as development progresses. No Google Play listings yet — check back soon.",
    "home.philosophy_heading": "Fun First. Learn Naturally.",
    "home.philosophy_text": "We believe discovery feels best when it happens through play. Our games invite people to experiment, think, smile, and try again — without turning fun into homework.",
    "home.cta_heading": "Curious about what's next?",
    "home.cta_text": "Follow our journey, share feedback, or just say hello — we'd love to hear from you.",
    "home.cta_button": "Get in Touch",
    "about.hero_title": "A Little Studio.<br><span class=\"text-teal-600 dark:text-teal-400\">A Universe of Possibilities.</span>",
    "about.hero_sub": "VoxStarion is an independent game developer crafting accessible, imaginative, and meaningful experiences for curious minds of all ages.",
    "about.story_heading": "Our Story",
    "about.story_p1": "We started VoxStarion with a simple belief: the best games don't need to be the biggest ones. A small, thoughtful game — played for five minutes on a phone — can spark a moment of discovery that stays with you far longer.",
    "about.story_p2": "We're an independent studio, which means every game we make is a personal one. We design for approachability first: if someone picks up one of our games, they should be playing — and smiling — within seconds. The learning, the \"aha!\" moments, the quiet satisfaction of getting better: those arrive naturally, the way they should.",
    "about.story_p3": "We don't see ourselves as a school, and our games aren't homework. They're little worlds worth exploring — built with care, made for everyone.",
    "about.name_heading": "What's in a Name?",
    "about.name_sub": "VoxStarion is a name we invented for the studio — here's what each part represents to us.",
    "about.vox_meaning": "VOICE",
    "about.vox_desc": "Expression and creativity — every player has a voice, and every game is a conversation.",
    "about.star_meaning": "STARS",
    "about.star_desc": "Imagination, discovery, and potential — the sense that something wonderful is always just ahead.",
    "about.ion_meaning": "ENERGY",
    "about.ion_desc": "Innovation and momentum — the spark that keeps us building, experimenting, and moving forward.",
    "about.vm_sr": "Vision and mission",
    "about.vision_title": "Our Vision",
    "about.vision_quote": "\"To create a world where everyone can discover, learn, and grow through the joy of playing games.\"",
    "about.mission_title": "Our Mission",
    "about.mission_quote": "\"We create simple, creative, and engaging games that combine entertainment with meaningful experiences.\"",
    "about.pillars_heading": "Our Five Pillars",
    "about.pillar1_title": "Playfulness",
    "about.pillar1_desc": "Joy is the point, not the wrapper.",
    "about.pillar2_title": "Curiosity",
    "about.pillar2_desc": "Questions are more fun than answers.",
    "about.pillar3_title": "Creativity",
    "about.pillar3_desc": "Original ideas, crafted with care.",
    "about.pillar4_title": "Accessibility",
    "about.pillar4_desc": "Everyone should be able to play.",
    "about.pillar5_title": "Meaningful Fun",
    "about.pillar5_desc": "Easy to play. Hard to put down. Something to take away.",
    "about.pillar_quote": "We create little worlds<br>worth exploring.",
    "privacy.title_h1": "Privacy Policy",
    "privacy.draft_notice": "<strong>Draft notice:</strong> this policy is a working draft. It must be reviewed against the actual behavior of each game, the SDKs integrated, store Data safety declarations, and applicable laws before publishing. See <span class=\"font-mono\">CONTENT_CHECKLIST.md</span> for open items.",
    "privacy.toc_heading": "Contents",
    "privacy.toc_1": "Who We Are and Scope",
    "privacy.toc_2": "Information We Collect",
    "privacy.toc_3": "How Information Is Used",
    "privacy.toc_4": "Advertising and Analytics",
    "privacy.toc_5": "Children's Privacy and Age-Appropriate Experiences",
    "privacy.toc_6": "Data Sharing and Third Parties",
    "privacy.toc_7": "Data Retention and Deletion",
    "privacy.toc_8": "Security",
    "privacy.toc_9": "International Data Transfers",
    "privacy.toc_10": "User Rights and Requests",
    "privacy.toc_11": "Changes to This Policy",
    "privacy.toc_12": "Contact Us",
    "privacy.s1_heading": "1. Who We Are and Scope",
    "privacy.s1_p1": "VoxStarion (\"we\", \"us\") is an independent game development studio. This policy describes how we handle information in connection with (a) this website and (b) the games we publish, including Letter Rain, Letter Snake, and Sketch Squadron.",
    "privacy.s1_p2": "The website and the games may have different data practices. Where a game collects or shares information differently from what is described here, an app-specific privacy disclosure will be provided and linked from that game's store listing.",
    "privacy.s2_heading": "2. Information We Collect",
    "privacy.s2_intro": "We aim to collect as little information as necessary. The categories below describe what <em>may</em> be collected; anything marked as unconfirmed must be verified against actual app behavior before this policy is finalized.",
    "privacy.s2_h3_direct": "Information you provide directly",
    "privacy.s2_direct_li": "Messages you send us when you contact support (for example, your email address and the contents of your message).",
    "privacy.s2_h3_auto": "Information collected automatically",
    "privacy.s2_auto_li": "<span class=\"config-placeholder\">to be confirmed per game</span> — for example, device model, operating system version, app version, and crash diagnostics, if crash reporting is enabled.",
    "privacy.s2_h3_sdk": "Information from third-party SDKs",
    "privacy.s2_sdk_li": "<span class=\"config-placeholder\">to be confirmed per game</span> — list each integrated SDK (advertising, analytics, crash reporting) and the data it collects, per the SDK provider's documentation.",
    "privacy.s3_heading": "3. How Information Is Used",
    "privacy.s3_intro": "Information described above is used to:",
    "privacy.s3_li1": "operate and maintain our games and website;",
    "privacy.s3_li2": "respond to support requests and feedback;",
    "privacy.s3_li3": "understand aggregate usage so we can improve our games;",
    "privacy.s3_li4": "detect, prevent, and address technical issues and abuse.",
    "privacy.s3_nosell": "We do not sell personal information.",
    "privacy.s4_heading": "4. Advertising and Analytics",
    "privacy.s4_p": "<span class=\"config-placeholder\">to be confirmed per game</span> — if a game displays ads (for example via Google AdMob) or uses analytics or crash-reporting SDKs (for example Google Play services, Firebase Crashlytics), list them here with links to the providers' privacy disclosures. Do not list a service here unless it is actually integrated into the app.",
    "privacy.s5_heading": "5. Children's Privacy and Age-Appropriate Experiences",
    "privacy.s5_p1": "Our games are designed to be approachable for a general audience, but we do not assume every game is directed at children. For each game, review Google Play's Families policy and applicable child-privacy obligations (such as COPPA and GDPR-K where relevant) and document the target age group and any age-gating measures here: <span class=\"config-placeholder\">to be confirmed per game</span>.",
    "privacy.s5_p2": "If you believe a child has provided us personal information without parental consent, contact us so we can address it.",
    "privacy.s6_heading": "6. Data Sharing and Third Parties",
    "privacy.s6_p": "We share information only as needed to operate our games and website: for example, with service providers that process data on our behalf (hosting, crash reporting), and where required by law. A per-game list of third parties and the purpose of sharing: <span class=\"config-placeholder\">to be confirmed per game</span>.",
    "privacy.s7_heading": "7. Data Retention and Deletion",
    "privacy.s7_p": "We keep information only as long as necessary for the purposes described above. Support correspondence is retained <span class=\"config-placeholder\">to be confirmed</span>. To request deletion of information associated with you, contact us using the details in section 12. For games with accounts, account-deletion options (in-app and/or web) will be documented here once confirmed: <span class=\"config-placeholder\">to be confirmed</span>.",
    "privacy.s8_heading": "8. Security",
    "privacy.s8_p": "We take reasonable steps to protect information, such as limiting access and using reputable service providers. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    "privacy.s9_heading": "9. International Data Transfers",
    "privacy.s9_p": "<span class=\"config-placeholder\">to be confirmed</span> — describe where data is processed and any cross-border transfer mechanisms, if applicable.",
    "privacy.s10_heading": "10. User Rights and Requests",
    "privacy.s10_p": "Depending on where you live, you may have rights to access, correct, delete, or restrict the use of your information, and to object to certain processing. To exercise these rights, contact us as described in section 12. We will respond within a reasonable timeframe.",
    "privacy.s11_heading": "11. Changes to This Policy",
    "privacy.s11_p": "We may update this policy as our games and practices evolve. Material changes will be reflected by updating the \"Last updated\" date above, and where appropriate, through in-app or store-listing notices.",
    "privacy.s12_heading": "12. Contact Us",
    "privacy.s12_p": "For privacy questions or requests, contact us at <span class=\"config-placeholder\">{{PRIVACY_EMAIL}}</span> (see also our <a href=\"contact.html\">contact page</a>).",
    "terms.title_h1": "Terms of Service",
    "terms.draft_notice": "<strong>Draft notice:</strong> these terms are a working draft and do not yet identify a specific legal entity or governing jurisdiction. Have them reviewed before publishing. See <span class=\"font-mono\">CONTENT_CHECKLIST.md</span> for open items.",
    "terms.s1_heading": "1. Acceptance and Scope",
    "terms.s1_p": "These Terms of Service (\"Terms\") govern your use of the VoxStarion website and the games we publish (collectively, the \"Services\"). By accessing or using the Services, you agree to these Terms. If you do not agree, please do not use the Services.",
    "terms.s2_heading": "2. Permitted Use of Website and Games",
    "terms.s2_p": "You may use the Services for personal, non-commercial entertainment and information purposes. You agree to use the Services in accordance with these Terms and all applicable laws.",
    "terms.s3_heading": "3. Intellectual Property and Ownership",
    "terms.s3_p": "The Services — including games, artwork, music, text, logos, and software — are owned by VoxStarion or its licensors and are protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable, revocable license to use the Services as permitted by these Terms. You may not copy, modify, distribute, or reverse-engineer the Services except as allowed by law.",
    "terms.s4_heading": "4. User Conduct and Restrictions",
    "terms.s4_intro": "You agree not to:",
    "terms.s4_li1": "use the Services for any unlawful purpose;",
    "terms.s4_li2": "attempt to disrupt, damage, or gain unauthorized access to the Services;",
    "terms.s4_li3": "misrepresent your identity or affiliation;",
    "terms.s4_li4": "circumvent any technical measures we use to provide the Services.",
    "terms.s5_heading": "5. Third-Party Stores, Ads, and Links",
    "terms.s5_p": "Our games may be distributed through third-party stores (such as Google Play), and may contain links to third-party websites or services. Those third parties have their own terms and privacy policies, which apply to your use of their services. We are not responsible for third-party content or practices.",
    "terms.s6_heading": "6. Purchases, Subscriptions, and Refunds",
    "terms.s6_p": "<span class=\"config-placeholder\">to be confirmed</span> — our games are currently offered without in-app purchases or subscriptions. If paid features are introduced in the future, this section will describe pricing, billing, and refund terms, consistent with the applicable store's policies.",
    "terms.s7_heading": "7. Availability, Updates, and Changes",
    "terms.s7_p": "We may update, modify, or discontinue any part of the Services at any time, including game features and website content. We will make reasonable efforts to communicate significant changes, but we do not guarantee uninterrupted availability.",
    "terms.s8_heading": "8. Disclaimers and Limitations",
    "terms.s8_p1": "The Services are provided \"as is\" and \"as available\" without warranties of any kind, to the extent permitted by law. We do not guarantee that the Services will be error-free or meet all of your expectations. Nothing in these Terms limits rights that cannot be limited under applicable consumer protection law.",
    "terms.s8_p2": "To the maximum extent permitted by law, VoxStarion will not be liable for indirect, incidental, or consequential damages arising from your use of the Services.",
    "terms.s9_heading": "9. Termination",
    "terms.s9_p": "We may suspend or terminate your access to the Services if you materially breach these Terms. You may stop using the Services at any time.",
    "terms.s10_heading": "10. Governing Law and Jurisdiction",
    "terms.s10_p": "<span class=\"config-placeholder\">pending owner and legal review</span> — the governing law and dispute-resolution forum for these Terms have not yet been determined.",
    "terms.s11_heading": "11. Changes to These Terms",
    "terms.s11_p": "We may revise these Terms from time to time. When we do, we will update the effective date above. Continued use of the Services after changes take effect constitutes acceptance of the revised Terms.",
    "terms.s12_heading": "12. Contact",
    "terms.s12_p": "Questions about these Terms? Reach us via our <a href=\"contact.html\">contact page</a>.",
    "contact.hero_title": "Let's Connect.",
    "contact.hero_sub": "Questions, feedback, support, or collaboration ideas? We'd love to hear from you.",
    "contact.card1_title": "General Inquiries",
    "contact.card1_desc": "Press, partnerships, or just saying hello.",
    "contact.card2_title": "Game Support",
    "contact.card2_desc": "Stuck, crashed, or found a bug? We're here.",
    "contact.card3_title": "Privacy Requests",
    "contact.card3_desc": "Data questions, access, or deletion requests.",
    "contact.guide_title": "Before you write in",
    "contact.guide_sub": "To help us help you faster, please include:",
    "contact.guide_li1": "The <strong>game name</strong> (e.g. Letter Rain) and app version, if you know it",
    "contact.guide_li2": "Your <strong>device model</strong> and <strong>Android version</strong>",
    "contact.guide_li3": "A short <strong>description of the issue</strong> and the steps to reproduce it",
    "contact.guide_li4": "Screenshots, if they help explain the problem",
    "contact.warning": "Please never send passwords, payment details, or other sensitive personal data by email.",
    "contact.note": "Email addresses are configured by the site owner in <span class=\"font-mono\">assets/js/config.js</span>. There is intentionally no web contact form — we don't operate a form backend, and we won't pretend to."
  },
  "id": {
    "meta.title.home": "VoxStarion — Play Beyond. Learn Within.",
    "meta.title.about": "Tentang — VoxStarion",
    "meta.title.privacy": "Kebijakan Privasi — VoxStarion",
    "meta.title.terms": "Ketentuan Layanan — VoxStarion",
    "meta.title.contact": "Kontak — VoxStarion",
    "meta.description.home": "VoxStarion adalah studio game independen yang menciptakan game-game kecil nan memikat untuk memantik rasa ingin tahu. Play Beyond. Learn Within.",
    "meta.description.about": "Tentang VoxStarion — studio game independen. Kisah, filosofi, visi, misi, dan nilai-nilai kami.",
    "meta.description.privacy": "Kebijakan Privasi VoxStarion — cara kami menangani informasi di website dan game kami. Draf menunggu verifikasi.",
    "meta.description.terms": "Ketentuan Layanan VoxStarion — aturan penggunaan website dan game kami. Draf menunggu peninjauan.",
    "meta.description.contact": "Hubungi VoxStarion — pertanyaan, masukan, dukungan game, atau ide kolaborasi.",
    "a11y.skip": "Lewati ke konten",
    "a11y.main_nav": "Navigasi utama",
    "a11y.mobile_nav": "Navigasi seluler",
    "a11y.footer_nav": "Navigasi footer",
    "a11y.home_link": "Beranda VoxStarion",
    "a11y.open_menu": "Buka menu",
    "a11y.switch_to_dark": "Beralih ke mode gelap",
    "a11y.switch_to_light": "Beralih ke mode terang",
    "a11y.toc": "Daftar isi",
    "a11y.contact_options": "Pilihan kontak",
    "nav.home": "Beranda",
    "nav.games": "Game",
    "nav.about": "Tentang",
    "nav.contact": "Kontak",
    "lang.switch_to_id": "Beralih ke Bahasa Indonesia",
    "lang.switch_to_en": "Beralih ke Bahasa Inggris",
    "lang.language_label": "Bahasa",
    "footer.home": "Beranda",
    "footer.about": "Tentang",
    "footer.privacy": "Kebijakan Privasi",
    "footer.terms": "Ketentuan Layanan",
    "footer.contact": "Kontak",
    "footer.rights": "© <span data-year>2026</span> VoxStarion. Hak cipta dilindungi undang-undang.",
    "legal.eyebrow": "LEGAL",
    "legal.effective_label": "Tanggal berlaku:",
    "legal.updated_label": "Terakhir diperbarui:",
    "home.eyebrow": "STUDIO GAME INDEPENDEN",
    "home.hero_sub": "Game kecil. Penemuan besar. Kami menciptakan pengalaman bermain yang memantik rasa ingin tahu dan membuat setiap momen bermain terasa bermakna.",
    "home.cta_games": "Jelajahi Game Kami",
    "home.cta_about": "Kenali VoxStarion",
    "home.values_heading": "Apa yang Menggerakkan Game Kami",
    "home.values_sub": "Tiga gagasan sederhana membentuk semua yang kami buat.",
    "home.value1_title": "Kesenangan Utama",
    "home.value1_desc": "Kami percaya pengalaman terbaik berawal dari kesenangan yang murni.",
    "home.value2_title": "Selalu Penasaran",
    "home.value2_desc": "Setiap tantangan adalah kesempatan untuk menjelajah, menemukan, dan bertumbuh.",
    "home.value3_title": "Dibuat untuk Semua",
    "home.value3_desc": "Game yang dirancang dengan saksama agar mudah dimainkan dan memuaskan.",
    "home.games_heading": "Game Kami",
    "home.games_sub": "Dunia-dunia kecil yang layak dijelajahi — setiap game dirancang mudah dimainkan namun sulit dilepaskan.",
    "home.badge_testing": "Dalam Pengujian",
    "home.badge_dev": "Dalam Pengembangan",
    "home.lr_desc": "Tantangan kata dan trivia yang cepat dan santai. Tangkap huruf-huruf yang berjatuhan, susun kata, dan kalahkan waktu.",
    "home.ls_desc": "Game ular retro berpadu teka-teki kata dan trivia. Lahap huruf-huruf, pecahkan petunjuk, dan perpanjang rentetan kemenanganmu.",
    "home.ss_desc": "Game tembak-menembak arcade bergaya sketsa pensil. Piloti skuadron gambar tangan melewati gelombang bahaya penuh coretan.",
    "home.genre_label": "Genre:",
    "home.platform_label": "Platform:",
    "home.status_testing": "Status: dalam pengujian — perilisan publik segera hadir.",
    "home.status_dev": "Status: dalam pengembangan.",
    "home.release_note": "Status rilis diperbarui seiring berjalannya pengembangan. Belum tersedia di Google Play — silakan kembali lagi nanti.",
    "home.philosophy_heading": "Kesenangan Utama. Belajar Secara Alami.",
    "home.philosophy_text": "Kami percaya penemuan terasa paling menyenangkan saat terjadi lewat bermain. Game kami mengajak orang untuk bereksperimen, berpikir, tersenyum, dan mencoba lagi — tanpa mengubah kesenangan menjadi pekerjaan rumah.",
    "home.cta_heading": "Penasaran dengan yang berikutnya?",
    "home.cta_text": "Ikuti perjalanan kami, bagikan masukan, atau sekadar menyapa — kami senang mendengar kabar darimu.",
    "home.cta_button": "Hubungi Kami",
    "about.hero_title": "Studio Kecil.<br><span class=\"text-teal-600 dark:text-teal-400\">Semesta Penuh Kemungkinan.</span>",
    "about.hero_sub": "VoxStarion adalah pengembang game independen yang menciptakan pengalaman bermain yang mudah diakses, imajinatif, dan bermakna bagi para pemain yang penuh rasa ingin tahu dari segala usia.",
    "about.story_heading": "Kisah Kami",
    "about.story_p1": "Kami memulai VoxStarion dengan keyakinan sederhana: game terbaik tidak harus menjadi yang terbesar. Sebuah game kecil yang dirancang dengan saksama — dimainkan lima menit di ponsel — bisa memantik momen penemuan yang membekas jauh lebih lama.",
    "about.story_p2": "Kami adalah studio independen, yang berarti setiap game yang kami buat bersifat personal. Kami mengutamakan kemudahan: begitu seseorang memainkan game kami, mereka seharusnya langsung bermain — dan tersenyum — dalam hitungan detik. Pembelajaran, momen \"aha!\", kepuasan tenang karena semakin mahir: semua itu datang secara alami, sebagaimana mestinya.",
    "about.story_p3": "Kami tidak memandang diri sebagai sekolah, dan game kami bukanlah pekerjaan rumah. Game kami adalah dunia-dunia kecil yang layak dijelajahi — dibangun dengan ketulusan, dibuat untuk semua orang.",
    "about.name_heading": "Apa Arti Sebuah Nama?",
    "about.name_sub": "VoxStarion adalah nama yang kami ciptakan untuk studio ini — inilah makna setiap bagiannya bagi kami.",
    "about.vox_meaning": "SUARA",
    "about.vox_desc": "Ekspresi dan kreativitas — setiap pemain memiliki suara, dan setiap game adalah sebuah percakapan.",
    "about.star_meaning": "BINTANG",
    "about.star_desc": "Imajinasi, penemuan, dan potensi — perasaan bahwa sesuatu yang luar biasa selalu menanti di depan.",
    "about.ion_meaning": "ENERGI",
    "about.ion_desc": "Inovasi dan momentum — percikan yang membuat kami terus membangun, bereksperimen, dan melangkah maju.",
    "about.vm_sr": "Visi dan misi",
    "about.vision_title": "Visi Kami",
    "about.vision_quote": "\"Menciptakan dunia di mana setiap orang bisa menemukan, belajar, dan bertumbuh melalui kegembiraan bermain game.\"",
    "about.mission_title": "Misi Kami",
    "about.mission_quote": "\"Kami menciptakan game yang sederhana, kreatif, dan menarik, yang memadukan hiburan dengan pengalaman yang bermakna.\"",
    "about.pillars_heading": "Lima Pilar Kami",
    "about.pillar1_title": "Keceriaan",
    "about.pillar1_desc": "Kegembiraan adalah intinya, bukan sekadar bungkusnya.",
    "about.pillar2_title": "Rasa Ingin Tahu",
    "about.pillar2_desc": "Pertanyaan lebih seru daripada jawaban.",
    "about.pillar3_title": "Kreativitas",
    "about.pillar3_desc": "Gagasan orisinal, dibuat dengan ketulusan.",
    "about.pillar4_title": "Aksesibilitas",
    "about.pillar4_desc": "Semua orang seharusnya bisa bermain.",
    "about.pillar5_title": "Kesenangan Bermakna",
    "about.pillar5_desc": "Mudah dimainkan. Sulit dilepaskan. Ada makna yang dibawa pulang.",
    "about.pillar_quote": "Kami menciptakan dunia-dunia kecil<br>yang layak dijelajahi.",
    "privacy.title_h1": "Kebijakan Privasi",
    "privacy.draft_notice": "<strong>Catatan draf:</strong> kebijakan ini masih berupa draf kerja. Kebijakan ini harus ditinjau berdasarkan perilaku aktual setiap game, SDK yang diintegrasikan, deklarasi Keamanan Data di toko aplikasi, dan hukum yang berlaku sebelum dipublikasikan. Lihat <span class=\"font-mono\">CONTENT_CHECKLIST.md</span> untuk daftar hal yang masih terbuka.",
    "privacy.toc_heading": "Daftar Isi",
    "privacy.toc_1": "Tentang Kami dan Ruang Lingkup",
    "privacy.toc_2": "Informasi yang Kami Kumpulkan",
    "privacy.toc_3": "Cara Informasi Digunakan",
    "privacy.toc_4": "Periklanan dan Analitik",
    "privacy.toc_5": "Privasi Anak dan Pengalaman yang Sesuai Usia",
    "privacy.toc_6": "Berbagi Data dan Pihak Ketiga",
    "privacy.toc_7": "Penyimpanan dan Penghapusan Data",
    "privacy.toc_8": "Keamanan",
    "privacy.toc_9": "Transfer Data Internasional",
    "privacy.toc_10": "Hak dan Permintaan Pengguna",
    "privacy.toc_11": "Perubahan atas Kebijakan Ini",
    "privacy.toc_12": "Hubungi Kami",
    "privacy.s1_heading": "1. Tentang Kami dan Ruang Lingkup",
    "privacy.s1_p1": "VoxStarion (\"kami\") adalah studio pengembangan game independen. Kebijakan ini menjelaskan cara kami menangani informasi sehubungan dengan (a) website ini dan (b) game yang kami terbitkan, termasuk Letter Rain, Letter Snake, dan Sketch Squadron.",
    "privacy.s1_p2": "Website dan game dapat memiliki praktik data yang berbeda. Apabila sebuah game mengumpulkan atau membagikan informasi secara berbeda dari yang dijelaskan di sini, pengungkapan privasi khusus aplikasi akan disediakan dan ditautkan dari halaman game tersebut di toko aplikasi.",
    "privacy.s2_heading": "2. Informasi yang Kami Kumpulkan",
    "privacy.s2_intro": "Kami berupaya mengumpulkan informasi sesedikit mungkin. Kategori di bawah ini menjelaskan informasi yang <em>mungkin</em> dikumpulkan; setiap hal yang ditandai belum terkonfirmasi harus diverifikasi berdasarkan perilaku aktual aplikasi sebelum kebijakan ini difinalisasi.",
    "privacy.s2_h3_direct": "Informasi yang Anda berikan secara langsung",
    "privacy.s2_direct_li": "Pesan yang Anda kirim saat menghubungi dukungan (misalnya, alamat email Anda dan isi pesan Anda).",
    "privacy.s2_h3_auto": "Informasi yang dikumpulkan secara otomatis",
    "privacy.s2_auto_li": "<span class=\"config-placeholder\">to be confirmed per game</span> — misalnya, model perangkat, versi sistem operasi, versi aplikasi, dan diagnostik crash, jika pelaporan crash diaktifkan.",
    "privacy.s2_h3_sdk": "Informasi dari SDK pihak ketiga",
    "privacy.s2_sdk_li": "<span class=\"config-placeholder\">to be confirmed per game</span> — cantumkan setiap SDK yang diintegrasikan (periklanan, analitik, pelaporan crash) beserta data yang dikumpulkannya, sesuai dokumentasi penyedia SDK.",
    "privacy.s3_heading": "3. Cara Informasi Digunakan",
    "privacy.s3_intro": "Informasi yang dijelaskan di atas digunakan untuk:",
    "privacy.s3_li1": "mengoperasikan dan memelihara game serta website kami;",
    "privacy.s3_li2": "menanggapi permintaan dukungan dan masukan;",
    "privacy.s3_li3": "memahami penggunaan secara agregat agar kami dapat meningkatkan kualitas game kami;",
    "privacy.s3_li4": "mendeteksi, mencegah, dan menangani masalah teknis serta penyalahgunaan.",
    "privacy.s3_nosell": "Kami tidak menjual informasi pribadi.",
    "privacy.s4_heading": "4. Periklanan dan Analitik",
    "privacy.s4_p": "<span class=\"config-placeholder\">to be confirmed per game</span> — jika sebuah game menampilkan iklan (misalnya melalui Google AdMob) atau menggunakan SDK analitik atau pelaporan crash (misalnya layanan Google Play, Firebase Crashlytics), cantumkan di sini beserta tautan ke pengungkapan privasi penyedianya. Jangan mencantumkan layanan di sini kecuali layanan tersebut benar-benar diintegrasikan ke dalam aplikasi.",
    "privacy.s5_heading": "5. Privasi Anak dan Pengalaman yang Sesuai Usia",
    "privacy.s5_p1": "Game kami dirancang agar mudah dimainkan oleh khalayak umum, tetapi kami tidak mengasumsikan setiap game ditujukan untuk anak-anak. Untuk setiap game, tinjau kebijakan Families di Google Play serta kewajiban privasi anak yang berlaku (seperti COPPA dan GDPR-K jika relevan) dan dokumentasikan kelompok usia target serta langkah pembatasan usia di sini: <span class=\"config-placeholder\">to be confirmed per game</span>.",
    "privacy.s5_p2": "Jika Anda meyakini seorang anak telah memberikan informasi pribadi kepada kami tanpa persetujuan orang tua, hubungi kami agar kami dapat menindaklanjutinya.",
    "privacy.s6_heading": "6. Berbagi Data dan Pihak Ketiga",
    "privacy.s6_p": "Kami membagikan informasi hanya sejauh diperlukan untuk mengoperasikan game dan website kami: misalnya, kepada penyedia layanan yang memproses data atas nama kami (hosting, pelaporan crash), dan apabila diwajibkan oleh hukum. Daftar pihak ketiga per game beserta tujuan pembagiannya: <span class=\"config-placeholder\">to be confirmed per game</span>.",
    "privacy.s7_heading": "7. Penyimpanan dan Penghapusan Data",
    "privacy.s7_p": "Kami menyimpan informasi hanya selama diperlukan untuk tujuan yang dijelaskan di atas. Korespondensi dukungan disimpan selama <span class=\"config-placeholder\">to be confirmed</span>. Untuk meminta penghapusan informasi yang terkait dengan Anda, hubungi kami menggunakan detail di bagian 12. Untuk game yang memiliki akun, opsi penghapusan akun (di dalam aplikasi dan/atau web) akan didokumentasikan di sini setelah dikonfirmasi: <span class=\"config-placeholder\">to be confirmed</span>.",
    "privacy.s8_heading": "8. Keamanan",
    "privacy.s8_p": "Kami mengambil langkah-langkah yang wajar untuk melindungi informasi, seperti membatasi akses dan menggunakan penyedia layanan yang tepercaya. Tidak ada metode transmisi atau penyimpanan yang sepenuhnya aman, dan kami tidak dapat menjamin keamanan mutlak.",
    "privacy.s9_heading": "9. Transfer Data Internasional",
    "privacy.s9_p": "<span class=\"config-placeholder\">to be confirmed</span> — jelaskan di mana data diproses dan mekanisme transfer lintas batas yang berlaku, jika ada.",
    "privacy.s10_heading": "10. Hak dan Permintaan Pengguna",
    "privacy.s10_p": "Bergantung pada tempat tinggal Anda, Anda mungkin memiliki hak untuk mengakses, mengoreksi, menghapus, atau membatasi penggunaan informasi Anda, serta menolak pemrosesan tertentu. Untuk menggunakan hak-hak tersebut, hubungi kami sebagaimana dijelaskan di bagian 12. Kami akan merespons dalam jangka waktu yang wajar.",
    "privacy.s11_heading": "11. Perubahan atas Kebijakan Ini",
    "privacy.s11_p": "Kami dapat memperbarui kebijakan ini seiring berkembangnya game dan praktik kami. Perubahan material akan tercermin melalui pembaruan tanggal \"Terakhir diperbarui\" di atas, dan jika perlu, melalui pemberitahuan di dalam aplikasi atau di halaman toko aplikasi.",
    "privacy.s12_heading": "12. Hubungi Kami",
    "privacy.s12_p": "Untuk pertanyaan atau permintaan terkait privasi, hubungi kami di <span class=\"config-placeholder\">{{PRIVACY_EMAIL}}</span> (lihat juga <a href=\"contact.html\">halaman kontak</a> kami).",
    "terms.title_h1": "Ketentuan Layanan",
    "terms.draft_notice": "<strong>Catatan draf:</strong> ketentuan ini masih berupa draf kerja dan belum menyebutkan badan hukum tertentu maupun yurisdiksi yang berlaku. Mintalah peninjauan sebelum dipublikasikan. Lihat <span class=\"font-mono\">CONTENT_CHECKLIST.md</span> untuk daftar hal yang masih terbuka.",
    "terms.s1_heading": "1. Penerimaan dan Ruang Lingkup",
    "terms.s1_p": "Ketentuan Layanan (\"Ketentuan\") ini mengatur penggunaan Anda atas website VoxStarion dan game yang kami terbitkan (secara kolektif disebut \"Layanan\"). Dengan mengakses atau menggunakan Layanan, Anda menyetujui Ketentuan ini. Jika Anda tidak setuju, mohon jangan gunakan Layanan.",
    "terms.s2_heading": "2. Penggunaan Website dan Game yang Diizinkan",
    "terms.s2_p": "Anda dapat menggunakan Layanan untuk keperluan hiburan dan informasi pribadi yang bersifat non-komersial. Anda setuju untuk menggunakan Layanan sesuai dengan Ketentuan ini dan seluruh hukum yang berlaku.",
    "terms.s3_heading": "3. Kekayaan Intelektual dan Kepemilikan",
    "terms.s3_p": "Layanan — termasuk game, karya seni, musik, teks, logo, dan perangkat lunak — dimiliki oleh VoxStarion atau pemberi lisensinya dan dilindungi oleh hukum kekayaan intelektual. Kami memberikan Anda lisensi terbatas, non-eksklusif, tidak dapat dialihkan, dan dapat dicabut untuk menggunakan Layanan sebagaimana diizinkan oleh Ketentuan ini. Anda tidak boleh menyalin, memodifikasi, mendistribusikan, atau merekayasa balik Layanan kecuali diizinkan oleh hukum.",
    "terms.s4_heading": "4. Perilaku Pengguna dan Pembatasan",
    "terms.s4_intro": "Anda setuju untuk tidak:",
    "terms.s4_li1": "menggunakan Layanan untuk tujuan yang melanggar hukum;",
    "terms.s4_li2": "berupaya mengganggu, merusak, atau mendapatkan akses tidak sah ke Layanan;",
    "terms.s4_li3": "menyalahartikan identitas atau afiliasi Anda;",
    "terms.s4_li4": "mengakali langkah-langkah teknis yang kami gunakan untuk menyediakan Layanan.",
    "terms.s5_heading": "5. Toko, Iklan, dan Tautan Pihak Ketiga",
    "terms.s5_p": "Game kami dapat didistribusikan melalui toko pihak ketiga (seperti Google Play), dan dapat memuat tautan ke website atau layanan pihak ketiga. Pihak ketiga tersebut memiliki ketentuan dan kebijakan privasi masing-masing yang berlaku atas penggunaan layanan mereka oleh Anda. Kami tidak bertanggung jawab atas konten atau praktik pihak ketiga.",
    "terms.s6_heading": "6. Pembelian, Langganan, dan Pengembalian Dana",
    "terms.s6_p": "<span class=\"config-placeholder\">to be confirmed</span> — game kami saat ini ditawarkan tanpa pembelian dalam aplikasi atau langganan. Jika fitur berbayar diperkenalkan di masa mendatang, bagian ini akan menjelaskan ketentuan harga, penagihan, dan pengembalian dana, sesuai dengan kebijakan toko aplikasi yang berlaku.",
    "terms.s7_heading": "7. Ketersediaan, Pembaruan, dan Perubahan",
    "terms.s7_p": "Kami dapat memperbarui, memodifikasi, atau menghentikan bagian mana pun dari Layanan kapan saja, termasuk fitur game dan konten website. Kami akan berupaya secara wajar untuk mengomunikasikan perubahan yang signifikan, tetapi kami tidak menjamin ketersediaan tanpa gangguan.",
    "terms.s8_heading": "8. Penafian dan Pembatasan",
    "terms.s8_p1": "Layanan disediakan \"sebagaimana adanya\" dan \"sebagaimana tersedia\" tanpa jaminan apa pun, sejauh diizinkan oleh hukum. Kami tidak menjamin bahwa Layanan akan bebas dari kesalahan atau memenuhi semua harapan Anda. Tidak ada ketentuan dalam Ketentuan ini yang membatasi hak-hak yang tidak dapat dibatasi berdasarkan hukum perlindungan konsumen yang berlaku.",
    "terms.s8_p2": "Sejauh diizinkan oleh hukum, VoxStarion tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan Layanan oleh Anda.",
    "terms.s9_heading": "9. Pengakhiran",
    "terms.s9_p": "Kami dapat menangguhkan atau mengakhiri akses Anda ke Layanan jika Anda melanggar Ketentuan ini secara material. Anda dapat berhenti menggunakan Layanan kapan saja.",
    "terms.s10_heading": "10. Hukum yang Berlaku dan Yurisdiksi",
    "terms.s10_p": "<span class=\"config-placeholder\">pending owner and legal review</span> — hukum yang berlaku dan forum penyelesaian sengketa untuk Ketentuan ini belum ditentukan.",
    "terms.s11_heading": "11. Perubahan atas Ketentuan Ini",
    "terms.s11_p": "Kami dapat merevisi Ketentuan ini dari waktu ke waktu. Jika kami melakukannya, kami akan memperbarui tanggal berlaku di atas. Penggunaan Layanan secara berkelanjutan setelah perubahan berlaku merupakan penerimaan atas Ketentuan yang telah direvisi.",
    "terms.s12_heading": "12. Kontak",
    "terms.s12_p": "Ada pertanyaan tentang Ketentuan ini? Hubungi kami melalui <a href=\"contact.html\">halaman kontak</a> kami.",
    "contact.hero_title": "Mari Terhubung.",
    "contact.hero_sub": "Pertanyaan, masukan, dukungan, atau ide kolaborasi? Kami senang mendengar kabar darimu.",
    "contact.card1_title": "Pertanyaan Umum",
    "contact.card1_desc": "Pers, kemitraan, atau sekadar menyapa.",
    "contact.card2_title": "Dukungan Game",
    "contact.card2_desc": "Game macet, crash, atau menemukan bug? Kami siap membantu.",
    "contact.card3_title": "Permintaan Privasi",
    "contact.card3_desc": "Pertanyaan data, akses, atau permintaan penghapusan.",
    "contact.guide_title": "Sebelum Anda menulis",
    "contact.guide_sub": "Agar kami bisa membantu lebih cepat, mohon sertakan:",
    "contact.guide_li1": "<strong>Nama game</strong> (mis. Letter Rain) dan versi aplikasi, jika Anda mengetahuinya",
    "contact.guide_li2": "<strong>Model perangkat</strong> dan <strong>versi Android</strong> Anda",
    "contact.guide_li3": "<strong>Deskripsi singkat masalahnya</strong> dan langkah-langkah untuk mereproduksinya",
    "contact.guide_li4": "Tangkapan layar, jika membantu menjelaskan masalahnya",
    "contact.warning": "Mohon jangan pernah mengirim kata sandi, detail pembayaran, atau data pribadi sensitif lainnya melalui email.",
    "contact.note": "Alamat email dikonfigurasi oleh pemilik situs di <span class=\"font-mono\">assets/js/config.js</span>. Sengaja tidak ada formulir kontak web — kami tidak mengoperasikan backend formulir, dan kami tidak akan berpura-pura memilikinya."
  }
};

window.VoxStarionI18n = (function () {
  'use strict';

  var LANG_KEY = 'voxstarion-lang';
  var dict = window.VOXSTARION_I18N || { en: {}, id: {} };

  function normalize(lang) {
    return lang === 'id' ? 'id' : 'en';
  }

  /* Stored preference wins; otherwise Indonesian browsers get 'id'. */
  function getPreferredLang() {
    try {
      var stored = localStorage.getItem(LANG_KEY);
      if (stored === 'id' || stored === 'en') return stored;
    } catch (e) { /* storage unavailable */ }
    var nav = '';
    try {
      nav = window.navigator.language || window.navigator.userLanguage || '';
    } catch (e2) { /* ignore */ }
    return String(nav).toLowerCase().indexOf('id') === 0 ? 'id' : 'en';
  }

  /* Translated string with English fallback; warns on missing keys. */
  function t(key, lang) {
    lang = normalize(lang === undefined ? getPreferredLang() : lang);
    var table = dict[lang] || {};
    if (Object.prototype.hasOwnProperty.call(table, key)) return table[key];
    if (lang !== 'en' && dict.en && Object.prototype.hasOwnProperty.call(dict.en, key)) {
      return dict.en[key];
    }
    if (typeof console !== 'undefined' && console.warn) {
      console.warn('[i18n] missing key: ' + key);
    }
    return '';
  }

  function applyLanguage(lang) {
    lang = normalize(lang);
    var nodes, i, v;

    nodes = document.querySelectorAll('[data-i18n]');
    for (i = 0; i < nodes.length; i++) {
      v = t(nodes[i].getAttribute('data-i18n'), lang);
      if (v !== '') nodes[i].textContent = v;
    }

    nodes = document.querySelectorAll('[data-i18n-html]');
    for (i = 0; i < nodes.length; i++) {
      v = t(nodes[i].getAttribute('data-i18n-html'), lang);
      if (v !== '') nodes[i].innerHTML = v; /* dictionary-authored markup only */
    }

    nodes = document.querySelectorAll('[data-i18n-meta]');
    for (i = 0; i < nodes.length; i++) {
      v = t(nodes[i].getAttribute('data-i18n-meta'), lang);
      if (v !== '') nodes[i].setAttribute('content', v);
    }

    nodes = document.querySelectorAll('[data-i18n-aria]');
    for (i = 0; i < nodes.length; i++) {
      v = t(nodes[i].getAttribute('data-i18n-aria'), lang);
      if (v !== '') nodes[i].setAttribute('aria-label', v);
    }

    /* Language switcher buttons (visible label shows the *target* language). */
    var toId = lang === 'en';
    nodes = document.querySelectorAll('[data-lang-toggle]');
    for (i = 0; i < nodes.length; i++) {
      nodes[i].setAttribute('aria-label', t(toId ? 'lang.switch_to_id' : 'lang.switch_to_en', lang));
      var badge = nodes[i].querySelector('[data-lang-label]');
      if (badge) badge.textContent = toId ? 'ID' : 'EN';
    }

    /* Footer year survives innerHTML swaps. */
    var year = String(new Date().getFullYear());
    nodes = document.querySelectorAll('[data-year]');
    for (i = 0; i < nodes.length; i++) nodes[i].textContent = year;

    document.documentElement.lang = lang;
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) { /* storage unavailable — applies for this session */ }

    /* Notify listeners (e.g. theme toggle refreshes its aria-label). */
    if (typeof document.dispatchEvent === 'function') {
      var evt;
      try {
        evt = new CustomEvent('voxstarion:languagechange', { detail: { lang: lang } });
      } catch (e2) {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent('voxstarion:languagechange', false, false, { lang: lang });
      }
      document.dispatchEvent(evt);
    }
    return lang;
  }

  function toggleLanguage() {
    return applyLanguage(getPreferredLang() === 'en' ? 'id' : 'en');
  }

  return {
    getPreferredLang: getPreferredLang,
    applyLanguage: applyLanguage,
    toggleLanguage: toggleLanguage,
    t: t
  };
})();
