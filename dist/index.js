import { jsxs as p, jsx as a, Fragment as st } from "react/jsx-runtime";
import { MinusIcon as It, CheckIcon as ge, Loader2 as Rt, SearchIcon as Ae, PackageOpen as le, ChevronDownIcon as Le, ChevronUpIcon as pa, ChevronRight as ve, ChevronLeft as Ce, CircleIcon as Oe, ChevronDown as $e, Clock as Te, X as Ve, CalendarIcon as Pe, Upload as ma, ImageIcon as fa, MoreHorizontal as ga, ArrowLeft as va, ArrowRight as ha, XIcon as _t, ChevronRightIcon as Fe, ChevronLeftIcon as ba, MoreHorizontalIcon as xa, GripVerticalIcon as ya, PanelLeftIcon as wa, Sun as Na, Moon as ka } from "lucide-react";
import * as c from "react";
import q, { useState as bt, useEffect as _e, useCallback as Ca, useMemo as Sa, createContext as za, useContext as Ma } from "react";
import { Slot as J } from "@radix-ui/react-slot";
import { clsx as Ia } from "clsx";
import { twMerge as Ra } from "tailwind-merge";
import { cva as L } from "class-variance-authority";
import { cva as Zl } from "class-variance-authority";
import * as We from "@radix-ui/react-checkbox";
import * as fe from "@radix-ui/react-tooltip";
import * as _a from "@radix-ui/react-label";
import { DayPicker as Se } from "react-day-picker";
import * as we from "@radix-ui/react-popover";
import * as X from "@radix-ui/react-select";
import * as Je from "@radix-ui/react-radio-group";
import Ta from "react-phone-number-input";
import { isValidPhoneNumber as ec } from "react-phone-number-input";
import Tt from "react-phone-number-input/flags";
import * as ye from "@radix-ui/react-scroll-area";
import { OTPInput as Pa, OTPInputContext as Da } from "input-otp";
import * as Ne from "@radix-ui/react-accordion";
import * as ne from "@radix-ui/react-alert-dialog";
import * as ja from "@radix-ui/react-aspect-ratio";
import * as it from "@radix-ui/react-avatar";
import * as Pt from "@radix-ui/react-separator";
import Ea from "embla-carousel-react";
import * as dt from "recharts";
import * as lt from "@radix-ui/react-collapsible";
import { Command as ce } from "cmdk";
import * as B from "@radix-ui/react-dialog";
import * as U from "@radix-ui/react-context-menu";
import { Drawer as se } from "vaul";
import * as H from "@radix-ui/react-dropdown-menu";
import { FormProvider as Aa, useFormContext as La, useFormState as Oa, Controller as $a } from "react-hook-form";
import * as ke from "@radix-ui/react-hover-card";
import * as K from "@radix-ui/react-menubar";
import * as ie from "@radix-ui/react-navigation-menu";
import * as xt from "@radix-ui/react-progress";
import * as ct from "react-resizable-panels";
import * as re from "@radix-ui/react-tabs";
import * as Me from "@radix-ui/react-slider";
import { useTheme as Va } from "next-themes";
import { Toaster as Fa, toast as pe } from "sonner";
import * as yt from "@radix-ui/react-switch";
import * as Ba from "@radix-ui/react-toggle";
import * as Dt from "@radix-ui/react-toggle-group";
function o(...e) {
  return Ra(Ia(e));
}
function jt(e, t) {
  const [r, n] = c.useState(e);
  return c.useEffect(() => {
    const s = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(s);
    };
  }, [e, t]), r;
}
const Ya = L(
  "peer shrink-0 rounded-[4px] border shadow-sm transition-all duration-200 outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-input-background",
  {
    variants: {
      variant: {
        primary: "border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground data-[state=indeterminate]:border-primary focus:border-primary focus:ring-2 focus:ring-ring/20",
        secondary: "border-input data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground data-[state=checked]:border-secondary data-[state=indeterminate]:bg-secondary data-[state=indeterminate]:text-secondary-foreground data-[state=indeterminate]:border-secondary focus:border-secondary focus:ring-2 focus:ring-secondary/20",
        error: "border-destructive data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground data-[state=indeterminate]:bg-destructive data-[state=indeterminate]:text-destructive-foreground focus:ring-2 focus:ring-destructive/20"
      },
      size: {
        sm: "size-4",
        md: "size-5",
        lg: "size-6"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
), ut = c.forwardRef(({ className: e, variant: t, size: r, label: n, checked: s, ...i }, d) => {
  let l = "ml-2 align-middle select-none";
  r === "sm" ? l += " text-xs" : r === "lg" ? l += " text-base" : l += " text-sm";
  const u = o(
    r === "sm" ? "size-3" : r === "lg" ? "size-4" : "size-3.5"
  );
  return /* @__PURE__ */ p("label", { className: "inline-flex items-center cursor-pointer", children: [
    /* @__PURE__ */ a(
      We.Root,
      {
        ref: d,
        "data-slot": "checkbox",
        className: o(Ya({ variant: t, size: r }), e),
        checked: s,
        ...i,
        children: /* @__PURE__ */ a(
          We.Indicator,
          {
            "data-slot": "checkbox-indicator",
            className: "flex items-center justify-center text-current transition-none",
            children: s === "indeterminate" ? /* @__PURE__ */ a(It, { className: u }) : /* @__PURE__ */ a(ge, { className: u })
          }
        )
      }
    ),
    n && /* @__PURE__ */ a("span", { className: l, children: n })
  ] });
});
ut.displayName = We.Root.displayName;
const Ga = L("inline-block shrink-0 animate-spin", {
  variants: {
    variant: {
      primary: "text-primary",
      secondary: "text-secondary",
      destructive: "text-destructive",
      success: "text-success",
      muted: "text-muted-foreground",
      current: "text-current"
    },
    size: {
      sm: "size-4",
      md: "size-6",
      lg: "size-8",
      xl: "size-12"
    }
  },
  defaultVariants: {
    variant: "muted",
    size: "sm"
  }
}), de = c.forwardRef(
  ({ className: e, variant: t, size: r, label: n = "Loading...", ...s }, i) => /* @__PURE__ */ a(
    Rt,
    {
      ref: i,
      role: "status",
      "data-slot": "spinner",
      "aria-label": n,
      className: o(Ga({ variant: t, size: r }), e),
      ...s
    }
  )
);
de.displayName = "Spinner";
const Ua = c.forwardRef(({ className: e, children: t, text: r, ...n }, s) => /* @__PURE__ */ p(
  "div",
  {
    ref: s,
    "data-slot": "spinner-container",
    className: o(
      "flex flex-col items-center justify-center gap-3 p-8",
      e
    ),
    ...n,
    children: [
      t,
      r && /* @__PURE__ */ a("p", { className: "text-body-base text-muted-foreground", children: r })
    ]
  }
));
Ua.displayName = "SpinnerContainer";
const Ha = c.forwardRef(
  ({ className: e, children: t, visible: r = !0, ...n }, s) => r ? /* @__PURE__ */ a(
    "div",
    {
      ref: s,
      "data-slot": "spinner-overlay",
      className: o(
        "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm",
        e
      ),
      ...n,
      children: t
    }
  ) : null
);
Ha.displayName = "SpinnerOverlay";
function pt({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ a(
    fe.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function Et({
  ...e
}) {
  return /* @__PURE__ */ a(pt, { children: /* @__PURE__ */ a(fe.Root, { "data-slot": "tooltip", ...e }) });
}
function At({
  ...e
}) {
  return /* @__PURE__ */ a(fe.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function Lt({
  className: e,
  sideOffset: t = 0,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ a(fe.Portal, { children: /* @__PURE__ */ p(
    fe.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: o(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ a(fe.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
function Ka({
  options: e,
  value: t,
  defaultValue: r,
  onChange: n,
  placeholder: s = "Select...",
  disabled: i,
  className: d,
  optionVariant: l = "default",
  renderOption: u,
  loading: m = !1,
  apiError: f,
  emptyText: x = "No options",
  size: v = "md",
  isSearchable: b = !0,
  searchFn: y,
  searchPlaceholder: N = "Search..."
}) {
  const h = t !== void 0, [C, g] = c.useState(
    r || []
  ), S = h ? t : C, [T, _] = c.useState(!1), [j, A] = c.useState(""), E = jt(j, 300), $ = c.useRef(null), w = c.useRef(null);
  c.useEffect(() => {
    y && E !== void 0 && y(E);
  }, [E, y]);
  const M = c.useMemo(() => {
    if (!b || y || !j)
      return e;
    const k = j.toLowerCase();
    return e.filter((R) => (typeof R.label == "string" ? R.label : String(R.value)).toLowerCase().includes(k));
  }, [e, j, b, y]);
  c.useEffect(() => {
    T && b && $.current && $.current.focus(), T || A("");
  }, [T, b]), c.useEffect(() => {
    if (!T) return;
    function k(R) {
      w.current && !w.current.contains(R.target) && _(!1);
    }
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, [T]);
  function D(k) {
    const I = S.includes(k) ? S.filter((O) => O !== k) : [...S, k];
    h || g(I), n?.(I);
  }
  function P() {
    i || _((k) => !k);
  }
  function z(k) {
    k.currentTarget.contains(k.relatedTarget) || _(!1);
  }
  return /* @__PURE__ */ p(
    "div",
    {
      className: o("relative", d),
      ref: w,
      tabIndex: -1,
      onBlur: z,
      children: [
        /* @__PURE__ */ a(pt, { children: /* @__PURE__ */ p(Et, { children: [
          /* @__PURE__ */ a(At, { asChild: !0, children: /* @__PURE__ */ p(
            "button",
            {
              type: "button",
              className: o(
                "border-input flex w-full items-center justify-between gap-2 rounded-md border bg-input-background whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
                v === "sm" && "px-2 py-1.5 text-xs h-9",
                v === "md" && "px-3 py-2 text-sm h-11",
                v === "lg" && "px-4 py-2.5 text-base h-12",
                i && "opacity-50 pointer-events-none"
              ),
              disabled: i,
              "aria-haspopup": "listbox",
              "aria-expanded": T,
              onClick: P,
              children: [
                /* @__PURE__ */ a(
                  "span",
                  {
                    className: "truncate block max-w-full",
                    style: { textOverflow: "ellipsis", overflow: "hidden" },
                    children: S.length === 0 ? /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: s }) : e.filter((I) => S.includes(I.value)).map(
                      (I) => typeof I.label == "string" ? I.label : String(I.value)
                    ).join(", ")
                  }
                ),
                /* @__PURE__ */ a(
                  "svg",
                  {
                    className: "size-4 opacity-50",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    children: /* @__PURE__ */ a(
                      "path",
                      {
                        d: "M6 8l4 4 4-4",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }
                    )
                  }
                )
              ]
            }
          ) }),
          S.length > 0 && /* @__PURE__ */ a(
            Lt,
            {
              sideOffset: 4,
              style: {
                maxWidth: "400px",
                whiteSpace: "normal",
                wordBreak: "break-word"
              },
              children: e.filter((k) => S.includes(k.value)).map(
                (k) => typeof k.label == "string" ? k.label : String(k.value)
              ).join(", ")
            }
          )
        ] }) }),
        T && /* @__PURE__ */ p(
          "div",
          {
            className: "absolute left-0 right-0 z-10 mt-1 rounded-md border bg-popover shadow-md max-h-60 overflow-hidden flex flex-col",
            role: "listbox",
            children: [
              b && /* @__PURE__ */ a("div", { className: "p-2 border-b sticky top-0 bg-popover", children: /* @__PURE__ */ p("div", { className: "relative", children: [
                /* @__PURE__ */ a(Ae, { className: "absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
                /* @__PURE__ */ a(
                  "input",
                  {
                    ref: $,
                    type: "text",
                    className: o(
                      "w-full rounded-md border border-input bg-transparent pl-8 pr-2 outline-none focus:ring-2 focus:ring-ring/50",
                      v === "sm" && "py-1 text-xs",
                      v === "md" && "py-1.5 text-sm",
                      v === "lg" && "py-2 text-base"
                    ),
                    placeholder: N,
                    value: j,
                    onChange: (k) => A(k.target.value),
                    onClick: (k) => k.stopPropagation()
                  }
                )
              ] }) }),
              /* @__PURE__ */ a("div", { className: "overflow-auto flex-1", children: m ? /* @__PURE__ */ a("div", { className: "flex items-center justify-center py-6", children: /* @__PURE__ */ a(de, { size: "md" }) }) : f?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 px-4 gap-2", children: /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  className: "text-destructive underline text-sm px-2 py-1 rounded hover:bg-destructive/10 transition-colors",
                  onClick: f.onClick,
                  children: f.text || "Error loading options. Click to retry."
                }
              ) }) : M.length === 0 ? /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center py-6 px-4 gap-2 text-muted-foreground", children: [
                /* @__PURE__ */ a(le, { className: "size-8 mb-2" }),
                /* @__PURE__ */ a("span", { children: j ? "No matches found" : x })
              ] }) : M.map((k) => {
                const R = S.includes(k.value);
                return /* @__PURE__ */ p(
                  "div",
                  {
                    className: o(
                      "flex items-center gap-2 cursor-pointer select-none hover:bg-accent hover:text-accent-foreground",
                      v === "sm" && "px-2 py-1.5 text-xs",
                      v === "md" && "px-3 py-2 text-sm",
                      v === "lg" && "px-4 py-2.5 text-base",
                      R && "bg-accent text-accent-foreground",
                      k.disabled && "opacity-50 pointer-events-none"
                    ),
                    onClick: () => !k.disabled && D(k.value),
                    "aria-selected": R,
                    role: "option",
                    tabIndex: -1,
                    children: [
                      l === "checkbox" ? /* @__PURE__ */ a(
                        ut,
                        {
                          checked: R,
                          tabIndex: -1,
                          className: "size-4 mr-2 pointer-events-none",
                          "aria-hidden": !0
                        }
                      ) : R && /* @__PURE__ */ a(ge, { className: "size-4 mr-2" }),
                      u ? u(k, R) : k.label
                    ]
                  },
                  k.value
                );
              }) })
            ]
          }
        )
      ]
    }
  );
}
const Xa = L("", {
  variants: {
    variant: {
      h1: "font-serif text-[70px] leading-[1.6] font-medium",
      h2: "font-serif text-[56px] leading-[1.6] font-medium",
      h3: "font-serif text-[40px] leading-[1.6] font-medium",
      h4: "font-serif text-[28px] leading-[1.6] font-medium",
      h5: "font-serif text-[24px] leading-[1.6] font-medium",
      h6: "font-serif text-[20px] leading-[1.6] font-medium",
      "display-xl": "font-sans text-display-xl",
      "display-lg": "font-sans text-display-lg",
      "display-md": "font-sans text-display-md",
      "body-xl": "font-sans text-body-xl",
      "body-lg": "font-sans text-body-lg",
      "body-md": "font-sans text-body-md",
      "body-base": "font-sans text-body-base",
      "body-sm": "font-sans text-body-sm",
      "body-xs": "font-sans text-body-xs"
    }
  },
  defaultVariants: {
    variant: "body-base"
  }
}), qa = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  "display-xl": "p",
  "display-lg": "p",
  "display-md": "p",
  "body-xl": "p",
  "body-lg": "p",
  "body-md": "p",
  "body-base": "p",
  "body-sm": "p",
  "body-xs": "p"
};
function V({
  className: e,
  variant: t,
  as: r,
  asChild: n = !1,
  ...s
}) {
  const i = n ? J : r ?? qa[t ?? "body-base"];
  return /* @__PURE__ */ a(
    i,
    {
      "data-slot": "typography",
      className: o(Xa({ variant: t }), e),
      ...s
    }
  );
}
function Z({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    _a.Root,
    {
      "data-slot": "label",
      className: o(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
const Wa = L("", {
  variants: {
    p: {
      none: "",
      1: "p-[var(--spacing-1)]",
      2: "p-[var(--spacing-2)]",
      3: "p-[var(--spacing-3)]",
      4: "p-[var(--spacing-4)]",
      6: "p-[var(--spacing-6)]",
      8: "p-[var(--spacing-8)]",
      12: "p-[var(--spacing-12)]",
      16: "p-[var(--spacing-16)]",
      20: "p-[var(--spacing-20)]"
    },
    px: {
      none: "",
      1: "px-[var(--spacing-1)]",
      2: "px-[var(--spacing-2)]",
      3: "px-[var(--spacing-3)]",
      4: "px-[var(--spacing-4)]",
      6: "px-[var(--spacing-6)]",
      8: "px-[var(--spacing-8)]",
      12: "px-[var(--spacing-12)]",
      16: "px-[var(--spacing-16)]",
      20: "px-[var(--spacing-20)]"
    },
    py: {
      none: "",
      1: "py-[var(--spacing-1)]",
      2: "py-[var(--spacing-2)]",
      3: "py-[var(--spacing-3)]",
      4: "py-[var(--spacing-4)]",
      6: "py-[var(--spacing-6)]",
      8: "py-[var(--spacing-8)]",
      12: "py-[var(--spacing-12)]",
      16: "py-[var(--spacing-16)]",
      20: "py-[var(--spacing-20)]"
    },
    m: {
      none: "",
      1: "m-[var(--spacing-1)]",
      2: "m-[var(--spacing-2)]",
      3: "m-[var(--spacing-3)]",
      4: "m-[var(--spacing-4)]",
      6: "m-[var(--spacing-6)]",
      8: "m-[var(--spacing-8)]",
      12: "m-[var(--spacing-12)]",
      16: "m-[var(--spacing-16)]",
      20: "m-[var(--spacing-20)]"
    },
    mx: {
      none: "",
      1: "mx-[var(--spacing-1)]",
      2: "mx-[var(--spacing-2)]",
      3: "mx-[var(--spacing-3)]",
      4: "mx-[var(--spacing-4)]",
      6: "mx-[var(--spacing-6)]",
      8: "mx-[var(--spacing-8)]",
      12: "mx-[var(--spacing-12)]",
      16: "mx-[var(--spacing-16)]",
      20: "mx-[var(--spacing-20)]"
    },
    my: {
      none: "",
      1: "my-[var(--spacing-1)]",
      2: "my-[var(--spacing-2)]",
      3: "my-[var(--spacing-3)]",
      4: "my-[var(--spacing-4)]",
      6: "my-[var(--spacing-6)]",
      8: "my-[var(--spacing-8)]",
      12: "my-[var(--spacing-12)]",
      16: "my-[var(--spacing-16)]",
      20: "my-[var(--spacing-20)]"
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
      "2xl": "shadow-2xl",
      inner: "shadow-inner",
      outline: "shadow-outline",
      default: "shadow"
    },
    width: {
      auto: "w-auto",
      full: "w-full",
      fit: "w-fit",
      screen: "w-screen"
    },
    height: {
      auto: "h-auto",
      full: "h-full",
      fit: "h-fit",
      screen: "h-screen"
    },
    display: {
      block: "block",
      inline: "inline",
      "inline-block": "inline-block",
      flex: "flex",
      "inline-flex": "inline-flex",
      grid: "grid"
    }
  },
  defaultVariants: {
    p: "none",
    px: "none",
    py: "none",
    m: "none",
    mx: "none",
    my: "none",
    width: "auto",
    height: "auto",
    shadow: "none"
  }
}), Ot = q.forwardRef(
  ({
    as: e = "div",
    className: t,
    p: r,
    px: n,
    py: s,
    m: i,
    mx: d,
    my: l,
    shadow: u,
    width: m,
    height: f,
    display: x,
    children: v,
    ...b
  }, y) => /* @__PURE__ */ a(
    e,
    {
      ref: y,
      className: o(
        Wa({
          p: r,
          px: n,
          py: s,
          m: i,
          mx: d,
          my: l,
          shadow: u,
          width: m,
          height: f,
          display: x
        }),
        t
      ),
      ...b,
      children: v
    }
  )
);
Ot.displayName = "Box";
function F(e) {
  return e == null ? e : typeof e == "string" && /^\d+$/.test(e) ? Number(e) : e;
}
const Ja = L("flex", {
  variants: {
    direction: {
      vertical: "flex-col",
      horizontal: "flex-row"
    },
    gap: {
      0: "gap-0",
      1: "gap-[var(--spacing-1)]",
      2: "gap-[var(--spacing-2)]",
      3: "gap-[var(--spacing-3)]",
      4: "gap-[var(--spacing-4)]",
      6: "gap-[var(--spacing-6)]",
      8: "gap-[var(--spacing-8)]",
      12: "gap-[var(--spacing-12)]",
      16: "gap-[var(--spacing-16)]",
      20: "gap-[var(--spacing-20)]"
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline"
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      "space-between": "justify-between",
      "space-around": "justify-around",
      "space-evenly": "justify-evenly"
    },
    wrap: {
      nowrap: "flex-nowrap",
      wrap: "flex-wrap",
      "wrap-reverse": "flex-wrap-reverse"
    },
    p: {
      none: "",
      1: "p-[var(--spacing-1)]",
      2: "p-[var(--spacing-2)]",
      3: "p-[var(--spacing-3)]",
      4: "p-[var(--spacing-4)]",
      6: "p-[var(--spacing-6)]",
      8: "p-[var(--spacing-8)]",
      12: "p-[var(--spacing-12)]",
      16: "p-[var(--spacing-16)]",
      20: "p-[var(--spacing-20)]"
    },
    px: {
      none: "",
      1: "px-[var(--spacing-1)]",
      2: "px-[var(--spacing-2)]",
      3: "px-[var(--spacing-3)]",
      4: "px-[var(--spacing-4)]",
      6: "px-[var(--spacing-6)]",
      8: "px-[var(--spacing-8)]",
      12: "px-[var(--spacing-12)]",
      16: "px-[var(--spacing-16)]",
      20: "px-[var(--spacing-20)]"
    },
    py: {
      none: "",
      1: "py-[var(--spacing-1)]",
      2: "py-[var(--spacing-2)]",
      3: "py-[var(--spacing-3)]",
      4: "py-[var(--spacing-4)]",
      6: "py-[var(--spacing-6)]",
      8: "py-[var(--spacing-8)]",
      12: "py-[var(--spacing-12)]",
      16: "py-[var(--spacing-16)]",
      20: "py-[var(--spacing-20)]"
    },
    m: {
      none: "",
      1: "m-[var(--spacing-1)]",
      2: "m-[var(--spacing-2)]",
      3: "m-[var(--spacing-3)]",
      4: "m-[var(--spacing-4)]",
      6: "m-[var(--spacing-6)]",
      8: "m-[var(--spacing-8)]",
      12: "m-[var(--spacing-12)]",
      16: "m-[var(--spacing-16)]",
      20: "m-[var(--spacing-20)]"
    },
    mx: {
      none: "",
      1: "mx-[var(--spacing-1)]",
      2: "mx-[var(--spacing-2)]",
      3: "mx-[var(--spacing-3)]",
      4: "mx-[var(--spacing-4)]",
      6: "mx-[var(--spacing-6)]",
      8: "mx-[var(--spacing-8)]",
      12: "mx-[var(--spacing-12)]",
      16: "mx-[var(--spacing-16)]",
      20: "mx-[var(--spacing-20)]"
    },
    my: {
      none: "",
      1: "my-[var(--spacing-1)]",
      2: "my-[var(--spacing-2)]",
      3: "my-[var(--spacing-3)]",
      4: "my-[var(--spacing-4)]",
      6: "my-[var(--spacing-6)]",
      8: "my-[var(--spacing-8)]",
      12: "my-[var(--spacing-12)]",
      16: "my-[var(--spacing-16)]",
      20: "my-[var(--spacing-20)]"
    },
    width: {
      auto: "w-auto",
      full: "w-full",
      fit: "w-fit",
      screen: "w-screen"
    },
    height: {
      auto: "h-auto",
      full: "h-full",
      fit: "h-fit",
      screen: "h-screen"
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
      "2xl": "shadow-2xl",
      inner: "shadow-inner",
      outline: "shadow-outline",
      default: "shadow"
    },
    display: {
      block: "block",
      inline: "inline",
      "inline-block": "inline-block",
      flex: "flex",
      "inline-flex": "inline-flex",
      grid: "grid"
    }
  },
  defaultVariants: {
    direction: "vertical",
    gap: 4,
    align: "stretch",
    justify: "start",
    wrap: "nowrap",
    p: "none",
    px: "none",
    py: "none",
    m: "none",
    mx: "none",
    my: "none",
    width: "auto",
    height: "auto",
    shadow: "none",
    display: "flex"
  }
}), mt = q.forwardRef(
  ({
    as: e = "div",
    className: t,
    direction: r,
    gap: n,
    align: s,
    justify: i,
    wrap: d,
    p: l,
    px: u,
    py: m,
    m: f,
    mx: x,
    my: v,
    width: b,
    height: y,
    shadow: N,
    display: h,
    children: C,
    ...g
  }, S) => {
    const T = [0, 1, 2, 3, 4, 6, 8, 12, 16, 20];
    let _;
    if (n !== void 0) {
      const j = Number(F(n));
      _ = T.includes(j) ? j : void 0;
    }
    return /* @__PURE__ */ a(
      e,
      {
        ref: S,
        className: o(
          Ja({
            direction: r,
            gap: _,
            align: s,
            justify: i,
            wrap: d,
            p: l,
            px: u,
            py: m,
            m: f,
            mx: x,
            my: v,
            width: b,
            height: y,
            shadow: N,
            display: h
          }),
          t
        ),
        ...g,
        children: C
      }
    );
  }
);
mt.displayName = "Stack";
const ft = q.forwardRef(
  ({ ...e }, t) => /* @__PURE__ */ a(mt, { ref: t, direction: "horizontal", ...e })
);
ft.displayName = "HStack";
const Q = q.forwardRef(
  ({ ...e }, t) => /* @__PURE__ */ a(mt, { ref: t, direction: "vertical", ...e })
);
Q.displayName = "VStack";
const Za = L("flex-wrap", {
  variants: {
    gap: {
      0: "gap-0",
      1: "gap-[var(--spacing-1)]",
      2: "gap-[var(--spacing-2)]",
      3: "gap-[var(--spacing-3)]",
      4: "gap-[var(--spacing-4)]",
      6: "gap-[var(--spacing-6)]"
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      baseline: "items-baseline"
    },
    p: {
      none: "",
      1: "p-[var(--spacing-1)]",
      2: "p-[var(--spacing-2)]",
      3: "p-[var(--spacing-3)]",
      4: "p-[var(--spacing-4)]",
      6: "p-[var(--spacing-6)]",
      8: "p-[var(--spacing-8)]",
      12: "p-[var(--spacing-12)]",
      16: "p-[var(--spacing-16)]",
      20: "p-[var(--spacing-20)]"
    },
    px: {
      none: "",
      1: "px-[var(--spacing-1)]",
      2: "px-[var(--spacing-2)]",
      3: "px-[var(--spacing-3)]",
      4: "px-[var(--spacing-4)]",
      6: "px-[var(--spacing-6)]",
      8: "px-[var(--spacing-8)]",
      12: "px-[var(--spacing-12)]",
      16: "px-[var(--spacing-16)]",
      20: "px-[var(--spacing-20)]"
    },
    py: {
      none: "",
      1: "py-[var(--spacing-1)]",
      2: "py-[var(--spacing-2)]",
      3: "py-[var(--spacing-3)]",
      4: "py-[var(--spacing-4)]",
      6: "py-[var(--spacing-6)]",
      8: "py-[var(--spacing-8)]",
      12: "py-[var(--spacing-12)]",
      16: "py-[var(--spacing-16)]",
      20: "py-[var(--spacing-20)]"
    },
    m: {
      none: "",
      1: "m-[var(--spacing-1)]",
      2: "m-[var(--spacing-2)]",
      3: "m-[var(--spacing-3)]",
      4: "m-[var(--spacing-4)]",
      6: "m-[var(--spacing-6)]",
      8: "m-[var(--spacing-8)]",
      12: "m-[var(--spacing-12)]",
      16: "m-[var(--spacing-16)]",
      20: "m-[var(--spacing-20)]"
    },
    mx: {
      none: "",
      1: "mx-[var(--spacing-1)]",
      2: "mx-[var(--spacing-2)]",
      3: "mx-[var(--spacing-3)]",
      4: "mx-[var(--spacing-4)]",
      6: "mx-[var(--spacing-6)]",
      8: "mx-[var(--spacing-8)]",
      12: "mx-[var(--spacing-12)]",
      16: "mx-[var(--spacing-16)]",
      20: "mx-[var(--spacing-20)]"
    },
    my: {
      none: "",
      1: "my-[var(--spacing-1)]",
      2: "my-[var(--spacing-2)]",
      3: "my-[var(--spacing-3)]",
      4: "my-[var(--spacing-4)]",
      6: "my-[var(--spacing-6)]",
      8: "my-[var(--spacing-8)]",
      12: "my-[var(--spacing-12)]",
      16: "my-[var(--spacing-16)]",
      20: "my-[var(--spacing-20)]"
    },
    width: {
      auto: "w-auto",
      full: "w-full",
      fit: "w-fit",
      screen: "w-screen"
    },
    height: {
      auto: "h-auto",
      full: "h-full",
      fit: "h-fit",
      screen: "h-screen"
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
      "2xl": "shadow-2xl",
      inner: "shadow-inner",
      outline: "shadow-outline",
      default: "shadow"
    },
    display: {
      block: "block",
      inline: "inline",
      "inline-block": "inline-block",
      flex: "flex",
      "inline-flex": "inline-flex",
      grid: "grid"
    }
  },
  defaultVariants: {
    gap: 2,
    align: "center",
    p: "none",
    px: "none",
    py: "none",
    m: "none",
    mx: "none",
    my: "none",
    width: "auto",
    height: "auto",
    shadow: "none",
    display: "inline-flex"
  }
}), Qa = q.forwardRef(
  ({
    as: e = "div",
    className: t,
    gap: r,
    align: n,
    p: s,
    px: i,
    py: d,
    m: l,
    mx: u,
    my: m,
    width: f,
    height: x,
    shadow: v,
    display: b,
    children: y,
    ...N
  }, h) => /* @__PURE__ */ a(
    e,
    {
      ref: h,
      className: o(
        Za({
          gap: (() => {
            const C = [0, 1, 2, 3, 4, 6], g = typeof r == "number" ? r : r !== void 0 ? Number(F(r)) : void 0;
            return C.includes(g) ? g : void 0;
          })(),
          align: n,
          p: s,
          px: i,
          py: d,
          m: l,
          mx: u,
          my: m,
          width: f,
          height: x,
          shadow: v,
          display: b
        }),
        t
      ),
      ...N,
      children: y
    }
  )
);
Qa.displayName = "Inline";
const er = L("flex-1", {
  variants: {
    p: {
      none: "",
      1: "p-[var(--spacing-1)]",
      2: "p-[var(--spacing-2)]",
      3: "p-[var(--spacing-3)]",
      4: "p-[var(--spacing-4)]",
      6: "p-[var(--spacing-6)]",
      8: "p-[var(--spacing-8)]",
      12: "p-[var(--spacing-12)]",
      16: "p-[var(--spacing-16)]",
      20: "p-[var(--spacing-20)]"
    },
    px: {
      none: "",
      1: "px-[var(--spacing-1)]",
      2: "px-[var(--spacing-2)]",
      3: "px-[var(--spacing-3)]",
      4: "px-[var(--spacing-4)]",
      6: "px-[var(--spacing-6)]",
      8: "px-[var(--spacing-8)]",
      12: "px-[var(--spacing-12)]",
      16: "px-[var(--spacing-16)]",
      20: "px-[var(--spacing-20)]"
    },
    py: {
      none: "",
      1: "py-[var(--spacing-1)]",
      2: "py-[var(--spacing-2)]",
      3: "py-[var(--spacing-3)]",
      4: "py-[var(--spacing-4)]",
      6: "py-[var(--spacing-6)]",
      8: "py-[var(--spacing-8)]",
      12: "py-[var(--spacing-12)]",
      16: "py-[var(--spacing-16)]",
      20: "py-[var(--spacing-20)]"
    },
    m: {
      none: "",
      1: "m-[var(--spacing-1)]",
      2: "m-[var(--spacing-2)]",
      3: "m-[var(--spacing-3)]",
      4: "m-[var(--spacing-4)]",
      6: "m-[var(--spacing-6)]",
      8: "m-[var(--spacing-8)]",
      12: "m-[var(--spacing-12)]",
      16: "m-[var(--spacing-16)]",
      20: "m-[var(--spacing-20)]"
    },
    mx: {
      none: "",
      1: "mx-[var(--spacing-1)]",
      2: "mx-[var(--spacing-2)]",
      3: "mx-[var(--spacing-3)]",
      4: "mx-[var(--spacing-4)]",
      6: "mx-[var(--spacing-6)]",
      8: "mx-[var(--spacing-8)]",
      12: "mx-[var(--spacing-12)]",
      16: "mx-[var(--spacing-16)]",
      20: "mx-[var(--spacing-20)]"
    },
    my: {
      none: "",
      1: "my-[var(--spacing-1)]",
      2: "my-[var(--spacing-2)]",
      3: "my-[var(--spacing-3)]",
      4: "my-[var(--spacing-4)]",
      6: "my-[var(--spacing-6)]",
      8: "my-[var(--spacing-8)]",
      12: "my-[var(--spacing-12)]",
      16: "my-[var(--spacing-16)]",
      20: "my-[var(--spacing-20)]"
    },
    width: {
      auto: "w-auto",
      full: "w-full",
      fit: "w-fit",
      screen: "w-screen"
    },
    height: {
      auto: "h-auto",
      full: "h-full",
      fit: "h-fit",
      screen: "h-screen"
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
      "2xl": "shadow-2xl",
      inner: "shadow-inner",
      outline: "shadow-outline",
      default: "shadow"
    },
    display: {
      block: "block",
      inline: "inline",
      "inline-block": "inline-block",
      flex: "flex",
      "inline-flex": "inline-flex",
      grid: "grid"
    }
  },
  defaultVariants: {
    p: "none",
    px: "none",
    py: "none",
    m: "none",
    mx: "none",
    my: "none",
    width: "auto",
    height: "auto",
    shadow: "none",
    display: void 0
  }
}), tr = q.forwardRef(
  ({
    as: e = "div",
    className: t,
    p: r,
    px: n,
    py: s,
    m: i,
    mx: d,
    my: l,
    width: u,
    height: m,
    shadow: f,
    display: x,
    ...v
  }, b) => /* @__PURE__ */ a(
    e,
    {
      ref: b,
      className: o(
        er({
          p: r,
          px: n,
          py: s,
          m: i,
          mx: d,
          my: l,
          width: u,
          height: m,
          shadow: f,
          display: x
        }),
        t
      ),
      "aria-hidden": "true",
      ...v
    }
  )
);
tr.displayName = "Spacer";
const ar = L("grid", {
  variants: {
    p: {
      none: "",
      1: "p-[var(--spacing-1)]",
      2: "p-[var(--spacing-2)]",
      3: "p-[var(--spacing-3)]",
      4: "p-[var(--spacing-4)]",
      6: "p-[var(--spacing-6)]",
      8: "p-[var(--spacing-8)]",
      12: "p-[var(--spacing-12)]",
      16: "p-[var(--spacing-16)]",
      20: "p-[var(--spacing-20)]"
    },
    px: {
      none: "",
      1: "px-[var(--spacing-1)]",
      2: "px-[var(--spacing-2)]",
      3: "px-[var(--spacing-3)]",
      4: "px-[var(--spacing-4)]",
      6: "px-[var(--spacing-6)]",
      8: "px-[var(--spacing-8)]",
      12: "px-[var(--spacing-12)]",
      16: "px-[var(--spacing-16)]",
      20: "px-[var(--spacing-20)]"
    },
    py: {
      none: "",
      1: "py-[var(--spacing-1)]",
      2: "py-[var(--spacing-2)]",
      3: "py-[var(--spacing-3)]",
      4: "py-[var(--spacing-4)]",
      6: "py-[var(--spacing-6)]",
      8: "py-[var(--spacing-8)]",
      12: "py-[var(--spacing-12)]",
      16: "py-[var(--spacing-16)]",
      20: "py-[var(--spacing-20)]"
    },
    m: {
      none: "",
      1: "m-[var(--spacing-1)]",
      2: "m-[var(--spacing-2)]",
      3: "m-[var(--spacing-3)]",
      4: "m-[var(--spacing-4)]",
      6: "m-[var(--spacing-6)]",
      8: "m-[var(--spacing-8)]",
      12: "m-[var(--spacing-12)]",
      16: "m-[var(--spacing-16)]",
      20: "m-[var(--spacing-20)]"
    },
    mx: {
      none: "",
      1: "mx-[var(--spacing-1)]",
      2: "mx-[var(--spacing-2)]",
      3: "mx-[var(--spacing-3)]",
      4: "mx-[var(--spacing-4)]",
      6: "mx-[var(--spacing-6)]",
      8: "mx-[var(--spacing-8)]",
      12: "mx-[var(--spacing-12)]",
      16: "mx-[var(--spacing-16)]",
      20: "mx-[var(--spacing-20)]"
    },
    my: {
      none: "",
      1: "my-[var(--spacing-1)]",
      2: "my-[var(--spacing-2)]",
      3: "my-[var(--spacing-3)]",
      4: "my-[var(--spacing-4)]",
      6: "my-[var(--spacing-6)]",
      8: "my-[var(--spacing-8)]",
      12: "my-[var(--spacing-12)]",
      16: "my-[var(--spacing-16)]",
      20: "my-[var(--spacing-20)]"
    },
    columns: {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
      7: "grid-cols-7",
      8: "grid-cols-8",
      9: "grid-cols-9",
      10: "grid-cols-10",
      11: "grid-cols-11",
      12: "grid-cols-12",
      // Responsive variants
      "responsive-2": "grid-cols-1 md:grid-cols-2",
      "responsive-3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      "responsive-4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
      "responsive-1-2-3-4": "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
      "responsive-2-3-4-5": "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
      "responsive-auto-fit": "grid-cols-[repeat(auto-fit,minmax(280px,1fr))]",
      "responsive-auto-fill": "grid-cols-[repeat(auto-fill,minmax(280px,1fr))]"
    },
    gap: {
      0: "gap-0",
      1: "gap-[var(--spacing-1)]",
      2: "gap-[var(--spacing-2)]",
      3: "gap-[var(--spacing-3)]",
      4: "gap-[var(--spacing-4)]",
      6: "gap-[var(--spacing-6)]",
      8: "gap-[var(--spacing-8)]",
      12: "gap-[var(--spacing-12)]",
      16: "gap-[var(--spacing-16)]",
      20: "gap-[var(--spacing-20)]"
    },
    autoFlow: {
      row: "grid-flow-row",
      column: "grid-flow-col",
      dense: "grid-flow-dense"
    },
    alignItems: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch"
    },
    justifyItems: {
      start: "justify-items-start",
      center: "justify-items-center",
      end: "justify-items-end",
      stretch: "justify-items-stretch"
    }
  },
  defaultVariants: {
    columns: 1,
    gap: 4,
    autoFlow: "row",
    p: "none",
    px: "none",
    py: "none",
    m: "none",
    mx: "none",
    my: "none"
  }
}), rr = q.forwardRef(
  ({
    as: e = "div",
    className: t,
    columns: r,
    gap: n,
    autoFlow: s,
    alignItems: i,
    justifyItems: d,
    p: l,
    px: u,
    py: m,
    m: f,
    mx: x,
    my: v,
    children: b,
    ...y
  }, N) => /* @__PURE__ */ a(
    e,
    {
      ref: N,
      className: o(
        ar({
          columns: r,
          gap: n,
          autoFlow: s,
          alignItems: i,
          justifyItems: d,
          p: l,
          px: u,
          py: m,
          m: f,
          mx: x,
          my: v
        }),
        t
      ),
      ...y,
      children: b
    }
  )
);
rr.displayName = "Grid";
const nr = L("", {
  variants: {
    p: {
      none: "",
      1: "p-[var(--spacing-1)]",
      2: "p-[var(--spacing-2)]",
      3: "p-[var(--spacing-3)]",
      4: "p-[var(--spacing-4)]",
      6: "p-[var(--spacing-6)]",
      8: "p-[var(--spacing-8)]",
      12: "p-[var(--spacing-12)]",
      16: "p-[var(--spacing-16)]",
      20: "p-[var(--spacing-20)]"
    },
    px: {
      none: "",
      1: "px-[var(--spacing-1)]",
      2: "px-[var(--spacing-2)]",
      3: "px-[var(--spacing-3)]",
      4: "px-[var(--spacing-4)]",
      6: "px-[var(--spacing-6)]",
      8: "px-[var(--spacing-8)]",
      12: "px-[var(--spacing-12)]",
      16: "px-[var(--spacing-16)]",
      20: "px-[var(--spacing-20)]"
    },
    py: {
      none: "",
      1: "py-[var(--spacing-1)]",
      2: "py-[var(--spacing-2)]",
      3: "py-[var(--spacing-3)]",
      4: "py-[var(--spacing-4)]",
      6: "py-[var(--spacing-6)]",
      8: "py-[var(--spacing-8)]",
      12: "py-[var(--spacing-12)]",
      16: "py-[var(--spacing-16)]",
      20: "py-[var(--spacing-20)]"
    },
    m: {
      none: "",
      1: "m-[var(--spacing-1)]",
      2: "m-[var(--spacing-2)]",
      3: "m-[var(--spacing-3)]",
      4: "m-[var(--spacing-4)]",
      6: "m-[var(--spacing-6)]",
      8: "m-[var(--spacing-8)]",
      12: "m-[var(--spacing-12)]",
      16: "m-[var(--spacing-16)]",
      20: "m-[var(--spacing-20)]"
    },
    mx: {
      none: "",
      1: "mx-[var(--spacing-1)]",
      2: "mx-[var(--spacing-2)]",
      3: "mx-[var(--spacing-3)]",
      4: "mx-[var(--spacing-4)]",
      6: "mx-[var(--spacing-6)]",
      8: "mx-[var(--spacing-8)]",
      12: "mx-[var(--spacing-12)]",
      16: "mx-[var(--spacing-16)]",
      20: "mx-[var(--spacing-20)]"
    },
    my: {
      none: "",
      1: "my-[var(--spacing-1)]",
      2: "my-[var(--spacing-2)]",
      3: "my-[var(--spacing-3)]",
      4: "my-[var(--spacing-4)]",
      6: "my-[var(--spacing-6)]",
      8: "my-[var(--spacing-8)]",
      12: "my-[var(--spacing-12)]",
      16: "my-[var(--spacing-16)]",
      20: "my-[var(--spacing-20)]"
    },
    colSpan: {
      1: "col-span-1",
      2: "col-span-2",
      3: "col-span-3",
      4: "col-span-4",
      5: "col-span-5",
      6: "col-span-6",
      7: "col-span-7",
      8: "col-span-8",
      9: "col-span-9",
      10: "col-span-10",
      11: "col-span-11",
      12: "col-span-12",
      full: "col-span-full"
    },
    rowSpan: {
      1: "row-span-1",
      2: "row-span-2",
      3: "row-span-3",
      4: "row-span-4",
      5: "row-span-5",
      6: "row-span-6",
      full: "row-span-full"
    },
    alignSelf: {
      auto: "self-auto",
      start: "self-start",
      center: "self-center",
      end: "self-end",
      stretch: "self-stretch"
    },
    justifySelf: {
      auto: "justify-self-auto",
      start: "justify-self-start",
      center: "justify-self-center",
      end: "justify-self-end",
      stretch: "justify-self-stretch"
    }
  },
  defaultVariants: {
    colSpan: 1,
    p: "none",
    px: "none",
    py: "none",
    m: "none",
    mx: "none",
    my: "none"
  }
}), or = q.forwardRef(
  ({
    as: e = "div",
    className: t,
    colSpan: r,
    rowSpan: n,
    alignSelf: s,
    justifySelf: i,
    p: d,
    px: l,
    py: u,
    m,
    mx: f,
    my: x,
    children: v,
    ...b
  }, y) => /* @__PURE__ */ a(
    e,
    {
      ref: y,
      className: o(
        nr({
          colSpan: r == null ? void 0 : String(r),
          rowSpan: n == null ? void 0 : String(n),
          alignSelf: s,
          justifySelf: i,
          p: d,
          px: l,
          py: u,
          m,
          mx: f,
          my: x
        }),
        t
      ),
      ...b,
      children: v
    }
  )
);
or.displayName = "GridItem";
const sr = L("mx-auto w-full", {
  variants: {
    maxWidth: {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
      full: "max-w-full"
    },
    p: {
      none: "",
      4: "p-[var(--spacing-4)]",
      6: "p-[var(--spacing-6)]",
      8: "p-[var(--spacing-8)]"
    },
    px: {
      none: "",
      4: "px-[var(--spacing-4)]",
      6: "px-[var(--spacing-6)]",
      8: "px-[var(--spacing-8)]"
    },
    py: {
      none: "",
      4: "py-[var(--spacing-4)]",
      6: "py-[var(--spacing-6)]",
      8: "py-[var(--spacing-8)]"
    },
    m: {
      none: "",
      1: "m-[var(--spacing-1)]",
      2: "m-[var(--spacing-2)]",
      3: "m-[var(--spacing-3)]",
      4: "m-[var(--spacing-4)]",
      6: "m-[var(--spacing-6)]",
      8: "m-[var(--spacing-8)]",
      12: "m-[var(--spacing-12)]",
      16: "m-[var(--spacing-16)]",
      20: "m-[var(--spacing-20)]"
    },
    mx: {
      none: "",
      4: "mx-[var(--spacing-4)]",
      6: "mx-[var(--spacing-6)]",
      8: "mx-[var(--spacing-8)]"
    },
    my: {
      none: "",
      4: "my-[var(--spacing-4)]",
      6: "my-[var(--spacing-6)]",
      8: "my-[var(--spacing-8)]"
    },
    width: {
      auto: "w-auto",
      full: "w-full",
      fit: "w-fit",
      screen: "w-screen"
    },
    height: {
      auto: "h-auto",
      full: "h-full",
      fit: "h-fit",
      screen: "h-screen"
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
      "2xl": "shadow-2xl",
      inner: "shadow-inner",
      outline: "shadow-outline",
      default: "shadow"
    },
    display: {
      block: "block",
      inline: "inline",
      "inline-block": "inline-block",
      flex: "flex",
      "inline-flex": "inline-flex",
      grid: "grid"
    }
  },
  defaultVariants: {
    maxWidth: "xl",
    p: 4,
    px: "none",
    py: "none",
    m: "none",
    mx: "none",
    my: "none",
    width: "full",
    height: "auto",
    shadow: "none",
    display: "block"
  }
}), ir = q.forwardRef(
  ({
    as: e = "div",
    className: t,
    maxWidth: r,
    p: n,
    px: s,
    py: i,
    m: d,
    mx: l,
    my: u,
    width: m,
    height: f,
    shadow: x,
    display: v,
    children: b,
    ...y
  }, N) => /* @__PURE__ */ a(
    e,
    {
      ref: N,
      className: o(
        sr({
          maxWidth: r,
          p: n,
          px: s,
          py: i,
          m: d,
          mx: l,
          my: u,
          width: m,
          height: f,
          shadow: x,
          display: v
        }),
        t
      ),
      ...y,
      children: b
    }
  )
);
ir.displayName = "Container";
const dr = L("w-full", {
  variants: {
    paddingY: {
      6: "py-[var(--spacing-6)]",
      8: "py-[var(--spacing-8)]",
      12: "py-[var(--spacing-12)]",
      16: "py-[var(--spacing-16)]",
      20: "py-[var(--spacing-20)]"
    },
    p: {
      none: "",
      1: "p-[var(--spacing-1)]",
      2: "p-[var(--spacing-2)]",
      3: "p-[var(--spacing-3)]",
      4: "p-[var(--spacing-4)]",
      6: "p-[var(--spacing-6)]",
      8: "p-[var(--spacing-8)]",
      12: "p-[var(--spacing-12)]",
      16: "p-[var(--spacing-16)]",
      20: "p-[var(--spacing-20)]"
    },
    px: {
      none: "",
      1: "px-[var(--spacing-1)]",
      2: "px-[var(--spacing-2)]",
      3: "px-[var(--spacing-3)]",
      4: "px-[var(--spacing-4)]",
      6: "px-[var(--spacing-6)]",
      8: "px-[var(--spacing-8)]",
      12: "px-[var(--spacing-12)]",
      16: "px-[var(--spacing-16)]",
      20: "px-[var(--spacing-20)]"
    },
    py: {
      none: "",
      1: "py-[var(--spacing-1)]",
      2: "py-[var(--spacing-2)]",
      3: "py-[var(--spacing-3)]",
      4: "py-[var(--spacing-4)]",
      6: "py-[var(--spacing-6)]",
      8: "py-[var(--spacing-8)]",
      12: "py-[var(--spacing-12)]",
      16: "py-[var(--spacing-16)]",
      20: "py-[var(--spacing-20)]"
    },
    m: {
      none: "",
      1: "m-[var(--spacing-1)]",
      2: "m-[var(--spacing-2)]",
      3: "m-[var(--spacing-3)]",
      4: "m-[var(--spacing-4)]",
      6: "m-[var(--spacing-6)]",
      8: "m-[var(--spacing-8)]",
      12: "m-[var(--spacing-12)]",
      16: "m-[var(--spacing-16)]",
      20: "m-[var(--spacing-20)]"
    },
    mx: {
      none: "",
      1: "mx-[var(--spacing-1)]",
      2: "mx-[var(--spacing-2)]",
      3: "mx-[var(--spacing-3)]",
      4: "mx-[var(--spacing-4)]",
      6: "mx-[var(--spacing-6)]",
      8: "mx-[var(--spacing-8)]",
      12: "mx-[var(--spacing-12)]",
      16: "mx-[var(--spacing-16)]",
      20: "mx-[var(--spacing-20)]"
    },
    my: {
      none: "",
      1: "my-[var(--spacing-1)]",
      2: "my-[var(--spacing-2)]",
      3: "my-[var(--spacing-3)]",
      4: "my-[var(--spacing-4)]",
      6: "my-[var(--spacing-6)]",
      8: "my-[var(--spacing-8)]",
      12: "my-[var(--spacing-12)]",
      16: "my-[var(--spacing-16)]",
      20: "my-[var(--spacing-20)]"
    },
    width: {
      auto: "w-auto",
      full: "w-full",
      fit: "w-fit",
      screen: "w-screen"
    },
    height: {
      auto: "h-auto",
      full: "h-full",
      fit: "h-fit",
      screen: "h-screen"
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
      "2xl": "shadow-2xl",
      inner: "shadow-inner",
      outline: "shadow-outline",
      default: "shadow"
    },
    display: {
      block: "block",
      inline: "inline",
      "inline-block": "inline-block",
      flex: "flex",
      "inline-flex": "inline-flex",
      grid: "grid"
    },
    background: {
      none: "",
      default: "bg-background",
      subtle: "bg-muted/30",
      card: "bg-card",
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground"
    }
  },
  defaultVariants: {
    paddingY: 12,
    p: "none",
    px: "none",
    py: "none",
    m: "none",
    mx: "none",
    my: "none",
    width: "full",
    height: "auto",
    shadow: "none",
    display: "block",
    background: "none"
  }
}), lr = q.forwardRef(
  ({
    as: e = "section",
    className: t,
    paddingY: r,
    p: n,
    px: s,
    py: i,
    m: d,
    mx: l,
    my: u,
    width: m,
    height: f,
    shadow: x,
    display: v,
    background: b,
    children: y,
    ...N
  }, h) => /* @__PURE__ */ a(
    e,
    {
      ref: h,
      className: o(
        dr({
          paddingY: r,
          p: n,
          px: s,
          py: i,
          m: d,
          mx: l,
          my: u,
          width: m,
          height: f,
          shadow: x,
          display: v,
          background: b
        }),
        t
      ),
      ...N,
      children: y
    }
  )
);
lr.displayName = "Section";
const cr = L("items-center justify-center", {
  variants: {
    inline: {
      true: "inline-flex",
      false: "flex"
    },
    height: {
      auto: "h-auto",
      full: "h-full",
      screen: "h-screen"
    },
    p: {
      none: "",
      1: "p-[var(--spacing-1)]",
      2: "p-[var(--spacing-2)]",
      3: "p-[var(--spacing-3)]",
      4: "p-[var(--spacing-4)]",
      6: "p-[var(--spacing-6)]",
      8: "p-[var(--spacing-8)]",
      12: "p-[var(--spacing-12)]",
      16: "p-[var(--spacing-16)]",
      20: "p-[var(--spacing-20)]"
    },
    px: {
      none: "",
      1: "px-[var(--spacing-1)]",
      2: "px-[var(--spacing-2)]",
      3: "px-[var(--spacing-3)]",
      4: "px-[var(--spacing-4)]",
      6: "px-[var(--spacing-6)]",
      8: "px-[var(--spacing-8)]",
      12: "px-[var(--spacing-12)]",
      16: "px-[var(--spacing-16)]",
      20: "px-[var(--spacing-20)]"
    },
    py: {
      none: "",
      1: "py-[var(--spacing-1)]",
      2: "py-[var(--spacing-2)]",
      3: "py-[var(--spacing-3)]",
      4: "py-[var(--spacing-4)]",
      6: "py-[var(--spacing-6)]",
      8: "py-[var(--spacing-8)]",
      12: "py-[var(--spacing-12)]",
      16: "py-[var(--spacing-16)]",
      20: "py-[var(--spacing-20)]"
    },
    m: {
      none: "",
      1: "m-[var(--spacing-1)]",
      2: "m-[var(--spacing-2)]",
      3: "m-[var(--spacing-3)]",
      4: "m-[var(--spacing-4)]",
      6: "m-[var(--spacing-6)]",
      8: "m-[var(--spacing-8)]",
      12: "m-[var(--spacing-12)]",
      16: "m-[var(--spacing-16)]",
      20: "m-[var(--spacing-20)]"
    },
    mx: {
      none: "",
      1: "mx-[var(--spacing-1)]",
      2: "mx-[var(--spacing-2)]",
      3: "mx-[var(--spacing-3)]",
      4: "mx-[var(--spacing-4)]",
      6: "mx-[var(--spacing-6)]",
      8: "mx-[var(--spacing-8)]",
      12: "mx-[var(--spacing-12)]",
      16: "mx-[var(--spacing-16)]",
      20: "mx-[var(--spacing-20)]"
    },
    my: {
      none: "",
      1: "my-[var(--spacing-1)]",
      2: "my-[var(--spacing-2)]",
      3: "my-[var(--spacing-3)]",
      4: "my-[var(--spacing-4)]",
      6: "my-[var(--spacing-6)]",
      8: "my-[var(--spacing-8)]",
      12: "my-[var(--spacing-12)]",
      16: "my-[var(--spacing-16)]",
      20: "my-[var(--spacing-20)]"
    },
    width: {
      auto: "w-auto",
      full: "w-full",
      fit: "w-fit",
      screen: "w-screen"
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
      "2xl": "shadow-2xl",
      inner: "shadow-inner",
      outline: "shadow-outline",
      default: "shadow"
    },
    display: {
      block: "block",
      inline: "inline",
      "inline-block": "inline-block",
      flex: "flex",
      "inline-flex": "inline-flex",
      grid: "grid"
    }
  },
  defaultVariants: {
    inline: !1,
    height: "auto",
    p: "none",
    px: "none",
    py: "none",
    m: "none",
    mx: "none",
    my: "none",
    width: "auto",
    shadow: "none",
    display: "flex"
  }
}), ur = q.forwardRef(
  ({
    as: e = "div",
    className: t,
    inline: r,
    height: n,
    p: s,
    px: i,
    py: d,
    m: l,
    mx: u,
    my: m,
    width: f,
    shadow: x,
    display: v,
    children: b,
    ...y
  }, N) => /* @__PURE__ */ a(
    e,
    {
      ref: N,
      className: o(
        cr({
          inline: r,
          height: n,
          p: s,
          px: i,
          py: d,
          m: l,
          mx: u,
          my: m,
          width: f,
          shadow: x,
          display: v
        }),
        t
      ),
      ...y,
      children: b
    }
  )
);
ur.displayName = "Center";
const pr = L("relative w-full overflow-hidden", {
  variants: {
    ratio: {
      "1/1": "aspect-square",
      "4/3": "aspect-[4/3]",
      "16/9": "aspect-video",
      "21/9": "aspect-[21/9]",
      "3/4": "aspect-[3/4]",
      "9/16": "aspect-[9/16]"
    }
  },
  defaultVariants: {
    ratio: "16/9"
  }
}), mr = q.forwardRef(({ as: e = "div", className: t, ratio: r, children: n, ...s }, i) => /* @__PURE__ */ a(
  e,
  {
    ref: i,
    className: o(pr({ ratio: r }), t),
    ...s,
    children: n
  }
));
mr.displayName = "LayoutAspectRatio";
const fr = L("bg-border shrink-0", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px h-full"
    },
    thickness: {
      1: "",
      2: ""
    },
    spacing: {
      none: "",
      2: "",
      4: "",
      6: ""
    }
  },
  compoundVariants: [
    // Thickness for horizontal
    {
      orientation: "horizontal",
      thickness: 1,
      className: "h-px"
    },
    {
      orientation: "horizontal",
      thickness: 2,
      className: "h-[2px]"
    },
    // Thickness for vertical
    {
      orientation: "vertical",
      thickness: 1,
      className: "w-px"
    },
    {
      orientation: "vertical",
      thickness: 2,
      className: "w-[2px]"
    },
    // Spacing for horizontal
    {
      orientation: "horizontal",
      spacing: 2,
      className: "my-[var(--spacing-2)]"
    },
    {
      orientation: "horizontal",
      spacing: 4,
      className: "my-[var(--spacing-4)]"
    },
    {
      orientation: "horizontal",
      spacing: 6,
      className: "my-[var(--spacing-6)]"
    },
    // Spacing for vertical
    {
      orientation: "vertical",
      spacing: 2,
      className: "mx-[var(--spacing-2)]"
    },
    {
      orientation: "vertical",
      spacing: 4,
      className: "mx-[var(--spacing-4)]"
    },
    {
      orientation: "vertical",
      spacing: 6,
      className: "mx-[var(--spacing-6)]"
    }
  ],
  defaultVariants: {
    orientation: "horizontal",
    thickness: 1,
    spacing: "none"
  }
}), gr = q.forwardRef(
  ({
    as: e = "div",
    className: t,
    orientation: r,
    thickness: n,
    spacing: s,
    ...i
  }, d) => {
    const l = typeof n == "string" ? Number(n) : n, u = typeof s == "string" && s !== "none" ? Number(s) : s;
    return /* @__PURE__ */ a(
      e,
      {
        ref: d,
        role: "separator",
        "aria-orientation": r,
        className: o(
          fr({
            orientation: r,
            thickness: l,
            spacing: u
          }),
          t
        ),
        ...i
      }
    );
  }
);
gr.displayName = "Divider";
const vr = L("flex flex-wrap", {
  variants: {
    gap: {
      0: "gap-0",
      1: "gap-[var(--spacing-1)]",
      2: "gap-[var(--spacing-2)]",
      3: "gap-[var(--spacing-3)]",
      4: "gap-[var(--spacing-4)]",
      6: "gap-[var(--spacing-6)]"
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline"
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      "space-between": "justify-between"
    },
    p: {
      none: "",
      1: "p-[var(--spacing-1)]",
      2: "p-[var(--spacing-2)]",
      3: "p-[var(--spacing-3)]",
      4: "p-[var(--spacing-4)]",
      6: "p-[var(--spacing-6)]",
      8: "p-[var(--spacing-8)]",
      12: "p-[var(--spacing-12)]",
      16: "p-[var(--spacing-16)]",
      20: "p-[var(--spacing-20)]"
    },
    px: {
      none: "",
      1: "px-[var(--spacing-1)]",
      2: "px-[var(--spacing-2)]",
      3: "px-[var(--spacing-3)]",
      4: "px-[var(--spacing-4)]",
      6: "px-[var(--spacing-6)]",
      8: "px-[var(--spacing-8)]",
      12: "px-[var(--spacing-12)]",
      16: "px-[var(--spacing-16)]",
      20: "px-[var(--spacing-20)]"
    },
    py: {
      none: "",
      1: "py-[var(--spacing-1)]",
      2: "py-[var(--spacing-2)]",
      3: "py-[var(--spacing-3)]",
      4: "py-[var(--spacing-4)]",
      6: "py-[var(--spacing-6)]",
      8: "py-[var(--spacing-8)]",
      12: "py-[var(--spacing-12)]",
      16: "py-[var(--spacing-16)]",
      20: "py-[var(--spacing-20)]"
    },
    m: {
      none: "",
      1: "m-[var(--spacing-1)]",
      2: "m-[var(--spacing-2)]",
      3: "m-[var(--spacing-3)]",
      4: "m-[var(--spacing-4)]",
      6: "m-[var(--spacing-6)]",
      8: "m-[var(--spacing-8)]",
      12: "m-[var(--spacing-12)]",
      16: "m-[var(--spacing-16)]",
      20: "m-[var(--spacing-20)]"
    },
    mx: {
      none: "",
      1: "mx-[var(--spacing-1)]",
      2: "mx-[var(--spacing-2)]",
      3: "mx-[var(--spacing-3)]",
      4: "mx-[var(--spacing-4)]",
      6: "mx-[var(--spacing-6)]",
      8: "mx-[var(--spacing-8)]",
      12: "mx-[var(--spacing-12)]",
      16: "mx-[var(--spacing-16)]",
      20: "mx-[var(--spacing-20)]"
    },
    my: {
      none: "",
      1: "my-[var(--spacing-1)]",
      2: "my-[var(--spacing-2)]",
      3: "my-[var(--spacing-3)]",
      4: "my-[var(--spacing-4)]",
      6: "my-[var(--spacing-6)]",
      8: "my-[var(--spacing-8)]",
      12: "my-[var(--spacing-12)]",
      16: "my-[var(--spacing-16)]",
      20: "my-[var(--spacing-20)]"
    },
    width: {
      auto: "w-auto",
      full: "w-full",
      fit: "w-fit",
      screen: "w-screen"
    },
    height: {
      auto: "h-auto",
      full: "h-full",
      fit: "h-fit",
      screen: "h-screen"
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
      "2xl": "shadow-2xl",
      inner: "shadow-inner",
      outline: "shadow-outline",
      default: "shadow"
    },
    display: {
      block: "block",
      inline: "inline",
      "inline-block": "inline-block",
      flex: "flex",
      "inline-flex": "inline-flex",
      grid: "grid"
    }
  },
  defaultVariants: {
    gap: 2,
    align: "start",
    justify: "start",
    p: "none",
    px: "none",
    py: "none",
    m: "none",
    mx: "none",
    my: "none",
    width: "auto",
    height: "auto",
    shadow: "none",
    display: "flex"
  }
}), hr = q.forwardRef(
  ({
    as: e = "div",
    className: t,
    gap: r,
    align: n,
    justify: s,
    p: i,
    px: d,
    py: l,
    m: u,
    mx: m,
    my: f,
    width: x,
    height: v,
    shadow: b,
    display: y,
    children: N,
    ...h
  }, C) => {
    const g = [0, 1, 2, 3, 4, 6];
    let S;
    if (r !== void 0) {
      const T = Number(F(r));
      S = g.includes(T) ? T : void 0;
    }
    return /* @__PURE__ */ a(
      e,
      {
        ref: C,
        className: o(
          vr({
            gap: S,
            align: n,
            justify: s,
            p: i,
            px: d,
            py: l,
            m: u,
            mx: m,
            my: f,
            width: x,
            height: v,
            shadow: b,
            display: y
          }),
          t
        ),
        ...h,
        children: N
      }
    );
  }
);
hr.displayName = "Wrap";
const br = L("", {
  variants: {
    horizontal: {
      true: "-mx-[var(--spacing-4)]",
      false: ""
    },
    vertical: {
      true: "-my-[var(--spacing-4)]",
      false: ""
    },
    all: {
      true: "-m-[var(--spacing-4)]",
      false: ""
    }
  },
  defaultVariants: {
    horizontal: !1,
    vertical: !1,
    all: !1
  }
}), xr = q.forwardRef(
  ({
    as: e = "div",
    className: t,
    horizontal: r,
    vertical: n,
    all: s,
    children: i,
    ...d
  }, l) => /* @__PURE__ */ a(
    e,
    {
      ref: l,
      className: o(br({ horizontal: r, vertical: n, all: s }), t),
      ...d,
      children: i
    }
  )
);
xr.displayName = "Bleed";
const yr = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, disabled: i, ...d }) => /* @__PURE__ */ p(Q, { gap: "2", className: "group", "data-disabled": i, children: [
  e && /* @__PURE__ */ p(Z, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    Ka,
    {
      ...d,
      disabled: i,
      className: o(t && "border-destructive", s)
    }
  ),
  t && /* @__PURE__ */ a(V, { variant: "body-sm", className: "text-destructive", children: t }),
  r && !t && /* @__PURE__ */ a(V, { variant: "body-sm", className: "text-muted-foreground", children: r })
] }));
yr.displayName = "FormMultiselect";
function ls({
  label: e,
  variant: t = "default",
  size: r = "md",
  className: n = "",
  onDelete: s,
  onClick: i
}) {
  const d = {
    xs: "px-2 py-0.5 h-4 min-w-[2rem]",
    sm: "px-2.5 py-1 h-5 min-w-[3rem]",
    md: "px-3 py-1.5 h-6 min-w-[4rem]",
    lg: "px-4 py-2 h-8 min-w-[5rem]"
  }, l = {
    xs: "text-[10px]",
    sm: "text-[11px]",
    md: "text-body-xs",
    lg: "text-body-sm"
  }, u = {
    // Semantic variants
    success: "bg-success-lightest text-success-dark dark:bg-success-dark dark:text-success-lightest border border-success-lighter dark:border-success",
    danger: "bg-destructive-lightest text-destructive-dark dark:bg-destructive-dark dark:text-destructive-lightest border border-destructive-lighter dark:border-destructive",
    warning: "bg-secondary-lightest text-secondary-dark dark:bg-secondary-dark/80 dark:text-secondary-lightest border border-secondary-lighter dark:border-secondary-light",
    info: "bg-primary-lightest text-primary-dark dark:bg-primary-dark dark:text-primary-lightest border border-primary-lighter dark:border-primary-light",
    // Theme variants
    primary: "bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground border border-primary-dark",
    secondary: "bg-secondary-lighter text-secondary-dark dark:bg-secondary-dark dark:text-secondary-lighter border border-secondary-light dark:border-secondary",
    default: "bg-muted text-muted-foreground dark:bg-muted dark:text-muted-foreground border border-border",
    neutral: "bg-muted text-muted-foreground dark:bg-muted dark:text-foreground/80 border border-border",
    // Status variants
    active: "bg-success-lightest text-success-dark dark:bg-success-dark dark:text-success-lightest border border-success-lighter dark:border-success",
    inactive: "bg-muted text-muted-foreground dark:bg-muted dark:text-muted-foreground border border-border",
    pending: "bg-secondary-lightest text-secondary-dark dark:bg-secondary-dark/80 dark:text-secondary-lightest border border-secondary-lighter dark:border-secondary-light",
    approved: "bg-success-lightest text-success-dark dark:bg-success-dark dark:text-success-lightest border border-success-lighter dark:border-success",
    rejected: "bg-destructive-lightest text-destructive-dark dark:bg-destructive-dark dark:text-destructive-lightest border border-destructive-lighter dark:border-destructive",
    cancelled: "bg-destructive-lightest text-destructive-dark dark:bg-destructive-dark dark:text-destructive-lightest border border-destructive-lighter dark:border-destructive",
    completed: "bg-success-lightest text-success-dark dark:bg-success-dark dark:text-success-lightest border border-success-lighter dark:border-success",
    processing: "bg-primary-lightest text-primary-dark dark:bg-primary-dark dark:text-primary-lightest border border-primary-lighter dark:border-primary-light",
    draft: "bg-muted text-muted-foreground dark:bg-muted dark:text-foreground/80 border border-border",
    urgent: "bg-destructive-lightest text-destructive-dark dark:bg-destructive-dark dark:text-destructive-lightest border border-destructive dark:border-destructive font-semibold"
  }, m = "inline-flex items-center justify-center rounded-md font-medium uppercase tracking-wider transition-colors whitespace-nowrap", f = i || s ? "cursor-pointer hover:opacity-80" : "", x = `${m} ${d[r]} ${u[t]} ${f} ${n}`;
  return /* @__PURE__ */ p(Ot, { className: x, onClick: i, children: [
    /* @__PURE__ */ a("span", { className: l[r], children: e }),
    s && /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        onClick: (v) => {
          v.stopPropagation(), s();
        },
        className: "ml-1.5 -mr-1 hover:opacity-70 transition-opacity",
        "aria-label": "Remove",
        children: /* @__PURE__ */ p(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              /* @__PURE__ */ a("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
              /* @__PURE__ */ a("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
            ]
          }
        )
      }
    )
  ] });
}
function cs({
  icon: e,
  size: t = 20,
  className: r = "",
  color: n,
  onClick: s
}) {
  const i = n || "var(--foreground)";
  return s ? /* @__PURE__ */ a(
    "span",
    {
      role: "button",
      tabIndex: 0,
      style: { display: "inline-flex" },
      className: r,
      onClick: s,
      onKeyDown: (d) => {
        (d.key === "Enter" || d.key === " ") && s();
      },
      children: /* @__PURE__ */ a(e, { size: t, color: i })
    }
  ) : /* @__PURE__ */ a(e, { size: t, className: r, color: i });
}
const ae = L(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-all duration-200 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        // Primary Variants
        default: "bg-primary text-primary-foreground hover:bg-primary-dark active:bg-primary-dark focus:border-primary focus:ring-2 focus:ring-ring/20 shadow-sm hover:shadow-md",
        primary: "bg-primary text-primary-foreground hover:bg-primary-dark active:bg-primary-dark focus:border-primary focus:ring-2 focus:ring-ring/20 shadow-sm hover:shadow-md",
        "primary-outline": "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground active:bg-primary-dark active:border-primary-dark focus:ring-2 focus:ring-ring/20",
        "primary-ghost": "text-primary hover:bg-primary-lightest dark:hover:bg-muted active:bg-primary-lighter dark:active:bg-muted/80 focus:bg-primary-lightest dark:focus:bg-muted focus:ring-2 focus:ring-ring/20",
        // Secondary Variants
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-dark active:bg-secondary-dark focus:border-secondary focus:shadow-[0_0_0_3px_rgba(255,121,96,0.1)] shadow-sm hover:shadow-md",
        "secondary-outline": "border-2 border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-secondary-foreground active:bg-secondary-dark active:border-secondary-dark focus:shadow-[0_0_0_3px_rgba(255,121,96,0.1)]",
        "secondary-ghost": "text-secondary hover:bg-secondary-lightest active:bg-secondary-lighter focus:bg-secondary-lightest focus:shadow-[0_0_0_3px_rgba(255,121,96,0.1)]",
        // Semantic Variants
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive-dark active:bg-destructive-dark focus:shadow-[0_0_0_3px_rgba(209,113,113,0.1)] shadow-sm hover:shadow-md",
        success: "bg-success text-success-foreground hover:bg-success-dark active:bg-success-dark focus:shadow-[0_0_0_3px_rgba(2,177,107,0.1)] shadow-sm hover:shadow-md",
        // Neutral Variants
        outline: "border-2 border-border bg-transparent text-foreground hover:bg-muted active:bg-muted/80 dark:active:bg-muted/60 focus:border-primary focus:ring-2 focus:ring-ring/20",
        ghost: "text-foreground hover:bg-muted active:bg-muted/80 dark:active:bg-muted/60 focus:bg-muted focus:ring-2 focus:ring-ring/10",
        link: "text-primary underline-offset-4 hover:underline focus:underline"
      },
      size: {
        xxs: "h-7 px-2 py-2 text-xs rounded-md",
        // Extra Extra Small
        xs: "h-8 px-2 py-2 text-xs rounded-md",
        // Extra Small
        sm: "h-9 px-4 py-2 text-sm rounded-md",
        // Small
        md: "h-11 px-6 py-3 text-base rounded-md",
        // Medium (default)
        lg: "h-12 px-8 py-3 text-lg rounded-lg",
        // Large
        icon: "size-10 rounded-md",
        "icon-sm": "size-9 rounded-md",
        "icon-lg": "size-12 rounded-lg"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
function wr({ className: e }) {
  return /* @__PURE__ */ a(
    Rt,
    {
      "aria-hidden": "true",
      className: o("animate-spin text-current", e)
    }
  );
}
function Be({
  className: e,
  variant: t,
  size: r,
  asChild: n = !1,
  loading: s = !1,
  loadingText: i,
  ...d
}) {
  const l = n ? J : "button", u = d.disabled || s;
  return /* @__PURE__ */ a(
    l,
    {
      "data-slot": "button",
      "data-loading": s ? "" : void 0,
      "aria-busy": s || void 0,
      "aria-disabled": u || void 0,
      disabled: n ? void 0 : u,
      className: o(ae({ variant: t, size: r, className: e })),
      ...d,
      children: s ? /* @__PURE__ */ p(st, { children: [
        /* @__PURE__ */ a(wr, { className: "size-4" }),
        i ?? d.children
      ] }) : d.children
    }
  );
}
function he({
  ...e
}) {
  return /* @__PURE__ */ a(we.Root, { "data-slot": "popover", ...e });
}
function be({
  ...e
}) {
  return /* @__PURE__ */ a(we.Trigger, { "data-slot": "popover-trigger", ...e });
}
function Ye({
  className: e,
  align: t = "center",
  sideOffset: r = 4,
  ...n
}) {
  return /* @__PURE__ */ a(we.Portal, { children: /* @__PURE__ */ a(
    we.Content,
    {
      "data-slot": "popover-content",
      align: t,
      sideOffset: r,
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...n
    }
  ) });
}
function us({
  ...e
}) {
  return /* @__PURE__ */ a(we.Anchor, { "data-slot": "popover-anchor", ...e });
}
function Ze({
  loading: e = !1,
  apiError: t,
  emptyText: r = "No Options",
  isSearchable: n = !0,
  searchFn: s,
  searchPlaceholder: i = "Search...",
  children: d,
  ...l
}) {
  return /* @__PURE__ */ a(X.Root, { "data-slot": "select", ...l, children: c.Children.map(d, (u) => {
    if (c.isValidElement(u) && u.type === De) {
      const m = u;
      return c.cloneElement(m, {
        loading: e,
        apiError: t,
        emptyText: r,
        isSearchable: n,
        searchFn: s,
        searchPlaceholder: i,
        children: m.props.children || d
      });
    }
    return u;
  }) });
}
function ps({
  ...e
}) {
  return /* @__PURE__ */ a(X.Group, { "data-slot": "select-group", ...e });
}
function Qe({
  ...e
}) {
  return /* @__PURE__ */ a(X.Value, { "data-slot": "select-value", ...e });
}
function et({
  className: e,
  size: t = "md",
  children: r,
  ...n
}) {
  const s = t === "sm" ? "h-9 text-sm" : t === "lg" ? "h-12 text-lg" : "h-11 text-base";
  return /* @__PURE__ */ p(
    X.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: o(
        "border-input data-[placeholder]:text-muted-foreground/70 [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        s,
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ a(X.Icon, { asChild: !0, children: /* @__PURE__ */ a(Le, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function De({
  className: e,
  children: t,
  position: r = "popper",
  loading: n = !1,
  apiError: s,
  emptyText: i = "No Options",
  isSearchable: d = !0,
  searchFn: l,
  searchPlaceholder: u = "Search...",
  ...m
}) {
  const [f, x] = c.useState(""), v = jt(f, 300), b = c.useRef(null);
  c.useEffect(() => {
    l && v !== void 0 && l(v);
  }, [v, l]);
  const y = c.useMemo(() => {
    if (!d || l || !f)
      return t;
    const h = f.toLowerCase();
    return c.Children.toArray(t).filter((C) => {
      if (c.isValidElement(C) && C.type === je) {
        const g = C, S = g.props.children;
        return (typeof S == "string" ? S : String(g.props.value || "")).toLowerCase().includes(h);
      }
      return !0;
    });
  }, [t, f, d, l]), N = c.Children.count(y) > 0;
  return c.useEffect(() => {
    if (!d) return;
    const h = setTimeout(() => {
      b.current?.focus();
    }, 100);
    return () => clearTimeout(h);
  }, [d]), /* @__PURE__ */ a(X.Portal, { children: /* @__PURE__ */ p(
    X.Content,
    {
      "data-slot": "select-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-[min(400px,var(--radix-select-content-available-height))] min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: r,
      onCloseAutoFocus: (h) => h.preventDefault(),
      ...m,
      children: [
        /* @__PURE__ */ a(Nr, {}),
        d && /* @__PURE__ */ a("div", { className: "p-2 border-b sticky top-0 bg-popover z-10", children: /* @__PURE__ */ p("div", { className: "relative", children: [
          /* @__PURE__ */ a(Ae, { className: "absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
          /* @__PURE__ */ a(
            "input",
            {
              ref: b,
              type: "text",
              className: "w-full rounded-md border border-input bg-transparent py-1.5 pl-8 pr-2 text-sm outline-none focus:ring-2 focus:ring-ring/50",
              placeholder: u,
              value: f,
              onChange: (h) => x(h.target.value),
              onClick: (h) => h.stopPropagation(),
              onKeyDown: (h) => {
                h.key !== "Escape" && h.key !== "Tab" && h.stopPropagation();
              },
              onBlur: (h) => {
                const C = h.relatedTarget, g = h.currentTarget.closest(
                  '[data-slot="select-content"]'
                );
                g && C && g.contains(C) && h.currentTarget.focus();
              }
            }
          )
        ] }) }),
        /* @__PURE__ */ a(
          X.Viewport,
          {
            className: o(
              "p-1",
              r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: n ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground", children: /* @__PURE__ */ a(de, {}) }) : s?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6", children: /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                className: "text-destructive underline text-sm px-2 py-1 rounded hover:bg-destructive/10",
                onClick: s.onClick,
                children: s.text || "Error"
              }
            ) }) : N ? y : /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground gap-2", children: [
              /* @__PURE__ */ a(le, { className: "size-8 opacity-60" }),
              /* @__PURE__ */ a("span", { className: "text-xs", children: f ? "No matches found" : i })
            ] })
          }
        ),
        /* @__PURE__ */ a(kr, {})
      ]
    }
  ) });
}
function ms({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    X.Label,
    {
      "data-slot": "select-label",
      className: o("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...t
    }
  );
}
function je({
  className: e,
  children: t,
  itemText: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    X.Item,
    {
      "data-slot": "select-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(X.ItemIndicator, { children: /* @__PURE__ */ a(ge, { className: "size-4" }) }) }),
        r ? /* @__PURE__ */ a("span", { className: "sr-only", children: /* @__PURE__ */ a(X.ItemText, { children: r }) }) : /* @__PURE__ */ a(X.ItemText, { children: t }),
        r ? t : null
      ]
    }
  );
}
function fs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    X.Separator,
    {
      "data-slot": "select-separator",
      className: o("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Nr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    X.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: o(
        "flex cursor-pointer items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(pa, { className: "size-4" })
    }
  );
}
function kr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    X.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: o(
        "flex cursor-pointer items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(Le, { className: "size-4" })
    }
  );
}
const Cr = L(
  "file:text-foreground placeholder:text-muted-foreground/70 selection:bg-primary selection:text-primary-foreground flex w-full min-w-0 rounded-md border px-3 py-2 text-base bg-input-background transition-all duration-200 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input hover:border-muted-foreground dark:hover:border-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20",
        error: "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20",
        success: "border-success focus:border-success focus:ring-2 focus:ring-success/20"
      },
      size: {
        sm: "h-9 text-sm",
        md: "h-11 text-base",
        lg: "h-12 text-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
), oe = c.forwardRef(
  ({ className: e, variant: t, size: r = "md", type: n, ...s }, i) => /* @__PURE__ */ a(
    "input",
    {
      placeholder: "name",
      type: n,
      "data-slot": "input",
      className: o(Cr({ variant: t, size: r }), e),
      ref: i,
      ...s
    }
  )
);
oe.displayName = "Input";
const $t = (/* @__PURE__ */ new Date()).getFullYear(), Sr = $t - 100, zr = $t + 100, Mr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function Ee(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function wt(e) {
  return Ee(e) ? e : void 0;
}
function Nt(e) {
  if (!Array.isArray(e))
    return;
  const t = e.filter(Ee);
  return t.length > 0 ? t : void 0;
}
function kt(e) {
  if (!e || typeof e != "object")
    return;
  const t = e, r = Ee(t.from) ? t.from : void 0, n = Ee(t.to) ? t.to : void 0;
  if (!(!r && !n))
    return { from: r, to: n };
}
function Ir(e) {
  const { month: t, fromYear: r, toYear: n, onMonthChange: s } = e, i = t.getFullYear(), d = t.getMonth(), l = c.useMemo(() => {
    const m = [];
    for (let f = n; f >= r; f -= 1)
      m.push(f);
    return m;
  }, [r, n]), u = (m) => {
    const f = Math.min(n, Math.max(r, m));
    s(new Date(f, d, 1));
  };
  return /* @__PURE__ */ p("div", { className: "border-b p-3 space-y-3", children: [
    /* @__PURE__ */ p("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: o(ae({ variant: "outline" }), "size-8 p-0"),
          onClick: () => u(i - 1),
          disabled: i <= r,
          "aria-label": "Previous year",
          children: /* @__PURE__ */ a(Ce, { className: "size-4" })
        }
      ),
      /* @__PURE__ */ p(
        Ze,
        {
          isSearchable: !1,
          value: String(i),
          onValueChange: (m) => u(Number(m)),
          children: [
            /* @__PURE__ */ a(
              et,
              {
                size: "sm",
                className: "h-8 min-w-36 flex-1",
                "aria-label": "Calendar year",
                children: /* @__PURE__ */ a(Qe, { placeholder: "Year" })
              }
            ),
            /* @__PURE__ */ a(De, { isSearchable: !1, className: "max-h-64", children: l.map((m) => /* @__PURE__ */ a(je, { value: String(m), children: m }, m)) })
          ]
        }
      ),
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: o(ae({ variant: "outline" }), "size-8 p-0"),
          onClick: () => u(i + 1),
          disabled: i >= n,
          "aria-label": "Next year",
          children: /* @__PURE__ */ a(ve, { className: "size-4" })
        }
      )
    ] }),
    /* @__PURE__ */ p(
      Ze,
      {
        isSearchable: !1,
        value: String(d),
        onValueChange: (m) => s(new Date(i, Number(m), 1)),
        children: [
          /* @__PURE__ */ a(
            et,
            {
              size: "sm",
              className: "h-8 min-w-36 flex-1",
              "aria-label": "Calendar month",
              children: /* @__PURE__ */ a(Qe, { placeholder: "Month" })
            }
          ),
          /* @__PURE__ */ a(De, { className: "max-h-64", isSearchable: !1, children: Mr.map((m, f) => /* @__PURE__ */ a(je, { value: String(f), children: m }, m)) })
        ]
      }
    )
  ] });
}
function gt(e, t) {
  return e != null && t != null ? { fromYear: e, toYear: t } : e != null ? { fromYear: e, toYear: e + 100 } : t != null ? { fromYear: t - 100, toYear: t } : { fromYear: Sr, toYear: zr };
}
function vt(e) {
  const { className: t, month: r, fromYear: n, toYear: s, onMonthChange: i, children: d } = e;
  return /* @__PURE__ */ p(
    Ye,
    {
      align: "start",
      className: "p-0 w-auto bg-background border",
      onPointerDownOutside: (l) => {
        const u = l.target;
        (u.closest('[role="option"]') || u.closest('[role="listbox"]') || u.closest('[role="presentation"]')) && l.preventDefault();
      },
      children: [
        /* @__PURE__ */ a(
          Ir,
          {
            month: r,
            fromYear: n,
            toYear: s,
            onMonthChange: i
          }
        ),
        /* @__PURE__ */ a("div", { className: o("p-3", t), children: d })
      ]
    }
  );
}
const ht = (e) => ({
  ...e,
  months: "flex flex-col sm:flex-row gap-2",
  month: "flex flex-col gap-4",
  caption: o("hidden", e?.caption),
  caption_label: "text-sm font-medium",
  nav: "flex items-center gap-1",
  nav_button: o(
    ae({ variant: "outline" }),
    "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
  ),
  nav_button_previous: "absolute left-1",
  nav_button_next: "absolute right-1",
  table: "w-full border-collapse space-x-1",
  head_row: "flex",
  head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
  row: "flex w-full mt-2",
  cell: o(
    "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
    "[&:has([aria-selected])]:rounded-md"
  ),
  day: o(
    ae({ variant: "ghost" }),
    "size-8 p-0 font-normal aria-selected:opacity-100"
  ),
  day_range_start: "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
  day_range_end: "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
  day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
  day_today: "bg-accent text-accent-foreground",
  day_outside: "day-outside text-muted-foreground aria-selected:text-muted-foreground",
  day_disabled: "text-muted-foreground opacity-50",
  day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
  day_hidden: "invisible"
});
function Rr(e) {
  const t = wt(e.selected), [r, n] = c.useState(!1), [s, i] = c.useState(
    t
  ), [d, l] = c.useState(
    t ?? /* @__PURE__ */ new Date()
  );
  c.useEffect(() => {
    const g = wt(e.selected);
    i(g), g && l(g);
  }, [e.selected]);
  const {
    className: u,
    classNames: m,
    showOutsideDays: f = !0,
    fromYear: x,
    toYear: v,
    inputProps: b,
    onSelect: y,
    ...N
  } = e, h = gt(x, v), C = s ? s.toLocaleDateString() : void 0;
  return /* @__PURE__ */ p(he, { open: r, onOpenChange: n, children: [
    /* @__PURE__ */ a(be, { className: "w-full flex-1", children: /* @__PURE__ */ a(
      oe,
      {
        readOnly: !0,
        value: C,
        ...b,
        placeholder: b?.placeholder || "Select date",
        onClick: (g) => {
          n(!0), b?.onClick?.(g);
        }
      }
    ) }),
    /* @__PURE__ */ a(
      vt,
      {
        className: u,
        month: d,
        fromYear: h.fromYear,
        toYear: h.toYear,
        onMonthChange: l,
        children: /* @__PURE__ */ a(
          Se,
          {
            showOutsideDays: f,
            month: d,
            onMonthChange: l,
            fromYear: h.fromYear,
            toYear: h.toYear,
            selected: s,
            onSelect: (g) => {
              i(g), g && l(g), n(!1), y?.(g);
            },
            classNames: ht(m),
            components: {
              IconLeft: ({ className: g, ...S }) => /* @__PURE__ */ a(Ce, { className: o("size-4", g), ...S }),
              IconRight: ({ className: g, ...S }) => /* @__PURE__ */ a(ve, { className: o("size-4", g), ...S })
            },
            ...N
          }
        )
      }
    )
  ] });
}
function _r(e) {
  const t = Nt(e.selected), [r, n] = c.useState(!1), [s, i] = c.useState(
    t
  ), [d, l] = c.useState(
    t?.[0] ?? /* @__PURE__ */ new Date()
  );
  c.useEffect(() => {
    const g = Nt(e.selected);
    i(g), g?.[0] && l(g[0]);
  }, [e.selected]);
  const {
    className: u,
    classNames: m,
    showOutsideDays: f = !0,
    fromYear: x,
    toYear: v,
    inputProps: b,
    onSelect: y,
    ...N
  } = e, h = gt(x, v), C = s && s.length > 0 ? s.map((g) => g.toLocaleDateString()).join(", ") : void 0;
  return /* @__PURE__ */ p(he, { open: r, onOpenChange: n, children: [
    /* @__PURE__ */ a(be, { className: "w-full flex-1", children: /* @__PURE__ */ a(
      oe,
      {
        readOnly: !0,
        value: C,
        ...b,
        placeholder: b?.placeholder || "Select date(s)",
        onClick: (g) => {
          n(!0), b?.onClick?.(g);
        }
      }
    ) }),
    /* @__PURE__ */ a(
      vt,
      {
        className: u,
        month: d,
        fromYear: h.fromYear,
        toYear: h.toYear,
        onMonthChange: l,
        children: /* @__PURE__ */ a(
          Se,
          {
            showOutsideDays: f,
            month: d,
            onMonthChange: l,
            fromYear: h.fromYear,
            toYear: h.toYear,
            selected: s,
            onSelect: (g) => {
              i(g), g?.[0] && l(g[0]), n(!1), y?.(g);
            },
            classNames: ht(m),
            components: {
              IconLeft: ({ className: g, ...S }) => /* @__PURE__ */ a(Ce, { className: o("size-4", g), ...S }),
              IconRight: ({ className: g, ...S }) => /* @__PURE__ */ a(ve, { className: o("size-4", g), ...S })
            },
            ...N
          }
        )
      }
    )
  ] });
}
function Tr(e) {
  const t = kt(e.selected), [r, n] = c.useState(!1), [s, i] = c.useState(
    t
  ), [d, l] = c.useState(
    t?.from ?? /* @__PURE__ */ new Date()
  ), [u, m] = c.useState();
  c.useEffect(() => {
    const _ = kt(e.selected);
    i(_), _?.from && l(_.from);
  }, [e.selected]);
  const {
    className: f,
    classNames: x,
    showOutsideDays: v = !0,
    fromYear: b,
    toYear: y,
    inputProps: N,
    onSelect: h,
    ...C
  } = e, g = gt(b, y);
  let S;
  s?.from && s?.to && (S = s.from?.toLocaleDateString() + " - " + s.to?.toLocaleDateString());
  const T = s?.from && !s?.to && u ? { from: s.from, to: u } : null;
  return /* @__PURE__ */ p(he, { open: r, onOpenChange: n, children: [
    /* @__PURE__ */ a(be, { className: "w-full flex-1", children: /* @__PURE__ */ a(
      oe,
      {
        readOnly: !0,
        value: S || void 0,
        ...N,
        placeholder: N?.placeholder || "Select date range",
        onClick: (_) => {
          n(!0), N?.onClick?.(_);
        }
      }
    ) }),
    /* @__PURE__ */ a(
      vt,
      {
        className: f,
        month: d,
        fromYear: g.fromYear,
        toYear: g.toYear,
        onMonthChange: l,
        children: /* @__PURE__ */ a(
          Se,
          {
            showOutsideDays: v,
            month: d,
            onMonthChange: l,
            fromYear: g.fromYear,
            toYear: g.toYear,
            selected: s,
            onSelect: (_, j) => {
              if (s?.from && s?.to && j) {
                const A = { from: j, to: void 0 };
                i(A), h?.(A);
                return;
              }
              i(_), j && l(j), h?.(_), _?.from && _?.to && n(!1);
            },
            onDayMouseEnter: (_) => m(_),
            onDayMouseLeave: () => m(void 0),
            modifiers: {
              hoveredRange: T ? [T] : []
            },
            modifiersClassNames: {
              hoveredRange: "bg-accent/50 text-accent-foreground"
            },
            classNames: ht(x),
            components: {
              IconLeft: ({ className: _, ...j }) => /* @__PURE__ */ a(Ce, { className: o("size-4", _), ...j }),
              IconRight: ({ className: _, ...j }) => /* @__PURE__ */ a(ve, { className: o("size-4", _), ...j })
            },
            ...C
          }
        )
      }
    )
  ] });
}
function Xe(e) {
  return e.mode === "multiple" ? /* @__PURE__ */ a(
    _r,
    {
      ...e
    }
  ) : e.mode === "range" ? /* @__PURE__ */ a(Tr, { ...e }) : /* @__PURE__ */ a(Rr, { ...e });
}
const Pr = L(
  "resize-none placeholder:text-muted-foreground/70 selection:bg-primary selection:text-primary-foreground flex min-h-16 w-full rounded-md border px-3 py-2 text-base bg-input-background transition-all duration-200 outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input hover:border-muted-foreground dark:hover:border-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20",
        error: "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20",
        success: "border-success focus:border-success focus:ring-2 focus:ring-success/20"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Vt = c.forwardRef(
  ({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
    "textarea",
    {
      "data-slot": "textarea",
      className: o(Pr({ variant: t }), e),
      ref: n,
      ...r
    }
  )
);
Vt.displayName = "Textarea";
function Dr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Je.Root,
    {
      "data-slot": "radio-group",
      className: o("grid gap-3", e),
      ...t
    }
  );
}
function jr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Je.Item,
    {
      "data-slot": "radio-group-item",
      className: o(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        Je.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ a(Oe, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
function Er({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(
    ye.Root,
    {
      "data-slot": "scroll-area",
      className: o("relative", e),
      ...r,
      children: [
        /* @__PURE__ */ a(
          ye.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: t
          }
        ),
        /* @__PURE__ */ a(Ar, {}),
        /* @__PURE__ */ a(ye.Corner, {})
      ]
    }
  );
}
function Ar({
  className: e,
  orientation: t = "vertical",
  ...r
}) {
  return /* @__PURE__ */ a(
    ye.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: t,
      className: o(
        "flex touch-none p-px transition-colors select-none",
        t === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...r,
      children: /* @__PURE__ */ a(
        ye.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
const Lr = L(
  "flex w-full min-w-0 rounded-md border bg-input-background text-foreground transition-all duration-200 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input hover:border-muted-foreground dark:hover:border-muted-foreground focus-within:border-primary focus-within:ring-2 focus-within:ring-ring/20",
        error: "border-destructive focus-within:border-destructive focus-within:ring-2 focus-within:ring-destructive/20",
        success: "border-success focus-within:border-success focus-within:ring-2 focus-within:ring-success/20"
      },
      size: {
        sm: "h-9 text-sm",
        md: "h-11 text-base",
        lg: "h-12 text-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
), Or = ({
  value: e,
  onChange: t,
  options: r,
  iconComponent: n,
  disabled: s,
  className: i,
  "aria-label": d
}) => {
  const [l, u] = c.useState(!1), [m, f] = c.useState(""), x = c.useRef(null), v = c.useMemo(() => {
    if (!m) return r;
    const b = m.toLowerCase();
    return r.filter(
      (y) => y.label.toLowerCase().includes(b)
    );
  }, [r, m]);
  return c.useEffect(() => {
    if (l) {
      const b = setTimeout(() => {
        x.current?.focus();
      }, 0);
      return () => clearTimeout(b);
    } else
      f("");
  }, [l]), /* @__PURE__ */ p(he, { open: l, onOpenChange: u, children: [
    /* @__PURE__ */ a(be, { asChild: !0, disabled: s, children: /* @__PURE__ */ p(
      "button",
      {
        type: "button",
        className: o(
          "flex items-center gap-0.5 outline-none focus:ring-2 focus:ring-ring/20 rounded-sm",
          s && "cursor-not-allowed opacity-50",
          i
        ),
        "aria-label": d || "Select country",
        "aria-expanded": l,
        children: [
          /* @__PURE__ */ a(n, { country: e }),
          /* @__PURE__ */ a($e, { className: "size-3 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ p(
      Ye,
      {
        className: "w-64 p-0",
        align: "start",
        side: "bottom",
        sideOffset: 8,
        children: [
          /* @__PURE__ */ a("div", { className: "p-2 border-b sticky top-0 bg-popover z-10", children: /* @__PURE__ */ p("div", { className: "relative", children: [
            /* @__PURE__ */ a(Ae, { className: "absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
            /* @__PURE__ */ a(
              "input",
              {
                ref: x,
                type: "text",
                className: "w-full rounded-md border border-input bg-transparent py-1.5 pl-8 pr-2 text-sm outline-none focus:ring-2 focus:ring-ring/50 placeholder:text-muted-foreground/70",
                placeholder: "Search countries...",
                value: m,
                onChange: (b) => f(b.target.value),
                onKeyDown: (b) => {
                  b.key === "Enter" && (b.preventDefault(), v.length === 1 && (t(v[0].value), u(!1)));
                }
              }
            )
          ] }) }),
          /* @__PURE__ */ a(Er, { className: "h-64", children: /* @__PURE__ */ a("div", { className: "p-1", children: v.length === 0 ? /* @__PURE__ */ a("div", { className: "py-6 text-center text-sm text-muted-foreground", children: "No countries found" }) : v.map((b) => {
            const y = b.value === e, N = b.value ? Tt[b.value] : null;
            return /* @__PURE__ */ p(
              "button",
              {
                type: "button",
                className: o(
                  "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none cursor-pointer",
                  "hover:bg-accent hover:text-accent-foreground",
                  "focus:bg-accent focus:text-accent-foreground",
                  y && "bg-accent/50"
                ),
                onClick: () => {
                  t(b.value), u(!1);
                },
                children: [
                  /* @__PURE__ */ a("span", { className: "flex items-center justify-center size-5 overflow-hidden rounded-sm bg-muted shrink-0", children: N ? /* @__PURE__ */ a(N, { title: b.label }) : /* @__PURE__ */ a("span", { className: "text-xs", children: "🌐" }) }),
                  /* @__PURE__ */ a("span", { className: "truncate", children: b.label }),
                  y && /* @__PURE__ */ a("span", { className: "ml-auto text-primary", children: "✓" })
                ]
              },
              b.value || "empty"
            );
          }) }) })
        ]
      }
    )
  ] });
}, Ft = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "input",
  {
    ref: r,
    className: o(
      "flex-1 bg-transparent outline-none placeholder:text-muted-foreground/70 px-2",
      e
    ),
    ...t
  }
));
Ft.displayName = "PhoneInputField";
const $r = ({
  country: e,
  countryName: t
}) => {
  const r = e ? Tt[e] : null;
  return /* @__PURE__ */ a("span", { className: "flex items-center justify-center size-5 overflow-hidden rounded-sm bg-muted", children: r ? /* @__PURE__ */ a(r, { title: t ?? "" }) : /* @__PURE__ */ a("span", { className: "text-xs text-muted-foreground", children: "🌐" }) });
}, Bt = c.forwardRef(
  ({
    value: e,
    onChange: t,
    defaultCountry: r = "US",
    placeholder: n = "Enter phone number",
    disabled: s = !1,
    className: i,
    variant: d,
    size: l = "md",
    international: u = !0,
    country: m,
    onCountryChange: f,
    withCountryCallingCode: x = !0,
    inputProps: v,
    ...b
  }, y) => /* @__PURE__ */ a(
    "div",
    {
      ref: y,
      className: o(
        Lr({ variant: d, size: l }),
        "items-center px-3 gap-2",
        s && "opacity-50 cursor-not-allowed",
        i
      ),
      "data-slot": "phone-input",
      ...b,
      children: /* @__PURE__ */ a(
        Ta,
        {
          international: u,
          defaultCountry: r,
          country: m,
          value: e,
          onChange: (N) => t?.(N),
          onCountryChange: f,
          withCountryCallingCode: x,
          placeholder: n,
          disabled: s,
          countrySelectComponent: Or,
          inputComponent: Ft,
          flagComponent: $r,
          className: "flex items-center w-full",
          numberInputProps: v
        }
      )
    }
  )
);
Bt.displayName = "PhoneInput";
const Vr = L(
  "hmlet-time-picker relative flex w-full min-w-0 items-center rounded-md border bg-input-background text-base transition-all duration-200 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input hover:border-muted-foreground dark:hover:border-muted-foreground focus-within:border-primary focus-within:ring-2 focus-within:ring-ring/20",
        error: "border-destructive focus-within:border-destructive focus-within:ring-2 focus-within:ring-destructive/20",
        success: "border-success focus-within:border-success focus-within:ring-2 focus-within:ring-success/20"
      },
      size: {
        sm: "h-9 text-sm px-3",
        md: "h-11 text-base px-3",
        lg: "h-12 text-lg px-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
function Ct(e) {
  const [t, r] = e.split(":").map(Number);
  return t * 60 + r;
}
function Fr(e, t) {
  if (!t) return e;
  const [r, n] = e.split(":").map(Number), s = r >= 12 ? "PM" : "AM";
  return `${r % 12 || 12}:${n.toString().padStart(2, "0")} ${s}`;
}
function me(e) {
  return e.toString().padStart(2, "0");
}
const tt = 250, Y = tt / 2, ee = 90, Ie = 62, Br = 32;
function Yr({
  hour: e,
  minute: t,
  mode: r,
  use12Hours: n,
  period: s,
  onSelectHour: i,
  onSelectMinute: d,
  onModeChange: l,
  onPeriodChange: u,
  minTime: m,
  maxTime: f
}) {
  const x = c.useRef(null), v = c.useRef(!1), b = c.useRef({ x: 0, y: 0 }), y = m ? Ct(m) : 0, N = f ? Ct(f) : 1439;
  function h(z) {
    if (!x.current) return 0;
    const k = x.current.getBoundingClientRect(), R = k.left + k.width / 2, I = k.top + k.height / 2, O = z.clientX - R, ze = z.clientY - I;
    let Ke = Math.atan2(ze, O) * (180 / Math.PI) + 90;
    return Ke < 0 && (Ke += 360), Ke;
  }
  function C(z) {
    if (r === "hours")
      if (n) {
        let k = Math.round(z / 30) % 12;
        k === 0 && (k = 12);
        let R = k;
        s === "AM" ? R = k === 12 ? 0 : k : R = k === 12 ? 12 : k + 12;
        const I = R * 60 + t;
        I >= y && I <= N && i(R);
      } else {
        const k = g(), R = (ee + Ie) / 2;
        let I;
        k < R ? (I = Math.round(z / 30) % 12, I = I === 0 ? 0 : I + 12) : (I = Math.round(z / 30) % 12, I === 0 && (I = 12));
        const O = I * 60 + t;
        O >= y && O <= N && i(I);
      }
    else {
      const k = Math.round(z / 6) % 60, R = e * 60 + k;
      R >= y && R <= N && d(k);
    }
  }
  function g() {
    if (!x.current) return ee;
    const z = x.current.getBoundingClientRect(), k = z.left + z.width / 2, R = z.top + z.height / 2, I = b.current.x - k, O = b.current.y - R;
    return Math.sqrt(I * I + O * O);
  }
  function S(z) {
    v.current = !0, b.current = { x: z.clientX, y: z.clientY };
    const k = h(z);
    C(k);
  }
  function T(z) {
    if (!v.current) return;
    b.current = { x: z.clientX, y: z.clientY };
    const k = h(z);
    C(k);
  }
  function _() {
    v.current && (v.current = !1, r === "hours" && l("minutes"));
  }
  let j, A;
  r === "hours" ? (j = (n ? e % 12 : e) % 12 * 30, !n && (e === 0 || e > 12) ? A = Ie : A = ee) : (j = t * 6, A = ee);
  const E = (j - 90) * Math.PI / 180, $ = Y + A * Math.cos(E), w = Y + A * Math.sin(E), M = [];
  if (n)
    for (let z = 1; z <= 12; z++) {
      const k = (z * 30 - 90) * Math.PI / 180;
      M.push({
        value: z,
        label: String(z),
        x: Y + ee * Math.cos(k),
        y: Y + ee * Math.sin(k),
        inner: !1
      });
    }
  else {
    for (let z = 1; z <= 12; z++) {
      const k = (z * 30 - 90) * Math.PI / 180;
      M.push({
        value: z,
        label: String(z),
        x: Y + ee * Math.cos(k),
        y: Y + ee * Math.sin(k),
        inner: !1
      });
    }
    for (let z = 0; z < 12; z++) {
      const k = z === 0 ? 0 : z + 12, R = (z * 30 - 90) * Math.PI / 180;
      M.push({
        value: k,
        label: me(k),
        x: Y + Ie * Math.cos(R),
        y: Y + Ie * Math.sin(R),
        inner: !0
      });
    }
  }
  const D = [];
  for (let z = 0; z < 12; z++) {
    const k = z * 5, R = (k * 6 - 90) * Math.PI / 180;
    D.push({
      value: k,
      label: me(k),
      x: Y + ee * Math.cos(R),
      y: Y + ee * Math.sin(R)
    });
  }
  const P = (z) => n ? e % 12 === z % 12 && (z !== 0 || e === 0 || e === 12) : e === z;
  return /* @__PURE__ */ p("div", { className: "flex flex-col items-center gap-3 p-4", children: [
    /* @__PURE__ */ p("div", { className: "flex items-center gap-1 text-2xl font-medium tabular-nums", children: [
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          onClick: () => l("hours"),
          className: o(
            "rounded px-2 py-1 transition-colors",
            r === "hours" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
          ),
          children: me(n ? e % 12 || 12 : e)
        }
      ),
      /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: ":" }),
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          onClick: () => l("minutes"),
          className: o(
            "rounded px-2 py-1 transition-colors",
            r === "minutes" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
          ),
          children: me(t)
        }
      ),
      n && /* @__PURE__ */ p("div", { className: "ml-2 flex flex-col text-xs gap-0.5", children: [
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: () => u("AM"),
            className: o(
              "rounded px-1.5 py-0.5 transition-colors",
              s === "AM" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground"
            ),
            children: "AM"
          }
        ),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: () => u("PM"),
            className: o(
              "rounded px-1.5 py-0.5 transition-colors",
              s === "PM" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground"
            ),
            children: "PM"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ p(
      "svg",
      {
        ref: x,
        width: tt,
        height: tt,
        className: "cursor-pointer select-none",
        onMouseDown: S,
        onMouseMove: T,
        onMouseUp: _,
        onMouseLeave: _,
        children: [
          /* @__PURE__ */ a(
            "circle",
            {
              cx: Y,
              cy: Y,
              r: Y - 2,
              className: "fill-muted/50"
            }
          ),
          /* @__PURE__ */ a(
            "circle",
            {
              cx: Y,
              cy: Y,
              r: 3,
              className: "fill-primary"
            }
          ),
          /* @__PURE__ */ a(
            "line",
            {
              x1: Y,
              y1: Y,
              x2: $,
              y2: w,
              strokeWidth: 2,
              className: "stroke-primary"
            }
          ),
          /* @__PURE__ */ a(
            "circle",
            {
              cx: $,
              cy: w,
              r: Br / 2,
              className: "fill-primary"
            }
          ),
          r === "hours" ? M.map(({ value: z, label: k, x: R, y: I, inner: O }) => {
            const ze = P(z);
            return /* @__PURE__ */ a(
              "text",
              {
                x: R,
                y: I,
                textAnchor: "middle",
                dominantBaseline: "central",
                className: o(
                  "pointer-events-none text-[13px]",
                  O ? "font-normal" : "font-medium",
                  ze ? "fill-primary-foreground" : "fill-foreground"
                ),
                children: k
              },
              `h-${z}-${O ? "inner" : "outer"}`
            );
          }) : D.map(({ value: z, label: k, x: R, y: I }) => /* @__PURE__ */ a(
            "text",
            {
              x: R,
              y: I,
              textAnchor: "middle",
              dominantBaseline: "central",
              className: o(
                "pointer-events-none text-[13px] font-medium",
                t === z ? "fill-primary-foreground" : "fill-foreground"
              ),
              children: k
            },
            `m-${z}`
          ))
        ]
      }
    )
  ] });
}
const Yt = c.forwardRef(
  ({
    className: e,
    variant: t = "default",
    size: r = "md",
    value: n,
    onChange: s,
    disabled: i,
    name: d,
    id: l,
    required: u,
    minTime: m,
    maxTime: f,
    placeholder: x = "Select time",
    use12Hours: v = !0
  }, b) => {
    const [y, N] = c.useState(!1), [h, C] = c.useState("hours"), g = c.useRef(null);
    c.useImperativeHandle(b, () => g.current);
    const S = n ? parseInt(n.split(":")[0], 10) : 0, T = n ? parseInt(n.split(":")[1], 10) : 0, [_, j] = c.useState(S), [A, E] = c.useState(T), [$, w] = c.useState(
      S >= 12 ? "PM" : "AM"
    );
    c.useEffect(() => {
      const I = n ? parseInt(n.split(":")[0], 10) : 0, O = n ? parseInt(n.split(":")[1], 10) : 0;
      j(I), E(O), w(I >= 12 ? "PM" : "AM");
    }, [n]), c.useEffect(() => {
      y && C("hours");
    }, [y]), c.useEffect(() => {
      function I(O) {
        g.current && !g.current.contains(O.target) && N(!1);
      }
      return document.addEventListener("mousedown", I), () => document.removeEventListener("mousedown", I);
    }, []), c.useEffect(() => {
      function I(O) {
        O.key === "Escape" && N(!1);
      }
      if (y)
        return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I);
    }, [y]);
    function M(I, O) {
      s?.(`${me(I)}:${me(O)}`);
    }
    function D(I) {
      j(I), M(I, A);
    }
    function P(I) {
      E(I), M(_, I);
    }
    function z(I) {
      w(I);
      let O = _;
      I === "AM" && _ >= 12 && (O = _ - 12), I === "PM" && _ < 12 && (O = _ + 12), j(O), M(O, A);
    }
    const k = (I) => {
      I.stopPropagation(), s?.(null);
    }, R = r === "sm" ? 14 : r === "lg" ? 18 : 16;
    return /* @__PURE__ */ p(
      "div",
      {
        ref: g,
        "data-slot": "time-picker",
        className: o("relative", i && "pointer-events-none opacity-50"),
        ...l ? { id: l } : {},
        children: [
          d && /* @__PURE__ */ a("input", { type: "hidden", name: d, value: n ?? "" }),
          u && !n && /* @__PURE__ */ a(
            "input",
            {
              tabIndex: -1,
              className: "absolute opacity-0 h-0 w-0",
              required: !0,
              value: "",
              onChange: () => {
              }
            }
          ),
          /* @__PURE__ */ p(
            "button",
            {
              type: "button",
              disabled: i,
              onClick: () => N((I) => !I),
              className: o(
                Vr({ variant: t, size: r }),
                "cursor-pointer select-none gap-2",
                e
              ),
              "aria-expanded": y,
              "aria-haspopup": "dialog",
              children: [
                /* @__PURE__ */ a(Te, { size: R, className: "shrink-0 text-muted-foreground" }),
                /* @__PURE__ */ a(
                  "span",
                  {
                    className: o(
                      "flex-1 text-left",
                      !n && "text-muted-foreground/70"
                    ),
                    children: n ? Fr(n, v) : x
                  }
                ),
                n ? /* @__PURE__ */ a(
                  "span",
                  {
                    role: "button",
                    tabIndex: 0,
                    onClick: k,
                    onKeyDown: (I) => {
                      (I.key === "Enter" || I.key === " ") && k(I);
                    },
                    className: "shrink-0 rounded-sm p-0.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
                    "aria-label": "Clear time",
                    children: /* @__PURE__ */ a(Ve, { size: R })
                  }
                ) : /* @__PURE__ */ a(
                  $e,
                  {
                    size: R,
                    className: o(
                      "shrink-0 text-muted-foreground transition-transform duration-200",
                      y && "rotate-180"
                    )
                  }
                )
              ]
            }
          ),
          y && /* @__PURE__ */ a(
            "div",
            {
              role: "dialog",
              "aria-label": "Select time",
              className: "absolute z-50 mt-1 rounded-md border border-input bg-popover text-popover-foreground shadow-md",
              children: /* @__PURE__ */ a(
                Yr,
                {
                  hour: _,
                  minute: A,
                  mode: h,
                  use12Hours: v,
                  period: $,
                  onSelectHour: D,
                  onSelectMinute: P,
                  onModeChange: C,
                  onPeriodChange: z,
                  minTime: m,
                  maxTime: f
                }
              )
            }
          )
        ]
      }
    );
  }
);
Yt.displayName = "TimePicker";
const Gt = L(
  "relative flex w-full min-w-0 items-center rounded-md border bg-input-background text-base transition-all duration-200 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input hover:border-muted-foreground dark:hover:border-muted-foreground focus-within:border-primary focus-within:ring-2 focus-within:ring-ring/20",
        error: "border-destructive focus-within:border-destructive focus-within:ring-2 focus-within:ring-destructive/20",
        success: "border-success focus-within:border-success focus-within:ring-2 focus-within:ring-success/20"
      },
      size: {
        sm: "h-9 text-sm px-3",
        md: "h-11 text-base px-3",
        lg: "h-12 text-lg px-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
function W(e) {
  return e.toString().padStart(2, "0");
}
function at(e, t, r) {
  if (!r) return `${W(e)}:${W(t)}`;
  const n = e >= 12 ? "PM" : "AM";
  return `${e % 12 || 12}:${W(t)} ${n}`;
}
function xe(e) {
  return e?.toLocaleDateString(void 0, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}
const rt = 220, G = rt / 2, te = 85, Re = 58, Gr = 28;
function nt({ hour: e, minute: t, use12Hours: r, onChange: n }) {
  const s = c.useRef(null), i = c.useRef(!1), d = c.useRef({ x: 0, y: 0 }), [l, u] = c.useState("hours"), [m, f] = c.useState(
    e >= 12 ? "PM" : "AM"
  );
  c.useEffect(() => {
    f(e >= 12 ? "PM" : "AM");
  }, [e]);
  function x(w) {
    if (!s.current) return 0;
    const M = s.current.getBoundingClientRect(), D = M.left + M.width / 2, P = M.top + M.height / 2, z = w.clientX - D, k = w.clientY - P;
    let R = Math.atan2(k, z) * (180 / Math.PI) + 90;
    return R < 0 && (R += 360), R;
  }
  function v() {
    if (!s.current) return te;
    const w = s.current.getBoundingClientRect(), M = w.left + w.width / 2, D = w.top + w.height / 2, P = d.current.x - M, z = d.current.y - D;
    return Math.sqrt(P * P + z * z);
  }
  function b(w) {
    if (l === "hours")
      if (r) {
        let M = Math.round(w / 30) % 12;
        M === 0 && (M = 12);
        let D = M;
        m === "AM" ? D = M === 12 ? 0 : M : D = M === 12 ? 12 : M + 12, n(D, t);
      } else {
        const M = v(), D = (te + Re) / 2;
        let P;
        M < D ? (P = Math.round(w / 30) % 12, P = P === 0 ? 0 : P + 12) : (P = Math.round(w / 30) % 12, P === 0 && (P = 12)), n(P, t);
      }
    else {
      const M = Math.round(w / 6) % 60;
      n(e, M);
    }
  }
  function y(w) {
    i.current = !0, d.current = { x: w.clientX, y: w.clientY }, b(x(w));
  }
  function N(w) {
    i.current && (d.current = { x: w.clientX, y: w.clientY }, b(x(w)));
  }
  function h() {
    i.current && (i.current = !1, l === "hours" && u("minutes"));
  }
  function C(w) {
    f(w);
    let M = e;
    w === "AM" && e >= 12 && (M = e - 12), w === "PM" && e < 12 && (M = e + 12), n(M, t);
  }
  let g, S;
  l === "hours" ? (g = (r ? e % 12 : e) % 12 * 30, !r && (e === 0 || e > 12) ? S = Re : S = te) : (g = t * 6, S = te);
  const T = (g - 90) * Math.PI / 180, _ = G + S * Math.cos(T), j = G + S * Math.sin(T), A = [];
  if (r)
    for (let w = 1; w <= 12; w++) {
      const M = (w * 30 - 90) * Math.PI / 180;
      A.push({
        value: w,
        label: String(w),
        x: G + te * Math.cos(M),
        y: G + te * Math.sin(M),
        inner: !1
      });
    }
  else {
    for (let w = 1; w <= 12; w++) {
      const M = (w * 30 - 90) * Math.PI / 180;
      A.push({
        value: w,
        label: String(w),
        x: G + te * Math.cos(M),
        y: G + te * Math.sin(M),
        inner: !1
      });
    }
    for (let w = 0; w < 12; w++) {
      const M = w === 0 ? 0 : w + 12, D = (w * 30 - 90) * Math.PI / 180;
      A.push({
        value: M,
        label: W(M),
        x: G + Re * Math.cos(D),
        y: G + Re * Math.sin(D),
        inner: !0
      });
    }
  }
  const E = [];
  for (let w = 0; w < 12; w++) {
    const M = w * 5, D = (M * 6 - 90) * Math.PI / 180;
    E.push({
      value: M,
      label: W(M),
      x: G + te * Math.cos(D),
      y: G + te * Math.sin(D)
    });
  }
  const $ = (w) => r ? e % 12 === w % 12 && (w !== 0 || e === 0 || e === 12) : e === w;
  return /* @__PURE__ */ p("div", { className: "flex flex-col items-center gap-2", children: [
    /* @__PURE__ */ p("div", { className: "flex items-center gap-1 text-xl font-medium tabular-nums", children: [
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          onClick: () => u("hours"),
          className: o(
            "rounded px-1.5 py-0.5 transition-colors text-lg",
            l === "hours" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
          ),
          children: W(r ? e % 12 || 12 : e)
        }
      ),
      /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: ":" }),
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          onClick: () => u("minutes"),
          className: o(
            "rounded px-1.5 py-0.5 transition-colors text-lg",
            l === "minutes" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
          ),
          children: W(t)
        }
      ),
      r && /* @__PURE__ */ p("div", { className: "ml-1.5 flex flex-col text-[10px] gap-0.5", children: [
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: () => C("AM"),
            className: o(
              "rounded px-1 py-0.5 transition-colors",
              m === "AM" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground"
            ),
            children: "AM"
          }
        ),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: () => C("PM"),
            className: o(
              "rounded px-1 py-0.5 transition-colors",
              m === "PM" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground"
            ),
            children: "PM"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ p(
      "svg",
      {
        ref: s,
        width: rt,
        height: rt,
        className: "cursor-pointer select-none",
        onMouseDown: y,
        onMouseMove: N,
        onMouseUp: h,
        onMouseLeave: h,
        children: [
          /* @__PURE__ */ a(
            "circle",
            {
              cx: G,
              cy: G,
              r: G - 2,
              className: "fill-muted/50"
            }
          ),
          /* @__PURE__ */ a(
            "circle",
            {
              cx: G,
              cy: G,
              r: 3,
              className: "fill-primary"
            }
          ),
          /* @__PURE__ */ a(
            "line",
            {
              x1: G,
              y1: G,
              x2: _,
              y2: j,
              strokeWidth: 2,
              className: "stroke-primary"
            }
          ),
          /* @__PURE__ */ a(
            "circle",
            {
              cx: _,
              cy: j,
              r: Gr / 2,
              className: "fill-primary"
            }
          ),
          l === "hours" ? A.map(({ value: w, label: M, x: D, y: P, inner: z }) => {
            const k = $(w);
            return /* @__PURE__ */ a(
              "text",
              {
                x: D,
                y: P,
                textAnchor: "middle",
                dominantBaseline: "central",
                className: o(
                  "pointer-events-none text-[12px]",
                  z ? "font-normal" : "font-medium",
                  k ? "fill-primary-foreground" : "fill-foreground"
                ),
                children: M
              },
              `h-${w}-${z ? "i" : "o"}`
            );
          }) : E.map(({ value: w, label: M, x: D, y: P }) => /* @__PURE__ */ a(
            "text",
            {
              x: D,
              y: P,
              textAnchor: "middle",
              dominantBaseline: "central",
              className: o(
                "pointer-events-none text-[12px] font-medium",
                t === w ? "fill-primary-foreground" : "fill-foreground"
              ),
              children: M
            },
            `m-${w}`
          ))
        ]
      }
    )
  ] });
}
const Ut = {
  months: "flex flex-col sm:flex-row gap-2",
  month: "flex flex-col gap-4",
  caption: "flex justify-center pt-1 relative items-center w-full",
  caption_label: "text-sm font-medium",
  nav: "flex items-center gap-1",
  nav_button: o(
    ae({ variant: "outline" }),
    "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
  ),
  nav_button_previous: "absolute left-1",
  nav_button_next: "absolute right-1",
  table: "w-full border-collapse space-x-1",
  head_row: "flex",
  head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
  row: "flex w-full mt-2",
  cell: o(
    "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
    "[&:has([aria-selected])]:rounded-md"
  ),
  day: o(
    ae({ variant: "ghost" }),
    "size-8 p-0 font-normal aria-selected:opacity-100"
  ),
  day_range_start: "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
  day_range_end: "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
  day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
  day_today: "bg-accent text-accent-foreground",
  day_outside: "day-outside text-muted-foreground aria-selected:text-muted-foreground",
  day_disabled: "text-muted-foreground opacity-50",
  day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
  day_hidden: "invisible"
}, Ht = {
  IconLeft: ({ className: e, ...t }) => /* @__PURE__ */ a(Ce, { className: o("size-4", e), ...t }),
  IconRight: ({ className: e, ...t }) => /* @__PURE__ */ a(ve, { className: o("size-4", e), ...t })
};
function Ur({
  className: e,
  variant: t = "default",
  size: r = "md",
  value: n,
  onChange: s,
  disabled: i,
  name: d,
  id: l,
  required: u,
  placeholder: m = "Select date & time",
  use12Hours: f = !0,
  calendarProps: x
}) {
  const [v, b] = c.useState(!1), [y, N] = c.useState("date"), h = n?.date, C = n?.hour ?? 0, g = n?.minute ?? 0;
  function S(E) {
    E && (s?.({ date: E, hour: C, minute: g }), N("time"));
  }
  function T(E, $) {
    s?.({ date: h ?? /* @__PURE__ */ new Date(), hour: E, minute: $ });
  }
  function _(E) {
    E.stopPropagation(), E.preventDefault(), s?.(null);
  }
  const j = n ? `${xe(n.date)}, ${at(n.hour, n.minute, f)}` : null, A = r === "sm" ? 14 : r === "lg" ? 18 : 16;
  return /* @__PURE__ */ p(he, { open: v, onOpenChange: b, children: [
    /* @__PURE__ */ a(be, { asChild: !0, disabled: i, children: /* @__PURE__ */ p(
      "button",
      {
        type: "button",
        disabled: i,
        className: o(
          Gt({ variant: t, size: r }),
          "cursor-pointer select-none gap-2",
          i && "pointer-events-none opacity-50",
          e
        ),
        "aria-expanded": v,
        "aria-haspopup": "dialog",
        ...l ? { id: l } : {},
        children: [
          /* @__PURE__ */ a(
            Pe,
            {
              size: A,
              className: "shrink-0 text-muted-foreground"
            }
          ),
          /* @__PURE__ */ a(
            "span",
            {
              className: o(
                "flex-1 text-left truncate",
                !j && "text-muted-foreground/70"
              ),
              children: j ?? m
            }
          ),
          n ? /* @__PURE__ */ a(
            "span",
            {
              role: "button",
              tabIndex: 0,
              onClick: _,
              onKeyDown: (E) => {
                (E.key === "Enter" || E.key === " ") && _(E);
              },
              className: "shrink-0 rounded-sm p-0.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
              "aria-label": "Clear",
              children: /* @__PURE__ */ a(Ve, { size: A })
            }
          ) : /* @__PURE__ */ a(
            $e,
            {
              size: A,
              className: o(
                "shrink-0 text-muted-foreground transition-transform duration-200",
                v && "rotate-180"
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ p(Ye, { align: "start", className: "w-auto p-0 bg-popover border", children: [
      d && /* @__PURE__ */ a(
        "input",
        {
          type: "hidden",
          name: d,
          value: n ? `${n.date.toISOString().split("T")[0]}T${W(n.hour)}:${W(n.minute)}` : ""
        }
      ),
      u && !n && /* @__PURE__ */ a(
        "input",
        {
          tabIndex: -1,
          className: "absolute opacity-0 h-0 w-0",
          required: !0,
          value: "",
          onChange: () => {
          }
        }
      ),
      /* @__PURE__ */ p("div", { className: "flex border-b border-input", children: [
        /* @__PURE__ */ p(
          "button",
          {
            type: "button",
            onClick: () => N("date"),
            className: o(
              "flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors",
              y === "date" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"
            ),
            children: [
              /* @__PURE__ */ a(Pe, { size: 14 }),
              "Date"
            ]
          }
        ),
        /* @__PURE__ */ p(
          "button",
          {
            type: "button",
            onClick: () => N("time"),
            className: o(
              "flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors",
              y === "time" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"
            ),
            children: [
              /* @__PURE__ */ a(Te, { size: 14 }),
              "Time"
            ]
          }
        )
      ] }),
      y === "date" ? /* @__PURE__ */ a(
        Se,
        {
          mode: "single",
          showOutsideDays: !0,
          selected: h,
          onSelect: S,
          className: "p-3",
          classNames: Ut,
          components: Ht,
          ...x
        }
      ) : /* @__PURE__ */ a("div", { className: "p-3", children: /* @__PURE__ */ a(
        nt,
        {
          hour: C,
          minute: g,
          use12Hours: f,
          onChange: T
        }
      ) })
    ] })
  ] });
}
function Hr({
  className: e,
  variant: t = "default",
  size: r = "md",
  value: n,
  onChange: s,
  disabled: i,
  name: d,
  id: l,
  required: u,
  placeholder: m = "Select date & time range",
  use12Hours: f = !0,
  calendarProps: x
}) {
  const [v, b] = c.useState(!1), [y, N] = c.useState(
    "date"
  ), [h, C] = c.useState(), g = n?.from?.date, S = n?.to?.date, T = n?.from?.hour ?? 0, _ = n?.from?.minute ?? 0, j = n?.to?.hour ?? 0, A = n?.to?.minute ?? 0, E = g || S ? { from: g, to: S } : void 0, $ = g && !S && h ? { from: g, to: h } : null;
  function w(R, I) {
    if (g && S && I) {
      s?.({
        from: { date: I, hour: 0, minute: 0 },
        to: void 0
      });
      return;
    }
    if (!R?.from) {
      s?.(null);
      return;
    }
    const O = {
      from: {
        date: R.from,
        hour: n?.from?.hour ?? 0,
        minute: n?.from?.minute ?? 0
      },
      to: R.to ? {
        date: R.to,
        hour: n?.to?.hour ?? 0,
        minute: n?.to?.minute ?? 0
      } : void 0
    };
    s?.(O), R.from && R.to && N("start-time");
  }
  function M(R, I) {
    s?.({
      from: {
        date: g ?? /* @__PURE__ */ new Date(),
        hour: R,
        minute: I
      },
      to: n?.to
    });
  }
  function D(R, I) {
    const O = {
      date: S ?? /* @__PURE__ */ new Date(),
      hour: R,
      minute: I
    };
    s?.({
      from: n?.from,
      to: O
    });
  }
  function P(R) {
    R.stopPropagation(), R.preventDefault(), s?.(null);
  }
  let z = null;
  if (n?.from) {
    const R = `${xe(n.from.date)}, ${at(n.from.hour, n.from.minute, f)}`;
    if (n?.to) {
      const I = `${xe(n.to.date)}, ${at(n.to.hour, n.to.minute, f)}`;
      z = `${R} – ${I}`;
    } else
      z = R;
  }
  const k = r === "sm" ? 14 : r === "lg" ? 18 : 16;
  return /* @__PURE__ */ p(he, { open: v, onOpenChange: b, children: [
    /* @__PURE__ */ a(be, { asChild: !0, disabled: i, children: /* @__PURE__ */ p(
      "button",
      {
        type: "button",
        disabled: i,
        className: o(
          Gt({ variant: t, size: r }),
          "cursor-pointer select-none gap-2",
          i && "pointer-events-none opacity-50",
          e
        ),
        "aria-expanded": v,
        "aria-haspopup": "dialog",
        ...l ? { id: l } : {},
        children: [
          /* @__PURE__ */ a(
            Pe,
            {
              size: k,
              className: "shrink-0 text-muted-foreground"
            }
          ),
          /* @__PURE__ */ a(
            "span",
            {
              className: o(
                "flex-1 text-left truncate",
                !z && "text-muted-foreground/70"
              ),
              children: z ?? m
            }
          ),
          n ? /* @__PURE__ */ a(
            "span",
            {
              role: "button",
              tabIndex: 0,
              onClick: P,
              onKeyDown: (R) => {
                (R.key === "Enter" || R.key === " ") && P(R);
              },
              className: "shrink-0 rounded-sm p-0.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
              "aria-label": "Clear",
              children: /* @__PURE__ */ a(Ve, { size: k })
            }
          ) : /* @__PURE__ */ a(
            $e,
            {
              size: k,
              className: o(
                "shrink-0 text-muted-foreground transition-transform duration-200",
                v && "rotate-180"
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ p(Ye, { align: "start", className: "w-auto p-0 bg-popover border", children: [
      d && /* @__PURE__ */ a(
        "input",
        {
          type: "hidden",
          name: d,
          value: n?.from && n?.to ? `${n.from.date.toISOString().split("T")[0]}T${W(n.from.hour)}:${W(n.from.minute)}/${n.to.date.toISOString().split("T")[0]}T${W(n.to.hour)}:${W(n.to.minute)}` : ""
        }
      ),
      u && !n?.from && /* @__PURE__ */ a(
        "input",
        {
          tabIndex: -1,
          className: "absolute opacity-0 h-0 w-0",
          required: !0,
          value: "",
          onChange: () => {
          }
        }
      ),
      /* @__PURE__ */ p("div", { className: "flex border-b border-input", children: [
        /* @__PURE__ */ p(
          "button",
          {
            type: "button",
            onClick: () => N("date"),
            className: o(
              "flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors",
              y === "date" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"
            ),
            children: [
              /* @__PURE__ */ a(Pe, { size: 14 }),
              "Dates"
            ]
          }
        ),
        /* @__PURE__ */ p(
          "button",
          {
            type: "button",
            onClick: () => N("start-time"),
            className: o(
              "flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors",
              y === "start-time" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"
            ),
            children: [
              /* @__PURE__ */ a(Te, { size: 14 }),
              "Start"
            ]
          }
        ),
        /* @__PURE__ */ p(
          "button",
          {
            type: "button",
            onClick: () => N("end-time"),
            className: o(
              "flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors",
              y === "end-time" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"
            ),
            children: [
              /* @__PURE__ */ a(Te, { size: 14 }),
              "End"
            ]
          }
        )
      ] }),
      y === "date" ? /* @__PURE__ */ a(
        Se,
        {
          mode: "range",
          numberOfMonths: 2,
          showOutsideDays: !0,
          selected: E,
          onSelect: w,
          onDayMouseEnter: (R) => C(R),
          onDayMouseLeave: () => C(void 0),
          modifiers: {
            hoveredRange: $ ? [$] : []
          },
          modifiersClassNames: {
            hoveredRange: "bg-accent/50 text-accent-foreground"
          },
          className: "p-3",
          classNames: Ut,
          components: Ht,
          ...x
        }
      ) : y === "start-time" ? /* @__PURE__ */ p("div", { className: "p-3", children: [
        /* @__PURE__ */ a("p", { className: "text-xs text-muted-foreground text-center mb-2", children: g ? xe(g) : "Select start date first" }),
        /* @__PURE__ */ a(
          nt,
          {
            hour: T,
            minute: _,
            use12Hours: f,
            onChange: M
          }
        )
      ] }) : /* @__PURE__ */ p("div", { className: "p-3", children: [
        /* @__PURE__ */ a("p", { className: "text-xs text-muted-foreground text-center mb-2", children: S ? xe(S) : "Select end date first" }),
        /* @__PURE__ */ a(
          nt,
          {
            hour: j,
            minute: A,
            use12Hours: f,
            onChange: D
          }
        )
      ] })
    ] })
  ] });
}
const Kt = c.forwardRef(
  (e) => e.mode === "range" ? /* @__PURE__ */ a(Hr, { ...e }) : /* @__PURE__ */ a(Ur, { ...e })
);
Kt.displayName = "DateTimePicker";
function Kr({
  className: e,
  containerClassName: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    Pa,
    {
      "data-slot": "input-otp",
      containerClassName: o(
        "flex items-center gap-2 has-disabled:opacity-50",
        t
      ),
      className: o("disabled:cursor-not-allowed", e),
      ...r
    }
  );
}
function gs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "input-otp-group",
      className: o("flex items-center gap-1", e),
      ...t
    }
  );
}
function vs({
  index: e,
  className: t,
  ...r
}) {
  const n = c.useContext(Da), { char: s, hasFakeCaret: i, isActive: d } = n?.slots[e] ?? {};
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": d,
      className: o(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center rounded-md border text-sm bg-input-background transition-all outline-none data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        t
      ),
      ...r,
      children: [
        s,
        i && /* @__PURE__ */ a("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ a("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function hs({ ...e }) {
  return /* @__PURE__ */ a("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ a(It, {}) });
}
const Xr = c.forwardRef(
  ({ label: e, error: t, helperText: r, icon: n, required: s, className: i, ...d }, l) => /* @__PURE__ */ p(Q, { gap: "2", children: [
    e && /* @__PURE__ */ p(Z, { children: [
      e,
      s && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    n ? /* @__PURE__ */ p(ft, { gap: "2", className: "relative", children: [
      /* @__PURE__ */ a(n, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" }),
      /* @__PURE__ */ a(
        oe,
        {
          ref: l,
          className: o("pl-10", t && "border-destructive", i),
          ...d
        }
      )
    ] }) : /* @__PURE__ */ a(
      oe,
      {
        ref: l,
        className: o(t && "border-destructive", i),
        ...d
      }
    ),
    t && /* @__PURE__ */ a(
      V,
      {
        variant: "body-sm",
        className: "text-destructive first-letter:uppercase",
        children: t
      }
    ),
    r && !t && /* @__PURE__ */ a(
      V,
      {
        variant: "body-sm",
        className: "text-muted-foreground first-letter:uppercase",
        children: r
      }
    )
  ] })
);
Xr.displayName = "FormInput";
const qr = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, ...i }, d) => /* @__PURE__ */ p(Q, { gap: "2", children: [
  e && /* @__PURE__ */ p(Z, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    Vt,
    {
      ref: d,
      className: o(t && "border-destructive", s),
      ...i
    }
  ),
  t && /* @__PURE__ */ a(
    V,
    {
      variant: "body-sm",
      className: "text-destructive first-letter:uppercase",
      children: t
    }
  ),
  r && !t && /* @__PURE__ */ a(
    V,
    {
      variant: "body-sm",
      className: "text-muted-foreground first-letter:uppercase",
      children: r
    }
  )
] }));
qr.displayName = "FormTextarea";
function Wr(e) {
  const t = [e.label, e.subtext].filter((r) => typeof r == "string").map((r) => r.trim()).filter(Boolean);
  return t.length > 0 ? t.join(" ") : void 0;
}
const Jr = c.forwardRef(
  (e, t) => {
    const {
      label: r,
      error: n,
      helperText: s,
      required: i,
      className: d,
      disabled: l,
      options: u,
      placeholder: m = "Select...",
      loading: f = !1,
      emptyText: x = "No options",
      apiError: v,
      value: b,
      onValueChange: y,
      ...N
    } = e;
    return /* @__PURE__ */ p(Q, { gap: "2", className: "group", "data-disabled": l, children: [
      r && /* @__PURE__ */ p(Z, { children: [
        r,
        i && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
      ] }),
      /* @__PURE__ */ p(
        Ze,
        {
          value: b,
          onValueChange: y,
          disabled: l,
          loading: f,
          emptyText: x,
          apiError: v,
          ...N,
          children: [
            /* @__PURE__ */ a(
              et,
              {
                ref: t,
                "aria-invalid": !!n,
                className: o(n && "border-destructive", d),
                children: /* @__PURE__ */ a(Qe, { placeholder: m })
              }
            ),
            /* @__PURE__ */ a(
              De,
              {
                hasOptions: u.length > 0,
                loading: f,
                apiError: v,
                emptyText: x,
                children: u.map((h) => /* @__PURE__ */ a(
                  je,
                  {
                    value: h.value,
                    disabled: h.disabled,
                    textValue: Wr(h),
                    itemText: h.label,
                    children: /* @__PURE__ */ p("div", { className: "flex min-w-0 flex-col", children: [
                      /* @__PURE__ */ a("span", { children: h.label }),
                      h.subtext ? /* @__PURE__ */ a("span", { className: "text-xs text-muted-foreground line-clamp-2", children: h.subtext }) : null
                    ] })
                  },
                  h.value
                ))
              }
            )
          ]
        }
      ),
      n && /* @__PURE__ */ a(
        V,
        {
          variant: "body-sm",
          className: "text-destructive first-letter:uppercase",
          children: n
        }
      ),
      s && !n && /* @__PURE__ */ a(
        V,
        {
          variant: "body-sm",
          className: "text-muted-foreground first-letter:uppercase",
          children: s
        }
      )
    ] });
  }
);
Jr.displayName = "FormSelect";
const Zr = c.forwardRef(
  (e, t) => {
    const {
      label: r,
      error: n,
      helperText: s,
      required: i,
      className: d,
      value: l,
      onChange: u,
      ...m
    } = e;
    return /* @__PURE__ */ p(Q, { gap: "2", children: [
      r && /* @__PURE__ */ p(Z, { children: [
        r,
        i && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
      ] }),
      /* @__PURE__ */ a("div", { ref: t, className: d, children: (() => {
        switch (e.mode) {
          case "multiple":
            return /* @__PURE__ */ a(
              Xe,
              {
                ...m,
                mode: "multiple",
                selected: l,
                onSelect: u
              }
            );
          case "range":
            return /* @__PURE__ */ a(
              Xe,
              {
                ...m,
                mode: "range",
                selected: l,
                onSelect: u
              }
            );
          default:
            return /* @__PURE__ */ a(
              Xe,
              {
                ...m,
                mode: "single",
                selected: l,
                onSelect: u
              }
            );
        }
      })() }),
      n && /* @__PURE__ */ a(
        V,
        {
          variant: "body-sm",
          className: "text-destructive first-letter:uppercase",
          children: n
        }
      ),
      s && !n && /* @__PURE__ */ a(
        V,
        {
          variant: "body-sm",
          className: "text-muted-foreground first-letter:uppercase",
          children: s
        }
      )
    ] });
  }
);
Zr.displayName = "FormCalendar";
const Qr = c.forwardRef((e, t) => {
  const {
    label: r,
    checkboxLabel: n,
    error: s,
    helperText: i,
    required: d,
    className: l,
    ...u
  } = e;
  return /* @__PURE__ */ p(Q, { gap: "2", children: [
    r && /* @__PURE__ */ p(Z, { children: [
      r,
      d && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ a(
      ut,
      {
        ref: t,
        label: n,
        variant: s ? "error" : u.variant,
        className: o(l),
        ...u
      }
    ),
    s && /* @__PURE__ */ a(
      V,
      {
        variant: "body-sm",
        className: "text-destructive first-letter:uppercase",
        children: s
      }
    ),
    i && !s && /* @__PURE__ */ a(
      V,
      {
        variant: "body-sm",
        className: "text-muted-foreground first-letter:uppercase",
        children: i
      }
    )
  ] });
});
Qr.displayName = "FormCheckbox";
const en = c.forwardRef((e, t) => {
  const { label: r, error: n, helperText: s, required: i, className: d, options: l, ...u } = e;
  return /* @__PURE__ */ p(Q, { gap: "2", children: [
    r && /* @__PURE__ */ p(Z, { children: [
      r,
      i && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ a(
      Dr,
      {
        ref: t,
        "aria-invalid": !!n,
        className: o(n && "ring-2 ring-destructive/20", d),
        ...u,
        children: l.map((m) => /* @__PURE__ */ p(ft, { as: "label", gap: "2", className: "items-center", children: [
          /* @__PURE__ */ a(
            jr,
            {
              value: m.value,
              disabled: m.disabled,
              "aria-label": typeof m.label == "string" ? m.label : void 0
            }
          ),
          /* @__PURE__ */ a("span", { children: m.label })
        ] }, m.value))
      }
    ),
    n && /* @__PURE__ */ a(
      V,
      {
        variant: "body-sm",
        className: "text-destructive first-letter:uppercase",
        children: n
      }
    ),
    s && !n && /* @__PURE__ */ a(
      V,
      {
        variant: "body-sm",
        className: "text-muted-foreground first-letter:uppercase",
        children: s
      }
    )
  ] });
});
en.displayName = "FormRadioGroup";
const tn = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, ...i }, d) => /* @__PURE__ */ p(Q, { gap: "2", children: [
  e && /* @__PURE__ */ p(Z, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    Bt,
    {
      ref: d,
      variant: t ? "error" : "default",
      className: o(s),
      ...i
    }
  ),
  t && /* @__PURE__ */ a(
    V,
    {
      variant: "body-sm",
      className: "text-destructive first-letter:uppercase",
      children: t
    }
  ),
  r && !t && /* @__PURE__ */ a(
    V,
    {
      variant: "body-sm",
      className: "text-muted-foreground first-letter:uppercase",
      children: r
    }
  )
] }));
tn.displayName = "FormPhoneInput";
const an = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, ...i }, d) => /* @__PURE__ */ p(Q, { gap: "2", children: [
  e && /* @__PURE__ */ p(Z, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    Yt,
    {
      ref: d,
      variant: t ? "error" : "default",
      className: o(s),
      ...i
    }
  ),
  t && /* @__PURE__ */ a(
    V,
    {
      variant: "body-sm",
      className: "text-destructive first-letter:uppercase",
      children: t
    }
  ),
  r && !t && /* @__PURE__ */ a(
    V,
    {
      variant: "body-sm",
      className: "text-muted-foreground first-letter:uppercase",
      children: r
    }
  )
] }));
an.displayName = "FormTimePicker";
const rn = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, ...i }, d) => /* @__PURE__ */ p(Q, { gap: "2", children: [
  e && /* @__PURE__ */ p(Z, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    Kt,
    {
      ref: d,
      variant: t ? "error" : "default",
      className: o(s),
      ...i
    }
  ),
  t && /* @__PURE__ */ a(
    V,
    {
      variant: "body-sm",
      className: "text-destructive first-letter:uppercase",
      children: t
    }
  ),
  r && !t && /* @__PURE__ */ a(
    V,
    {
      variant: "body-sm",
      className: "text-muted-foreground first-letter:uppercase",
      children: r
    }
  )
] }));
rn.displayName = "FormDateTimePicker";
function bs({
  label: e,
  error: t,
  helperText: r,
  required: n,
  className: s,
  ...i
}) {
  return /* @__PURE__ */ p(Q, { gap: "2", children: [
    e && /* @__PURE__ */ p(Z, { children: [
      e,
      n && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ a(
      Kr,
      {
        "aria-invalid": !!t,
        className: o(t && "border-destructive", s),
        ...i
      }
    ),
    t && /* @__PURE__ */ a(
      V,
      {
        variant: "body-sm",
        className: "text-destructive first-letter:uppercase",
        children: t
      }
    ),
    r && !t && /* @__PURE__ */ a(
      V,
      {
        variant: "body-sm",
        className: "text-muted-foreground first-letter:uppercase",
        children: r
      }
    )
  ] });
}
function nn(e) {
  return e ? Array.isArray(e) ? e : Array.from(e) : [];
}
function St(e) {
  const t = new DataTransfer();
  return e.forEach((r) => t.items.add(r)), t.files;
}
function zt(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(0)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
const on = c.forwardRef(
  ({
    label: e,
    error: t,
    helperText: r,
    required: n,
    className: s,
    maxFileSize: i = 5 * 1024 * 1024,
    // 5 MB
    multiple: d = !1,
    maxFiles: l,
    accept: u = "image/*",
    mobileVariant: m = !1,
    value: f,
    onChange: x,
    disabled: v,
    ...b
  }, y) => {
    const [N, h] = c.useState(
      []
    ), [C, g] = c.useState(""), S = c.useRef(null), T = c.useCallback(
      (w) => {
        S.current = w, typeof y == "function" ? y(w) : y && (y.current = w);
      },
      [y]
    );
    c.useEffect(() => {
      const w = nn(f);
      if (w.length === 0) {
        h((P) => (P.forEach((z) => URL.revokeObjectURL(z.url)), [])), g(""), S.current && (S.current.value = "");
        return;
      }
      const M = N.map((P) => P.file);
      w.length === M.length && w.every((P, z) => P === M[z]) || (N.forEach((P) => URL.revokeObjectURL(P.url)), h(w.map((P) => ({ file: P, url: URL.createObjectURL(P) }))));
    }, [f]), c.useEffect(() => () => {
      N.forEach((w) => URL.revokeObjectURL(w.url));
    }, []);
    function _(w) {
      const M = w.find((D) => D.size > i);
      return M ? `"${M.name}" exceeds the ${zt(i)} size limit.` : d && l !== void 0 && w.length > l ? `You can upload at most ${l} file${l === 1 ? "" : "s"}.` : "";
    }
    function j(w) {
      const M = w.target.files;
      if (!M || M.length === 0) return;
      const D = Array.from(M), P = _(D);
      if (g(P), P) {
        S.current && (S.current.value = "");
        return;
      }
      N.forEach((k) => URL.revokeObjectURL(k.url));
      const z = D.map((k) => ({
        file: k,
        url: URL.createObjectURL(k)
      }));
      h(z), x?.(St(D));
    }
    function A(w) {
      const M = N.filter((P, z) => z !== w);
      h((P) => (URL.revokeObjectURL(P[w].url), M));
      const D = St(M.map((P) => P.file));
      x?.(M.length > 0 ? D : null), S.current && (S.current.value = "");
    }
    const E = t || C, $ = v;
    return /* @__PURE__ */ p(Q, { gap: "2", children: [
      e && /* @__PURE__ */ p(Z, { children: [
        e,
        n && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
      ] }),
      /* @__PURE__ */ p(
        "label",
        {
          className: o(
            "flex flex-col items-center justify-center gap-2",
            "rounded-md border-2 border-dashed",
            "transition-colors cursor-pointer select-none",
            m ? "py-6 px-4" : "py-4 px-3",
            $ ? "cursor-not-allowed opacity-50 border-muted" : E ? "border-destructive bg-destructive/5 hover:bg-destructive/10" : "border-input bg-muted/30 hover:bg-muted/60",
            s
          ),
          children: [
            /* @__PURE__ */ a(
              ma,
              {
                className: o(
                  "text-muted-foreground",
                  m ? "size-6" : "size-5"
                )
              }
            ),
            /* @__PURE__ */ p(
              "span",
              {
                className: o(
                  "text-muted-foreground text-center leading-snug",
                  m ? "text-sm" : "text-xs"
                ),
                children: [
                  d ? l ? `Upload up to ${l} files` : "Upload files" : "Upload a file",
                  /* @__PURE__ */ a("br", {}),
                  /* @__PURE__ */ p("span", { className: "text-muted-foreground/70", children: [
                    "Max ",
                    zt(i),
                    " per file"
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ a(
              oe,
              {
                ...b,
                ref: T,
                type: "file",
                accept: u,
                multiple: d,
                disabled: $,
                className: "sr-only",
                "aria-invalid": !!E,
                onChange: j
              }
            )
          ]
        }
      ),
      N.length > 0 && /* @__PURE__ */ a(
        "div",
        {
          className: o(
            "grid gap-2",
            m ? "grid-cols-3" : "grid-cols-4 sm:grid-cols-5 md:grid-cols-6"
          ),
          children: N.map(({ file: w, url: M }, D) => /* @__PURE__ */ a(
            sn,
            {
              url: M,
              name: w.name,
              onRemove: () => A(D),
              mobile: m,
              disabled: $
            },
            M
          ))
        }
      ),
      E && /* @__PURE__ */ a(
        V,
        {
          variant: "body-sm",
          className: "text-destructive first-letter:uppercase",
          children: E
        }
      ),
      r && !E && /* @__PURE__ */ a(
        V,
        {
          variant: "body-sm",
          className: "text-muted-foreground first-letter:uppercase",
          children: r
        }
      )
    ] });
  }
);
on.displayName = "FormMedia";
function sn({
  url: e,
  name: t,
  onRemove: r,
  mobile: n,
  disabled: s
}) {
  const [i, d] = c.useState(!1);
  return /* @__PURE__ */ p(
    "div",
    {
      className: o(
        "group relative aspect-square rounded-md overflow-hidden",
        "border border-border bg-muted",
        n ? "rounded-lg" : "rounded-md"
      ),
      children: [
        i ? (
          /* Fallback for non-image files (PDF, video, etc.) */
          /* @__PURE__ */ p("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-1 p-1", children: [
            /* @__PURE__ */ a(fa, { className: "size-5 text-muted-foreground" }),
            /* @__PURE__ */ a("span", { className: "text-[10px] text-muted-foreground text-center line-clamp-2 break-all leading-tight", children: t })
          ] })
        ) : /* @__PURE__ */ a(
          "img",
          {
            src: e,
            alt: t,
            onError: () => d(!0),
            className: "absolute inset-0 w-full h-full object-cover"
          }
        ),
        !s && /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            "aria-label": `Remove ${t}`,
            onClick: r,
            className: o(
              "absolute top-1 right-1 z-10",
              "flex items-center justify-center",
              "rounded-full bg-background/80 backdrop-blur-sm",
              "text-foreground shadow-sm",
              "transition-opacity",
              n ? "size-6 opacity-100" : "size-5 opacity-0 group-hover:opacity-100",
              // hover reveal on desktop
              "hover:bg-destructive hover:text-destructive-foreground",
              "focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring"
            ),
            children: /* @__PURE__ */ a(Ve, { className: n ? "size-3.5" : "size-3" })
          }
        )
      ]
    }
  );
}
const dn = L(
  "inline-flex items-center justify-center rounded-full font-medium text-xs",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        success: "bg-success text-success-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        muted: "bg-muted text-muted-foreground"
      },
      size: {
        sm: "px-1.5 py-0.5 min-w-5 h-5",
        md: "px-2 py-0.5 min-w-6 h-6",
        lg: "px-2.5 py-1 min-w-7 h-7"
      }
    },
    defaultVariants: {
      variant: "secondary",
      size: "sm"
    }
  }
), ln = c.forwardRef(
  ({ className: e, variant: t, size: r, count: n, ...s }, i) => /* @__PURE__ */ a(
    "span",
    {
      ref: i,
      className: o(dn({ variant: t, size: r }), e),
      ...s,
      children: n
    }
  )
);
ln.displayName = "CountBadge";
function xs({
  ...e
}) {
  return /* @__PURE__ */ a(Ne.Root, { "data-slot": "accordion", ...e });
}
function ys({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Ne.Item,
    {
      "data-slot": "accordion-item",
      className: o("border-b last:border-b-0", e),
      ...t
    }
  );
}
function ws({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ a(Ne.Header, { className: "flex", children: /* @__PURE__ */ p(
    Ne.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: o(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ a(Le, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function Ns({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    Ne.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...r,
      children: /* @__PURE__ */ a("div", { className: o("pt-0 pb-4", e), children: t })
    }
  );
}
const cn = L(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function ks({
  className: e,
  variant: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: o(cn({ variant: t }), e),
      ...r
    }
  );
}
function Cs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-title",
      className: o(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        e
      ),
      ...t
    }
  );
}
function Ss({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-description",
      className: o(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        e
      ),
      ...t
    }
  );
}
function zs({
  ...e
}) {
  return /* @__PURE__ */ a(ne.Root, { "data-slot": "alert-dialog", ...e });
}
function Ms({
  ...e
}) {
  return /* @__PURE__ */ a(ne.Trigger, { "data-slot": "alert-dialog-trigger", ...e });
}
function un({
  ...e
}) {
  return /* @__PURE__ */ a(ne.Portal, { "data-slot": "alert-dialog-portal", ...e });
}
function pn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ne.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: o(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Is({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(un, { children: [
    /* @__PURE__ */ a(pn, {}),
    /* @__PURE__ */ a(
      ne.Content,
      {
        "data-slot": "alert-dialog-content",
        className: o(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...t
      }
    )
  ] });
}
function Rs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: o("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function _s({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: o(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        e
      ),
      ...t
    }
  );
}
function Ts({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ne.Title,
    {
      "data-slot": "alert-dialog-title",
      className: o("text-lg font-semibold", e),
      ...t
    }
  );
}
function Ps({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ne.Description,
    {
      "data-slot": "alert-dialog-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Ds({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ne.Action,
    {
      className: o(ae(), e),
      ...t
    }
  );
}
function js({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ne.Cancel,
    {
      className: o(ae({ variant: "outline" }), e),
      ...t
    }
  );
}
function Es({
  ...e
}) {
  return /* @__PURE__ */ a(ja.Root, { "data-slot": "aspect-ratio", ...e });
}
function As({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    it.Root,
    {
      "data-slot": "avatar",
      className: o(
        "relative flex size-10 shrink-0 overflow-hidden rounded-full",
        e
      ),
      ...t
    }
  );
}
function Ls({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    it.Image,
    {
      "data-slot": "avatar-image",
      className: o("aspect-square size-full", e),
      ...t
    }
  );
}
function Os({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    it.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: o(
        "bg-muted flex size-full items-center justify-center rounded-full",
        e
      ),
      ...t
    }
  );
}
const mn = L(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function $s({
  className: e,
  variant: t,
  asChild: r = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    r ? J : "span",
    {
      "data-slot": "badge",
      className: o(mn({ variant: t }), e),
      ...n
    }
  );
}
function Vs({ ...e }) {
  return /* @__PURE__ */ a("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function Fs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: o(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        e
      ),
      ...t
    }
  );
}
function Bs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: o("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function Ys({
  asChild: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    e ? J : "a",
    {
      "data-slot": "breadcrumb-link",
      className: o("hover:text-foreground transition-colors", t),
      ...r
    }
  );
}
function Gs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: o("text-foreground font-normal", e),
      ...t
    }
  );
}
function Us({
  children: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: o("[&>svg]:size-3.5", t),
      ...r,
      children: e ?? /* @__PURE__ */ a(ve, {})
    }
  );
}
function Hs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: o("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ a(ga, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
const fn = c.forwardRef(
  ({
    className: e,
    variant: t = "attached",
    orientation: r = "horizontal",
    children: n,
    ...s
  }, i) => {
    const d = t === "attached", l = r === "vertical";
    return /* @__PURE__ */ a(
      "div",
      {
        ref: i,
        role: "group",
        "data-slot": "button-group",
        className: o(
          "inline-flex items-stretch",
          l ? "flex-col" : "flex-row",
          d && !l && "[&>:is(button,[data-slot=button],input,[data-slot=input],[data-slot=button-group-text],[data-slot=select-trigger],[data-slot=input-group],[data-slot=input-left-addon],[data-slot=input-right-addon]):not(:first-child)]:rounded-l-none [&>:is(button,[data-slot=button],input,[data-slot=input],[data-slot=button-group-text],[data-slot=select-trigger],[data-slot=input-group],[data-slot=input-left-addon],[data-slot=input-right-addon]):not(:last-child)]:rounded-r-none [&>:is(button,[data-slot=button],input,[data-slot=input],[data-slot=button-group-text],[data-slot=select-trigger],[data-slot=input-group],[data-slot=input-left-addon],[data-slot=input-right-addon]):not(:last-child)]:border-r-0",
          d && l && "[&>:is(button,[data-slot=button],input,[data-slot=input],[data-slot=button-group-text],[data-slot=select-trigger],[data-slot=input-group],[data-slot=input-left-addon],[data-slot=input-right-addon]):not(:first-child)]:rounded-t-none [&>:is(button,[data-slot=button],input,[data-slot=input],[data-slot=button-group-text],[data-slot=select-trigger],[data-slot=input-group],[data-slot=input-left-addon],[data-slot=input-right-addon]):not(:last-child)]:rounded-b-none [&>:is(button,[data-slot=button],input,[data-slot=input],[data-slot=button-group-text],[data-slot=select-trigger],[data-slot=input-group],[data-slot=input-left-addon],[data-slot=input-right-addon]):not(:last-child)]:border-b-0",
          !d && !l && "gap-2",
          !d && l && "gap-2",
          e
        ),
        ...s,
        children: n
      }
    );
  }
);
fn.displayName = "ButtonGroup";
function Ks({
  className: e,
  orientation: t = "vertical",
  decorative: r = !0,
  ...n
}) {
  return /* @__PURE__ */ a(
    Pt.Root,
    {
      "data-slot": "button-group-separator",
      decorative: r,
      orientation: t,
      className: o(
        "bg-border shrink-0 self-stretch data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        e
      ),
      ...n
    }
  );
}
function Xs({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? J : "span",
    {
      "data-slot": "button-group-text",
      className: o(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md border border-input bg-input-background px-3 text-sm font-medium text-muted-foreground",
        e
      ),
      ...r
    }
  );
}
function gn({
  p: e,
  px: t,
  py: r,
  m: n,
  mx: s,
  my: i,
  shadow: d,
  w: l,
  h: u,
  display: m
}) {
  const f = F(e ?? "2"), x = t !== void 0 ? F(t) : void 0, v = r !== void 0 ? F(r) : void 0, b = x !== void 0 && x !== "none" ? `px-[var(--spacing-${x})]` : "", y = v !== void 0 && v !== "none" ? `py-[var(--spacing-${v})]` : "", N = f !== void 0 && f !== "none" && x === void 0 && v === void 0 ? `p-[var(--spacing-${f})]` : "", h = n !== void 0 ? F(n) : void 0, C = s !== void 0 ? F(s) : void 0, g = i !== void 0 ? F(i) : void 0, S = C !== void 0 && C !== "none" ? `mx-[var(--spacing-${C})]` : "", T = g !== void 0 && g !== "none" ? `my-[var(--spacing-${g})]` : "", _ = h !== void 0 && h !== "none" && C === void 0 && g === void 0 ? `m-[var(--spacing-${h})]` : "", A = d ? {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    inner: "shadow-inner",
    outline: "shadow-outline",
    default: "shadow"
  }[d] : "", E = {
    auto: "w-auto",
    full: "w-full",
    fit: "w-fit",
    screen: "w-screen"
  }, $ = {
    auto: "h-auto",
    full: "h-full",
    fit: "h-fit",
    screen: "h-screen"
  }, w = l ? E[l] : "", M = u ? $[u] : "";
  return [
    N,
    b,
    y,
    _,
    S,
    T,
    A,
    w,
    M,
    m || ""
  ].filter(Boolean).join(" ");
}
function qs({
  className: e,
  p: t,
  px: r,
  py: n,
  m: s,
  mx: i,
  my: d,
  shadow: l,
  w: u,
  h: m,
  display: f,
  ...x
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card",
      className: o(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
        gn({ p: t, px: r, py: n, m: s, mx: i, my: d, shadow: l, w: u, h: m, display: f }),
        e
      ),
      ...x
    }
  );
}
function Ws({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-header",
      className: o(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        e
      ),
      ...t
    }
  );
}
function Js({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "h4",
    {
      "data-slot": "card-title",
      className: o("leading-none", e),
      ...t
    }
  );
}
function Zs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "card-description",
      className: o("text-muted-foreground", e),
      ...t
    }
  );
}
function Qs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-action",
      className: o(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        e
      ),
      ...t
    }
  );
}
function ei({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-content",
      className: o("px-6 [&:last-child]:pb-6", e),
      ...t
    }
  );
}
function ti({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-footer",
      className: o("flex items-center px-6 pb-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const Xt = c.createContext(null);
function Ge() {
  const e = c.useContext(Xt);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function ai({
  orientation: e = "horizontal",
  opts: t,
  setApi: r,
  plugins: n,
  className: s,
  children: i,
  ...d
}) {
  const [l, u] = Ea(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    n
  ), [m, f] = c.useState(!1), [x, v] = c.useState(!1), b = c.useCallback((C) => {
    C && (f(C.canScrollPrev()), v(C.canScrollNext()));
  }, []), y = c.useCallback(() => {
    u?.scrollPrev();
  }, [u]), N = c.useCallback(() => {
    u?.scrollNext();
  }, [u]), h = c.useCallback(
    (C) => {
      C.key === "ArrowLeft" ? (C.preventDefault(), y()) : C.key === "ArrowRight" && (C.preventDefault(), N());
    },
    [y, N]
  );
  return c.useEffect(() => {
    !u || !r || r(u);
  }, [u, r]), c.useEffect(() => {
    if (u)
      return b(u), u.on("reInit", b), u.on("select", b), () => {
        u?.off("select", b);
      };
  }, [u, b]), /* @__PURE__ */ a(
    Xt.Provider,
    {
      value: {
        carouselRef: l,
        api: u,
        opts: t,
        orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: y,
        scrollNext: N,
        canScrollPrev: m,
        canScrollNext: x
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          onKeyDownCapture: h,
          className: o("relative", s),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...d,
          children: i
        }
      )
    }
  );
}
function ri({ className: e, ...t }) {
  const { carouselRef: r, orientation: n } = Ge();
  return /* @__PURE__ */ a(
    "div",
    {
      ref: r,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ a(
        "div",
        {
          className: o(
            "flex",
            n === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            e
          ),
          ...t
        }
      )
    }
  );
}
function ni({ className: e, ...t }) {
  const { orientation: r } = Ge();
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: o(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
}
function oi({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: s, scrollPrev: i, canScrollPrev: d } = Ge();
  return /* @__PURE__ */ p(
    Be,
    {
      "data-slot": "carousel-previous",
      variant: t,
      size: r,
      className: o(
        "absolute size-8 rounded-full",
        s === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !d,
      onClick: i,
      ...n,
      children: [
        /* @__PURE__ */ a(va, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function si({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: s, scrollNext: i, canScrollNext: d } = Ge();
  return /* @__PURE__ */ p(
    Be,
    {
      "data-slot": "carousel-next",
      variant: t,
      size: r,
      className: o(
        "absolute size-8 rounded-full",
        s === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !d,
      onClick: i,
      ...n,
      children: [
        /* @__PURE__ */ a(ha, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const vn = { light: "", dark: ".dark" }, qt = c.createContext(null);
function Wt() {
  const e = c.useContext(qt);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function ii({
  id: e,
  className: t,
  children: r,
  config: n,
  ...s
}) {
  const i = c.useId(), d = `chart-${e || i.replace(/:/g, "")}`;
  return /* @__PURE__ */ a(qt.Provider, { value: { config: n }, children: /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "chart",
      "data-chart": d,
      className: o(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...s,
      children: [
        /* @__PURE__ */ a(hn, { id: d, config: n }),
        /* @__PURE__ */ a(dt.ResponsiveContainer, { children: r })
      ]
    }
  ) });
}
const hn = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(
    ([, n]) => n.theme || n.color
  );
  return r.length ? /* @__PURE__ */ a(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(vn).map(
          ([n, s]) => `
${s} [data-chart=${e}] {
${r.map(([i, d]) => {
            const l = d.theme?.[n] || d.color;
            return l ? `  --color-${i}: ${l};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, di = dt.Tooltip;
function li({
  active: e,
  payload: t,
  className: r,
  indicator: n = "dot",
  hideLabel: s = !1,
  hideIndicator: i = !1,
  label: d,
  labelFormatter: l,
  labelClassName: u,
  formatter: m,
  color: f,
  nameKey: x,
  labelKey: v
}) {
  const { config: b } = Wt(), y = c.useMemo(() => {
    if (s || !t?.length)
      return null;
    const [h] = t, C = `${v || h?.dataKey || h?.name || "value"}`, g = ot(b, h, C), S = !v && typeof d == "string" ? b[d]?.label || d : g?.label;
    return l ? /* @__PURE__ */ a("div", { className: o("font-medium", u), children: l(S, t) }) : S ? /* @__PURE__ */ a("div", { className: o("font-medium", u), children: S }) : null;
  }, [
    d,
    l,
    t,
    s,
    u,
    b,
    v
  ]);
  if (!e || !t?.length)
    return null;
  const N = t.length === 1 && n !== "dot";
  return /* @__PURE__ */ p(
    "div",
    {
      className: o(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        r
      ),
      children: [
        N ? null : y,
        /* @__PURE__ */ a("div", { className: "grid gap-1.5", children: t.map((h, C) => {
          const g = `${x || h.name || h.dataKey || "value"}`, S = ot(b, h, g), T = f || h.payload.fill || h.color;
          return /* @__PURE__ */ a(
            "div",
            {
              className: o(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                n === "dot" && "items-center"
              ),
              children: m && h?.value !== void 0 && h.name ? m(h.value, h.name, h, C, h.payload) : /* @__PURE__ */ p(st, { children: [
                S?.icon ? /* @__PURE__ */ a(S.icon, {}) : !i && /* @__PURE__ */ a(
                  "div",
                  {
                    className: o(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": n === "dot",
                        "w-1": n === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                        "my-0.5": N && n === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": T,
                      "--color-border": T
                    }
                  }
                ),
                /* @__PURE__ */ p(
                  "div",
                  {
                    className: o(
                      "flex flex-1 justify-between leading-none",
                      N ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ p("div", { className: "grid gap-1.5", children: [
                        N ? y : null,
                        /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: S?.label || h.name })
                      ] }),
                      h.value && /* @__PURE__ */ a("span", { className: "text-foreground font-mono font-medium tabular-nums", children: h.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            h.dataKey
          );
        }) })
      ]
    }
  );
}
const ci = dt.Legend;
function ui({
  className: e,
  hideIcon: t = !1,
  payload: r,
  verticalAlign: n = "bottom",
  nameKey: s
}) {
  const { config: i } = Wt();
  return r?.length ? /* @__PURE__ */ a(
    "div",
    {
      className: o(
        "flex items-center justify-center gap-4",
        n === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: r.map((d) => {
        const l = `${s || d.dataKey || "value"}`, u = ot(i, d, l);
        return /* @__PURE__ */ p(
          "div",
          {
            className: o(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
            ),
            children: [
              u?.icon && !t ? /* @__PURE__ */ a(u.icon, {}) : /* @__PURE__ */ a(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: d.color
                  }
                }
              ),
              u?.label
            ]
          },
          d.value
        );
      })
    }
  ) : null;
}
function ot(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let s = r;
  return r in t && typeof t[r] == "string" ? s = t[r] : n && r in n && typeof n[r] == "string" && (s = n[r]), s in e ? e[s] : e[r];
}
function bn({
  p: e,
  px: t,
  py: r,
  m: n,
  mx: s,
  my: i,
  shadow: d,
  w: l,
  h: u,
  display: m
}) {
  const f = F(e), x = t !== void 0 ? F(t) : void 0, v = r !== void 0 ? F(r) : void 0, b = x !== void 0 && x !== "none" ? `px-[var(--spacing-${x})]` : "", y = v !== void 0 && v !== "none" ? `py-[var(--spacing-${v})]` : "", N = f !== void 0 && f !== "none" && x === void 0 && v === void 0 ? `p-[var(--spacing-${f})]` : "", h = n !== void 0 ? F(n) : void 0, C = s !== void 0 ? F(s) : void 0, g = i !== void 0 ? F(i) : void 0, S = C !== void 0 && C !== "none" ? `mx-[var(--spacing-${C})]` : "", T = g !== void 0 && g !== "none" ? `my-[var(--spacing-${g})]` : "", _ = h !== void 0 && h !== "none" && C === void 0 && g === void 0 ? `m-[var(--spacing-${h})]` : "", A = d ? {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    inner: "shadow-inner",
    outline: "shadow-outline",
    default: "shadow"
  }[d] : "", E = {
    auto: "w-auto",
    full: "w-full",
    fit: "w-fit",
    screen: "w-screen"
  }, $ = {
    auto: "h-auto",
    full: "h-full",
    fit: "h-fit",
    screen: "h-screen"
  }, w = l ? E[l] : "", M = u ? $[u] : "";
  return [
    N,
    b,
    y,
    _,
    S,
    T,
    A,
    w,
    M,
    m || ""
  ].filter(Boolean).join(" ");
}
function pi({
  className: e,
  p: t,
  px: r,
  py: n,
  m: s,
  mx: i,
  my: d,
  shadow: l,
  w: u,
  h: m,
  display: f,
  ...x
}) {
  return /* @__PURE__ */ a(
    lt.Root,
    {
      "data-slot": "collapsible",
      className: o(
        bn({
          p: t,
          px: r,
          py: n,
          m: s,
          mx: i,
          my: d,
          shadow: l,
          w: u,
          h: m,
          display: f
        }),
        e
      ),
      ...x
    }
  );
}
function mi(e) {
  return /* @__PURE__ */ a(
    lt.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      className: o("cursor-pointer", e.className),
      ...e
    }
  );
}
function fi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    lt.CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      className: o(
        `
        overflow-hidden
        will-change-[height,opacity]
        data-[state=open]:animate-collapsible-down
        data-[state=closed]:animate-collapsible-up
        `,
        e
      ),
      ...t
    }
  );
}
function xn({ ...e }) {
  return /* @__PURE__ */ a(B.Root, { "data-slot": "dialog", ...e });
}
function gi({
  ...e
}) {
  return /* @__PURE__ */ a(B.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function yn({
  ...e
}) {
  return /* @__PURE__ */ a(B.Portal, { "data-slot": "dialog-portal", ...e });
}
function vi({
  ...e
}) {
  return /* @__PURE__ */ a(B.Close, { "data-slot": "dialog-close", ...e });
}
function wn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    B.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: o(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Nn({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(yn, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ a(wn, {}),
    /* @__PURE__ */ p(
      B.Content,
      {
        "data-slot": "dialog-content",
        className: o(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...r,
        children: [
          t,
          /* @__PURE__ */ p(B.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [
            /* @__PURE__ */ a(_t, {}),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function kn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-header",
      className: o("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function hi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-footer",
      className: o(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        e
      ),
      ...t
    }
  );
}
function Cn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    B.Title,
    {
      "data-slot": "dialog-title",
      className: o("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function Sn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    B.Description,
    {
      "data-slot": "dialog-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function zn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ce,
    {
      "data-slot": "command",
      className: o(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        e
      ),
      ...t
    }
  );
}
function bi({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: r,
  ...n
}) {
  return /* @__PURE__ */ p(xn, { ...n, children: [
    /* @__PURE__ */ p(kn, { className: "sr-only", children: [
      /* @__PURE__ */ a(Cn, { children: e }),
      /* @__PURE__ */ a(Sn, { children: t })
    ] }),
    /* @__PURE__ */ a(Nn, { className: "overflow-hidden p-0", children: /* @__PURE__ */ a(zn, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: r }) })
  ] });
}
function xi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ a(Ae, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ a(
          ce.Input,
          {
            "data-slot": "command-input",
            className: o(
              "placeholder:text-muted-foreground/70 flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              e
            ),
            ...t
          }
        )
      ]
    }
  );
}
function yi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ce.List,
    {
      "data-slot": "command-list",
      className: o(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        e
      ),
      ...t
    }
  );
}
function wi({
  ...e
}) {
  return /* @__PURE__ */ a(
    ce.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function Ni({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ce.Group,
    {
      "data-slot": "command-group",
      className: o(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        e
      ),
      ...t
    }
  );
}
function ki({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ce.Separator,
    {
      "data-slot": "command-separator",
      className: o("bg-border -mx-1 h-px", e),
      ...t
    }
  );
}
function Ci({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ce.Item,
    {
      "data-slot": "command-item",
      className: o(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function Si({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "command-shortcut",
      className: o(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
function zi({
  ...e
}) {
  return /* @__PURE__ */ a(U.Root, { "data-slot": "context-menu", ...e });
}
function Mi({
  ...e
}) {
  return /* @__PURE__ */ a(U.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function Mn({
  ...e
}) {
  return /* @__PURE__ */ a(U.Group, { "data-slot": "context-menu-group", ...e });
}
function Ii({
  ...e
}) {
  return /* @__PURE__ */ a(U.Portal, { "data-slot": "context-menu-portal", ...e });
}
function Ri({
  ...e
}) {
  return /* @__PURE__ */ a(U.Sub, { "data-slot": "context-menu-sub", ...e });
}
function _i({
  ...e
}) {
  return /* @__PURE__ */ a(
    U.RadioGroup,
    {
      "data-slot": "context-menu-radio-group",
      ...e
    }
  );
}
function Ti({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    U.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": t,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ a(Fe, { className: "ml-auto" })
      ]
    }
  );
}
function Pi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    U.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function Di({
  className: e,
  loading: t = !1,
  apiError: r,
  emptyText: n = "No Options",
  children: s,
  ...i
}) {
  const d = c.Children.toArray(s).some(
    (l) => c.isValidElement(l) && (l.type === In || l.type === Mn)
  );
  return /* @__PURE__ */ a(U.Portal, { children: /* @__PURE__ */ a(
    U.Content,
    {
      "data-slot": "context-menu-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...i,
      children: t ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground", children: /* @__PURE__ */ a(de, {}) }) : r?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6", children: /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: "text-destructive underline text-sm px-2 py-1 rounded hover:bg-destructive/10",
          onClick: r.onClick,
          children: r.text || "Error"
        }
      ) }) : d ? s : /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground gap-2", children: [
        /* @__PURE__ */ a(le, { className: "size-8 opacity-60" }),
        /* @__PURE__ */ a("span", { className: "text-xs", children: n })
      ] })
    }
  ) });
}
function In({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    U.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": t,
      "data-variant": r,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n
    }
  );
}
function ji({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    U.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(U.ItemIndicator, { children: /* @__PURE__ */ a(ge, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function Ei({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(
    U.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(U.ItemIndicator, { children: /* @__PURE__ */ a(Oe, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Ai({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    U.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": t,
      className: o(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...r
    }
  );
}
function Li({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    U.Separator,
    {
      "data-slot": "context-menu-separator",
      className: o("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Oi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: o(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
function $i({ ...e }) {
  return /* @__PURE__ */ a(se.Root, { "data-slot": "drawer", ...e });
}
function Vi({
  ...e
}) {
  return /* @__PURE__ */ a(se.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function Rn({
  ...e
}) {
  return /* @__PURE__ */ a(se.Portal, { "data-slot": "drawer-portal", ...e });
}
function Fi({
  ...e
}) {
  return /* @__PURE__ */ a(se.Close, { "data-slot": "drawer-close", ...e });
}
function _n({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    se.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: o(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Bi({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "drawer-body", className: o("flex-1", e), ...t, children: t.children });
}
function Yi({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(Rn, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ a(_n, {}),
    /* @__PURE__ */ p(
      se.Content,
      {
        "data-slot": "drawer-content",
        className: o(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          e
        ),
        ...r,
        children: [
          /* @__PURE__ */ a("div", { className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          t
        ]
      }
    )
  ] });
}
function Gi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-header",
      className: o("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function Ui({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-footer",
      className: o("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function Hi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    se.Title,
    {
      "data-slot": "drawer-title",
      className: o("text-foreground font-semibold", e),
      ...t
    }
  );
}
function Ki({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    se.Description,
    {
      "data-slot": "drawer-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Xi({
  ...e
}) {
  return /* @__PURE__ */ a(H.Root, { "data-slot": "dropdown-menu", ...e });
}
function qi({
  ...e
}) {
  return /* @__PURE__ */ a(H.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function Wi({
  ...e
}) {
  return /* @__PURE__ */ a(
    H.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function Ji({
  className: e,
  sideOffset: t = 4,
  loading: r = !1,
  apiError: n,
  emptyText: s = "No Options",
  children: i,
  ...d
}) {
  const l = c.Children.toArray(i).some(
    (u) => c.isValidElement(u) && (u.type === Zt || u.type === Jt)
  );
  return /* @__PURE__ */ a(H.Portal, { children: /* @__PURE__ */ a(
    H.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...d,
      children: r ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground", children: /* @__PURE__ */ a(de, {}) }) : n?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6", children: /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: "text-destructive underline text-sm px-2 py-1 rounded hover:bg-destructive/10",
          onClick: n.onClick,
          children: n.text || "Error"
        }
      ) }) : l ? i : /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground gap-2", children: [
        /* @__PURE__ */ a(le, { className: "size-8 opacity-60" }),
        /* @__PURE__ */ a("span", { className: "text-xs", children: s })
      ] })
    }
  ) });
}
function Jt({
  ...e
}) {
  return /* @__PURE__ */ a(H.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function Zt({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    H.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": r,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n
    }
  );
}
function Zi({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    H.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(H.ItemIndicator, { children: /* @__PURE__ */ a(ge, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function Qi({
  ...e
}) {
  return /* @__PURE__ */ a(
    H.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...e
    }
  );
}
function ed({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(
    H.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(H.ItemIndicator, { children: /* @__PURE__ */ a(Oe, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function td({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    H.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: o(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...r
    }
  );
}
function ad({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    H.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: o("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function rd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: o(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
function nd({
  ...e
}) {
  return /* @__PURE__ */ a(H.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function od({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    H.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": t,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ a(Fe, { className: "ml-auto size-4" })
      ]
    }
  );
}
function sd({
  className: e,
  loading: t = !1,
  apiError: r,
  emptyText: n = "No Options",
  children: s,
  ...i
}) {
  const d = c.Children.toArray(s).some(
    (l) => c.isValidElement(l) && (l.type === Zt || l.type === Jt)
  );
  return /* @__PURE__ */ a(
    H.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...i,
      children: t ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground", children: /* @__PURE__ */ a(de, {}) }) : r?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6", children: /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: "text-destructive underline text-sm px-2 py-1 rounded hover:bg-destructive/10",
          onClick: r.onClick,
          children: r.text || "Error"
        }
      ) }) : d ? s : /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground gap-2", children: [
        /* @__PURE__ */ a(le, { className: "size-8 opacity-60" }),
        /* @__PURE__ */ a("span", { className: "text-xs", children: n })
      ] })
    }
  );
}
const Tn = c.forwardRef(
  ({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      "data-slot": "empty",
      className: o(
        "flex flex-col items-center justify-center p-12 text-center",
        e
      ),
      ...r,
      children: t
    }
  )
);
Tn.displayName = "Empty";
const Pn = c.forwardRef(
  ({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      "data-slot": "empty-header",
      className: o("flex flex-col items-center justify-center", e),
      ...r,
      children: t
    }
  )
);
Pn.displayName = "EmptyHeader";
const Qt = c.forwardRef(
  ({ className: e, children: t, variant: r = "default", ...n }, s) => /* @__PURE__ */ a(
    "div",
    {
      ref: s,
      "data-slot": "empty-media",
      className: o(
        "mb-4 flex items-center justify-center",
        r === "icon" && "h-16 w-16 rounded-full bg-muted text-muted-foreground [&>svg]:size-8",
        e
      ),
      ...n,
      children: t
    }
  )
);
Qt.displayName = "EmptyMedia";
const Dn = c.forwardRef(
  ({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
    "h3",
    {
      ref: n,
      "data-slot": "empty-title",
      className: o(
        "text-body-lg font-semibold text-foreground mb-2",
        e
      ),
      ...r,
      children: t
    }
  )
);
Dn.displayName = "EmptyTitle";
const jn = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
  "p",
  {
    ref: n,
    "data-slot": "empty-description",
    className: o(
      "text-body-base text-muted-foreground max-w-md mb-4",
      e
    ),
    ...r,
    children: t
  }
));
jn.displayName = "EmptyDescription";
const ea = c.forwardRef(
  ({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      "data-slot": "empty-content",
      className: o("flex items-center justify-center gap-3", e),
      ...r,
      children: t
    }
  )
);
ea.displayName = "EmptyContent";
const En = c.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ a(
    Qt,
    {
      ref: r,
      "data-slot": "empty-icon",
      variant: "icon",
      className: e,
      ...t
    }
  )
);
En.displayName = "EmptyIcon";
const An = c.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ a(
    ea,
    {
      ref: r,
      "data-slot": "empty-actions",
      className: e,
      ...t
    }
  )
);
An.displayName = "EmptyActions";
const Ln = c.forwardRef(
  ({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
    "fieldset",
    {
      ref: n,
      "data-slot": "field-set",
      className: o("flex flex-col gap-4", e),
      ...r,
      children: t
    }
  )
);
Ln.displayName = "FieldSet";
const On = c.forwardRef(
  ({ className: e, children: t, variant: r = "legend", ...n }, s) => /* @__PURE__ */ a(
    "legend",
    {
      ref: s,
      "data-slot": "field-legend",
      "data-variant": r,
      className: o(
        r === "label" ? "text-body-base font-medium text-foreground" : "text-body-lg font-semibold text-foreground",
        e
      ),
      ...n,
      children: t
    }
  )
);
On.displayName = "FieldLegend";
const $n = c.forwardRef(
  ({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      "data-slot": "field-group",
      className: o("flex flex-col gap-6", e),
      ...r,
      children: t
    }
  )
);
$n.displayName = "FieldGroup";
const Vn = c.forwardRef(
  ({
    className: e,
    children: t,
    orientation: r = "vertical",
    role: n,
    disabled: s,
    invalid: i,
    readOnly: d,
    required: l,
    ...u
  }, m) => /* @__PURE__ */ a(
    "div",
    {
      ref: m,
      "data-slot": "field",
      "data-disabled": s,
      "data-invalid": i,
      "data-readonly": d,
      "data-required": l,
      "data-orientation": r,
      role: n ?? "group",
      className: o(
        "w-full",
        "data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed",
        "data-[invalid=true]:[&_[data-slot=field-label]]:text-destructive",
        "data-[orientation=horizontal]:[&_[data-slot=field-description]]:text-balance",
        "data-[orientation=vertical]:flex data-[orientation=vertical]:flex-col data-[orientation=vertical]:gap-2",
        "data-[orientation=horizontal]:flex data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:items-start data-[orientation=horizontal]:gap-4",
        "data-[orientation=responsive]:flex data-[orientation=responsive]:flex-col data-[orientation=responsive]:gap-2 @md/field-group:flex-row @md/field-group:items-start @md/field-group:gap-4",
        e
      ),
      ...u,
      children: t
    }
  )
);
Vn.displayName = "Field";
const Fn = c.forwardRef(
  ({ className: e, children: t, required: r, asChild: n = !1, ...s }, i) => {
    if (n) {
      const d = c.Children.toArray(t).find(
        c.isValidElement
      );
      if (!d) return null;
      const l = d.props.children, u = r ? c.cloneElement(
        d,
        void 0,
        /* @__PURE__ */ p(st, { children: [
          l,
          /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
        ] })
      ) : d;
      return /* @__PURE__ */ a(
        J,
        {
          ref: i,
          "data-slot": "field-label",
          className: o(
            "text-body-base font-medium text-foreground",
            "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            e
          ),
          ...s,
          children: u
        }
      );
    }
    return /* @__PURE__ */ p(
      "label",
      {
        ref: i,
        "data-slot": "field-label",
        className: o(
          "text-body-base font-medium text-foreground",
          "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
          e
        ),
        ...s,
        children: [
          t,
          r && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
        ]
      }
    );
  }
);
Fn.displayName = "FieldLabel";
const Bn = c.forwardRef(
  ({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      "data-slot": "field-content",
      className: o("flex min-w-0 flex-1 flex-col gap-1", e),
      ...r,
      children: t
    }
  )
);
Bn.displayName = "FieldContent";
const Yn = c.forwardRef(
  ({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      "data-slot": "field-title",
      className: o("text-body-base font-medium text-foreground", e),
      ...r,
      children: t
    }
  )
);
Yn.displayName = "FieldTitle";
const ta = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
  "p",
  {
    ref: n,
    "data-slot": "field-description",
    className: o("text-body-sm text-muted-foreground", e),
    ...r,
    children: t
  }
));
ta.displayName = "FieldDescription";
const Gn = c.forwardRef(
  ({ className: e, children: t, errors: r, issues: n, ...s }, i) => {
    const d = (r ?? n)?.map((u) => typeof u?.message == "string" ? u.message : void 0).filter(Boolean), l = t ?? (d?.length ? d : null);
    return l ? /* @__PURE__ */ a(
      "div",
      {
        ref: i,
        "data-slot": "field-error",
        role: "alert",
        className: o("text-body-sm text-destructive font-medium", e),
        ...s,
        children: Array.isArray(l) ? l.length === 1 ? /* @__PURE__ */ a("p", { children: l[0] }) : /* @__PURE__ */ a("ul", { className: "list-disc pl-5", children: l.map((u, m) => /* @__PURE__ */ a("li", { children: u }, `${u}-${m}`)) }) : l
      }
    ) : null;
  }
);
Gn.displayName = "FieldError";
const Un = c.forwardRef(
  ({ className: e, children: t, ...r }, n) => t ? /* @__PURE__ */ p(
    "div",
    {
      ref: n,
      "data-slot": "field-separator",
      className: o(
        "flex items-center gap-3 text-body-xs text-muted-foreground",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "bg-border h-px flex-1" }),
        /* @__PURE__ */ a("span", { children: t }),
        /* @__PURE__ */ a("span", { className: "bg-border h-px flex-1" })
      ]
    }
  ) : /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      "data-slot": "field-separator",
      className: o("bg-border h-px w-full", e),
      ...r
    }
  )
);
Un.displayName = "FieldSeparator";
const Hn = ta;
Hn.displayName = "FieldHelpText";
const Kn = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "p",
  {
    ref: r,
    "data-slot": "field-error-text",
    role: "alert",
    className: o("text-body-sm text-destructive font-medium", e),
    ...t
  }
));
Kn.displayName = "FieldErrorText";
const id = Aa, aa = c.createContext(
  {}
), dd = ({
  ...e
}) => /* @__PURE__ */ a(aa.Provider, { value: { name: e.name }, children: /* @__PURE__ */ a($a, { ...e }) }), Ue = () => {
  const e = c.useContext(aa), t = c.useContext(ra), { getFieldState: r } = La(), n = Oa({ name: e.name }), s = r(e.name, n);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: i } = t;
  return {
    id: i,
    name: e.name,
    formItemId: `${i}-form-item`,
    formDescriptionId: `${i}-form-item-description`,
    formMessageId: `${i}-form-item-message`,
    ...s
  };
}, ra = c.createContext(
  {}
);
function ld({ className: e, ...t }) {
  const r = c.useId();
  return /* @__PURE__ */ a(ra.Provider, { value: { id: r }, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "form-item",
      className: o("grid gap-2", e),
      ...t
    }
  ) });
}
function cd({
  className: e,
  ...t
}) {
  const { error: r, formItemId: n } = Ue();
  return /* @__PURE__ */ a(
    Z,
    {
      "data-slot": "form-label",
      "data-error": !!r,
      className: o("data-[error=true]:text-destructive", e),
      htmlFor: n,
      ...t
    }
  );
}
function ud({ ...e }) {
  const { error: t, formItemId: r, formDescriptionId: n, formMessageId: s } = Ue();
  return /* @__PURE__ */ a(
    J,
    {
      "data-slot": "form-control",
      id: r,
      "aria-describedby": t ? `${n} ${s}` : `${n}`,
      "aria-invalid": !!t,
      ...e
    }
  );
}
function pd({ className: e, ...t }) {
  const { formDescriptionId: r } = Ue();
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "form-description",
      id: r,
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function md({ className: e, ...t }) {
  const { error: r, formMessageId: n } = Ue(), s = r ? String(r?.message ?? "") : t.children;
  return s ? /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "form-message",
      id: n,
      className: o("text-destructive text-sm", e),
      ...t,
      children: s
    }
  ) : null;
}
function fd({
  ...e
}) {
  return /* @__PURE__ */ a(ke.Root, { "data-slot": "hover-card", ...e });
}
function gd({
  ...e
}) {
  return /* @__PURE__ */ a(ke.Trigger, { "data-slot": "hover-card-trigger", ...e });
}
function vd({
  className: e,
  align: t = "center",
  sideOffset: r = 4,
  ...n
}) {
  return /* @__PURE__ */ a(ke.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ a(
    ke.Content,
    {
      "data-slot": "hover-card-content",
      align: t,
      sideOffset: r,
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...n
    }
  ) });
}
function hd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ke.Arrow,
    {
      "data-slot": "hover-card-arrow",
      className: o("fill-popover", e),
      ...t
    }
  );
}
const Xn = c.forwardRef(
  ({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      "data-slot": "input-group",
      className: o("relative flex w-full", e),
      ...r,
      children: t
    }
  )
);
Xn.displayName = "InputGroup";
const qn = c.forwardRef(
  ({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      "data-slot": "input-left-addon",
      className: o(
        "inline-flex items-center px-4 border border-r-0 border-input bg-muted rounded-l-md text-muted-foreground text-body-base",
        "dark:bg-card dark:border-border",
        e
      ),
      ...r,
      children: t
    }
  )
);
qn.displayName = "InputLeftAddon";
const Wn = c.forwardRef(
  ({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      "data-slot": "input-right-addon",
      className: o(
        "inline-flex items-center px-4 border border-l-0 border-input bg-muted rounded-r-md text-muted-foreground text-body-base",
        "dark:bg-card dark:border-border",
        e
      ),
      ...r,
      children: t
    }
  )
);
Wn.displayName = "InputRightAddon";
const Jn = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
  "div",
  {
    ref: n,
    "data-slot": "input-left-element",
    className: o(
      "absolute left-0 top-0 bottom-0 flex items-center pl-3 pointer-events-none text-muted-foreground",
      "[&>svg]:size-5",
      e
    ),
    ...r,
    children: t
  }
));
Jn.displayName = "InputLeftElement";
const Zn = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
  "div",
  {
    ref: n,
    "data-slot": "input-right-element",
    className: o(
      "absolute right-0 top-0 bottom-0 flex items-center pr-3 text-muted-foreground",
      "[&>svg]:size-5",
      e
    ),
    ...r,
    children: t
  }
));
Zn.displayName = "InputRightElement";
function na({
  className: e,
  orientation: t = "horizontal",
  decorative: r = !0,
  ...n
}) {
  return /* @__PURE__ */ a(
    Pt.Root,
    {
      "data-slot": "separator-root",
      decorative: r,
      orientation: t,
      className: o(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        e
      ),
      ...n
    }
  );
}
const Qn = L(
  "group/item grid w-full grid-cols-[auto_1fr_auto] items-center gap-x-3 gap-y-2 rounded-md transition-colors",
  {
    variants: {
      variant: {
        default: "hover:bg-muted focus:bg-muted focus:outline-none",
        outline: "border border-border bg-background hover:bg-muted focus:bg-muted focus:outline-none",
        muted: "bg-muted/30 hover:bg-muted focus:bg-muted focus:outline-none"
      },
      size: {
        default: "px-4 py-3",
        sm: "px-3 py-2"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), eo = c.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...s }, i) => /* @__PURE__ */ a(
    n ? J : "div",
    {
      ref: i,
      "data-slot": "item",
      "data-variant": t,
      "data-size": r,
      className: o(Qn({ variant: t, size: r, className: e })),
      ...s
    }
  )
);
eo.displayName = "Item";
function bd({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-group",
      className: o("flex flex-col rounded-md border bg-card p-1", e),
      ...t
    }
  );
}
function xd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    na,
    {
      "data-slot": "item-separator",
      className: o("mx-2 w-auto", e),
      ...t
    }
  );
}
const to = L(
  "col-start-1 row-start-2 flex shrink-0 items-center justify-center",
  {
    variants: {
      variant: {
        default: "",
        icon: 'text-muted-foreground [&_svg:not([class*="size-"])]:size-5',
        image: "overflow-hidden rounded-md bg-muted [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), ao = c.forwardRef(
  ({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      "data-slot": "item-media",
      "data-variant": t,
      className: o(
        to({ variant: t }),
        "group-data-[size=default]/item:size-10 group-data-[size=sm]/item:size-8",
        e
      ),
      ...r
    }
  )
);
ao.displayName = "ItemMedia";
const ro = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "div",
  {
    ref: r,
    "data-slot": "item-content",
    className: o(
      "col-start-2 row-start-2 flex min-w-0 flex-col gap-0.5",
      e
    ),
    ...t
  }
));
ro.displayName = "ItemContent";
const no = c.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ a(
    "div",
    {
      ref: r,
      "data-slot": "item-title",
      className: o("text-body-base font-medium text-foreground", e),
      ...t
    }
  )
);
no.displayName = "ItemTitle";
const oo = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "p",
  {
    ref: r,
    "data-slot": "item-description",
    className: o("text-body-sm text-muted-foreground", e),
    ...t
  }
));
oo.displayName = "ItemDescription";
const so = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "div",
  {
    ref: r,
    "data-slot": "item-actions",
    className: o(
      "col-start-3 row-start-2 flex items-center justify-end gap-2",
      e
    ),
    ...t
  }
));
so.displayName = "ItemActions";
const io = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "div",
  {
    ref: r,
    "data-slot": "item-header",
    className: o(
      "col-span-3 row-start-1 text-body-sm text-muted-foreground",
      e
    ),
    ...t
  }
));
io.displayName = "ItemHeader";
const lo = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "div",
  {
    ref: r,
    "data-slot": "item-footer",
    className: o(
      "col-span-3 row-start-3 text-body-sm text-muted-foreground",
      e
    ),
    ...t
  }
));
lo.displayName = "ItemFooter";
const co = c.forwardRef(
  ({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
    "kbd",
    {
      ref: n,
      "data-slot": "kbd",
      className: o(
        "inline-flex items-center justify-center rounded border border-border bg-muted px-1.5 font-mono text-xs font-medium text-foreground shadow-sm select-none",
        "min-w-6 h-6",
        "dark:bg-card dark:border-border",
        e
      ),
      ...r,
      children: t
    }
  )
);
co.displayName = "Kbd";
const uo = c.forwardRef(
  ({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
    "span",
    {
      ref: n,
      "data-slot": "kbd-group",
      className: o("inline-flex items-center gap-1", e),
      ...r,
      children: t
    }
  )
);
uo.displayName = "KbdGroup";
function yd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    K.Root,
    {
      "data-slot": "menubar",
      className: o(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        e
      ),
      ...t
    }
  );
}
function wd({
  ...e
}) {
  return /* @__PURE__ */ a(K.Menu, { "data-slot": "menubar-menu", ...e });
}
function po({
  ...e
}) {
  return /* @__PURE__ */ a(K.Group, { "data-slot": "menubar-group", ...e });
}
function mo({
  ...e
}) {
  return /* @__PURE__ */ a(K.Portal, { "data-slot": "menubar-portal", ...e });
}
function Nd({
  ...e
}) {
  return /* @__PURE__ */ a(K.RadioGroup, { "data-slot": "menubar-radio-group", ...e });
}
function kd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    K.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-pointer items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        e
      ),
      ...t
    }
  );
}
function Cd({
  className: e,
  align: t = "start",
  alignOffset: r = -4,
  sideOffset: n = 8,
  loading: s = !1,
  apiError: i,
  emptyText: d = "No Options",
  children: l,
  ...u
}) {
  const m = c.Children.toArray(l).some(
    (f) => c.isValidElement(f) && (f.type === fo || f.type === po)
  );
  return /* @__PURE__ */ a(mo, { children: /* @__PURE__ */ a(
    K.Content,
    {
      "data-slot": "menubar-content",
      align: t,
      alignOffset: r,
      sideOffset: n,
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
        e
      ),
      ...u,
      children: s ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground", children: /* @__PURE__ */ a(de, {}) }) : i?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6", children: /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: "text-destructive underline text-sm px-2 py-1 rounded hover:bg-destructive/10",
          onClick: i.onClick,
          children: i.text || "Error"
        }
      ) }) : m ? l : /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground gap-2", children: [
        /* @__PURE__ */ a(le, { className: "size-8 opacity-60" }),
        /* @__PURE__ */ a("span", { className: "text-xs", children: d })
      ] })
    }
  ) });
}
function fo({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    K.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": t,
      "data-variant": r,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n
    }
  );
}
function Sd({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    K.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(K.ItemIndicator, { children: /* @__PURE__ */ a(ge, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function zd({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(
    K.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(K.ItemIndicator, { children: /* @__PURE__ */ a(Oe, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Md({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    K.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": t,
      className: o(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...r
    }
  );
}
function Id({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    K.Separator,
    {
      "data-slot": "menubar-separator",
      className: o("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Rd({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: o(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
function _d({
  ...e
}) {
  return /* @__PURE__ */ a(K.Sub, { "data-slot": "menubar-sub", ...e });
}
function Td({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    K.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": t,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ a(Fe, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function Pd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    K.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function Dd({
  className: e,
  children: t,
  viewport: r = !0,
  ...n
}) {
  return /* @__PURE__ */ p(
    ie.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": r,
      className: o(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        e
      ),
      ...n,
      children: [
        t,
        r && /* @__PURE__ */ a(vo, {})
      ]
    }
  );
}
function jd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ie.List,
    {
      "data-slot": "navigation-menu-list",
      className: o(
        "group flex flex-1 list-none items-center justify-center gap-1",
        e
      ),
      ...t
    }
  );
}
function Ed({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ie.Item,
    {
      "data-slot": "navigation-menu-item",
      className: o("relative", e),
      ...t
    }
  );
}
const go = L(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function Ad({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(
    ie.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: o(go(), "group", e),
      ...r,
      children: [
        t,
        " ",
        /* @__PURE__ */ a(
          Le,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function Ld({
  className: e,
  loading: t = !1,
  apiError: r,
  emptyText: n = "No Options",
  children: s,
  ...i
}) {
  const d = c.Children.toArray(s).some(
    (l) => c.isValidElement(l) && l.type === ho
  );
  return /* @__PURE__ */ a(
    ie.Content,
    {
      "data-slot": "navigation-menu-content",
      className: o(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        e
      ),
      ...i,
      children: t ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground", children: /* @__PURE__ */ a(de, {}) }) : r?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6", children: /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: "text-destructive underline text-sm px-2 py-1 rounded hover:bg-destructive/10",
          onClick: r.onClick,
          children: r.text || "Error"
        }
      ) }) : d ? s : /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground gap-2", children: [
        /* @__PURE__ */ a(le, { className: "size-8 opacity-60" }),
        /* @__PURE__ */ a("span", { className: "text-xs", children: n })
      ] })
    }
  );
}
function vo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: o(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ a(
        ie.Viewport,
        {
          "data-slot": "navigation-menu-viewport",
          className: o(
            "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
            e
          ),
          ...t
        }
      )
    }
  );
}
function ho({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ie.Link,
    {
      "data-slot": "navigation-menu-link",
      className: o(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function Od({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ie.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: o(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a("div", { className: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" })
    }
  );
}
function $d({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: o("mx-auto flex w-full justify-center", e),
      ...t
    }
  );
}
function Vd({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "pagination-content",
      className: o("flex flex-row items-center gap-1", e),
      ...t
    }
  );
}
function Fd({ ...e }) {
  return /* @__PURE__ */ a("li", { "data-slot": "pagination-item", ...e });
}
function oa({
  className: e,
  isActive: t,
  size: r = "icon",
  ...n
}) {
  return /* @__PURE__ */ a(
    "a",
    {
      "aria-current": t ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": t,
      className: o(
        ae({
          variant: t ? "outline" : "ghost",
          size: r
        }),
        e
      ),
      ...n
    }
  );
}
function Bd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    oa,
    {
      "aria-label": "Go to previous page",
      size: "md",
      className: o("gap-1 px-2.5 sm:pl-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a(ba, {}),
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function Yd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    oa,
    {
      "aria-label": "Go to next page",
      size: "md",
      className: o("gap-1 px-2.5 sm:pr-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ a(Fe, {})
      ]
    }
  );
}
function Gd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: o("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ a(xa, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
function Ud({
  className: e,
  value: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    xt.Root,
    {
      "data-slot": "progress",
      className: o(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        e
      ),
      ...r,
      children: /* @__PURE__ */ a(
        xt.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function Hd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ct.PanelGroup,
    {
      "data-slot": "resizable-panel-group",
      className: o(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        e
      ),
      ...t
    }
  );
}
function Kd({
  ...e
}) {
  return /* @__PURE__ */ a(ct.Panel, { "data-slot": "resizable-panel", ...e });
}
function Xd({
  withHandle: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    ct.PanelResizeHandle,
    {
      "data-slot": "resizable-handle",
      className: o(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        t
      ),
      ...r,
      children: e && /* @__PURE__ */ a("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ a(ya, { className: "size-2.5" }) })
    }
  );
}
const bo = L(
  "inline-flex items-center justify-center p-1 rounded-lg w-full",
  {
    variants: {
      variant: {
        primary: "bg-primary-lightest",
        secondary: "bg-secondary-lightest",
        neutral: "bg-muted"
      }
    },
    defaultVariants: {
      variant: "neutral"
    }
  }
), xo = L(
  "inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-md px-4 py-2.5 text-sm font-semibold transition-all duration-200 outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "text-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md",
        secondary: "text-secondary data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-md",
        neutral: "text-muted-foreground data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-md"
      }
    },
    defaultVariants: {
      variant: "neutral"
    }
  }
), yo = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
  re.Root,
  {
    ref: n,
    className: o("flex flex-col gap-4", e),
    ...r,
    children: t
  }
));
yo.displayName = "SegmentControl";
const wo = c.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
  re.List,
  {
    ref: n,
    className: o(bo({ variant: t }), e),
    ...r
  }
));
wo.displayName = "SegmentControlList";
const No = c.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
  re.Trigger,
  {
    ref: n,
    className: o(xo({ variant: t }), e),
    ...r
  }
));
No.displayName = "SegmentControlItem";
const qd = re.Content;
function ko({ ...e }) {
  return /* @__PURE__ */ a(B.Root, { "data-slot": "sheet", ...e });
}
function Wd({
  ...e
}) {
  return /* @__PURE__ */ a(B.Trigger, { "data-slot": "sheet-trigger", ...e });
}
function Jd({
  ...e
}) {
  return /* @__PURE__ */ a(B.Close, { "data-slot": "sheet-close", ...e });
}
function Co({
  ...e
}) {
  return /* @__PURE__ */ a(B.Portal, { "data-slot": "sheet-portal", ...e });
}
function So({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    B.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: o(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function zo({
  className: e,
  children: t,
  side: r = "right",
  ...n
}) {
  return /* @__PURE__ */ p(Co, { children: [
    /* @__PURE__ */ a(So, {}),
    /* @__PURE__ */ p(
      B.Content,
      {
        "data-slot": "sheet-content",
        className: o(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          r === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          r === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          r === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          r === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          e
        ),
        ...n,
        children: [
          t,
          /* @__PURE__ */ p(B.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ a(_t, { className: "size-4" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function Mo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-header",
      className: o("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function Zd({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-footer",
      className: o("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function Io({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    B.Title,
    {
      "data-slot": "sheet-title",
      className: o("text-foreground font-semibold", e),
      ...t
    }
  );
}
function Ro({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    B.Description,
    {
      "data-slot": "sheet-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const qe = 768;
function _o() {
  const [e, t] = c.useState(void 0);
  return c.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${qe - 1}px)`), n = () => {
      t(window.innerWidth < qe);
    };
    return r.addEventListener("change", n), t(window.innerWidth < qe), () => r.removeEventListener("change", n);
  }, []), !!e;
}
function Mt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "skeleton",
      className: o(
        "bg-foreground/15 dark:bg-foreground/20 animate-pulse rounded-md",
        e
      ),
      ...t
    }
  );
}
const To = "sidebar_state", Po = 3600 * 24 * 7, Do = "16rem", jo = "18rem", Eo = "3rem", Ao = "b", sa = c.createContext(null);
function He() {
  const e = c.useContext(sa);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function Qd({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: r,
  className: n,
  style: s,
  children: i,
  ...d
}) {
  const l = _o(), [u, m] = c.useState(!1), [f, x] = c.useState(e), v = t ?? f, b = c.useCallback(
    (C) => {
      const g = typeof C == "function" ? C(v) : C;
      r ? r(g) : x(g), document.cookie = `${To}=${g}; path=/; max-age=${Po}`;
    },
    [r, v]
  ), y = c.useCallback(() => l ? m((C) => !C) : b((C) => !C), [l, b, m]);
  c.useEffect(() => {
    const C = (g) => {
      g.key === Ao && (g.metaKey || g.ctrlKey) && (g.preventDefault(), y());
    };
    return window.addEventListener("keydown", C), () => window.removeEventListener("keydown", C);
  }, [y]);
  const N = v ? "expanded" : "collapsed", h = c.useMemo(
    () => ({
      state: N,
      open: v,
      setOpen: b,
      isMobile: l,
      openMobile: u,
      setOpenMobile: m,
      toggleSidebar: y
    }),
    [N, v, b, l, u, m, y]
  );
  return /* @__PURE__ */ a(sa.Provider, { value: h, children: /* @__PURE__ */ a(pt, { delayDuration: 0, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": Do,
        "--sidebar-width-icon": Eo,
        ...s
      },
      className: o(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        n
      ),
      ...d,
      children: i
    }
  ) }) });
}
function ue({
  p: e,
  px: t,
  py: r,
  m: n,
  mx: s,
  my: i,
  shadow: d,
  w: l,
  h: u,
  display: m
}) {
  const f = F(e), x = t !== void 0 ? F(t) : void 0, v = r !== void 0 ? F(r) : void 0, b = x !== void 0 && x !== "none" ? `px-[var(--spacing-${x})]` : "", y = v !== void 0 && v !== "none" ? `py-[var(--spacing-${v})]` : "", N = f !== void 0 && f !== "none" && x === void 0 && v === void 0 ? `p-[var(--spacing-${f})]` : "", h = n !== void 0 ? F(n) : void 0, C = s !== void 0 ? F(s) : void 0, g = i !== void 0 ? F(i) : void 0, S = C !== void 0 && C !== "none" ? `mx-[var(--spacing-${C})]` : "", T = g !== void 0 && g !== "none" ? `my-[var(--spacing-${g})]` : "", _ = h !== void 0 && h !== "none" && C === void 0 && g === void 0 ? `m-[var(--spacing-${h})]` : "", A = d ? {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    inner: "shadow-inner",
    outline: "shadow-outline",
    default: "shadow"
  }[d] : "", E = {
    auto: "w-auto",
    full: "w-full",
    fit: "w-fit",
    screen: "w-screen"
  }, $ = {
    auto: "h-auto",
    full: "h-full",
    fit: "h-fit",
    screen: "h-screen"
  }, w = l ? E[l] : "", M = u ? $[u] : "";
  return [
    N,
    b,
    y,
    _,
    S,
    T,
    A,
    w,
    M,
    m || ""
  ].filter(Boolean).join(" ");
}
function el({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: r = "offcanvas",
  className: n,
  children: s,
  p: i,
  px: d,
  py: l,
  m: u,
  mx: m,
  my: f,
  shadow: x,
  w: v,
  h: b,
  display: y,
  ...N
}) {
  const { isMobile: h, state: C, openMobile: g, setOpenMobile: S } = He(), T = ue({
    p: i,
    px: d,
    py: l,
    m: u,
    mx: m,
    my: f,
    shadow: x,
    w: v,
    h: b,
    display: y
  });
  return r === "none" ? /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar",
      className: o(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        T,
        n
      ),
      ...N,
      children: s
    }
  ) : h ? /* @__PURE__ */ a(ko, { open: g, onOpenChange: S, ...N, children: /* @__PURE__ */ p(
    zo,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: o(
        "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
        T,
        n
      ),
      style: {
        "--sidebar-width": jo
      },
      side: e,
      children: [
        /* @__PURE__ */ p(Mo, { className: "sr-only", children: [
          /* @__PURE__ */ a(Io, { children: "Sidebar" }),
          /* @__PURE__ */ a(Ro, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex h-full w-full flex-col", children: s })
      ]
    }
  ) }) : /* @__PURE__ */ p(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": C,
      "data-collapsible": C === "collapsed" ? r : "",
      "data-variant": t,
      "data-side": e,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: o(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "sidebar-container",
            className: o(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              T,
              n
            ),
            ...N,
            children: /* @__PURE__ */ a(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children: s
              }
            )
          }
        )
      ]
    }
  );
}
function tl({
  className: e,
  p: t,
  px: r,
  py: n,
  m: s,
  mx: i,
  my: d,
  shadow: l,
  w: u,
  h: m,
  display: f,
  onClick: x,
  ...v
}) {
  const { toggleSidebar: b } = He(), y = ue({
    p: t,
    px: r,
    py: n,
    m: s,
    mx: i,
    my: d,
    shadow: l,
    w: u,
    h: m,
    display: f
  });
  return /* @__PURE__ */ p(
    Be,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: o("size-7 cursor-pointer", y, e),
      onClick: (N) => {
        x?.(N), b();
      },
      ...v,
      children: [
        /* @__PURE__ */ a(wa, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function al({
  className: e,
  p: t,
  px: r,
  py: n,
  m: s,
  mx: i,
  my: d,
  shadow: l,
  w: u,
  h: m,
  display: f,
  ...x
}) {
  const { toggleSidebar: v } = He(), b = ue({
    p: t,
    px: r,
    py: n,
    m: s,
    mx: i,
    my: d,
    shadow: l,
    w: u,
    h: m,
    display: f
  });
  return /* @__PURE__ */ a(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: v,
      title: "Toggle Sidebar",
      className: o(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex cursor-pointer",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        b,
        e
      ),
      ...x
    }
  );
}
function rl({
  className: e,
  p: t,
  px: r,
  py: n,
  m: s,
  mx: i,
  my: d,
  shadow: l,
  w: u,
  h: m,
  display: f,
  ...x
}) {
  const v = ue({
    p: t,
    px: r,
    py: n,
    m: s,
    mx: i,
    my: d,
    shadow: l,
    w: u,
    h: m,
    display: f
  });
  return /* @__PURE__ */ a(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: o(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        v,
        e
      ),
      ...x
    }
  );
}
function nl({
  className: e,
  p: t,
  px: r,
  py: n,
  m: s,
  mx: i,
  my: d,
  shadow: l,
  w: u,
  h: m,
  display: f,
  ...x
}) {
  const v = ue({
    p: t,
    px: r,
    py: n,
    m: s,
    mx: i,
    my: d,
    shadow: l,
    w: u,
    h: m,
    display: f
  });
  return /* @__PURE__ */ a(
    oe,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: o(
        "bg-background h-8 w-full shadow-none",
        v,
        e
      ),
      ...x
    }
  );
}
function ol({
  className: e,
  p: t,
  px: r,
  py: n,
  m: s,
  mx: i,
  my: d,
  shadow: l,
  w: u,
  h: m,
  display: f,
  ...x
}) {
  const v = ue({
    p: t,
    px: r,
    py: n,
    m: s,
    mx: i,
    my: d,
    shadow: l,
    w: u,
    h: m,
    display: f
  });
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: o("flex flex-col gap-2 p-2", v, e),
      ...x
    }
  );
}
function sl({
  className: e,
  p: t,
  px: r,
  py: n,
  m: s,
  mx: i,
  my: d,
  shadow: l,
  w: u,
  h: m,
  display: f,
  ...x
}) {
  const v = ue({
    p: t,
    px: r,
    py: n,
    m: s,
    mx: i,
    my: d,
    shadow: l,
    w: u,
    h: m,
    display: f
  });
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: o("flex flex-col gap-2 p-2", v, e),
      ...x
    }
  );
}
function il({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    na,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: o("bg-sidebar-border mx-2 w-auto", e),
      ...t
    }
  );
}
function dl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: o(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      ...t
    }
  );
}
function ll({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: o("relative flex w-full min-w-0 flex-col p-2", e),
      ...t
    }
  );
}
function cl({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? J : "div",
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: o(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        e
      ),
      ...r
    }
  );
}
function ul({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? J : "button",
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: o(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...r
    }
  );
}
function pl({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: o("w-full text-sm", e),
      ...t
    }
  );
}
function ml({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: o("flex w-full min-w-0 flex-col gap-1", e),
      ...t
    }
  );
}
function fl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: o("group/menu-item relative", e),
      ...t
    }
  );
}
const Lo = L(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function gl({
  asChild: e = !1,
  isActive: t = !1,
  variant: r = "default",
  size: n = "default",
  tooltip: s,
  className: i,
  ...d
}) {
  const l = e ? J : "button", { isMobile: u, state: m } = He(), f = /* @__PURE__ */ a(
    l,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": n,
      "data-active": t,
      className: o(Lo({ variant: r, size: n }), i),
      ...d
    }
  );
  return s ? (typeof s == "string" && (s = {
    children: s
  }), /* @__PURE__ */ p(Et, { children: [
    /* @__PURE__ */ a(At, { asChild: !0, children: f }),
    /* @__PURE__ */ a(
      Lt,
      {
        side: "right",
        align: "center",
        hidden: m !== "collapsed" || u,
        ...s
      }
    )
  ] })) : f;
}
function vl({
  className: e,
  asChild: t = !1,
  showOnHover: r = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    t ? J : "button",
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: o(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        r && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        e
      ),
      ...n
    }
  );
}
function hl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: o(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  );
}
function bl({
  className: e,
  showIcon: t = !1,
  ...r
}) {
  const n = c.useId(), s = c.useMemo(() => {
    let i = 0;
    for (let d = 0; d < n.length; d++)
      i = i * 31 + n.charCodeAt(d) >>> 0;
    return `${i % 41 + 50}%`;
  }, [n]);
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: o("flex h-8 items-center gap-2 rounded-md px-2", e),
      ...r,
      children: [
        t && /* @__PURE__ */ a(
          Mt,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ a(
          Mt,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": s
            }
          }
        )
      ]
    }
  );
}
function xl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: o(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  );
}
function yl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: o("group/menu-sub-item relative", e),
      ...t
    }
  );
}
function wl({
  asChild: e = !1,
  size: t = "md",
  isActive: r = !1,
  className: n,
  ...s
}) {
  return /* @__PURE__ */ a(
    e ? J : "a",
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": t,
      "data-active": r,
      className: o(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        t === "sm" && "text-xs",
        t === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        n
      ),
      ...s
    }
  );
}
function Nl({
  className: e,
  defaultValue: t,
  value: r,
  min: n = 0,
  max: s = 100,
  ...i
}) {
  const d = c.useMemo(
    () => Array.isArray(r) ? r : Array.isArray(t) ? t : [n, s],
    [r, t, n, s]
  );
  return /* @__PURE__ */ p(
    Me.Root,
    {
      "data-slot": "slider",
      defaultValue: t,
      value: r,
      min: n,
      max: s,
      className: o(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        e
      ),
      ...i,
      children: [
        /* @__PURE__ */ a(
          Me.Track,
          {
            "data-slot": "slider-track",
            className: o(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-4 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ a(
              Me.Range,
              {
                "data-slot": "slider-range",
                className: o(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: d.length }, (l, u) => /* @__PURE__ */ a(
          Me.Thumb,
          {
            "data-slot": "slider-thumb",
            className: "border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          u
        ))
      ]
    }
  );
}
const kl = ({ ...e }) => {
  const { theme: t = "system" } = Va();
  return /* @__PURE__ */ a(
    Fa,
    {
      theme: t,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)"
      },
      ...e
    }
  );
};
function Cl({
  type: e = "default",
  title: t,
  description: r,
  duration: n,
  closeButton: s,
  action: i,
  cancel: d,
  onDismiss: l
}) {
  const u = {
    description: r,
    duration: n,
    closeButton: s,
    action: i,
    cancel: d,
    onDismiss: l
  };
  switch (e) {
    case "success":
      return pe.success(t, u);
    case "info":
      return pe.info(t, u);
    case "warning":
      return pe.warning(t, u);
    case "error":
      return pe.error(t, u);
    case "loading":
      return pe.loading(t, u);
    default:
      return pe(t, u);
  }
}
function Sl({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    yt.Root,
    {
      "data-slot": "switch",
      className: o(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-switch-background focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        yt.Thumb,
        {
          "data-slot": "switch-thumb",
          className: o(
            "bg-card dark:data-[state=unchecked]:bg-card-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
function zl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ a(
        "table",
        {
          "data-slot": "table",
          className: o("w-full caption-bottom text-sm", e),
          ...t
        }
      )
    }
  );
}
function Ml({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "thead",
    {
      "data-slot": "table-header",
      className: o("[&_tr]:border-b", e),
      ...t
    }
  );
}
function Il({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "table-body",
      className: o("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function Rl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: o(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        e
      ),
      ...t
    }
  );
}
function _l({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tr",
    {
      "data-slot": "table-row",
      className: o(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        e
      ),
      ...t
    }
  );
}
function Tl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "th",
    {
      "data-slot": "table-head",
      className: o(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function Pl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "td",
    {
      "data-slot": "table-cell",
      className: o(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function Dl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "caption",
    {
      "data-slot": "table-caption",
      className: o("text-muted-foreground mt-4 text-sm", e),
      ...t
    }
  );
}
function jl({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    re.Root,
    {
      "data-slot": "tabs",
      className: o("flex flex-col gap-2", e),
      ...t
    }
  );
}
const Oo = L(
  "inline-flex w-fit items-center justify-center p-1 rounded-lg",
  {
    variants: {
      variant: {
        default: "bg-muted",
        outline: "border-2 border-border bg-transparent",
        primary: "bg-primary-lightest",
        secondary: "bg-secondary-lightest"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), $o = c.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
  re.List,
  {
    ref: n,
    "data-slot": "tabs-list",
    className: o(Oo({ variant: t }), e),
    ...r
  }
));
$o.displayName = re.List.displayName;
const Vo = L(
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-muted-foreground data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm focus:bg-card/50",
        primary: "text-primary-light data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm focus:bg-primary/10",
        secondary: "text-secondary-light data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-sm focus:bg-secondary/10"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Fo = c.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
  re.Trigger,
  {
    ref: n,
    "data-slot": "tabs-trigger",
    className: o(Vo({ variant: t }), e),
    ...r
  }
));
Fo.displayName = re.Trigger.displayName;
function El({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    re.Content,
    {
      "data-slot": "tabs-content",
      className: o("flex-1 outline-none", e),
      ...t
    }
  );
}
const ia = L(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        md: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Al({
  className: e,
  variant: t,
  size: r,
  ...n
}) {
  return /* @__PURE__ */ a(
    Ba.Root,
    {
      "data-slot": "toggle",
      className: o(ia({ variant: t, size: r, className: e })),
      ...n
    }
  );
}
const da = c.createContext({
  size: "default",
  variant: "default"
});
function Ll({
  className: e,
  variant: t,
  size: r,
  children: n,
  ...s
}) {
  return /* @__PURE__ */ a(
    Dt.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": t,
      "data-size": r,
      className: o(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        e
      ),
      ...s,
      children: /* @__PURE__ */ a(da.Provider, { value: { variant: t, size: r }, children: n })
    }
  );
}
function Ol({
  className: e,
  children: t,
  variant: r,
  size: n = "md",
  ...s
}) {
  const i = c.useContext(da);
  return /* @__PURE__ */ a(
    Dt.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": i.variant || r,
      "data-size": i.size || n,
      className: o(
        ia({
          variant: i.variant || r,
          size: i.size || n
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        e
      ),
      ...s,
      children: t
    }
  );
}
const Bo = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "primary-dark",
  "primary-light",
  "primary-lighter",
  "primary-lightest",
  "secondary",
  "secondary-foreground",
  "secondary-dark",
  "secondary-light",
  "secondary-lighter",
  "secondary-lightest",
  "neutral-100",
  "neutral-200",
  "neutral-300",
  "neutral-400",
  "neutral-500",
  "neutral-600",
  "neutral-700",
  "neutral-800",
  "neutral-900",
  "neutral-1000",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "accent-hover",
  "destructive",
  "destructive-foreground",
  "destructive-light",
  "destructive-lighter",
  "destructive-lightest",
  "destructive-dark",
  "success",
  "success-foreground",
  "success-light",
  "success-lighter",
  "success-lightest",
  "success-dark",
  "error",
  "error-foreground",
  "warning",
  "warning-foreground",
  "info",
  "info-foreground",
  "info-light",
  "info-dark",
  "red",
  "red-dark",
  "ivory",
  "ivory-dark",
  "border",
  "input",
  "input-background",
  "switch-background",
  "ring",
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
  "sidebar",
  "sidebar-foreground",
  "sidebar-primary",
  "sidebar-primary-foreground",
  "sidebar-accent",
  "sidebar-accent-foreground",
  "sidebar-border",
  "sidebar-ring"
];
function $l(e) {
  return e;
}
const la = {
  background: "#fcfbf9",
  foreground: "#000000",
  card: "#ffffff",
  "card-foreground": "#000000",
  popover: "#ffffff",
  "popover-foreground": "#000000",
  primary: "#251f42",
  "primary-foreground": "#ffffff",
  "primary-dark": "#1f1c32",
  "primary-light": "#767091",
  "primary-lighter": "#cecae0",
  "primary-lightest": "#f1f0f5",
  secondary: "#ff7960",
  "secondary-foreground": "#ffffff",
  "secondary-dark": "#8a4d58",
  "secondary-light": "#ffb2a3",
  "secondary-lighter": "#ffe1db",
  "secondary-lightest": "#fff0ed",
  "neutral-100": "#ffffff",
  "neutral-200": "#f2f2f2",
  "neutral-300": "#cccccc",
  "neutral-400": "#b3b3b3",
  "neutral-500": "#999999",
  "neutral-600": "#7f7f7f",
  "neutral-700": "#505050",
  "neutral-800": "#262626",
  "neutral-900": "#1a1a1a",
  "neutral-1000": "#000000",
  muted: "#f2f2f2",
  "muted-foreground": "#505050",
  accent: "#ff7960",
  "accent-foreground": "#ffffff",
  "accent-hover": "#8a4d58",
  destructive: "#d17171",
  "destructive-foreground": "#ffffff",
  "destructive-light": "#d99898",
  "destructive-lighter": "#e3cccc",
  "destructive-lightest": "#f7f0f0",
  "destructive-dark": "#c24f4f",
  success: "#02b16b",
  "success-foreground": "#ffffff",
  "success-light": "#70d4ac",
  "success-lighter": "#bee8d7",
  "success-lightest": "#e6f7f0",
  "success-dark": "#1e6942",
  error: "#d17171",
  "error-foreground": "#ffffff",
  warning: "#ffb2a3",
  "warning-foreground": "#1a1a1a",
  info: "#cecae0",
  "info-foreground": "#1f1c32",
  "info-light": "#f1f0f5",
  "info-dark": "#251f42",
  red: "#f0d8cc",
  "red-dark": "#8a4d58",
  ivory: "#fcfbf9",
  "ivory-dark": "#faf5f0",
  border: "#cccccc",
  input: "#cccccc",
  "input-background": "#ffffff",
  "switch-background": "#b3b3b3",
  ring: "#251f42",
  "chart-1": "#251f42",
  "chart-2": "#ff7960",
  "chart-3": "#02b16b",
  "chart-4": "#d17171",
  "chart-5": "#767091",
  sidebar: "#ffffff",
  "sidebar-foreground": "#000000",
  "sidebar-primary": "#251f42",
  "sidebar-primary-foreground": "#ffffff",
  "sidebar-accent": "#f1f0f5",
  "sidebar-accent-foreground": "#000000",
  "sidebar-border": "#cccccc",
  "sidebar-ring": "#251f42"
}, Yo = {
  ...la,
  background: "#111111",
  foreground: "#eaeaea",
  card: "#1a1a1a",
  "card-foreground": "#eaeaea",
  popover: "#222222",
  "popover-foreground": "#eaeaea",
  primary: "#eaeaea",
  "primary-foreground": "#111111",
  "primary-dark": "#d4d4d4",
  "primary-light": "#ffffff",
  "primary-lighter": "#3a3a3a",
  "primary-lightest": "#1a1a1a",
  "secondary-dark": "#e5614a",
  "secondary-lighter": "#3d1f1a",
  "secondary-lightest": "#1f1210",
  muted: "#1a1a1a",
  "muted-foreground": "#a0a0a0",
  "accent-hover": "#ffb2a3",
  destructive: "#ef4444",
  "destructive-light": "#f87171",
  "destructive-lighter": "#3d1717",
  "destructive-lightest": "#1f0f0f",
  "destructive-dark": "#dc2626",
  success: "#22c55e",
  "success-foreground": "#111111",
  "success-light": "#4ade80",
  "success-lighter": "#14301f",
  "success-lightest": "#0f1f14",
  "success-dark": "#16a34a",
  error: "#ef4444",
  warning: "#fbbf24",
  "warning-foreground": "#111111",
  info: "#60a5fa",
  "info-foreground": "#111111",
  "info-light": "#93c5fd",
  "info-dark": "#3b82f6",
  border: "#2a2a2a",
  input: "#2a2a2a",
  "input-background": "#1a1a1a",
  "switch-background": "#3a3a3a",
  ring: "#ff7960",
  "chart-1": "#eaeaea",
  "chart-3": "#22c55e",
  "chart-4": "#ef4444",
  "chart-5": "#a0a0a0",
  sidebar: "#111111",
  "sidebar-foreground": "#eaeaea",
  "sidebar-primary": "#ff7960",
  "sidebar-accent": "#1a1a1a",
  "sidebar-accent-foreground": "#eaeaea",
  "sidebar-border": "#2a2a2a",
  "sidebar-ring": "#ff7960"
}, ca = za(void 0), ua = "theme";
function Go(e) {
  if (typeof window > "u")
    return null;
  const t = localStorage.getItem(e);
  return t === "light" || t === "dark" || t === "system" ? t : null;
}
function Vl({
  children: e,
  lightColors: t,
  darkColors: r,
  mode: n,
  defaultMode: s = "system",
  storageKey: i = ua,
  onModeChange: d
}) {
  const l = t ?? la, u = r ?? Yo, [m, f] = bt(() => Go(i) ?? s), [x, v] = bt(!1), b = n !== void 0, y = b ? n : m;
  _e(() => {
    if (typeof window > "u")
      return;
    const g = window.matchMedia("(prefers-color-scheme: dark)"), S = () => v(g.matches);
    return S(), g.addEventListener("change", S), () => {
      g.removeEventListener("change", S);
    };
  }, []);
  const N = y === "system" ? x ? "dark" : "light" : y;
  _e(() => {
    if (typeof document > "u")
      return;
    const g = document.documentElement, S = N === "dark" ? u : l;
    for (const T of Bo)
      g.style.setProperty(`--${T}`, S[T]);
    g.classList.toggle("dark", N === "dark");
  }, [N, u, l]), _e(() => {
    b || typeof window > "u" || localStorage.setItem(i, m);
  }, [m, b, i]);
  const h = Ca(
    (g) => {
      b || f(g), d?.(g);
    },
    [b, d]
  ), C = Sa(() => ({
    mode: y,
    resolvedMode: N,
    setMode: h
  }), [N, y, h]);
  return /* @__PURE__ */ a(ca.Provider, { value: C, children: e });
}
function Uo() {
  const e = Ma(ca);
  if (!e)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}
function Fl() {
  _e(() => {
    if (typeof window > "u")
      return;
    const e = localStorage.getItem(ua), t = document.documentElement;
    if (e === "dark") {
      t.classList.add("dark");
      return;
    }
    if (e === "light") {
      t.classList.remove("dark");
      return;
    }
    t.classList.toggle(
      "dark",
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }, []);
}
function Bl({
  LightIcon: e = ka,
  DarkIcon: t = Na,
  srText: r,
  iconSize: n = 20,
  className: s = "",
  iconClassName: i = ""
}) {
  const { resolvedMode: d, setMode: l } = Uo(), u = d === "dark";
  return /* @__PURE__ */ p(
    Be,
    {
      variant: "outline",
      size: "icon",
      onClick: () => l(u ? "light" : "dark"),
      className: `rounded-full ${s}`,
      children: [
        u ? /* @__PURE__ */ a(t, { size: n, className: i }) : /* @__PURE__ */ a(e, { size: n, className: i }),
        r ? /* @__PURE__ */ a("span", { className: "sr-only", children: r }) : null
      ]
    }
  );
}
const Yl = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  12: "48px",
  14: "56px",
  16: "64px",
  20: "80px",
  24: "96px"
}, Gl = {
  none: "0px",
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  full: "9999px"
}, Ul = {
  sans: [
    "Mulish",
    "Noto Sans JP",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "sans-serif"
  ],
  serif: ["IBM Plex Serif", "Noto Serif JP", "ui-serif", "Georgia", "serif"]
}, Hl = {
  xs: ["12px", "16px"],
  sm: ["14px", "20px"],
  base: ["16px", "24px"],
  lg: ["18px", "28px"],
  xl: ["20px", "28px"],
  "2xl": ["24px", "32px"],
  "3xl": ["30px", "36px"],
  "4xl": ["36px", "40px"]
}, Kl = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, Xl = {
  // Neutral scale (slightly warm, platform-friendly)
  gray: {
    0: "#ffffff",
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827"
  },
  // Muted teal scale (primary accent)
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a"
  },
  // Feedback colors
  green: {
    500: "#16a34a"
  },
  amber: {
    500: "#f59e0b"
  },
  red: {
    500: "#dc2626"
  }
}, ql = {
  background: {
    primary: "bg-primary",
    secondary: "bg-secondary",
    elevated: "bg-elevated",
    inverse: "bg-inverse"
  },
  text: {
    primary: "text-primary",
    secondary: "text-secondary",
    muted: "text-muted",
    inverse: "text-inverse"
  },
  border: {
    default: "border-default",
    muted: "border-muted",
    focus: "border-focus"
  },
  accent: {
    primary: "accent-primary",
    subtle: "accent-subtle"
  },
  feedback: {
    success: "feedback-success",
    warning: "feedback-warning",
    error: "feedback-error"
  }
};
export {
  xs as Accordion,
  Ns as AccordionContent,
  ys as AccordionItem,
  ws as AccordionTrigger,
  ks as Alert,
  Ss as AlertDescription,
  zs as AlertDialog,
  Ds as AlertDialogAction,
  js as AlertDialogCancel,
  Is as AlertDialogContent,
  Ps as AlertDialogDescription,
  _s as AlertDialogFooter,
  Rs as AlertDialogHeader,
  pn as AlertDialogOverlay,
  un as AlertDialogPortal,
  Ts as AlertDialogTitle,
  Ms as AlertDialogTrigger,
  Cs as AlertTitle,
  Es as AspectRatio,
  As as Avatar,
  Os as AvatarFallback,
  Ls as AvatarImage,
  $s as Badge,
  xr as Bleed,
  Ot as Box,
  Vs as Breadcrumb,
  Hs as BreadcrumbEllipsis,
  Bs as BreadcrumbItem,
  Ys as BreadcrumbLink,
  Fs as BreadcrumbList,
  Gs as BreadcrumbPage,
  Us as BreadcrumbSeparator,
  Be as Button,
  fn as ButtonGroup,
  Ks as ButtonGroupSeparator,
  Xs as ButtonGroupText,
  Xe as Calendar,
  qs as Card,
  Qs as CardAction,
  ei as CardContent,
  Zs as CardDescription,
  ti as CardFooter,
  Ws as CardHeader,
  Js as CardTitle,
  ai as Carousel,
  ri as CarouselContent,
  ni as CarouselItem,
  si as CarouselNext,
  oi as CarouselPrevious,
  ur as Center,
  ii as ChartContainer,
  ci as ChartLegend,
  ui as ChartLegendContent,
  hn as ChartStyle,
  di as ChartTooltip,
  li as ChartTooltipContent,
  ut as Checkbox,
  ls as Chip,
  pi as Collapsible,
  fi as CollapsibleContent,
  mi as CollapsibleTrigger,
  zn as Command,
  bi as CommandDialog,
  wi as CommandEmpty,
  Ni as CommandGroup,
  xi as CommandInput,
  Ci as CommandItem,
  yi as CommandList,
  ki as CommandSeparator,
  Si as CommandShortcut,
  ir as Container,
  zi as ContextMenu,
  ji as ContextMenuCheckboxItem,
  Di as ContextMenuContent,
  Mn as ContextMenuGroup,
  In as ContextMenuItem,
  Ai as ContextMenuLabel,
  Ii as ContextMenuPortal,
  _i as ContextMenuRadioGroup,
  Ei as ContextMenuRadioItem,
  Li as ContextMenuSeparator,
  Oi as ContextMenuShortcut,
  Ri as ContextMenuSub,
  Pi as ContextMenuSubContent,
  Ti as ContextMenuSubTrigger,
  Mi as ContextMenuTrigger,
  ln as CountBadge,
  ua as DEFAULT_THEME_STORAGE_KEY,
  Kt as DateTimePicker,
  xn as Dialog,
  vi as DialogClose,
  Nn as DialogContent,
  Sn as DialogDescription,
  hi as DialogFooter,
  kn as DialogHeader,
  wn as DialogOverlay,
  yn as DialogPortal,
  Cn as DialogTitle,
  gi as DialogTrigger,
  gr as Divider,
  $i as Drawer,
  Bi as DrawerBody,
  Fi as DrawerClose,
  Yi as DrawerContent,
  Ki as DrawerDescription,
  Ui as DrawerFooter,
  Gi as DrawerHeader,
  _n as DrawerOverlay,
  Rn as DrawerPortal,
  Hi as DrawerTitle,
  Vi as DrawerTrigger,
  Xi as DropdownMenu,
  Zi as DropdownMenuCheckboxItem,
  Ji as DropdownMenuContent,
  Jt as DropdownMenuGroup,
  Zt as DropdownMenuItem,
  td as DropdownMenuLabel,
  qi as DropdownMenuPortal,
  Qi as DropdownMenuRadioGroup,
  ed as DropdownMenuRadioItem,
  ad as DropdownMenuSeparator,
  rd as DropdownMenuShortcut,
  nd as DropdownMenuSub,
  sd as DropdownMenuSubContent,
  od as DropdownMenuSubTrigger,
  Wi as DropdownMenuTrigger,
  Tn as Empty,
  An as EmptyActions,
  ea as EmptyContent,
  jn as EmptyDescription,
  Pn as EmptyHeader,
  En as EmptyIcon,
  Qt as EmptyMedia,
  Dn as EmptyTitle,
  Vn as Field,
  Bn as FieldContent,
  ta as FieldDescription,
  Gn as FieldError,
  Kn as FieldErrorText,
  $n as FieldGroup,
  Hn as FieldHelpText,
  Fn as FieldLabel,
  On as FieldLegend,
  Un as FieldSeparator,
  Ln as FieldSet,
  Yn as FieldTitle,
  id as Form,
  Zr as FormCalendar,
  Qr as FormCheckbox,
  ud as FormControl,
  rn as FormDateTimePicker,
  pd as FormDescription,
  dd as FormField,
  Xr as FormInput,
  ld as FormItem,
  cd as FormLabel,
  on as FormMedia,
  md as FormMessage,
  yr as FormMultiselect,
  bs as FormOTP,
  tn as FormPhoneInput,
  en as FormRadioGroup,
  Jr as FormSelect,
  qr as FormTextarea,
  an as FormTimePicker,
  rr as Grid,
  or as GridItem,
  ft as HStack,
  fd as HoverCard,
  hd as HoverCardArrow,
  vd as HoverCardContent,
  gd as HoverCardTrigger,
  cs as Icon,
  Qa as Inline,
  oe as Input,
  Xn as InputGroup,
  qn as InputLeftAddon,
  Jn as InputLeftElement,
  Kr as InputOTP,
  gs as InputOTPGroup,
  hs as InputOTPSeparator,
  vs as InputOTPSlot,
  Wn as InputRightAddon,
  Zn as InputRightElement,
  eo as Item,
  so as ItemActions,
  ro as ItemContent,
  oo as ItemDescription,
  lo as ItemFooter,
  bd as ItemGroup,
  io as ItemHeader,
  ao as ItemMedia,
  xd as ItemSeparator,
  no as ItemTitle,
  co as Kbd,
  uo as KbdGroup,
  Z as Label,
  mr as LayoutAspectRatio,
  yd as Menubar,
  Sd as MenubarCheckboxItem,
  Cd as MenubarContent,
  po as MenubarGroup,
  fo as MenubarItem,
  Md as MenubarLabel,
  wd as MenubarMenu,
  mo as MenubarPortal,
  Nd as MenubarRadioGroup,
  zd as MenubarRadioItem,
  Id as MenubarSeparator,
  Rd as MenubarShortcut,
  _d as MenubarSub,
  Pd as MenubarSubContent,
  Td as MenubarSubTrigger,
  kd as MenubarTrigger,
  Ka as Multiselect,
  Dd as NavigationMenu,
  Ld as NavigationMenuContent,
  Od as NavigationMenuIndicator,
  Ed as NavigationMenuItem,
  ho as NavigationMenuLink,
  jd as NavigationMenuList,
  Ad as NavigationMenuTrigger,
  vo as NavigationMenuViewport,
  $d as Pagination,
  Vd as PaginationContent,
  Gd as PaginationEllipsis,
  Fd as PaginationItem,
  oa as PaginationLink,
  Yd as PaginationNext,
  Bd as PaginationPrevious,
  Bt as PhoneInput,
  he as Popover,
  us as PopoverAnchor,
  Ye as PopoverContent,
  be as PopoverTrigger,
  Ud as Progress,
  Dr as RadioGroup,
  jr as RadioGroupItem,
  Xd as ResizableHandle,
  Kd as ResizablePanel,
  Hd as ResizablePanelGroup,
  Er as ScrollArea,
  Ar as ScrollBar,
  lr as Section,
  yo as SegmentControl,
  qd as SegmentControlContent,
  No as SegmentControlItem,
  wo as SegmentControlList,
  Ze as Select,
  De as SelectContent,
  ps as SelectGroup,
  je as SelectItem,
  ms as SelectLabel,
  kr as SelectScrollDownButton,
  Nr as SelectScrollUpButton,
  fs as SelectSeparator,
  et as SelectTrigger,
  Qe as SelectValue,
  na as Separator,
  ko as Sheet,
  Jd as SheetClose,
  zo as SheetContent,
  Ro as SheetDescription,
  Zd as SheetFooter,
  Mo as SheetHeader,
  Io as SheetTitle,
  Wd as SheetTrigger,
  el as Sidebar,
  dl as SidebarContent,
  sl as SidebarFooter,
  ll as SidebarGroup,
  ul as SidebarGroupAction,
  pl as SidebarGroupContent,
  cl as SidebarGroupLabel,
  ol as SidebarHeader,
  nl as SidebarInput,
  rl as SidebarInset,
  ml as SidebarMenu,
  vl as SidebarMenuAction,
  hl as SidebarMenuBadge,
  gl as SidebarMenuButton,
  fl as SidebarMenuItem,
  bl as SidebarMenuSkeleton,
  xl as SidebarMenuSub,
  wl as SidebarMenuSubButton,
  yl as SidebarMenuSubItem,
  Qd as SidebarProvider,
  al as SidebarRail,
  il as SidebarSeparator,
  tl as SidebarTrigger,
  Mt as Skeleton,
  Nl as Slider,
  tr as Spacer,
  de as Spinner,
  Ua as SpinnerContainer,
  Ha as SpinnerOverlay,
  mt as Stack,
  Sl as Switch,
  zl as Table,
  Il as TableBody,
  Dl as TableCaption,
  Pl as TableCell,
  Rl as TableFooter,
  Tl as TableHead,
  Ml as TableHeader,
  _l as TableRow,
  jl as Tabs,
  El as TabsContent,
  $o as TabsList,
  Fo as TabsTrigger,
  Vt as Textarea,
  Vl as ThemeProvider,
  Bl as ThemeToggle,
  Yt as TimePicker,
  kl as Toaster,
  Al as Toggle,
  Ll as ToggleGroup,
  Ol as ToggleGroupItem,
  Et as Tooltip,
  Lt as TooltipContent,
  pt as TooltipProvider,
  At as TooltipTrigger,
  V as Typography,
  Q as VStack,
  hr as Wrap,
  cn as alertVariants,
  mn as badgeVariants,
  Xl as baseColors,
  ae as buttonVariants,
  Ya as checkboxVariants,
  o as cn,
  dn as countBadgeVariants,
  Zl as cva,
  Gt as dateTimePickerVariants,
  Yo as defaultDarkThemeColors,
  la as defaultLightThemeColors,
  $l as defineThemeColors,
  Ul as fontFamily,
  Hl as fontSize,
  Kl as fontWeight,
  Cr as inputVariants,
  ec as isValidPhoneNumber,
  to as itemMediaVariants,
  Qn as itemVariants,
  go as navigationMenuTriggerStyle,
  Lr as phoneInputVariants,
  Gl as radius,
  bo as segmentControlVariants,
  xo as segmentItemVariants,
  ql as semanticColors,
  Cl as showToast,
  Lo as sidebarMenuButtonVariants,
  Yl as spacing,
  Ga as spinnerVariants,
  Oo as tabsListVariants,
  Vo as tabsTriggerVariants,
  Pr as textareaVariants,
  Bo as themeColorTokens,
  Vr as timePickerVariants,
  ia as toggleVariants,
  Xa as typographyVariants,
  Fl as useApplyTheme,
  Ue as useFormField,
  _o as useIsMobile,
  He as useSidebar,
  Uo as useTheme
};
