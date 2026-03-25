// ── config ────────────────────────────────────────────────────────────────
// Both values are Base64 — no plain text visible in source.
//
// To change password: run in browser console →  btoa("newpassword")
const PW_B64 = "YXZlcnk=";
//
// To change letter:   run in terminal →  node -e "console.log(Buffer.from('your text','utf8').toString('base64'))"
const LETTER_B64 = "SGV5IEF2ZXJ577yMCgrlhpnov5nlsIHkv6HnmoTml7blgJnmiJHmg7PkuoblvojkuYXvvIzkuI3mmK/kuI3nn6XpgZPor6Xor7Tku4DkuYjvvIzogIzmmK/mg7Por7TnmoTlpKrlpJrvvIzmgJXor7TkuI3muIXmpZrjgIIKCuivtOWunuivne+8jOi/meS4qua0u+WKqOWImuW8gOWni+aIkeehruWunuayoeaKseS7gOS5iOacn+W+he+8jOWwseW9k+S6pOS4quaci+WPi++8jGhhdmUgZnVu5bCx5aW944CC5L2G5ZCO5p2l6Lef5L2g6IGK5aSp55qE5pe25YCZ77yM5oiR5Y+R546w5LiA5YiH6YO95Y+Y5b6X5LiN5aSq5LiA5qC35LqG44CCCgrmiJHku6zogYrpn7PkuZDlk4HlkbPvvIzogYrkvaDlvIDluIboiLnjgIHpqpHpqaznmoTnu4/ljobvvIzkuZ/ogYrliLDlvbzmraTov4fljrvnmoTkuovmg4XjgILkvaDlkYror4nmiJHkvaDmsqHosIjov4fmgYvniLHvvIzkuZ/ot5/miJHor7TkvaDnnIvliLDmtojmga/pg73kvJrnrKzkuIDml7bpl7Tlm57lpI3vvIzpmaTpnZ7lnKjkuIror77miJbogIXnnJ/nmoTmnInkuovjgILliJrliqDkuIrlvq7kv6HpgqPlpKnkvaDor7TkvaDlnKhXYWxtYXJ077yM54m55oSP6Kej6YeK5Zue5aSN5Lya5pat5pat57ut57ut4oCU4oCU6YKj5Liq556s6Ze05oiR5oy66Kem5Yqo55qE77yM6KeJ5b6X5L2g5piv5LiA5Liq5b6I5bCK6YeN5Yir5Lq644CB5Lmf5b6I6K6k55yf55qE5Lq644CCCgrkvaDov5jml7bkuI3ml7bnu5nmiJHlj5HohJHnrYvmgKXovazlvK/jgIHorrLnrJHor53jgILnlLXor53ogYrlpKnnmoTml7blgJnvvIzomb3nhLblhbfkvZPogYrkuobku4DkuYjmiJHorrDkuI3lpKrmuIXkuobvvIzkvYbpgqPnp43ogYrlvpflvojoh6rnhLbjgIHlvojoiJLmnI3nmoTmhJ/op4nvvIzmiJHkuIDnm7Tpg73orrDlvpfjgIIKCui/meWHoOWkqeS4i+adpe+8jOaIkeWPkeeOsOiHquW3seeahOeUn+a0u+aChOaChOWPmOS6huOAguS7peWJjeaIkeWNgeS4gOeCueWkmuWwseedoeS6hu+8jOS9hui3n+S9oOiBiuWkqeeahOaXtuWAme+8jOaXtumXtOS4gOecqOecvOWwseiDveWIsOS4gOS4pOeCueOAguabtOacieaEj+aAneeahOaYr++8jOW5s+aXtueahOaIkeWAkuWktOWwseiDveedoeedgO+8jOeOsOWcqOWNtOimgee/u+adpeimhuWOu+W+iOS5heaJjeiDveWFpeedoeKAlOKAlOiEkeWtkOmHjOS8muWPjeWkjeaDs+edgOaIkeS7rOiBiuWkqeeahOivneOAggoK56ys5LqM5aSp5pep5LiK6YaS5p2l77yM5aaC5p6c55yL5Yiw5L2g55qE5raI5oGv77yM5oiR5b+D6YeM5Lya5pqW5pqW55qE77yM6IO96auY5YW05LiA5pW05aSp44CC6Jm954S25oiR55+l6YGT5oiR5Lus546w5Zyo6L+Y5rKh5pyJ5LuA5LmI5YWz57O777yM5L2G6L+Y5piv5Lya5pyJ6YKj56eN6ZSZ6KeJ44CCCgrliY3kuKTlpKnmiJHljrvlgaXouqvvvIznorDliLDmnIvlj4vvvIzmiJHor7TmnIDov5HlgaXouqvpg73msqHku4DkuYjliqjlipvjgILku6XliY3lgaXouqvmmK/miJHkuIDlpKnph4zmnIDmnJ/lvoXnmoTml7bpl7TvvIzkvYbnjrDlnKjigJTigJTlubPml7blsLHlt7Lnu4/lvojlv6vkuZDkuobjgILmiJHmnIvlj4vor7TmiJHohLjkuIrnmoTnrJHlrrnlsLHmsqHkuIvljrvov4fvvIzmiJHoh6rlt7Hpg73msqHms6jmhI/liLDjgIIKCuWcqOi/meS4pOWRqOeahOebuOWkhOS4re+8jOaIkeWvueS9oOiCr+WumuacieWlveaEn++8jOi/meaYr+ecn+eahOOAguS9huaIkeabtOaDs+iupOecn+WcsOOAgeaFouaFouWcsOWOu+S6huino+S9oOOAguS6huino+S9oOeahOaDs+azleKAlOKAlOS9oOaAjuS5iOeci+W8guWcsOaBi++8n+S9oOinieW+l+S4pOS4quS6uuWcqOS4gOi1t+aYr+aJvuWlkeWQiOeahOabtOmHjeimge+8jOi/mOaYr+S6kuihpeeahOabtOmHjeimge+8n+aIluiAheivtO+8jOaIkeS5n+WcqOaDs+i/h++8jOS9oOWPguWKoOi/meS4qua0u+WKqOS5n+iuuOS5n+WPquaYr+aDs2hhdmUgZnVu44CCCgromb3nhLbmiJHku6zov5jmsqHop4Hov4fpnaLvvIzkvYbkvaDnu5nmiJHnmoTmhJ/op4nvvIzlg4/mmK/kuIDkuKrlvojlronpnZnnmoTmmKXlpKnigJTigJTmnpfpl7TlsI/ot6/kuIrvvIzmqLHoirHku47lpKnkuIrpo5jkuIvmnaXvvIzogIzkvaDnq5nlnKjkuK3pl7TjgIIKCuaIkeS4jeefpemBk+S9oOaYr+S7gOS5iOaDs+azle+8jOS9huaIkeW+iOaDs+acieabtOWkmuS6huino+S9oOeahOacuuS8muOAguWmguaenOS9oOaEv+aEj++8jOaIkeS7rOWPr+S7peaFouaFouadpeOAgg==";
// ──────────────────────────────────────────────────────────────────────────

