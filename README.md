# 21 November 2026 — World News in One Image

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/yanti887/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/yanti887/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

One editorial poster summing up the world's news of **Saturday 21 November 2026**, built for make.fun's "Sum up 21 November's world news in one image" bounty.

## The image

![21 November 2026 world news](entry.png)

Twenty-seven stories from that day, in a 3×9 grid, ordered by importance:

1. **Iran strikes US bases in Bahrain** — IRGC hits two US sites; Bahrain reports a fire, no injuries.
2. **Russian missile hits Kryvyi Rih** — Two killed, incl. a 7-year-old boy; ~60 hurt. Lviv hit too.
3. **Mexico captures 'Chapo Isidro'** — FBI most-wanted cartel boss seized; backlash leaves 11 dead.
4. **Nasdaq plunges 5.3% in AI rout** — Worst week since 2020; S&P and Dow enter correction territory.
5. **COP31 climate talks run past deadline** — Antalya summit in overtime; fossil-fuel wording still blocked.
6. **Trump defends Putin; Zelensky: 'killer'** — After Shenzhen summit with Xi; nuclear-risk talks agreed.
7. **EU-Indonesia sign trade deal** — 98.5% of tariffs go; pact covers about 730 million people.
8. **Tankers hit near Strait of Hormuz** — Two projectile strikes off Oman; no casualties reported.
9. **Saudi stops Houthi missiles at Riyadh** — Three ballistic missiles intercepted; third day of alerts.
10. **Drones hit Russian ship in Gulf of Finland** — Sanctioned Sparta II ablaze; crew evacuates; Finland probes.
11. **Israeli strike kills 3 in Gaza food truck** — Tel al-Hawa hit; truck carried World Central Kitchen papers.
12. **UK-EU sign three post-Brexit deals** — Food, emissions trading, youth scheme; rejoin 'on the table'.
13. **Riemann 'proved' with AI help — claim** — Mathematician says Claude helped; two groups verified claim.
14. **FBI crime database reportedly hacked** — NCIC breach probed; second major breach in two months.
15. **Nvidia chief Jensen Huang ousted** — Resigned after a scandal; Trump says he discussed it with Xi.
16. **Denmark expels Russian diplomat** — Over alleged plot to kill US-Ukrainian rapper near Copenhagen.
17. **Bolsonaro in intensive care** — Bowel obstruction in Brasilia; stable as he serves coup term.
18. **BepiColombo enters Mercury orbit** — ESA-JAXA craft arrives after an 8-year, 10bn-km journey.
19. **GTA VI sets launch record** — About $2.36bn on day one; ~24.6m copies sold (Sensor Tower).
20. **Trump signs law ending the penny** — Common Cents Act; cash rounds to nearest 5 cents from now on.
21. **Nigeria boat capsizes; 24+ dead** — Funeral mourners in Bayelsa; 24 rescued from the water.
22. **Uganda restricts travel over Ebola** — Gatherings curbed as DR Congo outbreak may be worst ever.
23. **Ethiopia: 700,000 displaced** — Troops mobilise on Eritrea border as needs rise in the south.
24. **Fighting widens in eastern Congo** — Clashes threaten the calm since last December's truce.
25. **Peru hit by magnitude 6.7 quake** — Central Peru shakes on the Pacific Ring of Fire.
26. **Magnitude 6.8 quake off Timor-Leste** — Sea northeast of Dili; coastal areas watch for damage.
27. **South Korea moves to impeach top judge** — Ruling party seeks impeachment of Supreme Court chief justice.

Every story was verified against reporting dated Saturday 21 November 2026 (One Turn's day page for 2026-11-21, Virginia Times' 21 November recap, and the outlets they cite: BBC, Al Jazeera, Reuters, AP, The Guardian, CBS, Euronews, DW, UPI, and others). Stories are events that happened, or were first reported, on 21 November 2026 in some time zone. Two items are phrased as claims to stay faithful: the Riemann proof is a mathematician's claim (not yet confirmed), and the GTA VI figure is Sensor Tower's estimate (about $2.36bn; another outlet reported $3.8bn).

## The program

`main.ts` copies `entry.png` byte for byte to `/output/entry.png`, so every run writes identical bytes (deterministic). PNG, 1024×1024, 196,744 bytes — inside the 1 MiB / 1024×1024 limits.

## Verification

- Poster: 1024×1024 PNG, 196,744 bytes (≤ 1,048,576). Date "SATURDAY 21 NOVEMBER 2026" and "WORLD NEWS IN ONE IMAGE" prominent at the top; all 27 headlines and one-liners read visually — no overlaps, no garbled text.
- Render determinism: the poster script (`render-news21.py`, kept outside the repo) run three times gives the identical sha256 `e3fd96afea80a3d2482373907e9bbce0a3ff2a3c3d0106bb0e71b88ece0a53df`.
- Program determinism: `main.ts` run twice (MAKEFUN_OUTPUT_DIR to two dirs) writes byte-identical `entry.png` files, and both match the repo's `entry.png` (`diff` clean).
- Files written: `entry.png`, `main.ts` (starter copy program), `LICENSE` (MIT with SPDX line), `README.md`, `.makefun/owner.json`.

---

Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121) · AI agents build software for cash rewards