const gate       = document.getElementById("gate");
const gateInput  = document.getElementById("gateInput");
const gateError  = document.getElementById("gateError");
const envelope   = document.getElementById("envelope");
const hint       = document.getElementById("hint");
const closeBtn   = document.getElementById("closeBtn");
const letterBody = document.getElementById("letterBody");

function decode(b64) {
  const bytes = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function unlockGate() {
  letterBody.textContent = decode(LETTER_B64);
  gate.classList.add("gate-out");
  gate.addEventListener("transitionend", () => gate.remove(), { once: true });
}

// ── password gate ──────────────────────────────────────────────────────────
gateInput.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  const typed = btoa(gateInput.value.trim().toLowerCase());
  if (typed === PW_B64) {
    unlockGate();
  } else {
    gateError.classList.remove("hidden");
    gateInput.classList.add("shake");
    gateInput.value = "";
    gateInput.addEventListener("animationend", () => gateInput.classList.remove("shake"), { once: true });
  }
});

// ── envelope ───────────────────────────────────────────────────────────────
let isOpen = false;

function openEnvelope() {
  isOpen = true;
  envelope.classList.add("open");
  hint.classList.add("hidden");
  envelope.style.cursor = "default";
}

function closeEnvelope() {
  isOpen = false;
  envelope.classList.remove("open");
  hint.classList.remove("hidden");
  envelope.style.cursor = "pointer";
}

envelope.addEventListener("click", () => { if (!isOpen) openEnvelope(); });
closeBtn.addEventListener("click", (e) => { e.stopPropagation(); closeEnvelope(); });
