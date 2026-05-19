import { jsxs as p, jsx as a, Fragment as nt } from "react/jsx-runtime";
import { MinusIcon as Nt, CheckIcon as ge, Loader2 as kt, SearchIcon as Ee, PackageOpen as le, ChevronDownIcon as Ae, ChevronUpIcon as sa, ChevronRight as ve, ChevronLeft as Ce, CircleIcon as Le, ChevronDown as Ve, Clock as Te, X as ot, CalendarIcon as Pe, MoreHorizontal as ia, ArrowLeft as da, ArrowRight as la, XIcon as Ct, ChevronRightIcon as Fe, ChevronLeftIcon as ca, MoreHorizontalIcon as ua, GripVerticalIcon as pa, PanelLeftIcon as ma, Sun as fa, Moon as ga } from "lucide-react";
import * as c from "react";
import q, { useState as ht, useEffect as _e, useCallback as va, useMemo as ha, createContext as ba, useContext as xa } from "react";
import { Slot as J } from "@radix-ui/react-slot";
import { clsx as ya } from "clsx";
import { twMerge as wa } from "tailwind-merge";
import { cva as P } from "class-variance-authority";
import { cva as Ol } from "class-variance-authority";
import * as Xe from "@radix-ui/react-checkbox";
import * as fe from "@radix-ui/react-tooltip";
import * as Na from "@radix-ui/react-label";
import { DayPicker as Se } from "react-day-picker";
import * as we from "@radix-ui/react-popover";
import * as X from "@radix-ui/react-select";
import * as qe from "@radix-ui/react-radio-group";
import ka from "react-phone-number-input";
import { isValidPhoneNumber as Bl } from "react-phone-number-input";
import St from "react-phone-number-input/flags";
import * as ye from "@radix-ui/react-scroll-area";
import { OTPInput as Ca, OTPInputContext as Sa } from "input-otp";
import * as Ne from "@radix-ui/react-accordion";
import * as ne from "@radix-ui/react-alert-dialog";
import * as za from "@radix-ui/react-aspect-ratio";
import * as st from "@radix-ui/react-avatar";
import * as zt from "@radix-ui/react-separator";
import Ma from "embla-carousel-react";
import * as it from "recharts";
import * as dt from "@radix-ui/react-collapsible";
import { Command as ce } from "cmdk";
import * as B from "@radix-ui/react-dialog";
import * as H from "@radix-ui/react-context-menu";
import { Drawer as oe } from "vaul";
import * as U from "@radix-ui/react-dropdown-menu";
import { FormProvider as Ia, useFormContext as Ra, useFormState as _a, Controller as Ta } from "react-hook-form";
import * as ke from "@radix-ui/react-hover-card";
import * as K from "@radix-ui/react-menubar";
import * as se from "@radix-ui/react-navigation-menu";
import * as bt from "@radix-ui/react-progress";
import * as lt from "react-resizable-panels";
import * as re from "@radix-ui/react-tabs";
import * as Me from "@radix-ui/react-slider";
import { useTheme as Pa } from "next-themes";
import { Toaster as Da, toast as pe } from "sonner";
import * as xt from "@radix-ui/react-switch";
import * as ja from "@radix-ui/react-toggle";
import * as Mt from "@radix-ui/react-toggle-group";
function o(...e) {
  return wa(ya(e));
}
function It(e, t) {
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
const Ea = P(
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
), ct = c.forwardRef(({ className: e, variant: t, size: r, label: n, checked: s, ...i }, d) => {
  let l = "ml-2 align-middle select-none";
  r === "sm" ? l += " text-xs" : r === "lg" ? l += " text-base" : l += " text-sm";
  const u = o(
    r === "sm" ? "size-3" : r === "lg" ? "size-4" : "size-3.5"
  );
  return /* @__PURE__ */ p("label", { className: "inline-flex items-center cursor-pointer", children: [
    /* @__PURE__ */ a(
      Xe.Root,
      {
        ref: d,
        "data-slot": "checkbox",
        className: o(Ea({ variant: t, size: r }), e),
        checked: s,
        ...i,
        children: /* @__PURE__ */ a(
          Xe.Indicator,
          {
            "data-slot": "checkbox-indicator",
            className: "flex items-center justify-center text-current transition-none",
            children: s === "indeterminate" ? /* @__PURE__ */ a(Nt, { className: u }) : /* @__PURE__ */ a(ge, { className: u })
          }
        )
      }
    ),
    n && /* @__PURE__ */ a("span", { className: l, children: n })
  ] });
});
ct.displayName = Xe.Root.displayName;
const Aa = P("inline-block shrink-0 animate-spin", {
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
}), ie = c.forwardRef(
  ({ className: e, variant: t, size: r, label: n = "Loading...", ...s }, i) => /* @__PURE__ */ a(
    kt,
    {
      ref: i,
      role: "status",
      "data-slot": "spinner",
      "aria-label": n,
      className: o(Aa({ variant: t, size: r }), e),
      ...s
    }
  )
);
ie.displayName = "Spinner";
const La = c.forwardRef(({ className: e, children: t, text: r, ...n }, s) => /* @__PURE__ */ p(
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
La.displayName = "SpinnerContainer";
const Va = c.forwardRef(
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
Va.displayName = "SpinnerOverlay";
function ut({
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
function Rt({
  ...e
}) {
  return /* @__PURE__ */ a(ut, { children: /* @__PURE__ */ a(fe.Root, { "data-slot": "tooltip", ...e }) });
}
function _t({
  ...e
}) {
  return /* @__PURE__ */ a(fe.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function Tt({
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
function Fa({
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
  apiError: g,
  emptyText: b = "No options",
  size: f = "md",
  isSearchable: v = !0,
  searchFn: y,
  searchPlaceholder: N = "Search..."
}) {
  const x = t !== void 0, [h, k] = c.useState(
    r || []
  ), R = x ? t : h, [_, T] = c.useState(!1), [j, L] = c.useState(""), D = It(j, 300), O = c.useRef(null), C = c.useRef(null);
  c.useEffect(() => {
    y && D !== void 0 && y(D);
  }, [D, y]);
  const I = c.useMemo(() => {
    if (!v || y || !j)
      return e;
    const w = j.toLowerCase();
    return e.filter((M) => (typeof M.label == "string" ? M.label : String(M.value)).toLowerCase().includes(w));
  }, [e, j, v, y]);
  c.useEffect(() => {
    _ && v && O.current && O.current.focus(), _ || L("");
  }, [_, v]), c.useEffect(() => {
    if (!_) return;
    function w(M) {
      C.current && !C.current.contains(M.target) && T(!1);
    }
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [_]);
  function E(w) {
    const z = R.includes(w) ? R.filter((A) => A !== w) : [...R, w];
    x || k(z), n?.(z);
  }
  function V() {
    i || T((w) => !w);
  }
  function S(w) {
    w.currentTarget.contains(w.relatedTarget) || T(!1);
  }
  return /* @__PURE__ */ p(
    "div",
    {
      className: o("relative", d),
      ref: C,
      tabIndex: -1,
      onBlur: S,
      children: [
        /* @__PURE__ */ a(ut, { children: /* @__PURE__ */ p(Rt, { children: [
          /* @__PURE__ */ a(_t, { asChild: !0, children: /* @__PURE__ */ p(
            "button",
            {
              type: "button",
              className: o(
                "border-input flex w-full items-center justify-between gap-2 rounded-md border bg-input-background whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
                f === "sm" && "px-2 py-1.5 text-xs h-9",
                f === "md" && "px-3 py-2 text-sm h-11",
                f === "lg" && "px-4 py-2.5 text-base h-12",
                i && "opacity-50 pointer-events-none"
              ),
              disabled: i,
              "aria-haspopup": "listbox",
              "aria-expanded": _,
              onClick: V,
              children: [
                /* @__PURE__ */ a(
                  "span",
                  {
                    className: "truncate block max-w-full",
                    style: { textOverflow: "ellipsis", overflow: "hidden" },
                    children: R.length === 0 ? /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: s }) : e.filter((z) => R.includes(z.value)).map(
                      (z) => typeof z.label == "string" ? z.label : String(z.value)
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
          R.length > 0 && /* @__PURE__ */ a(
            Tt,
            {
              sideOffset: 4,
              style: {
                maxWidth: "400px",
                whiteSpace: "normal",
                wordBreak: "break-word"
              },
              children: e.filter((w) => R.includes(w.value)).map(
                (w) => typeof w.label == "string" ? w.label : String(w.value)
              ).join(", ")
            }
          )
        ] }) }),
        _ && /* @__PURE__ */ p(
          "div",
          {
            className: "absolute left-0 right-0 z-10 mt-1 rounded-md border bg-popover shadow-md max-h-60 overflow-hidden flex flex-col",
            role: "listbox",
            children: [
              v && /* @__PURE__ */ a("div", { className: "p-2 border-b sticky top-0 bg-popover", children: /* @__PURE__ */ p("div", { className: "relative", children: [
                /* @__PURE__ */ a(Ee, { className: "absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
                /* @__PURE__ */ a(
                  "input",
                  {
                    ref: O,
                    type: "text",
                    className: o(
                      "w-full rounded-md border border-input bg-transparent pl-8 pr-2 outline-none focus:ring-2 focus:ring-ring/50",
                      f === "sm" && "py-1 text-xs",
                      f === "md" && "py-1.5 text-sm",
                      f === "lg" && "py-2 text-base"
                    ),
                    placeholder: N,
                    value: j,
                    onChange: (w) => L(w.target.value),
                    onClick: (w) => w.stopPropagation()
                  }
                )
              ] }) }),
              /* @__PURE__ */ a("div", { className: "overflow-auto flex-1", children: m ? /* @__PURE__ */ a("div", { className: "flex items-center justify-center py-6", children: /* @__PURE__ */ a(ie, { size: "md" }) }) : g?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 px-4 gap-2", children: /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  className: "text-destructive underline text-sm px-2 py-1 rounded hover:bg-destructive/10 transition-colors",
                  onClick: g.onClick,
                  children: g.text || "Error loading options. Click to retry."
                }
              ) }) : I.length === 0 ? /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center py-6 px-4 gap-2 text-muted-foreground", children: [
                /* @__PURE__ */ a(le, { className: "size-8 mb-2" }),
                /* @__PURE__ */ a("span", { children: j ? "No matches found" : b })
              ] }) : I.map((w) => {
                const M = R.includes(w.value);
                return /* @__PURE__ */ p(
                  "div",
                  {
                    className: o(
                      "flex items-center gap-2 cursor-pointer select-none hover:bg-accent hover:text-accent-foreground",
                      f === "sm" && "px-2 py-1.5 text-xs",
                      f === "md" && "px-3 py-2 text-sm",
                      f === "lg" && "px-4 py-2.5 text-base",
                      M && "bg-accent text-accent-foreground",
                      w.disabled && "opacity-50 pointer-events-none"
                    ),
                    onClick: () => !w.disabled && E(w.value),
                    "aria-selected": M,
                    role: "option",
                    tabIndex: -1,
                    children: [
                      l === "checkbox" ? /* @__PURE__ */ a(
                        ct,
                        {
                          checked: M,
                          tabIndex: -1,
                          className: "size-4 mr-2 pointer-events-none",
                          "aria-hidden": !0
                        }
                      ) : M && /* @__PURE__ */ a(ge, { className: "size-4 mr-2" }),
                      u ? u(w, M) : w.label
                    ]
                  },
                  w.value
                );
              }) })
            ]
          }
        )
      ]
    }
  );
}
const Oa = P("", {
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
}), $a = {
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
function F({
  className: e,
  variant: t,
  as: r,
  asChild: n = !1,
  ...s
}) {
  const i = n ? J : r ?? $a[t ?? "body-base"];
  return /* @__PURE__ */ a(
    i,
    {
      "data-slot": "typography",
      className: o(Oa({ variant: t }), e),
      ...s
    }
  );
}
function Z({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Na.Root,
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
const Ba = P("", {
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
}), Pt = q.forwardRef(
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
    height: g,
    display: b,
    children: f,
    ...v
  }, y) => /* @__PURE__ */ a(
    e,
    {
      ref: y,
      className: o(
        Ba({
          p: r,
          px: n,
          py: s,
          m: i,
          mx: d,
          my: l,
          shadow: u,
          width: m,
          height: g,
          display: b
        }),
        t
      ),
      ...v,
      children: f
    }
  )
);
Pt.displayName = "Box";
function $(e) {
  return e == null ? e : typeof e == "string" && /^\d+$/.test(e) ? Number(e) : e;
}
const Ga = P("flex", {
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
}), pt = q.forwardRef(
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
    m: g,
    mx: b,
    my: f,
    width: v,
    height: y,
    shadow: N,
    display: x,
    children: h,
    ...k
  }, R) => {
    const _ = [0, 1, 2, 3, 4, 6, 8, 12, 16, 20];
    let T;
    if (n !== void 0) {
      const j = Number($(n));
      T = _.includes(j) ? j : void 0;
    }
    return /* @__PURE__ */ a(
      e,
      {
        ref: R,
        className: o(
          Ga({
            direction: r,
            gap: T,
            align: s,
            justify: i,
            wrap: d,
            p: l,
            px: u,
            py: m,
            m: g,
            mx: b,
            my: f,
            width: v,
            height: y,
            shadow: N,
            display: x
          }),
          t
        ),
        ...k,
        children: h
      }
    );
  }
);
pt.displayName = "Stack";
const mt = q.forwardRef(
  ({ ...e }, t) => /* @__PURE__ */ a(pt, { ref: t, direction: "horizontal", ...e })
);
mt.displayName = "HStack";
const Q = q.forwardRef(
  ({ ...e }, t) => /* @__PURE__ */ a(pt, { ref: t, direction: "vertical", ...e })
);
Q.displayName = "VStack";
const Ya = P("flex-wrap", {
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
}), Ha = q.forwardRef(
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
    width: g,
    height: b,
    shadow: f,
    display: v,
    children: y,
    ...N
  }, x) => /* @__PURE__ */ a(
    e,
    {
      ref: x,
      className: o(
        Ya({
          gap: (() => {
            const h = [0, 1, 2, 3, 4, 6], k = typeof r == "number" ? r : r !== void 0 ? Number($(r)) : void 0;
            return h.includes(k) ? k : void 0;
          })(),
          align: n,
          p: s,
          px: i,
          py: d,
          m: l,
          mx: u,
          my: m,
          width: g,
          height: b,
          shadow: f,
          display: v
        }),
        t
      ),
      ...N,
      children: y
    }
  )
);
Ha.displayName = "Inline";
const Ua = P("flex-1", {
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
}), Ka = q.forwardRef(
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
    shadow: g,
    display: b,
    ...f
  }, v) => /* @__PURE__ */ a(
    e,
    {
      ref: v,
      className: o(
        Ua({
          p: r,
          px: n,
          py: s,
          m: i,
          mx: d,
          my: l,
          width: u,
          height: m,
          shadow: g,
          display: b
        }),
        t
      ),
      "aria-hidden": "true",
      ...f
    }
  )
);
Ka.displayName = "Spacer";
const Xa = P("grid", {
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
}), qa = q.forwardRef(
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
    m: g,
    mx: b,
    my: f,
    children: v,
    ...y
  }, N) => /* @__PURE__ */ a(
    e,
    {
      ref: N,
      className: o(
        Xa({
          columns: r,
          gap: n,
          autoFlow: s,
          alignItems: i,
          justifyItems: d,
          p: l,
          px: u,
          py: m,
          m: g,
          mx: b,
          my: f
        }),
        t
      ),
      ...y,
      children: v
    }
  )
);
qa.displayName = "Grid";
const Wa = P("", {
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
}), Ja = q.forwardRef(
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
    mx: g,
    my: b,
    children: f,
    ...v
  }, y) => /* @__PURE__ */ a(
    e,
    {
      ref: y,
      className: o(
        Wa({
          colSpan: r == null ? void 0 : String(r),
          rowSpan: n == null ? void 0 : String(n),
          alignSelf: s,
          justifySelf: i,
          p: d,
          px: l,
          py: u,
          m,
          mx: g,
          my: b
        }),
        t
      ),
      ...v,
      children: f
    }
  )
);
Ja.displayName = "GridItem";
const Za = P("mx-auto w-full", {
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
}), Qa = q.forwardRef(
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
    height: g,
    shadow: b,
    display: f,
    children: v,
    ...y
  }, N) => /* @__PURE__ */ a(
    e,
    {
      ref: N,
      className: o(
        Za({
          maxWidth: r,
          p: n,
          px: s,
          py: i,
          m: d,
          mx: l,
          my: u,
          width: m,
          height: g,
          shadow: b,
          display: f
        }),
        t
      ),
      ...y,
      children: v
    }
  )
);
Qa.displayName = "Container";
const er = P("w-full", {
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
}), tr = q.forwardRef(
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
    height: g,
    shadow: b,
    display: f,
    background: v,
    children: y,
    ...N
  }, x) => /* @__PURE__ */ a(
    e,
    {
      ref: x,
      className: o(
        er({
          paddingY: r,
          p: n,
          px: s,
          py: i,
          m: d,
          mx: l,
          my: u,
          width: m,
          height: g,
          shadow: b,
          display: f,
          background: v
        }),
        t
      ),
      ...N,
      children: y
    }
  )
);
tr.displayName = "Section";
const ar = P("items-center justify-center", {
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
}), rr = q.forwardRef(
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
    width: g,
    shadow: b,
    display: f,
    children: v,
    ...y
  }, N) => /* @__PURE__ */ a(
    e,
    {
      ref: N,
      className: o(
        ar({
          inline: r,
          height: n,
          p: s,
          px: i,
          py: d,
          m: l,
          mx: u,
          my: m,
          width: g,
          shadow: b,
          display: f
        }),
        t
      ),
      ...y,
      children: v
    }
  )
);
rr.displayName = "Center";
const nr = P("relative w-full overflow-hidden", {
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
}), or = q.forwardRef(({ as: e = "div", className: t, ratio: r, children: n, ...s }, i) => /* @__PURE__ */ a(
  e,
  {
    ref: i,
    className: o(nr({ ratio: r }), t),
    ...s,
    children: n
  }
));
or.displayName = "LayoutAspectRatio";
const sr = P("bg-border shrink-0", {
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
}), ir = q.forwardRef(
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
          sr({
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
ir.displayName = "Divider";
const dr = P("flex flex-wrap", {
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
}), lr = q.forwardRef(
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
    my: g,
    width: b,
    height: f,
    shadow: v,
    display: y,
    children: N,
    ...x
  }, h) => {
    const k = [0, 1, 2, 3, 4, 6];
    let R;
    if (r !== void 0) {
      const _ = Number($(r));
      R = k.includes(_) ? _ : void 0;
    }
    return /* @__PURE__ */ a(
      e,
      {
        ref: h,
        className: o(
          dr({
            gap: R,
            align: n,
            justify: s,
            p: i,
            px: d,
            py: l,
            m: u,
            mx: m,
            my: g,
            width: b,
            height: f,
            shadow: v,
            display: y
          }),
          t
        ),
        ...x,
        children: N
      }
    );
  }
);
lr.displayName = "Wrap";
const cr = P("", {
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
}), ur = q.forwardRef(
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
      className: o(cr({ horizontal: r, vertical: n, all: s }), t),
      ...d,
      children: i
    }
  )
);
ur.displayName = "Bleed";
const pr = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, disabled: i, ...d }) => /* @__PURE__ */ p(Q, { gap: "2", className: "group", "data-disabled": i, children: [
  e && /* @__PURE__ */ p(Z, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    Fa,
    {
      ...d,
      disabled: i,
      className: o(t && "border-destructive", s)
    }
  ),
  t && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-destructive", children: t }),
  r && !t && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-muted-foreground", children: r })
] }));
pr.displayName = "FormMultiselect";
function Jo({
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
  }, m = "inline-flex items-center justify-center rounded-md font-medium uppercase tracking-wider transition-colors whitespace-nowrap", g = i || s ? "cursor-pointer hover:opacity-80" : "", b = `${m} ${d[r]} ${u[t]} ${g} ${n}`;
  return /* @__PURE__ */ p(Pt, { className: b, onClick: i, children: [
    /* @__PURE__ */ a("span", { className: l[r], children: e }),
    s && /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        onClick: (f) => {
          f.stopPropagation(), s();
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
function Zo({
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
const ae = P(
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
function mr({ className: e }) {
  return /* @__PURE__ */ a(
    kt,
    {
      "aria-hidden": "true",
      className: o("animate-spin text-current", e)
    }
  );
}
function Oe({
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
      children: s ? /* @__PURE__ */ p(nt, { children: [
        /* @__PURE__ */ a(mr, { className: "size-4" }),
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
function $e({
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
function Qo({
  ...e
}) {
  return /* @__PURE__ */ a(we.Anchor, { "data-slot": "popover-anchor", ...e });
}
function We({
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
function es({
  ...e
}) {
  return /* @__PURE__ */ a(X.Group, { "data-slot": "select-group", ...e });
}
function Je({
  ...e
}) {
  return /* @__PURE__ */ a(X.Value, { "data-slot": "select-value", ...e });
}
function Ze({
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
        /* @__PURE__ */ a(X.Icon, { asChild: !0, children: /* @__PURE__ */ a(Ae, { className: "size-4 opacity-50" }) })
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
  const [g, b] = c.useState(""), f = It(g, 300), v = c.useRef(null);
  c.useEffect(() => {
    l && f !== void 0 && l(f);
  }, [f, l]);
  const y = c.useMemo(() => {
    if (!d || l || !g)
      return t;
    const x = g.toLowerCase();
    return c.Children.toArray(t).filter((h) => {
      if (c.isValidElement(h) && h.type === je) {
        const k = h, R = k.props.children;
        return (typeof R == "string" ? R : String(k.props.value || "")).toLowerCase().includes(x);
      }
      return !0;
    });
  }, [t, g, d, l]), N = c.Children.count(y) > 0;
  return c.useEffect(() => {
    if (d && v.current) {
      const x = setTimeout(() => {
        v.current?.focus();
      }, 0);
      return () => clearTimeout(x);
    }
  }, [d]), /* @__PURE__ */ a(X.Portal, { children: /* @__PURE__ */ p(
    X.Content,
    {
      "data-slot": "select-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: r,
      ...m,
      children: [
        /* @__PURE__ */ a(fr, {}),
        d && /* @__PURE__ */ a("div", { className: "p-2 border-b sticky top-0 bg-popover z-10", children: /* @__PURE__ */ p("div", { className: "relative", children: [
          /* @__PURE__ */ a(Ee, { className: "absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
          /* @__PURE__ */ a(
            "input",
            {
              ref: v,
              type: "text",
              className: "w-full rounded-md border border-input bg-transparent py-1.5 pl-8 pr-2 text-sm outline-none focus:ring-2 focus:ring-ring/50",
              placeholder: u,
              value: g,
              onChange: (x) => b(x.target.value),
              onClick: (x) => x.stopPropagation(),
              onKeyDown: (x) => {
                x.key !== "Escape" && x.key !== "Tab" && x.stopPropagation();
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
            children: n ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground", children: /* @__PURE__ */ a(ie, {}) }) : s?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6", children: /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                className: "text-destructive underline text-sm px-2 py-1 rounded hover:bg-destructive/10",
                onClick: s.onClick,
                children: s.text || "Error"
              }
            ) }) : N ? y : /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground gap-2", children: [
              /* @__PURE__ */ a(le, { className: "size-8 opacity-60" }),
              /* @__PURE__ */ a("span", { className: "text-xs", children: g ? "No matches found" : i })
            ] })
          }
        ),
        /* @__PURE__ */ a(gr, {})
      ]
    }
  ) });
}
function ts({
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
  ...r
}) {
  return /* @__PURE__ */ p(
    X.Item,
    {
      "data-slot": "select-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(X.ItemIndicator, { children: /* @__PURE__ */ a(ge, { className: "size-4" }) }) }),
        /* @__PURE__ */ a(X.ItemText, { children: t })
      ]
    }
  );
}
function as({
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
function fr({
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
      children: /* @__PURE__ */ a(sa, { className: "size-4" })
    }
  );
}
function gr({
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
      children: /* @__PURE__ */ a(Ae, { className: "size-4" })
    }
  );
}
const vr = P(
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
), de = c.forwardRef(
  ({ className: e, variant: t, size: r = "md", type: n, ...s }, i) => /* @__PURE__ */ a(
    "input",
    {
      placeholder: "name",
      type: n,
      "data-slot": "input",
      className: o(vr({ variant: t, size: r }), e),
      ref: i,
      ...s
    }
  )
);
de.displayName = "Input";
const Dt = (/* @__PURE__ */ new Date()).getFullYear(), hr = Dt - 100, br = Dt + 100, xr = [
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
function yr(e) {
  const { month: t, fromYear: r, toYear: n, onMonthChange: s } = e, i = t.getFullYear(), d = t.getMonth(), l = c.useMemo(() => {
    const m = [];
    for (let g = n; g >= r; g -= 1)
      m.push(g);
    return m;
  }, [r, n]), u = (m) => {
    const g = Math.min(n, Math.max(r, m));
    s(new Date(g, d, 1));
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
        We,
        {
          isSearchable: !1,
          value: String(i),
          onValueChange: (m) => u(Number(m)),
          children: [
            /* @__PURE__ */ a(
              Ze,
              {
                size: "sm",
                className: "h-8 min-w-36 flex-1",
                "aria-label": "Calendar year",
                children: /* @__PURE__ */ a(Je, { placeholder: "Year" })
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
      We,
      {
        isSearchable: !1,
        value: String(d),
        onValueChange: (m) => s(new Date(i, Number(m), 1)),
        children: [
          /* @__PURE__ */ a(
            Ze,
            {
              size: "sm",
              className: "h-8 min-w-36 flex-1",
              "aria-label": "Calendar month",
              children: /* @__PURE__ */ a(Je, { placeholder: "Month" })
            }
          ),
          /* @__PURE__ */ a(De, { className: "max-h-64", isSearchable: !1, children: xr.map((m, g) => /* @__PURE__ */ a(je, { value: String(g), children: m }, m)) })
        ]
      }
    )
  ] });
}
function ft(e, t) {
  return e != null && t != null ? { fromYear: e, toYear: t } : e != null ? { fromYear: e, toYear: e + 100 } : t != null ? { fromYear: t - 100, toYear: t } : { fromYear: hr, toYear: br };
}
function gt(e) {
  const { className: t, month: r, fromYear: n, toYear: s, onMonthChange: i, children: d } = e;
  return /* @__PURE__ */ p(
    $e,
    {
      align: "start",
      className: "p-0 w-auto bg-background border",
      onPointerDownOutside: (l) => {
        const u = l.target;
        (u.closest('[role="option"]') || u.closest('[role="listbox"]') || u.closest('[role="presentation"]')) && l.preventDefault();
      },
      children: [
        /* @__PURE__ */ a(
          yr,
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
const vt = (e) => ({
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
function wr(e) {
  const [t, r] = c.useState(!1), [n, s] = c.useState(
    e.selected
  ), [i, d] = c.useState(e.selected ?? /* @__PURE__ */ new Date());
  c.useEffect(() => {
    s(e.selected), e.selected && d(e.selected);
  }, [e.selected]);
  const {
    className: l,
    classNames: u,
    showOutsideDays: m = !0,
    fromYear: g,
    toYear: b,
    inputProps: f,
    onSelect: v,
    ...y
  } = e, N = ft(g, b), x = n ? n.toLocaleDateString() : void 0;
  return /* @__PURE__ */ p(he, { open: t, onOpenChange: r, children: [
    /* @__PURE__ */ a(be, { className: "w-full flex-1", children: /* @__PURE__ */ a(
      de,
      {
        readOnly: !0,
        value: x,
        ...f,
        placeholder: f?.placeholder || "Select date",
        onClick: (h) => {
          r(!0), f?.onClick?.(h);
        }
      }
    ) }),
    /* @__PURE__ */ a(
      gt,
      {
        className: l,
        month: i,
        fromYear: N.fromYear,
        toYear: N.toYear,
        onMonthChange: d,
        children: /* @__PURE__ */ a(
          Se,
          {
            showOutsideDays: m,
            month: i,
            onMonthChange: d,
            fromYear: N.fromYear,
            toYear: N.toYear,
            selected: n,
            onSelect: (h) => {
              s(h), h && d(h), r(!1), v?.(h);
            },
            classNames: vt(u),
            components: {
              IconLeft: ({ className: h, ...k }) => /* @__PURE__ */ a(Ce, { className: o("size-4", h), ...k }),
              IconRight: ({ className: h, ...k }) => /* @__PURE__ */ a(ve, { className: o("size-4", h), ...k })
            },
            ...y
          }
        )
      }
    )
  ] });
}
function Nr(e) {
  const [t, r] = c.useState(!1), [n, s] = c.useState(
    e.selected
  ), [i, d] = c.useState(
    e.selected?.[0] ?? /* @__PURE__ */ new Date()
  );
  c.useEffect(() => {
    s(e.selected), e.selected?.[0] && d(e.selected[0]);
  }, [e.selected]);
  const {
    className: l,
    classNames: u,
    showOutsideDays: m = !0,
    fromYear: g,
    toYear: b,
    inputProps: f,
    onSelect: v,
    ...y
  } = e, N = ft(g, b), x = n && n.length > 0 ? n.map((h) => h?.toLocaleDateString()).join(", ") : void 0;
  return /* @__PURE__ */ p(he, { open: t, onOpenChange: r, children: [
    /* @__PURE__ */ a(be, { className: "w-full flex-1", children: /* @__PURE__ */ a(
      de,
      {
        readOnly: !0,
        value: x,
        ...f,
        placeholder: f?.placeholder || "Select date(s)",
        onClick: (h) => {
          r(!0), f?.onClick?.(h);
        }
      }
    ) }),
    /* @__PURE__ */ a(
      gt,
      {
        className: l,
        month: i,
        fromYear: N.fromYear,
        toYear: N.toYear,
        onMonthChange: d,
        children: /* @__PURE__ */ a(
          Se,
          {
            showOutsideDays: m,
            month: i,
            onMonthChange: d,
            fromYear: N.fromYear,
            toYear: N.toYear,
            selected: n,
            onSelect: (h) => {
              s(h), h?.[0] && d(h[0]), r(!1), v?.(h);
            },
            classNames: vt(u),
            components: {
              IconLeft: ({ className: h, ...k }) => /* @__PURE__ */ a(Ce, { className: o("size-4", h), ...k }),
              IconRight: ({ className: h, ...k }) => /* @__PURE__ */ a(ve, { className: o("size-4", h), ...k })
            },
            ...y
          }
        )
      }
    )
  ] });
}
function kr(e) {
  const [t, r] = c.useState(!1), [n, s] = c.useState(
    e.selected
  ), [i, d] = c.useState(
    e.selected?.from ?? /* @__PURE__ */ new Date()
  ), [l, u] = c.useState();
  c.useEffect(() => {
    s(e.selected), e.selected?.from && d(e.selected.from);
  }, [e.selected]);
  const {
    className: m,
    classNames: g,
    showOutsideDays: b = !0,
    fromYear: f,
    toYear: v,
    inputProps: y,
    onSelect: N,
    ...x
  } = e, h = ft(f, v);
  let k;
  n?.from && n?.to && (k = n.from?.toLocaleDateString() + " - " + n.to?.toLocaleDateString());
  const R = n?.from && !n?.to && l ? { from: n.from, to: l } : null;
  return /* @__PURE__ */ p(he, { open: t, onOpenChange: r, children: [
    /* @__PURE__ */ a(be, { className: "w-full flex-1", children: /* @__PURE__ */ a(
      de,
      {
        readOnly: !0,
        value: k || void 0,
        ...y,
        placeholder: y?.placeholder || "Select date range",
        onClick: (_) => {
          r(!0), y?.onClick?.(_);
        }
      }
    ) }),
    /* @__PURE__ */ a(
      gt,
      {
        className: m,
        month: i,
        fromYear: h.fromYear,
        toYear: h.toYear,
        onMonthChange: d,
        children: /* @__PURE__ */ a(
          Se,
          {
            showOutsideDays: b,
            month: i,
            onMonthChange: d,
            fromYear: h.fromYear,
            toYear: h.toYear,
            selected: n,
            onSelect: (_, T) => {
              if (n?.from && n?.to && T) {
                const j = { from: T, to: void 0 };
                s(j), N?.(j);
                return;
              }
              s(_), T && d(T), N?.(_), _?.from && _?.to && r(!1);
            },
            onDayMouseEnter: (_) => u(_),
            onDayMouseLeave: () => u(void 0),
            modifiers: {
              hoveredRange: R ? [R] : []
            },
            modifiersClassNames: {
              hoveredRange: "bg-accent/50 text-accent-foreground"
            },
            classNames: vt(g),
            components: {
              IconLeft: ({ className: _, ...T }) => /* @__PURE__ */ a(Ce, { className: o("size-4", _), ...T }),
              IconRight: ({ className: _, ...T }) => /* @__PURE__ */ a(ve, { className: o("size-4", _), ...T })
            },
            ...x
          }
        )
      }
    )
  ] });
}
function Ue(e) {
  return e.mode === "multiple" ? /* @__PURE__ */ a(
    Nr,
    {
      ...e
    }
  ) : e.mode === "range" ? /* @__PURE__ */ a(kr, { ...e }) : /* @__PURE__ */ a(wr, { ...e });
}
const Cr = P(
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
), jt = c.forwardRef(
  ({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
    "textarea",
    {
      "data-slot": "textarea",
      className: o(Cr({ variant: t }), e),
      ref: n,
      ...r
    }
  )
);
jt.displayName = "Textarea";
function Sr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    qe.Root,
    {
      "data-slot": "radio-group",
      className: o("grid gap-3", e),
      ...t
    }
  );
}
function zr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    qe.Item,
    {
      "data-slot": "radio-group-item",
      className: o(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        qe.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ a(Le, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
function Mr({
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
        /* @__PURE__ */ a(Ir, {}),
        /* @__PURE__ */ a(ye.Corner, {})
      ]
    }
  );
}
function Ir({
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
const Rr = P(
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
), _r = ({
  value: e,
  onChange: t,
  options: r,
  iconComponent: n,
  disabled: s,
  className: i,
  "aria-label": d
}) => {
  const [l, u] = c.useState(!1), [m, g] = c.useState(""), b = c.useRef(null), f = c.useMemo(() => {
    if (!m) return r;
    const v = m.toLowerCase();
    return r.filter(
      (y) => y.label.toLowerCase().includes(v)
    );
  }, [r, m]);
  return c.useEffect(() => {
    if (l) {
      const v = setTimeout(() => {
        b.current?.focus();
      }, 0);
      return () => clearTimeout(v);
    } else
      g("");
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
          /* @__PURE__ */ a(Ve, { className: "size-3 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ p(
      $e,
      {
        className: "w-64 p-0",
        align: "start",
        side: "bottom",
        sideOffset: 8,
        children: [
          /* @__PURE__ */ a("div", { className: "p-2 border-b sticky top-0 bg-popover z-10", children: /* @__PURE__ */ p("div", { className: "relative", children: [
            /* @__PURE__ */ a(Ee, { className: "absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
            /* @__PURE__ */ a(
              "input",
              {
                ref: b,
                type: "text",
                className: "w-full rounded-md border border-input bg-transparent py-1.5 pl-8 pr-2 text-sm outline-none focus:ring-2 focus:ring-ring/50 placeholder:text-muted-foreground/70",
                placeholder: "Search countries...",
                value: m,
                onChange: (v) => g(v.target.value),
                onKeyDown: (v) => {
                  v.key === "Enter" && (v.preventDefault(), f.length === 1 && (t(f[0].value), u(!1)));
                }
              }
            )
          ] }) }),
          /* @__PURE__ */ a(Mr, { className: "h-64", children: /* @__PURE__ */ a("div", { className: "p-1", children: f.length === 0 ? /* @__PURE__ */ a("div", { className: "py-6 text-center text-sm text-muted-foreground", children: "No countries found" }) : f.map((v) => {
            const y = v.value === e, N = v.value ? St[v.value] : null;
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
                  t(v.value), u(!1);
                },
                children: [
                  /* @__PURE__ */ a("span", { className: "flex items-center justify-center size-5 overflow-hidden rounded-sm bg-muted shrink-0", children: N ? /* @__PURE__ */ a(N, { title: v.label }) : /* @__PURE__ */ a("span", { className: "text-xs", children: "🌐" }) }),
                  /* @__PURE__ */ a("span", { className: "truncate", children: v.label }),
                  y && /* @__PURE__ */ a("span", { className: "ml-auto text-primary", children: "✓" })
                ]
              },
              v.value || "empty"
            );
          }) }) })
        ]
      }
    )
  ] });
}, Et = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
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
Et.displayName = "PhoneInputField";
const Tr = ({
  country: e,
  countryName: t
}) => {
  const r = e ? St[e] : null;
  return /* @__PURE__ */ a("span", { className: "flex items-center justify-center size-5 overflow-hidden rounded-sm bg-muted", children: r ? /* @__PURE__ */ a(r, { title: t ?? "" }) : /* @__PURE__ */ a("span", { className: "text-xs text-muted-foreground", children: "🌐" }) });
}, At = c.forwardRef(
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
    onCountryChange: g,
    withCountryCallingCode: b = !0,
    inputProps: f,
    ...v
  }, y) => /* @__PURE__ */ a(
    "div",
    {
      ref: y,
      className: o(
        Rr({ variant: d, size: l }),
        "items-center px-3 gap-2",
        s && "opacity-50 cursor-not-allowed",
        i
      ),
      "data-slot": "phone-input",
      ...v,
      children: /* @__PURE__ */ a(
        ka,
        {
          international: u,
          defaultCountry: r,
          country: m,
          value: e,
          onChange: (N) => t?.(N),
          onCountryChange: g,
          withCountryCallingCode: b,
          placeholder: n,
          disabled: s,
          countrySelectComponent: _r,
          inputComponent: Et,
          flagComponent: Tr,
          className: "flex items-center w-full",
          numberInputProps: f
        }
      )
    }
  )
);
At.displayName = "PhoneInput";
const Pr = P(
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
function yt(e) {
  const [t, r] = e.split(":").map(Number);
  return t * 60 + r;
}
function Dr(e, t) {
  if (!t) return e;
  const [r, n] = e.split(":").map(Number), s = r >= 12 ? "PM" : "AM";
  return `${r % 12 || 12}:${n.toString().padStart(2, "0")} ${s}`;
}
function me(e) {
  return e.toString().padStart(2, "0");
}
const Qe = 250, G = Qe / 2, ee = 90, Ie = 62, jr = 32;
function Er({
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
  maxTime: g
}) {
  const b = c.useRef(null), f = c.useRef(!1), v = c.useRef({ x: 0, y: 0 }), y = m ? yt(m) : 0, N = g ? yt(g) : 1439;
  function x(S) {
    if (!b.current) return 0;
    const w = b.current.getBoundingClientRect(), M = w.left + w.width / 2, z = w.top + w.height / 2, A = S.clientX - M, ze = S.clientY - z;
    let He = Math.atan2(ze, A) * (180 / Math.PI) + 90;
    return He < 0 && (He += 360), He;
  }
  function h(S) {
    if (r === "hours")
      if (n) {
        let w = Math.round(S / 30) % 12;
        w === 0 && (w = 12);
        let M = w;
        s === "AM" ? M = w === 12 ? 0 : w : M = w === 12 ? 12 : w + 12;
        const z = M * 60 + t;
        z >= y && z <= N && i(M);
      } else {
        const w = k(), M = (ee + Ie) / 2;
        let z;
        w < M ? (z = Math.round(S / 30) % 12, z = z === 0 ? 0 : z + 12) : (z = Math.round(S / 30) % 12, z === 0 && (z = 12));
        const A = z * 60 + t;
        A >= y && A <= N && i(z);
      }
    else {
      const w = Math.round(S / 6) % 60, M = e * 60 + w;
      M >= y && M <= N && d(w);
    }
  }
  function k() {
    if (!b.current) return ee;
    const S = b.current.getBoundingClientRect(), w = S.left + S.width / 2, M = S.top + S.height / 2, z = v.current.x - w, A = v.current.y - M;
    return Math.sqrt(z * z + A * A);
  }
  function R(S) {
    f.current = !0, v.current = { x: S.clientX, y: S.clientY };
    const w = x(S);
    h(w);
  }
  function _(S) {
    if (!f.current) return;
    v.current = { x: S.clientX, y: S.clientY };
    const w = x(S);
    h(w);
  }
  function T() {
    f.current && (f.current = !1, r === "hours" && l("minutes"));
  }
  let j, L;
  r === "hours" ? (j = (n ? e % 12 : e) % 12 * 30, !n && (e === 0 || e > 12) ? L = Ie : L = ee) : (j = t * 6, L = ee);
  const D = (j - 90) * Math.PI / 180, O = G + L * Math.cos(D), C = G + L * Math.sin(D), I = [];
  if (n)
    for (let S = 1; S <= 12; S++) {
      const w = (S * 30 - 90) * Math.PI / 180;
      I.push({
        value: S,
        label: String(S),
        x: G + ee * Math.cos(w),
        y: G + ee * Math.sin(w),
        inner: !1
      });
    }
  else {
    for (let S = 1; S <= 12; S++) {
      const w = (S * 30 - 90) * Math.PI / 180;
      I.push({
        value: S,
        label: String(S),
        x: G + ee * Math.cos(w),
        y: G + ee * Math.sin(w),
        inner: !1
      });
    }
    for (let S = 0; S < 12; S++) {
      const w = S === 0 ? 0 : S + 12, M = (S * 30 - 90) * Math.PI / 180;
      I.push({
        value: w,
        label: me(w),
        x: G + Ie * Math.cos(M),
        y: G + Ie * Math.sin(M),
        inner: !0
      });
    }
  }
  const E = [];
  for (let S = 0; S < 12; S++) {
    const w = S * 5, M = (w * 6 - 90) * Math.PI / 180;
    E.push({
      value: w,
      label: me(w),
      x: G + ee * Math.cos(M),
      y: G + ee * Math.sin(M)
    });
  }
  const V = (S) => n ? e % 12 === S % 12 && (S !== 0 || e === 0 || e === 12) : e === S;
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
        ref: b,
        width: Qe,
        height: Qe,
        className: "cursor-pointer select-none",
        onMouseDown: R,
        onMouseMove: _,
        onMouseUp: T,
        onMouseLeave: T,
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
              x2: O,
              y2: C,
              strokeWidth: 2,
              className: "stroke-primary"
            }
          ),
          /* @__PURE__ */ a(
            "circle",
            {
              cx: O,
              cy: C,
              r: jr / 2,
              className: "fill-primary"
            }
          ),
          r === "hours" ? I.map(({ value: S, label: w, x: M, y: z, inner: A }) => {
            const ze = V(S);
            return /* @__PURE__ */ a(
              "text",
              {
                x: M,
                y: z,
                textAnchor: "middle",
                dominantBaseline: "central",
                className: o(
                  "pointer-events-none text-[13px]",
                  A ? "font-normal" : "font-medium",
                  ze ? "fill-primary-foreground" : "fill-foreground"
                ),
                children: w
              },
              `h-${S}-${A ? "inner" : "outer"}`
            );
          }) : E.map(({ value: S, label: w, x: M, y: z }) => /* @__PURE__ */ a(
            "text",
            {
              x: M,
              y: z,
              textAnchor: "middle",
              dominantBaseline: "central",
              className: o(
                "pointer-events-none text-[13px] font-medium",
                t === S ? "fill-primary-foreground" : "fill-foreground"
              ),
              children: w
            },
            `m-${S}`
          ))
        ]
      }
    )
  ] });
}
const Lt = c.forwardRef(
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
    maxTime: g,
    placeholder: b = "Select time",
    use12Hours: f = !0
  }, v) => {
    const [y, N] = c.useState(!1), [x, h] = c.useState("hours"), k = c.useRef(null);
    c.useImperativeHandle(v, () => k.current);
    const R = n ? parseInt(n.split(":")[0], 10) : 0, _ = n ? parseInt(n.split(":")[1], 10) : 0, [T, j] = c.useState(R), [L, D] = c.useState(_), [O, C] = c.useState(
      R >= 12 ? "PM" : "AM"
    );
    c.useEffect(() => {
      const z = n ? parseInt(n.split(":")[0], 10) : 0, A = n ? parseInt(n.split(":")[1], 10) : 0;
      j(z), D(A), C(z >= 12 ? "PM" : "AM");
    }, [n]), c.useEffect(() => {
      y && h("hours");
    }, [y]), c.useEffect(() => {
      function z(A) {
        k.current && !k.current.contains(A.target) && N(!1);
      }
      return document.addEventListener("mousedown", z), () => document.removeEventListener("mousedown", z);
    }, []), c.useEffect(() => {
      function z(A) {
        A.key === "Escape" && N(!1);
      }
      if (y)
        return document.addEventListener("keydown", z), () => document.removeEventListener("keydown", z);
    }, [y]);
    function I(z, A) {
      s?.(`${me(z)}:${me(A)}`);
    }
    function E(z) {
      j(z), I(z, L);
    }
    function V(z) {
      D(z), I(T, z);
    }
    function S(z) {
      C(z);
      let A = T;
      z === "AM" && T >= 12 && (A = T - 12), z === "PM" && T < 12 && (A = T + 12), j(A), I(A, L);
    }
    const w = (z) => {
      z.stopPropagation(), s?.(null);
    }, M = r === "sm" ? 14 : r === "lg" ? 18 : 16;
    return /* @__PURE__ */ p(
      "div",
      {
        ref: k,
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
              onClick: () => N((z) => !z),
              className: o(
                Pr({ variant: t, size: r }),
                "cursor-pointer select-none gap-2",
                e
              ),
              "aria-expanded": y,
              "aria-haspopup": "dialog",
              children: [
                /* @__PURE__ */ a(Te, { size: M, className: "shrink-0 text-muted-foreground" }),
                /* @__PURE__ */ a(
                  "span",
                  {
                    className: o(
                      "flex-1 text-left",
                      !n && "text-muted-foreground/70"
                    ),
                    children: n ? Dr(n, f) : b
                  }
                ),
                n ? /* @__PURE__ */ a(
                  "span",
                  {
                    role: "button",
                    tabIndex: 0,
                    onClick: w,
                    onKeyDown: (z) => {
                      (z.key === "Enter" || z.key === " ") && w(z);
                    },
                    className: "shrink-0 rounded-sm p-0.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
                    "aria-label": "Clear time",
                    children: /* @__PURE__ */ a(ot, { size: M })
                  }
                ) : /* @__PURE__ */ a(
                  Ve,
                  {
                    size: M,
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
                Er,
                {
                  hour: T,
                  minute: L,
                  mode: x,
                  use12Hours: f,
                  period: O,
                  onSelectHour: E,
                  onSelectMinute: V,
                  onModeChange: h,
                  onPeriodChange: S,
                  minTime: m,
                  maxTime: g
                }
              )
            }
          )
        ]
      }
    );
  }
);
Lt.displayName = "TimePicker";
const Vt = P(
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
function et(e, t, r) {
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
const tt = 220, Y = tt / 2, te = 85, Re = 58, Ar = 28;
function at({ hour: e, minute: t, use12Hours: r, onChange: n }) {
  const s = c.useRef(null), i = c.useRef(!1), d = c.useRef({ x: 0, y: 0 }), [l, u] = c.useState("hours"), [m, g] = c.useState(
    e >= 12 ? "PM" : "AM"
  );
  c.useEffect(() => {
    g(e >= 12 ? "PM" : "AM");
  }, [e]);
  function b(C) {
    if (!s.current) return 0;
    const I = s.current.getBoundingClientRect(), E = I.left + I.width / 2, V = I.top + I.height / 2, S = C.clientX - E, w = C.clientY - V;
    let M = Math.atan2(w, S) * (180 / Math.PI) + 90;
    return M < 0 && (M += 360), M;
  }
  function f() {
    if (!s.current) return te;
    const C = s.current.getBoundingClientRect(), I = C.left + C.width / 2, E = C.top + C.height / 2, V = d.current.x - I, S = d.current.y - E;
    return Math.sqrt(V * V + S * S);
  }
  function v(C) {
    if (l === "hours")
      if (r) {
        let I = Math.round(C / 30) % 12;
        I === 0 && (I = 12);
        let E = I;
        m === "AM" ? E = I === 12 ? 0 : I : E = I === 12 ? 12 : I + 12, n(E, t);
      } else {
        const I = f(), E = (te + Re) / 2;
        let V;
        I < E ? (V = Math.round(C / 30) % 12, V = V === 0 ? 0 : V + 12) : (V = Math.round(C / 30) % 12, V === 0 && (V = 12)), n(V, t);
      }
    else {
      const I = Math.round(C / 6) % 60;
      n(e, I);
    }
  }
  function y(C) {
    i.current = !0, d.current = { x: C.clientX, y: C.clientY }, v(b(C));
  }
  function N(C) {
    i.current && (d.current = { x: C.clientX, y: C.clientY }, v(b(C)));
  }
  function x() {
    i.current && (i.current = !1, l === "hours" && u("minutes"));
  }
  function h(C) {
    g(C);
    let I = e;
    C === "AM" && e >= 12 && (I = e - 12), C === "PM" && e < 12 && (I = e + 12), n(I, t);
  }
  let k, R;
  l === "hours" ? (k = (r ? e % 12 : e) % 12 * 30, !r && (e === 0 || e > 12) ? R = Re : R = te) : (k = t * 6, R = te);
  const _ = (k - 90) * Math.PI / 180, T = Y + R * Math.cos(_), j = Y + R * Math.sin(_), L = [];
  if (r)
    for (let C = 1; C <= 12; C++) {
      const I = (C * 30 - 90) * Math.PI / 180;
      L.push({
        value: C,
        label: String(C),
        x: Y + te * Math.cos(I),
        y: Y + te * Math.sin(I),
        inner: !1
      });
    }
  else {
    for (let C = 1; C <= 12; C++) {
      const I = (C * 30 - 90) * Math.PI / 180;
      L.push({
        value: C,
        label: String(C),
        x: Y + te * Math.cos(I),
        y: Y + te * Math.sin(I),
        inner: !1
      });
    }
    for (let C = 0; C < 12; C++) {
      const I = C === 0 ? 0 : C + 12, E = (C * 30 - 90) * Math.PI / 180;
      L.push({
        value: I,
        label: W(I),
        x: Y + Re * Math.cos(E),
        y: Y + Re * Math.sin(E),
        inner: !0
      });
    }
  }
  const D = [];
  for (let C = 0; C < 12; C++) {
    const I = C * 5, E = (I * 6 - 90) * Math.PI / 180;
    D.push({
      value: I,
      label: W(I),
      x: Y + te * Math.cos(E),
      y: Y + te * Math.sin(E)
    });
  }
  const O = (C) => r ? e % 12 === C % 12 && (C !== 0 || e === 0 || e === 12) : e === C;
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
            onClick: () => h("AM"),
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
            onClick: () => h("PM"),
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
        width: tt,
        height: tt,
        className: "cursor-pointer select-none",
        onMouseDown: y,
        onMouseMove: N,
        onMouseUp: x,
        onMouseLeave: x,
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
              x2: T,
              y2: j,
              strokeWidth: 2,
              className: "stroke-primary"
            }
          ),
          /* @__PURE__ */ a(
            "circle",
            {
              cx: T,
              cy: j,
              r: Ar / 2,
              className: "fill-primary"
            }
          ),
          l === "hours" ? L.map(({ value: C, label: I, x: E, y: V, inner: S }) => {
            const w = O(C);
            return /* @__PURE__ */ a(
              "text",
              {
                x: E,
                y: V,
                textAnchor: "middle",
                dominantBaseline: "central",
                className: o(
                  "pointer-events-none text-[12px]",
                  S ? "font-normal" : "font-medium",
                  w ? "fill-primary-foreground" : "fill-foreground"
                ),
                children: I
              },
              `h-${C}-${S ? "i" : "o"}`
            );
          }) : D.map(({ value: C, label: I, x: E, y: V }) => /* @__PURE__ */ a(
            "text",
            {
              x: E,
              y: V,
              textAnchor: "middle",
              dominantBaseline: "central",
              className: o(
                "pointer-events-none text-[12px] font-medium",
                t === C ? "fill-primary-foreground" : "fill-foreground"
              ),
              children: I
            },
            `m-${C}`
          ))
        ]
      }
    )
  ] });
}
const Ft = {
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
}, Ot = {
  IconLeft: ({ className: e, ...t }) => /* @__PURE__ */ a(Ce, { className: o("size-4", e), ...t }),
  IconRight: ({ className: e, ...t }) => /* @__PURE__ */ a(ve, { className: o("size-4", e), ...t })
};
function Lr({
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
  use12Hours: g = !0,
  calendarProps: b
}) {
  const [f, v] = c.useState(!1), [y, N] = c.useState("date"), x = n?.date, h = n?.hour ?? 0, k = n?.minute ?? 0;
  function R(D) {
    D && (s?.({ date: D, hour: h, minute: k }), N("time"));
  }
  function _(D, O) {
    s?.({ date: x ?? /* @__PURE__ */ new Date(), hour: D, minute: O });
  }
  function T(D) {
    D.stopPropagation(), D.preventDefault(), s?.(null);
  }
  const j = n ? `${xe(n.date)}, ${et(n.hour, n.minute, g)}` : null, L = r === "sm" ? 14 : r === "lg" ? 18 : 16;
  return /* @__PURE__ */ p(he, { open: f, onOpenChange: v, children: [
    /* @__PURE__ */ a(be, { asChild: !0, disabled: i, children: /* @__PURE__ */ p(
      "button",
      {
        type: "button",
        disabled: i,
        className: o(
          Vt({ variant: t, size: r }),
          "cursor-pointer select-none gap-2",
          i && "pointer-events-none opacity-50",
          e
        ),
        "aria-expanded": f,
        "aria-haspopup": "dialog",
        ...l ? { id: l } : {},
        children: [
          /* @__PURE__ */ a(
            Pe,
            {
              size: L,
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
              onClick: T,
              onKeyDown: (D) => {
                (D.key === "Enter" || D.key === " ") && T(D);
              },
              className: "shrink-0 rounded-sm p-0.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
              "aria-label": "Clear",
              children: /* @__PURE__ */ a(ot, { size: L })
            }
          ) : /* @__PURE__ */ a(
            Ve,
            {
              size: L,
              className: o(
                "shrink-0 text-muted-foreground transition-transform duration-200",
                f && "rotate-180"
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ p($e, { align: "start", className: "w-auto p-0 bg-popover border", children: [
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
          selected: x,
          onSelect: R,
          className: "p-3",
          classNames: Ft,
          components: Ot,
          ...b
        }
      ) : /* @__PURE__ */ a("div", { className: "p-3", children: /* @__PURE__ */ a(
        at,
        {
          hour: h,
          minute: k,
          use12Hours: g,
          onChange: _
        }
      ) })
    ] })
  ] });
}
function Vr({
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
  use12Hours: g = !0,
  calendarProps: b
}) {
  const [f, v] = c.useState(!1), [y, N] = c.useState(
    "date"
  ), [x, h] = c.useState(), k = n?.from?.date, R = n?.to?.date, _ = n?.from?.hour ?? 0, T = n?.from?.minute ?? 0, j = n?.to?.hour ?? 0, L = n?.to?.minute ?? 0, D = k || R ? { from: k, to: R } : void 0, O = k && !R && x ? { from: k, to: x } : null;
  function C(M, z) {
    if (k && R && z) {
      s?.({
        from: { date: z, hour: 0, minute: 0 },
        to: void 0
      });
      return;
    }
    if (!M?.from) {
      s?.(null);
      return;
    }
    const A = {
      from: {
        date: M.from,
        hour: n?.from?.hour ?? 0,
        minute: n?.from?.minute ?? 0
      },
      to: M.to ? {
        date: M.to,
        hour: n?.to?.hour ?? 0,
        minute: n?.to?.minute ?? 0
      } : void 0
    };
    s?.(A), M.from && M.to && N("start-time");
  }
  function I(M, z) {
    s?.({
      from: {
        date: k ?? /* @__PURE__ */ new Date(),
        hour: M,
        minute: z
      },
      to: n?.to
    });
  }
  function E(M, z) {
    const A = {
      date: R ?? /* @__PURE__ */ new Date(),
      hour: M,
      minute: z
    };
    s?.({
      from: n?.from,
      to: A
    });
  }
  function V(M) {
    M.stopPropagation(), M.preventDefault(), s?.(null);
  }
  let S = null;
  if (n?.from) {
    const M = `${xe(n.from.date)}, ${et(n.from.hour, n.from.minute, g)}`;
    if (n?.to) {
      const z = `${xe(n.to.date)}, ${et(n.to.hour, n.to.minute, g)}`;
      S = `${M} – ${z}`;
    } else
      S = M;
  }
  const w = r === "sm" ? 14 : r === "lg" ? 18 : 16;
  return /* @__PURE__ */ p(he, { open: f, onOpenChange: v, children: [
    /* @__PURE__ */ a(be, { asChild: !0, disabled: i, children: /* @__PURE__ */ p(
      "button",
      {
        type: "button",
        disabled: i,
        className: o(
          Vt({ variant: t, size: r }),
          "cursor-pointer select-none gap-2",
          i && "pointer-events-none opacity-50",
          e
        ),
        "aria-expanded": f,
        "aria-haspopup": "dialog",
        ...l ? { id: l } : {},
        children: [
          /* @__PURE__ */ a(
            Pe,
            {
              size: w,
              className: "shrink-0 text-muted-foreground"
            }
          ),
          /* @__PURE__ */ a(
            "span",
            {
              className: o(
                "flex-1 text-left truncate",
                !S && "text-muted-foreground/70"
              ),
              children: S ?? m
            }
          ),
          n ? /* @__PURE__ */ a(
            "span",
            {
              role: "button",
              tabIndex: 0,
              onClick: V,
              onKeyDown: (M) => {
                (M.key === "Enter" || M.key === " ") && V(M);
              },
              className: "shrink-0 rounded-sm p-0.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
              "aria-label": "Clear",
              children: /* @__PURE__ */ a(ot, { size: w })
            }
          ) : /* @__PURE__ */ a(
            Ve,
            {
              size: w,
              className: o(
                "shrink-0 text-muted-foreground transition-transform duration-200",
                f && "rotate-180"
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ p($e, { align: "start", className: "w-auto p-0 bg-popover border", children: [
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
          selected: D,
          onSelect: C,
          onDayMouseEnter: (M) => h(M),
          onDayMouseLeave: () => h(void 0),
          modifiers: {
            hoveredRange: O ? [O] : []
          },
          modifiersClassNames: {
            hoveredRange: "bg-accent/50 text-accent-foreground"
          },
          className: "p-3",
          classNames: Ft,
          components: Ot,
          ...b
        }
      ) : y === "start-time" ? /* @__PURE__ */ p("div", { className: "p-3", children: [
        /* @__PURE__ */ a("p", { className: "text-xs text-muted-foreground text-center mb-2", children: k ? xe(k) : "Select start date first" }),
        /* @__PURE__ */ a(
          at,
          {
            hour: _,
            minute: T,
            use12Hours: g,
            onChange: I
          }
        )
      ] }) : /* @__PURE__ */ p("div", { className: "p-3", children: [
        /* @__PURE__ */ a("p", { className: "text-xs text-muted-foreground text-center mb-2", children: R ? xe(R) : "Select end date first" }),
        /* @__PURE__ */ a(
          at,
          {
            hour: j,
            minute: L,
            use12Hours: g,
            onChange: E
          }
        )
      ] })
    ] })
  ] });
}
const $t = c.forwardRef(
  (e) => e.mode === "range" ? /* @__PURE__ */ a(Vr, { ...e }) : /* @__PURE__ */ a(Lr, { ...e })
);
$t.displayName = "DateTimePicker";
function Fr({
  className: e,
  containerClassName: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    Ca,
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
function rs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "input-otp-group",
      className: o("flex items-center gap-1", e),
      ...t
    }
  );
}
function ns({
  index: e,
  className: t,
  ...r
}) {
  const n = c.useContext(Sa), { char: s, hasFakeCaret: i, isActive: d } = n?.slots[e] ?? {};
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
function os({ ...e }) {
  return /* @__PURE__ */ a("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ a(Nt, {}) });
}
const Or = c.forwardRef(
  ({ label: e, error: t, helperText: r, icon: n, required: s, className: i, ...d }, l) => /* @__PURE__ */ p(Q, { gap: "2", children: [
    e && /* @__PURE__ */ p(Z, { children: [
      e,
      s && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    n ? /* @__PURE__ */ p(mt, { gap: "2", className: "relative", children: [
      /* @__PURE__ */ a(n, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" }),
      /* @__PURE__ */ a(
        de,
        {
          ref: l,
          className: o("pl-10", t && "border-destructive", i),
          ...d
        }
      )
    ] }) : /* @__PURE__ */ a(
      de,
      {
        ref: l,
        className: o(t && "border-destructive", i),
        ...d
      }
    ),
    t && /* @__PURE__ */ a(
      F,
      {
        variant: "body-sm",
        className: "text-destructive first-letter:uppercase",
        children: t
      }
    ),
    r && !t && /* @__PURE__ */ a(
      F,
      {
        variant: "body-sm",
        className: "text-muted-foreground first-letter:uppercase",
        children: r
      }
    )
  ] })
);
Or.displayName = "FormInput";
const $r = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, ...i }, d) => /* @__PURE__ */ p(Q, { gap: "2", children: [
  e && /* @__PURE__ */ p(Z, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    jt,
    {
      ref: d,
      className: o(t && "border-destructive", s),
      ...i
    }
  ),
  t && /* @__PURE__ */ a(
    F,
    {
      variant: "body-sm",
      className: "text-destructive first-letter:uppercase",
      children: t
    }
  ),
  r && !t && /* @__PURE__ */ a(
    F,
    {
      variant: "body-sm",
      className: "text-muted-foreground first-letter:uppercase",
      children: r
    }
  )
] }));
$r.displayName = "FormTextarea";
const Br = c.forwardRef(
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
      loading: g = !1,
      emptyText: b = "No options",
      apiError: f,
      value: v,
      onValueChange: y,
      ...N
    } = e;
    return /* @__PURE__ */ p(Q, { gap: "2", className: "group", "data-disabled": l, children: [
      r && /* @__PURE__ */ p(Z, { children: [
        r,
        i && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
      ] }),
      /* @__PURE__ */ p(
        We,
        {
          value: v,
          onValueChange: y,
          disabled: l,
          loading: g,
          emptyText: b,
          apiError: f,
          ...N,
          children: [
            /* @__PURE__ */ a(
              Ze,
              {
                ref: t,
                "aria-invalid": !!n,
                className: o(n && "border-destructive", d),
                children: /* @__PURE__ */ a(Je, { placeholder: m })
              }
            ),
            /* @__PURE__ */ a(
              De,
              {
                hasOptions: u.length > 0,
                loading: g,
                apiError: f,
                emptyText: b,
                children: u.map((x) => /* @__PURE__ */ a(
                  je,
                  {
                    value: x.value,
                    disabled: x.disabled,
                    children: x.label
                  },
                  x.value
                ))
              }
            )
          ]
        }
      ),
      n && /* @__PURE__ */ a(
        F,
        {
          variant: "body-sm",
          className: "text-destructive first-letter:uppercase",
          children: n
        }
      ),
      s && !n && /* @__PURE__ */ a(
        F,
        {
          variant: "body-sm",
          className: "text-muted-foreground first-letter:uppercase",
          children: s
        }
      )
    ] });
  }
);
Br.displayName = "FormSelect";
const Gr = c.forwardRef(
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
              Ue,
              {
                ...m,
                mode: "multiple",
                selected: l,
                onSelect: u
              }
            );
          case "range":
            return /* @__PURE__ */ a(
              Ue,
              {
                ...m,
                mode: "range",
                selected: l,
                onSelect: u
              }
            );
          default:
            return /* @__PURE__ */ a(
              Ue,
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
        F,
        {
          variant: "body-sm",
          className: "text-destructive first-letter:uppercase",
          children: n
        }
      ),
      s && !n && /* @__PURE__ */ a(
        F,
        {
          variant: "body-sm",
          className: "text-muted-foreground first-letter:uppercase",
          children: s
        }
      )
    ] });
  }
);
Gr.displayName = "FormCalendar";
const Yr = c.forwardRef((e, t) => {
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
      ct,
      {
        ref: t,
        label: n,
        variant: s ? "error" : u.variant,
        className: o(l),
        ...u
      }
    ),
    s && /* @__PURE__ */ a(
      F,
      {
        variant: "body-sm",
        className: "text-destructive first-letter:uppercase",
        children: s
      }
    ),
    i && !s && /* @__PURE__ */ a(
      F,
      {
        variant: "body-sm",
        className: "text-muted-foreground first-letter:uppercase",
        children: i
      }
    )
  ] });
});
Yr.displayName = "FormCheckbox";
const Hr = c.forwardRef((e, t) => {
  const { label: r, error: n, helperText: s, required: i, className: d, options: l, ...u } = e;
  return /* @__PURE__ */ p(Q, { gap: "2", children: [
    r && /* @__PURE__ */ p(Z, { children: [
      r,
      i && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ a(
      Sr,
      {
        ref: t,
        "aria-invalid": !!n,
        className: o(n && "ring-2 ring-destructive/20", d),
        ...u,
        children: l.map((m) => /* @__PURE__ */ p(mt, { as: "label", gap: "2", className: "items-center", children: [
          /* @__PURE__ */ a(
            zr,
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
      F,
      {
        variant: "body-sm",
        className: "text-destructive first-letter:uppercase",
        children: n
      }
    ),
    s && !n && /* @__PURE__ */ a(
      F,
      {
        variant: "body-sm",
        className: "text-muted-foreground first-letter:uppercase",
        children: s
      }
    )
  ] });
});
Hr.displayName = "FormRadioGroup";
const Ur = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, ...i }, d) => /* @__PURE__ */ p(Q, { gap: "2", children: [
  e && /* @__PURE__ */ p(Z, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    At,
    {
      ref: d,
      variant: t ? "error" : "default",
      className: o(s),
      ...i
    }
  ),
  t && /* @__PURE__ */ a(
    F,
    {
      variant: "body-sm",
      className: "text-destructive first-letter:uppercase",
      children: t
    }
  ),
  r && !t && /* @__PURE__ */ a(
    F,
    {
      variant: "body-sm",
      className: "text-muted-foreground first-letter:uppercase",
      children: r
    }
  )
] }));
Ur.displayName = "FormPhoneInput";
const Kr = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, ...i }, d) => /* @__PURE__ */ p(Q, { gap: "2", children: [
  e && /* @__PURE__ */ p(Z, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    Lt,
    {
      ref: d,
      variant: t ? "error" : "default",
      className: o(s),
      ...i
    }
  ),
  t && /* @__PURE__ */ a(
    F,
    {
      variant: "body-sm",
      className: "text-destructive first-letter:uppercase",
      children: t
    }
  ),
  r && !t && /* @__PURE__ */ a(
    F,
    {
      variant: "body-sm",
      className: "text-muted-foreground first-letter:uppercase",
      children: r
    }
  )
] }));
Kr.displayName = "FormTimePicker";
const Xr = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, ...i }, d) => /* @__PURE__ */ p(Q, { gap: "2", children: [
  e && /* @__PURE__ */ p(Z, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    $t,
    {
      ref: d,
      variant: t ? "error" : "default",
      className: o(s),
      ...i
    }
  ),
  t && /* @__PURE__ */ a(
    F,
    {
      variant: "body-sm",
      className: "text-destructive first-letter:uppercase",
      children: t
    }
  ),
  r && !t && /* @__PURE__ */ a(
    F,
    {
      variant: "body-sm",
      className: "text-muted-foreground first-letter:uppercase",
      children: r
    }
  )
] }));
Xr.displayName = "FormDateTimePicker";
function ss({
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
      Fr,
      {
        "aria-invalid": !!t,
        className: o(t && "border-destructive", s),
        ...i
      }
    ),
    t && /* @__PURE__ */ a(
      F,
      {
        variant: "body-sm",
        className: "text-destructive first-letter:uppercase",
        children: t
      }
    ),
    r && !t && /* @__PURE__ */ a(
      F,
      {
        variant: "body-sm",
        className: "text-muted-foreground first-letter:uppercase",
        children: r
      }
    )
  ] });
}
const qr = P(
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
), Wr = c.forwardRef(
  ({ className: e, variant: t, size: r, count: n, ...s }, i) => /* @__PURE__ */ a(
    "span",
    {
      ref: i,
      className: o(qr({ variant: t, size: r }), e),
      ...s,
      children: n
    }
  )
);
Wr.displayName = "CountBadge";
function is({
  ...e
}) {
  return /* @__PURE__ */ a(Ne.Root, { "data-slot": "accordion", ...e });
}
function ds({
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
function ls({
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
        /* @__PURE__ */ a(Ae, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function cs({
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
const Jr = P(
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
function us({
  className: e,
  variant: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: o(Jr({ variant: t }), e),
      ...r
    }
  );
}
function ps({ className: e, ...t }) {
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
function ms({ className: e, ...t }) {
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
function fs({
  ...e
}) {
  return /* @__PURE__ */ a(ne.Root, { "data-slot": "alert-dialog", ...e });
}
function gs({
  ...e
}) {
  return /* @__PURE__ */ a(ne.Trigger, { "data-slot": "alert-dialog-trigger", ...e });
}
function Zr({
  ...e
}) {
  return /* @__PURE__ */ a(ne.Portal, { "data-slot": "alert-dialog-portal", ...e });
}
function Qr({
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
function vs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(Zr, { children: [
    /* @__PURE__ */ a(Qr, {}),
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
function hs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: o("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function bs({ className: e, ...t }) {
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
function xs({
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
function ys({
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
function ws({
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
function Ns({
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
function ks({
  ...e
}) {
  return /* @__PURE__ */ a(za.Root, { "data-slot": "aspect-ratio", ...e });
}
function Cs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    st.Root,
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
function Ss({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    st.Image,
    {
      "data-slot": "avatar-image",
      className: o("aspect-square size-full", e),
      ...t
    }
  );
}
function zs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    st.Fallback,
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
const en = P(
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
function Ms({
  className: e,
  variant: t,
  asChild: r = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    r ? J : "span",
    {
      "data-slot": "badge",
      className: o(en({ variant: t }), e),
      ...n
    }
  );
}
function Is({ ...e }) {
  return /* @__PURE__ */ a("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function Rs({ className: e, ...t }) {
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
function _s({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: o("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function Ts({
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
function Ps({ className: e, ...t }) {
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
function Ds({
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
function js({
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
        /* @__PURE__ */ a(ia, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
const tn = c.forwardRef(
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
tn.displayName = "ButtonGroup";
function Es({
  className: e,
  orientation: t = "vertical",
  decorative: r = !0,
  ...n
}) {
  return /* @__PURE__ */ a(
    zt.Root,
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
function As({
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
function an({
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
  const g = $(e ?? "2"), b = t !== void 0 ? $(t) : void 0, f = r !== void 0 ? $(r) : void 0, v = b !== void 0 && b !== "none" ? `px-[var(--spacing-${b})]` : "", y = f !== void 0 && f !== "none" ? `py-[var(--spacing-${f})]` : "", N = g !== void 0 && g !== "none" && b === void 0 && f === void 0 ? `p-[var(--spacing-${g})]` : "", x = n !== void 0 ? $(n) : void 0, h = s !== void 0 ? $(s) : void 0, k = i !== void 0 ? $(i) : void 0, R = h !== void 0 && h !== "none" ? `mx-[var(--spacing-${h})]` : "", _ = k !== void 0 && k !== "none" ? `my-[var(--spacing-${k})]` : "", T = x !== void 0 && x !== "none" && h === void 0 && k === void 0 ? `m-[var(--spacing-${x})]` : "", L = d ? {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    inner: "shadow-inner",
    outline: "shadow-outline",
    default: "shadow"
  }[d] : "", D = {
    auto: "w-auto",
    full: "w-full",
    fit: "w-fit",
    screen: "w-screen"
  }, O = {
    auto: "h-auto",
    full: "h-full",
    fit: "h-fit",
    screen: "h-screen"
  }, C = l ? D[l] : "", I = u ? O[u] : "";
  return [
    N,
    v,
    y,
    T,
    R,
    _,
    L,
    C,
    I,
    m || ""
  ].filter(Boolean).join(" ");
}
function Ls({
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
  display: g,
  ...b
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card",
      className: o(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
        an({ p: t, px: r, py: n, m: s, mx: i, my: d, shadow: l, w: u, h: m, display: g }),
        e
      ),
      ...b
    }
  );
}
function Vs({ className: e, ...t }) {
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
function Fs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "h4",
    {
      "data-slot": "card-title",
      className: o("leading-none", e),
      ...t
    }
  );
}
function Os({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "card-description",
      className: o("text-muted-foreground", e),
      ...t
    }
  );
}
function $s({ className: e, ...t }) {
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
function Bs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-content",
      className: o("px-6 [&:last-child]:pb-6", e),
      ...t
    }
  );
}
function Gs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-footer",
      className: o("flex items-center px-6 pb-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const Bt = c.createContext(null);
function Be() {
  const e = c.useContext(Bt);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function Ys({
  orientation: e = "horizontal",
  opts: t,
  setApi: r,
  plugins: n,
  className: s,
  children: i,
  ...d
}) {
  const [l, u] = Ma(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    n
  ), [m, g] = c.useState(!1), [b, f] = c.useState(!1), v = c.useCallback((h) => {
    h && (g(h.canScrollPrev()), f(h.canScrollNext()));
  }, []), y = c.useCallback(() => {
    u?.scrollPrev();
  }, [u]), N = c.useCallback(() => {
    u?.scrollNext();
  }, [u]), x = c.useCallback(
    (h) => {
      h.key === "ArrowLeft" ? (h.preventDefault(), y()) : h.key === "ArrowRight" && (h.preventDefault(), N());
    },
    [y, N]
  );
  return c.useEffect(() => {
    !u || !r || r(u);
  }, [u, r]), c.useEffect(() => {
    if (u)
      return v(u), u.on("reInit", v), u.on("select", v), () => {
        u?.off("select", v);
      };
  }, [u, v]), /* @__PURE__ */ a(
    Bt.Provider,
    {
      value: {
        carouselRef: l,
        api: u,
        opts: t,
        orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: y,
        scrollNext: N,
        canScrollPrev: m,
        canScrollNext: b
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          onKeyDownCapture: x,
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
function Hs({ className: e, ...t }) {
  const { carouselRef: r, orientation: n } = Be();
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
function Us({ className: e, ...t }) {
  const { orientation: r } = Be();
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
function Ks({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: s, scrollPrev: i, canScrollPrev: d } = Be();
  return /* @__PURE__ */ p(
    Oe,
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
        /* @__PURE__ */ a(da, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function Xs({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: s, scrollNext: i, canScrollNext: d } = Be();
  return /* @__PURE__ */ p(
    Oe,
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
        /* @__PURE__ */ a(la, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const rn = { light: "", dark: ".dark" }, Gt = c.createContext(null);
function Yt() {
  const e = c.useContext(Gt);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function qs({
  id: e,
  className: t,
  children: r,
  config: n,
  ...s
}) {
  const i = c.useId(), d = `chart-${e || i.replace(/:/g, "")}`;
  return /* @__PURE__ */ a(Gt.Provider, { value: { config: n }, children: /* @__PURE__ */ p(
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
        /* @__PURE__ */ a(nn, { id: d, config: n }),
        /* @__PURE__ */ a(it.ResponsiveContainer, { children: r })
      ]
    }
  ) });
}
const nn = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(
    ([, n]) => n.theme || n.color
  );
  return r.length ? /* @__PURE__ */ a(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(rn).map(
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
}, Ws = it.Tooltip;
function Js({
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
  color: g,
  nameKey: b,
  labelKey: f
}) {
  const { config: v } = Yt(), y = c.useMemo(() => {
    if (s || !t?.length)
      return null;
    const [x] = t, h = `${f || x?.dataKey || x?.name || "value"}`, k = rt(v, x, h), R = !f && typeof d == "string" ? v[d]?.label || d : k?.label;
    return l ? /* @__PURE__ */ a("div", { className: o("font-medium", u), children: l(R, t) }) : R ? /* @__PURE__ */ a("div", { className: o("font-medium", u), children: R }) : null;
  }, [
    d,
    l,
    t,
    s,
    u,
    v,
    f
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
        /* @__PURE__ */ a("div", { className: "grid gap-1.5", children: t.map((x, h) => {
          const k = `${b || x.name || x.dataKey || "value"}`, R = rt(v, x, k), _ = g || x.payload.fill || x.color;
          return /* @__PURE__ */ a(
            "div",
            {
              className: o(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                n === "dot" && "items-center"
              ),
              children: m && x?.value !== void 0 && x.name ? m(x.value, x.name, x, h, x.payload) : /* @__PURE__ */ p(nt, { children: [
                R?.icon ? /* @__PURE__ */ a(R.icon, {}) : !i && /* @__PURE__ */ a(
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
                      "--color-bg": _,
                      "--color-border": _
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
                        /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: R?.label || x.name })
                      ] }),
                      x.value && /* @__PURE__ */ a("span", { className: "text-foreground font-mono font-medium tabular-nums", children: x.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            x.dataKey
          );
        }) })
      ]
    }
  );
}
const Zs = it.Legend;
function Qs({
  className: e,
  hideIcon: t = !1,
  payload: r,
  verticalAlign: n = "bottom",
  nameKey: s
}) {
  const { config: i } = Yt();
  return r?.length ? /* @__PURE__ */ a(
    "div",
    {
      className: o(
        "flex items-center justify-center gap-4",
        n === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: r.map((d) => {
        const l = `${s || d.dataKey || "value"}`, u = rt(i, d, l);
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
function rt(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let s = r;
  return r in t && typeof t[r] == "string" ? s = t[r] : n && r in n && typeof n[r] == "string" && (s = n[r]), s in e ? e[s] : e[r];
}
function on({
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
  const g = $(e), b = t !== void 0 ? $(t) : void 0, f = r !== void 0 ? $(r) : void 0, v = b !== void 0 && b !== "none" ? `px-[var(--spacing-${b})]` : "", y = f !== void 0 && f !== "none" ? `py-[var(--spacing-${f})]` : "", N = g !== void 0 && g !== "none" && b === void 0 && f === void 0 ? `p-[var(--spacing-${g})]` : "", x = n !== void 0 ? $(n) : void 0, h = s !== void 0 ? $(s) : void 0, k = i !== void 0 ? $(i) : void 0, R = h !== void 0 && h !== "none" ? `mx-[var(--spacing-${h})]` : "", _ = k !== void 0 && k !== "none" ? `my-[var(--spacing-${k})]` : "", T = x !== void 0 && x !== "none" && h === void 0 && k === void 0 ? `m-[var(--spacing-${x})]` : "", L = d ? {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    inner: "shadow-inner",
    outline: "shadow-outline",
    default: "shadow"
  }[d] : "", D = {
    auto: "w-auto",
    full: "w-full",
    fit: "w-fit",
    screen: "w-screen"
  }, O = {
    auto: "h-auto",
    full: "h-full",
    fit: "h-fit",
    screen: "h-screen"
  }, C = l ? D[l] : "", I = u ? O[u] : "";
  return [
    N,
    v,
    y,
    T,
    R,
    _,
    L,
    C,
    I,
    m || ""
  ].filter(Boolean).join(" ");
}
function ei({
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
  display: g,
  ...b
}) {
  return /* @__PURE__ */ a(
    dt.Root,
    {
      "data-slot": "collapsible",
      className: o(
        on({
          p: t,
          px: r,
          py: n,
          m: s,
          mx: i,
          my: d,
          shadow: l,
          w: u,
          h: m,
          display: g
        }),
        e
      ),
      ...b
    }
  );
}
function ti(e) {
  return /* @__PURE__ */ a(
    dt.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      className: o("cursor-pointer", e.className),
      ...e
    }
  );
}
function ai({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    dt.CollapsibleContent,
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
function sn({ ...e }) {
  return /* @__PURE__ */ a(B.Root, { "data-slot": "dialog", ...e });
}
function ri({
  ...e
}) {
  return /* @__PURE__ */ a(B.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function dn({
  ...e
}) {
  return /* @__PURE__ */ a(B.Portal, { "data-slot": "dialog-portal", ...e });
}
function ni({
  ...e
}) {
  return /* @__PURE__ */ a(B.Close, { "data-slot": "dialog-close", ...e });
}
function ln({
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
function cn({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(dn, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ a(ln, {}),
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
            /* @__PURE__ */ a(Ct, {}),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function un({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-header",
      className: o("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function oi({ className: e, ...t }) {
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
function pn({
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
function mn({
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
function fn({
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
function si({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: r,
  ...n
}) {
  return /* @__PURE__ */ p(sn, { ...n, children: [
    /* @__PURE__ */ p(un, { className: "sr-only", children: [
      /* @__PURE__ */ a(pn, { children: e }),
      /* @__PURE__ */ a(mn, { children: t })
    ] }),
    /* @__PURE__ */ a(cn, { className: "overflow-hidden p-0", children: /* @__PURE__ */ a(fn, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: r }) })
  ] });
}
function ii({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ a(Ee, { className: "size-4 shrink-0 opacity-50" }),
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
function di({
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
function li({
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
function ci({
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
function ui({
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
function pi({
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
function mi({ className: e, ...t }) {
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
function fi({
  ...e
}) {
  return /* @__PURE__ */ a(H.Root, { "data-slot": "context-menu", ...e });
}
function gi({
  ...e
}) {
  return /* @__PURE__ */ a(H.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function gn({
  ...e
}) {
  return /* @__PURE__ */ a(H.Group, { "data-slot": "context-menu-group", ...e });
}
function vi({
  ...e
}) {
  return /* @__PURE__ */ a(H.Portal, { "data-slot": "context-menu-portal", ...e });
}
function hi({
  ...e
}) {
  return /* @__PURE__ */ a(H.Sub, { "data-slot": "context-menu-sub", ...e });
}
function bi({
  ...e
}) {
  return /* @__PURE__ */ a(
    H.RadioGroup,
    {
      "data-slot": "context-menu-radio-group",
      ...e
    }
  );
}
function xi({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    H.SubTrigger,
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
function yi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    H.SubContent,
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
function wi({
  className: e,
  loading: t = !1,
  apiError: r,
  emptyText: n = "No Options",
  children: s,
  ...i
}) {
  const d = c.Children.toArray(s).some(
    (l) => c.isValidElement(l) && (l.type === vn || l.type === gn)
  );
  return /* @__PURE__ */ a(H.Portal, { children: /* @__PURE__ */ a(
    H.Content,
    {
      "data-slot": "context-menu-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...i,
      children: t ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground", children: /* @__PURE__ */ a(ie, {}) }) : r?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6", children: /* @__PURE__ */ a(
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
function vn({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    H.Item,
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
function Ni({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    H.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
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
function ki({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(
    H.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(H.ItemIndicator, { children: /* @__PURE__ */ a(Le, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Ci({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    H.Label,
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
function Si({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    H.Separator,
    {
      "data-slot": "context-menu-separator",
      className: o("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function zi({
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
function Mi({ ...e }) {
  return /* @__PURE__ */ a(oe.Root, { "data-slot": "drawer", ...e });
}
function Ii({
  ...e
}) {
  return /* @__PURE__ */ a(oe.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function hn({
  ...e
}) {
  return /* @__PURE__ */ a(oe.Portal, { "data-slot": "drawer-portal", ...e });
}
function Ri({
  ...e
}) {
  return /* @__PURE__ */ a(oe.Close, { "data-slot": "drawer-close", ...e });
}
function bn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    oe.Overlay,
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
function _i({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "drawer-body", className: o("flex-1", e), ...t, children: t.children });
}
function Ti({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(hn, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ a(bn, {}),
    /* @__PURE__ */ p(
      oe.Content,
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
function Pi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-header",
      className: o("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function Di({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-footer",
      className: o("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function ji({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    oe.Title,
    {
      "data-slot": "drawer-title",
      className: o("text-foreground font-semibold", e),
      ...t
    }
  );
}
function Ei({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    oe.Description,
    {
      "data-slot": "drawer-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Ai({
  ...e
}) {
  return /* @__PURE__ */ a(U.Root, { "data-slot": "dropdown-menu", ...e });
}
function Li({
  ...e
}) {
  return /* @__PURE__ */ a(U.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function Vi({
  ...e
}) {
  return /* @__PURE__ */ a(
    U.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function Fi({
  className: e,
  sideOffset: t = 4,
  loading: r = !1,
  apiError: n,
  emptyText: s = "No Options",
  children: i,
  ...d
}) {
  const l = c.Children.toArray(i).some(
    (u) => c.isValidElement(u) && (u.type === Ut || u.type === Ht)
  );
  return /* @__PURE__ */ a(U.Portal, { children: /* @__PURE__ */ a(
    U.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...d,
      children: r ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground", children: /* @__PURE__ */ a(ie, {}) }) : n?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6", children: /* @__PURE__ */ a(
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
function Ht({
  ...e
}) {
  return /* @__PURE__ */ a(U.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function Ut({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    U.Item,
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
function Oi({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    U.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
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
function $i({
  ...e
}) {
  return /* @__PURE__ */ a(
    U.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...e
    }
  );
}
function Bi({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(
    U.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(U.ItemIndicator, { children: /* @__PURE__ */ a(Le, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Gi({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    U.Label,
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
function Yi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    U.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: o("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Hi({
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
function Ui({
  ...e
}) {
  return /* @__PURE__ */ a(U.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function Ki({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    U.SubTrigger,
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
function Xi({
  className: e,
  loading: t = !1,
  apiError: r,
  emptyText: n = "No Options",
  children: s,
  ...i
}) {
  const d = c.Children.toArray(s).some(
    (l) => c.isValidElement(l) && (l.type === Ut || l.type === Ht)
  );
  return /* @__PURE__ */ a(
    U.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...i,
      children: t ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground", children: /* @__PURE__ */ a(ie, {}) }) : r?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6", children: /* @__PURE__ */ a(
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
const xn = c.forwardRef(
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
xn.displayName = "Empty";
const yn = c.forwardRef(
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
yn.displayName = "EmptyHeader";
const Kt = c.forwardRef(
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
Kt.displayName = "EmptyMedia";
const wn = c.forwardRef(
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
wn.displayName = "EmptyTitle";
const Nn = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
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
Nn.displayName = "EmptyDescription";
const Xt = c.forwardRef(
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
Xt.displayName = "EmptyContent";
const kn = c.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ a(
    Kt,
    {
      ref: r,
      "data-slot": "empty-icon",
      variant: "icon",
      className: e,
      ...t
    }
  )
);
kn.displayName = "EmptyIcon";
const Cn = c.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ a(
    Xt,
    {
      ref: r,
      "data-slot": "empty-actions",
      className: e,
      ...t
    }
  )
);
Cn.displayName = "EmptyActions";
const Sn = c.forwardRef(
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
Sn.displayName = "FieldSet";
const zn = c.forwardRef(
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
zn.displayName = "FieldLegend";
const Mn = c.forwardRef(
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
Mn.displayName = "FieldGroup";
const In = c.forwardRef(
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
In.displayName = "Field";
const Rn = c.forwardRef(
  ({ className: e, children: t, required: r, asChild: n = !1, ...s }, i) => {
    if (n) {
      const d = c.Children.toArray(t).find(
        c.isValidElement
      );
      if (!d) return null;
      const l = d.props.children, u = r ? c.cloneElement(
        d,
        void 0,
        /* @__PURE__ */ p(nt, { children: [
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
Rn.displayName = "FieldLabel";
const _n = c.forwardRef(
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
_n.displayName = "FieldContent";
const Tn = c.forwardRef(
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
Tn.displayName = "FieldTitle";
const qt = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
  "p",
  {
    ref: n,
    "data-slot": "field-description",
    className: o("text-body-sm text-muted-foreground", e),
    ...r,
    children: t
  }
));
qt.displayName = "FieldDescription";
const Pn = c.forwardRef(
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
Pn.displayName = "FieldError";
const Dn = c.forwardRef(
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
Dn.displayName = "FieldSeparator";
const jn = qt;
jn.displayName = "FieldHelpText";
const En = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "p",
  {
    ref: r,
    "data-slot": "field-error-text",
    role: "alert",
    className: o("text-body-sm text-destructive font-medium", e),
    ...t
  }
));
En.displayName = "FieldErrorText";
const qi = Ia, Wt = c.createContext(
  {}
), Wi = ({
  ...e
}) => /* @__PURE__ */ a(Wt.Provider, { value: { name: e.name }, children: /* @__PURE__ */ a(Ta, { ...e }) }), Ge = () => {
  const e = c.useContext(Wt), t = c.useContext(Jt), { getFieldState: r } = Ra(), n = _a({ name: e.name }), s = r(e.name, n);
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
}, Jt = c.createContext(
  {}
);
function Ji({ className: e, ...t }) {
  const r = c.useId();
  return /* @__PURE__ */ a(Jt.Provider, { value: { id: r }, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "form-item",
      className: o("grid gap-2", e),
      ...t
    }
  ) });
}
function Zi({
  className: e,
  ...t
}) {
  const { error: r, formItemId: n } = Ge();
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
function Qi({ ...e }) {
  const { error: t, formItemId: r, formDescriptionId: n, formMessageId: s } = Ge();
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
function ed({ className: e, ...t }) {
  const { formDescriptionId: r } = Ge();
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
function td({ className: e, ...t }) {
  const { error: r, formMessageId: n } = Ge(), s = r ? String(r?.message ?? "") : t.children;
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
function ad({
  ...e
}) {
  return /* @__PURE__ */ a(ke.Root, { "data-slot": "hover-card", ...e });
}
function rd({
  ...e
}) {
  return /* @__PURE__ */ a(ke.Trigger, { "data-slot": "hover-card-trigger", ...e });
}
function nd({
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
function od({
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
const An = c.forwardRef(
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
An.displayName = "InputGroup";
const Ln = c.forwardRef(
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
Ln.displayName = "InputLeftAddon";
const Vn = c.forwardRef(
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
Vn.displayName = "InputRightAddon";
const Fn = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
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
Fn.displayName = "InputLeftElement";
const On = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
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
On.displayName = "InputRightElement";
function Zt({
  className: e,
  orientation: t = "horizontal",
  decorative: r = !0,
  ...n
}) {
  return /* @__PURE__ */ a(
    zt.Root,
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
const $n = P(
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
), Bn = c.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...s }, i) => /* @__PURE__ */ a(
    n ? J : "div",
    {
      ref: i,
      "data-slot": "item",
      "data-variant": t,
      "data-size": r,
      className: o($n({ variant: t, size: r, className: e })),
      ...s
    }
  )
);
Bn.displayName = "Item";
function sd({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-group",
      className: o("flex flex-col rounded-md border bg-card p-1", e),
      ...t
    }
  );
}
function id({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Zt,
    {
      "data-slot": "item-separator",
      className: o("mx-2 w-auto", e),
      ...t
    }
  );
}
const Gn = P(
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
), Yn = c.forwardRef(
  ({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      "data-slot": "item-media",
      "data-variant": t,
      className: o(
        Gn({ variant: t }),
        "group-data-[size=default]/item:size-10 group-data-[size=sm]/item:size-8",
        e
      ),
      ...r
    }
  )
);
Yn.displayName = "ItemMedia";
const Hn = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
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
Hn.displayName = "ItemContent";
const Un = c.forwardRef(
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
Un.displayName = "ItemTitle";
const Kn = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "p",
  {
    ref: r,
    "data-slot": "item-description",
    className: o("text-body-sm text-muted-foreground", e),
    ...t
  }
));
Kn.displayName = "ItemDescription";
const Xn = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
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
Xn.displayName = "ItemActions";
const qn = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
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
qn.displayName = "ItemHeader";
const Wn = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
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
Wn.displayName = "ItemFooter";
const Jn = c.forwardRef(
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
Jn.displayName = "Kbd";
const Zn = c.forwardRef(
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
Zn.displayName = "KbdGroup";
function dd({
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
function ld({
  ...e
}) {
  return /* @__PURE__ */ a(K.Menu, { "data-slot": "menubar-menu", ...e });
}
function Qn({
  ...e
}) {
  return /* @__PURE__ */ a(K.Group, { "data-slot": "menubar-group", ...e });
}
function eo({
  ...e
}) {
  return /* @__PURE__ */ a(K.Portal, { "data-slot": "menubar-portal", ...e });
}
function cd({
  ...e
}) {
  return /* @__PURE__ */ a(K.RadioGroup, { "data-slot": "menubar-radio-group", ...e });
}
function ud({
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
function pd({
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
    (g) => c.isValidElement(g) && (g.type === to || g.type === Qn)
  );
  return /* @__PURE__ */ a(eo, { children: /* @__PURE__ */ a(
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
      children: s ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground", children: /* @__PURE__ */ a(ie, {}) }) : i?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6", children: /* @__PURE__ */ a(
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
function to({
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
function md({
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
function fd({
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
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(K.ItemIndicator, { children: /* @__PURE__ */ a(Le, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function gd({
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
function vd({
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
function hd({ className: e, ...t }) {
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
function bd({
  ...e
}) {
  return /* @__PURE__ */ a(K.Sub, { "data-slot": "menubar-sub", ...e });
}
function xd({
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
function yd({
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
function wd({
  className: e,
  children: t,
  viewport: r = !0,
  ...n
}) {
  return /* @__PURE__ */ p(
    se.Root,
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
        r && /* @__PURE__ */ a(ro, {})
      ]
    }
  );
}
function Nd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    se.List,
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
function kd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    se.Item,
    {
      "data-slot": "navigation-menu-item",
      className: o("relative", e),
      ...t
    }
  );
}
const ao = P(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function Cd({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(
    se.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: o(ao(), "group", e),
      ...r,
      children: [
        t,
        " ",
        /* @__PURE__ */ a(
          Ae,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function Sd({
  className: e,
  loading: t = !1,
  apiError: r,
  emptyText: n = "No Options",
  children: s,
  ...i
}) {
  const d = c.Children.toArray(s).some(
    (l) => c.isValidElement(l) && l.type === no
  );
  return /* @__PURE__ */ a(
    se.Content,
    {
      "data-slot": "navigation-menu-content",
      className: o(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        e
      ),
      ...i,
      children: t ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground", children: /* @__PURE__ */ a(ie, {}) }) : r?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6", children: /* @__PURE__ */ a(
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
function ro({
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
        se.Viewport,
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
function no({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    se.Link,
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
function zd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    se.Indicator,
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
function Md({ className: e, ...t }) {
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
function Id({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "pagination-content",
      className: o("flex flex-row items-center gap-1", e),
      ...t
    }
  );
}
function Rd({ ...e }) {
  return /* @__PURE__ */ a("li", { "data-slot": "pagination-item", ...e });
}
function Qt({
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
function _d({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    Qt,
    {
      "aria-label": "Go to previous page",
      size: "md",
      className: o("gap-1 px-2.5 sm:pl-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a(ca, {}),
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function Td({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    Qt,
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
function Pd({
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
        /* @__PURE__ */ a(ua, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
function Dd({
  className: e,
  value: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    bt.Root,
    {
      "data-slot": "progress",
      className: o(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        e
      ),
      ...r,
      children: /* @__PURE__ */ a(
        bt.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function jd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    lt.PanelGroup,
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
function Ed({
  ...e
}) {
  return /* @__PURE__ */ a(lt.Panel, { "data-slot": "resizable-panel", ...e });
}
function Ad({
  withHandle: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    lt.PanelResizeHandle,
    {
      "data-slot": "resizable-handle",
      className: o(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        t
      ),
      ...r,
      children: e && /* @__PURE__ */ a("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ a(pa, { className: "size-2.5" }) })
    }
  );
}
const oo = P(
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
), so = P(
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
), io = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
  re.Root,
  {
    ref: n,
    className: o("flex flex-col gap-4", e),
    ...r,
    children: t
  }
));
io.displayName = "SegmentControl";
const lo = c.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
  re.List,
  {
    ref: n,
    className: o(oo({ variant: t }), e),
    ...r
  }
));
lo.displayName = "SegmentControlList";
const co = c.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
  re.Trigger,
  {
    ref: n,
    className: o(so({ variant: t }), e),
    ...r
  }
));
co.displayName = "SegmentControlItem";
const Ld = re.Content;
function uo({ ...e }) {
  return /* @__PURE__ */ a(B.Root, { "data-slot": "sheet", ...e });
}
function Vd({
  ...e
}) {
  return /* @__PURE__ */ a(B.Trigger, { "data-slot": "sheet-trigger", ...e });
}
function Fd({
  ...e
}) {
  return /* @__PURE__ */ a(B.Close, { "data-slot": "sheet-close", ...e });
}
function po({
  ...e
}) {
  return /* @__PURE__ */ a(B.Portal, { "data-slot": "sheet-portal", ...e });
}
function mo({
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
function fo({
  className: e,
  children: t,
  side: r = "right",
  ...n
}) {
  return /* @__PURE__ */ p(po, { children: [
    /* @__PURE__ */ a(mo, {}),
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
            /* @__PURE__ */ a(Ct, { className: "size-4" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function go({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-header",
      className: o("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function Od({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-footer",
      className: o("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function vo({
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
function ho({
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
const Ke = 768;
function bo() {
  const [e, t] = c.useState(void 0);
  return c.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${Ke - 1}px)`), n = () => {
      t(window.innerWidth < Ke);
    };
    return r.addEventListener("change", n), t(window.innerWidth < Ke), () => r.removeEventListener("change", n);
  }, []), !!e;
}
function wt({ className: e, ...t }) {
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
const xo = "sidebar_state", yo = 3600 * 24 * 7, wo = "16rem", No = "18rem", ko = "3rem", Co = "b", ea = c.createContext(null);
function Ye() {
  const e = c.useContext(ea);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function $d({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: r,
  className: n,
  style: s,
  children: i,
  ...d
}) {
  const l = bo(), [u, m] = c.useState(!1), [g, b] = c.useState(e), f = t ?? g, v = c.useCallback(
    (h) => {
      const k = typeof h == "function" ? h(f) : h;
      r ? r(k) : b(k), document.cookie = `${xo}=${k}; path=/; max-age=${yo}`;
    },
    [r, f]
  ), y = c.useCallback(() => l ? m((h) => !h) : v((h) => !h), [l, v, m]);
  c.useEffect(() => {
    const h = (k) => {
      k.key === Co && (k.metaKey || k.ctrlKey) && (k.preventDefault(), y());
    };
    return window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h);
  }, [y]);
  const N = f ? "expanded" : "collapsed", x = c.useMemo(
    () => ({
      state: N,
      open: f,
      setOpen: v,
      isMobile: l,
      openMobile: u,
      setOpenMobile: m,
      toggleSidebar: y
    }),
    [N, f, v, l, u, m, y]
  );
  return /* @__PURE__ */ a(ea.Provider, { value: x, children: /* @__PURE__ */ a(ut, { delayDuration: 0, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": wo,
        "--sidebar-width-icon": ko,
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
  const g = $(e), b = t !== void 0 ? $(t) : void 0, f = r !== void 0 ? $(r) : void 0, v = b !== void 0 && b !== "none" ? `px-[var(--spacing-${b})]` : "", y = f !== void 0 && f !== "none" ? `py-[var(--spacing-${f})]` : "", N = g !== void 0 && g !== "none" && b === void 0 && f === void 0 ? `p-[var(--spacing-${g})]` : "", x = n !== void 0 ? $(n) : void 0, h = s !== void 0 ? $(s) : void 0, k = i !== void 0 ? $(i) : void 0, R = h !== void 0 && h !== "none" ? `mx-[var(--spacing-${h})]` : "", _ = k !== void 0 && k !== "none" ? `my-[var(--spacing-${k})]` : "", T = x !== void 0 && x !== "none" && h === void 0 && k === void 0 ? `m-[var(--spacing-${x})]` : "", L = d ? {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    inner: "shadow-inner",
    outline: "shadow-outline",
    default: "shadow"
  }[d] : "", D = {
    auto: "w-auto",
    full: "w-full",
    fit: "w-fit",
    screen: "w-screen"
  }, O = {
    auto: "h-auto",
    full: "h-full",
    fit: "h-fit",
    screen: "h-screen"
  }, C = l ? D[l] : "", I = u ? O[u] : "";
  return [
    N,
    v,
    y,
    T,
    R,
    _,
    L,
    C,
    I,
    m || ""
  ].filter(Boolean).join(" ");
}
function Bd({
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
  my: g,
  shadow: b,
  w: f,
  h: v,
  display: y,
  ...N
}) {
  const { isMobile: x, state: h, openMobile: k, setOpenMobile: R } = Ye(), _ = ue({
    p: i,
    px: d,
    py: l,
    m: u,
    mx: m,
    my: g,
    shadow: b,
    w: f,
    h: v,
    display: y
  });
  return r === "none" ? /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar",
      className: o(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        _,
        n
      ),
      ...N,
      children: s
    }
  ) : x ? /* @__PURE__ */ a(uo, { open: k, onOpenChange: R, ...N, children: /* @__PURE__ */ p(
    fo,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: o(
        "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
        _,
        n
      ),
      style: {
        "--sidebar-width": No
      },
      side: e,
      children: [
        /* @__PURE__ */ p(go, { className: "sr-only", children: [
          /* @__PURE__ */ a(vo, { children: "Sidebar" }),
          /* @__PURE__ */ a(ho, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex h-full w-full flex-col", children: s })
      ]
    }
  ) }) : /* @__PURE__ */ p(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": h,
      "data-collapsible": h === "collapsed" ? r : "",
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
              _,
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
function Gd({
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
  display: g,
  onClick: b,
  ...f
}) {
  const { toggleSidebar: v } = Ye(), y = ue({
    p: t,
    px: r,
    py: n,
    m: s,
    mx: i,
    my: d,
    shadow: l,
    w: u,
    h: m,
    display: g
  });
  return /* @__PURE__ */ p(
    Oe,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: o("size-7 cursor-pointer", y, e),
      onClick: (N) => {
        b?.(N), v();
      },
      ...f,
      children: [
        /* @__PURE__ */ a(ma, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function Yd({
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
  display: g,
  ...b
}) {
  const { toggleSidebar: f } = Ye(), v = ue({
    p: t,
    px: r,
    py: n,
    m: s,
    mx: i,
    my: d,
    shadow: l,
    w: u,
    h: m,
    display: g
  });
  return /* @__PURE__ */ a(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: f,
      title: "Toggle Sidebar",
      className: o(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex cursor-pointer",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        v,
        e
      ),
      ...b
    }
  );
}
function Hd({
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
  display: g,
  ...b
}) {
  const f = ue({
    p: t,
    px: r,
    py: n,
    m: s,
    mx: i,
    my: d,
    shadow: l,
    w: u,
    h: m,
    display: g
  });
  return /* @__PURE__ */ a(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: o(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        f,
        e
      ),
      ...b
    }
  );
}
function Ud({
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
  display: g,
  ...b
}) {
  const f = ue({
    p: t,
    px: r,
    py: n,
    m: s,
    mx: i,
    my: d,
    shadow: l,
    w: u,
    h: m,
    display: g
  });
  return /* @__PURE__ */ a(
    de,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: o(
        "bg-background h-8 w-full shadow-none",
        f,
        e
      ),
      ...b
    }
  );
}
function Kd({
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
  display: g,
  ...b
}) {
  const f = ue({
    p: t,
    px: r,
    py: n,
    m: s,
    mx: i,
    my: d,
    shadow: l,
    w: u,
    h: m,
    display: g
  });
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: o("flex flex-col gap-2 p-2", f, e),
      ...b
    }
  );
}
function Xd({
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
  display: g,
  ...b
}) {
  const f = ue({
    p: t,
    px: r,
    py: n,
    m: s,
    mx: i,
    my: d,
    shadow: l,
    w: u,
    h: m,
    display: g
  });
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: o("flex flex-col gap-2 p-2", f, e),
      ...b
    }
  );
}
function qd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Zt,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: o("bg-sidebar-border mx-2 w-auto", e),
      ...t
    }
  );
}
function Wd({ className: e, ...t }) {
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
function Jd({ className: e, ...t }) {
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
function Zd({
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
function Qd({
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
function el({
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
function tl({ className: e, ...t }) {
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
function al({ className: e, ...t }) {
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
const So = P(
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
function rl({
  asChild: e = !1,
  isActive: t = !1,
  variant: r = "default",
  size: n = "default",
  tooltip: s,
  className: i,
  ...d
}) {
  const l = e ? J : "button", { isMobile: u, state: m } = Ye(), g = /* @__PURE__ */ a(
    l,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": n,
      "data-active": t,
      className: o(So({ variant: r, size: n }), i),
      ...d
    }
  );
  return s ? (typeof s == "string" && (s = {
    children: s
  }), /* @__PURE__ */ p(Rt, { children: [
    /* @__PURE__ */ a(_t, { asChild: !0, children: g }),
    /* @__PURE__ */ a(
      Tt,
      {
        side: "right",
        align: "center",
        hidden: m !== "collapsed" || u,
        ...s
      }
    )
  ] })) : g;
}
function nl({
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
function ol({ className: e, ...t }) {
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
function sl({
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
          wt,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ a(
          wt,
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
function il({ className: e, ...t }) {
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
function dl({ className: e, ...t }) {
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
function ll({
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
function cl({
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
const ul = ({ ...e }) => {
  const { theme: t = "system" } = Pa();
  return /* @__PURE__ */ a(
    Da,
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
function pl({
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
function ml({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    xt.Root,
    {
      "data-slot": "switch",
      className: o(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-switch-background focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        xt.Thumb,
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
function fl({ className: e, ...t }) {
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
function gl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "thead",
    {
      "data-slot": "table-header",
      className: o("[&_tr]:border-b", e),
      ...t
    }
  );
}
function vl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "table-body",
      className: o("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function hl({ className: e, ...t }) {
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
function bl({ className: e, ...t }) {
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
function xl({ className: e, ...t }) {
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
function yl({ className: e, ...t }) {
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
function wl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "caption",
    {
      "data-slot": "table-caption",
      className: o("text-muted-foreground mt-4 text-sm", e),
      ...t
    }
  );
}
function Nl({
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
const zo = P(
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
), Mo = c.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
  re.List,
  {
    ref: n,
    "data-slot": "tabs-list",
    className: o(zo({ variant: t }), e),
    ...r
  }
));
Mo.displayName = re.List.displayName;
const Io = P(
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
), Ro = c.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
  re.Trigger,
  {
    ref: n,
    "data-slot": "tabs-trigger",
    className: o(Io({ variant: t }), e),
    ...r
  }
));
Ro.displayName = re.Trigger.displayName;
function kl({
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
const ta = P(
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
function Cl({
  className: e,
  variant: t,
  size: r,
  ...n
}) {
  return /* @__PURE__ */ a(
    ja.Root,
    {
      "data-slot": "toggle",
      className: o(ta({ variant: t, size: r, className: e })),
      ...n
    }
  );
}
const aa = c.createContext({
  size: "default",
  variant: "default"
});
function Sl({
  className: e,
  variant: t,
  size: r,
  children: n,
  ...s
}) {
  return /* @__PURE__ */ a(
    Mt.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": t,
      "data-size": r,
      className: o(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        e
      ),
      ...s,
      children: /* @__PURE__ */ a(aa.Provider, { value: { variant: t, size: r }, children: n })
    }
  );
}
function zl({
  className: e,
  children: t,
  variant: r,
  size: n = "md",
  ...s
}) {
  const i = c.useContext(aa);
  return /* @__PURE__ */ a(
    Mt.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": i.variant || r,
      "data-size": i.size || n,
      className: o(
        ta({
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
const _o = [
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
function Ml(e) {
  return e;
}
const ra = {
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
}, To = {
  ...ra,
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
}, na = ba(void 0), oa = "theme";
function Po(e) {
  if (typeof window > "u")
    return null;
  const t = localStorage.getItem(e);
  return t === "light" || t === "dark" || t === "system" ? t : null;
}
function Il({
  children: e,
  lightColors: t = ra,
  darkColors: r = To,
  mode: n,
  defaultMode: s = "system",
  storageKey: i = oa,
  onModeChange: d
}) {
  const [l, u] = ht(() => Po(i) ?? s), [m, g] = ht(!1), b = n !== void 0, f = b ? n : l;
  _e(() => {
    if (typeof window > "u")
      return;
    const x = window.matchMedia("(prefers-color-scheme: dark)"), h = () => g(x.matches);
    return h(), x.addEventListener("change", h), () => {
      x.removeEventListener("change", h);
    };
  }, []);
  const v = f === "system" ? m ? "dark" : "light" : f;
  _e(() => {
    if (typeof document > "u")
      return;
    const x = document.documentElement, h = v === "dark" ? r : t;
    for (const k of _o)
      x.style.setProperty(`--${k}`, h[k]);
    x.classList.toggle("dark", v === "dark");
  }, [r, t, v]), _e(() => {
    b || typeof window > "u" || localStorage.setItem(i, l);
  }, [l, b, i]);
  const y = va(
    (x) => {
      b || u(x), d?.(x);
    },
    [b, d]
  ), N = ha(() => ({
    mode: f,
    resolvedMode: v,
    setMode: y
  }), [v, f, y]);
  return /* @__PURE__ */ a(na.Provider, { value: N, children: e });
}
function Do() {
  const e = xa(na);
  if (!e)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}
function Rl() {
  _e(() => {
    if (typeof window > "u")
      return;
    const e = localStorage.getItem(oa), t = document.documentElement;
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
function _l({
  LightIcon: e = ga,
  DarkIcon: t = fa,
  srText: r,
  iconSize: n = 20,
  className: s = "",
  iconClassName: i = ""
}) {
  const { resolvedMode: d, setMode: l } = Do(), u = d === "dark";
  return /* @__PURE__ */ p(
    Oe,
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
const Tl = {
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
}, Pl = {
  none: "0px",
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  full: "9999px"
}, Dl = {
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
}, jl = {
  xs: ["12px", "16px"],
  sm: ["14px", "20px"],
  base: ["16px", "24px"],
  lg: ["18px", "28px"],
  xl: ["20px", "28px"],
  "2xl": ["24px", "32px"],
  "3xl": ["30px", "36px"],
  "4xl": ["36px", "40px"]
}, El = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, Al = {
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
}, Ll = {
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
  is as Accordion,
  cs as AccordionContent,
  ds as AccordionItem,
  ls as AccordionTrigger,
  us as Alert,
  ms as AlertDescription,
  fs as AlertDialog,
  ws as AlertDialogAction,
  Ns as AlertDialogCancel,
  vs as AlertDialogContent,
  ys as AlertDialogDescription,
  bs as AlertDialogFooter,
  hs as AlertDialogHeader,
  Qr as AlertDialogOverlay,
  Zr as AlertDialogPortal,
  xs as AlertDialogTitle,
  gs as AlertDialogTrigger,
  ps as AlertTitle,
  ks as AspectRatio,
  Cs as Avatar,
  zs as AvatarFallback,
  Ss as AvatarImage,
  Ms as Badge,
  ur as Bleed,
  Pt as Box,
  Is as Breadcrumb,
  js as BreadcrumbEllipsis,
  _s as BreadcrumbItem,
  Ts as BreadcrumbLink,
  Rs as BreadcrumbList,
  Ps as BreadcrumbPage,
  Ds as BreadcrumbSeparator,
  Oe as Button,
  tn as ButtonGroup,
  Es as ButtonGroupSeparator,
  As as ButtonGroupText,
  Ue as Calendar,
  Ls as Card,
  $s as CardAction,
  Bs as CardContent,
  Os as CardDescription,
  Gs as CardFooter,
  Vs as CardHeader,
  Fs as CardTitle,
  Ys as Carousel,
  Hs as CarouselContent,
  Us as CarouselItem,
  Xs as CarouselNext,
  Ks as CarouselPrevious,
  rr as Center,
  qs as ChartContainer,
  Zs as ChartLegend,
  Qs as ChartLegendContent,
  nn as ChartStyle,
  Ws as ChartTooltip,
  Js as ChartTooltipContent,
  ct as Checkbox,
  Jo as Chip,
  ei as Collapsible,
  ai as CollapsibleContent,
  ti as CollapsibleTrigger,
  fn as Command,
  si as CommandDialog,
  li as CommandEmpty,
  ci as CommandGroup,
  ii as CommandInput,
  pi as CommandItem,
  di as CommandList,
  ui as CommandSeparator,
  mi as CommandShortcut,
  Qa as Container,
  fi as ContextMenu,
  Ni as ContextMenuCheckboxItem,
  wi as ContextMenuContent,
  gn as ContextMenuGroup,
  vn as ContextMenuItem,
  Ci as ContextMenuLabel,
  vi as ContextMenuPortal,
  bi as ContextMenuRadioGroup,
  ki as ContextMenuRadioItem,
  Si as ContextMenuSeparator,
  zi as ContextMenuShortcut,
  hi as ContextMenuSub,
  yi as ContextMenuSubContent,
  xi as ContextMenuSubTrigger,
  gi as ContextMenuTrigger,
  Wr as CountBadge,
  oa as DEFAULT_THEME_STORAGE_KEY,
  $t as DateTimePicker,
  sn as Dialog,
  ni as DialogClose,
  cn as DialogContent,
  mn as DialogDescription,
  oi as DialogFooter,
  un as DialogHeader,
  ln as DialogOverlay,
  dn as DialogPortal,
  pn as DialogTitle,
  ri as DialogTrigger,
  ir as Divider,
  Mi as Drawer,
  _i as DrawerBody,
  Ri as DrawerClose,
  Ti as DrawerContent,
  Ei as DrawerDescription,
  Di as DrawerFooter,
  Pi as DrawerHeader,
  bn as DrawerOverlay,
  hn as DrawerPortal,
  ji as DrawerTitle,
  Ii as DrawerTrigger,
  Ai as DropdownMenu,
  Oi as DropdownMenuCheckboxItem,
  Fi as DropdownMenuContent,
  Ht as DropdownMenuGroup,
  Ut as DropdownMenuItem,
  Gi as DropdownMenuLabel,
  Li as DropdownMenuPortal,
  $i as DropdownMenuRadioGroup,
  Bi as DropdownMenuRadioItem,
  Yi as DropdownMenuSeparator,
  Hi as DropdownMenuShortcut,
  Ui as DropdownMenuSub,
  Xi as DropdownMenuSubContent,
  Ki as DropdownMenuSubTrigger,
  Vi as DropdownMenuTrigger,
  xn as Empty,
  Cn as EmptyActions,
  Xt as EmptyContent,
  Nn as EmptyDescription,
  yn as EmptyHeader,
  kn as EmptyIcon,
  Kt as EmptyMedia,
  wn as EmptyTitle,
  In as Field,
  _n as FieldContent,
  qt as FieldDescription,
  Pn as FieldError,
  En as FieldErrorText,
  Mn as FieldGroup,
  jn as FieldHelpText,
  Rn as FieldLabel,
  zn as FieldLegend,
  Dn as FieldSeparator,
  Sn as FieldSet,
  Tn as FieldTitle,
  qi as Form,
  Gr as FormCalendar,
  Yr as FormCheckbox,
  Qi as FormControl,
  Xr as FormDateTimePicker,
  ed as FormDescription,
  Wi as FormField,
  Or as FormInput,
  Ji as FormItem,
  Zi as FormLabel,
  td as FormMessage,
  pr as FormMultiselect,
  ss as FormOTP,
  Ur as FormPhoneInput,
  Hr as FormRadioGroup,
  Br as FormSelect,
  $r as FormTextarea,
  Kr as FormTimePicker,
  qa as Grid,
  Ja as GridItem,
  mt as HStack,
  ad as HoverCard,
  od as HoverCardArrow,
  nd as HoverCardContent,
  rd as HoverCardTrigger,
  Zo as Icon,
  Ha as Inline,
  de as Input,
  An as InputGroup,
  Ln as InputLeftAddon,
  Fn as InputLeftElement,
  Fr as InputOTP,
  rs as InputOTPGroup,
  os as InputOTPSeparator,
  ns as InputOTPSlot,
  Vn as InputRightAddon,
  On as InputRightElement,
  Bn as Item,
  Xn as ItemActions,
  Hn as ItemContent,
  Kn as ItemDescription,
  Wn as ItemFooter,
  sd as ItemGroup,
  qn as ItemHeader,
  Yn as ItemMedia,
  id as ItemSeparator,
  Un as ItemTitle,
  Jn as Kbd,
  Zn as KbdGroup,
  Z as Label,
  or as LayoutAspectRatio,
  dd as Menubar,
  md as MenubarCheckboxItem,
  pd as MenubarContent,
  Qn as MenubarGroup,
  to as MenubarItem,
  gd as MenubarLabel,
  ld as MenubarMenu,
  eo as MenubarPortal,
  cd as MenubarRadioGroup,
  fd as MenubarRadioItem,
  vd as MenubarSeparator,
  hd as MenubarShortcut,
  bd as MenubarSub,
  yd as MenubarSubContent,
  xd as MenubarSubTrigger,
  ud as MenubarTrigger,
  Fa as Multiselect,
  wd as NavigationMenu,
  Sd as NavigationMenuContent,
  zd as NavigationMenuIndicator,
  kd as NavigationMenuItem,
  no as NavigationMenuLink,
  Nd as NavigationMenuList,
  Cd as NavigationMenuTrigger,
  ro as NavigationMenuViewport,
  Md as Pagination,
  Id as PaginationContent,
  Pd as PaginationEllipsis,
  Rd as PaginationItem,
  Qt as PaginationLink,
  Td as PaginationNext,
  _d as PaginationPrevious,
  At as PhoneInput,
  he as Popover,
  Qo as PopoverAnchor,
  $e as PopoverContent,
  be as PopoverTrigger,
  Dd as Progress,
  Sr as RadioGroup,
  zr as RadioGroupItem,
  Ad as ResizableHandle,
  Ed as ResizablePanel,
  jd as ResizablePanelGroup,
  Mr as ScrollArea,
  Ir as ScrollBar,
  tr as Section,
  io as SegmentControl,
  Ld as SegmentControlContent,
  co as SegmentControlItem,
  lo as SegmentControlList,
  We as Select,
  De as SelectContent,
  es as SelectGroup,
  je as SelectItem,
  ts as SelectLabel,
  gr as SelectScrollDownButton,
  fr as SelectScrollUpButton,
  as as SelectSeparator,
  Ze as SelectTrigger,
  Je as SelectValue,
  Zt as Separator,
  uo as Sheet,
  Fd as SheetClose,
  fo as SheetContent,
  ho as SheetDescription,
  Od as SheetFooter,
  go as SheetHeader,
  vo as SheetTitle,
  Vd as SheetTrigger,
  Bd as Sidebar,
  Wd as SidebarContent,
  Xd as SidebarFooter,
  Jd as SidebarGroup,
  Qd as SidebarGroupAction,
  el as SidebarGroupContent,
  Zd as SidebarGroupLabel,
  Kd as SidebarHeader,
  Ud as SidebarInput,
  Hd as SidebarInset,
  tl as SidebarMenu,
  nl as SidebarMenuAction,
  ol as SidebarMenuBadge,
  rl as SidebarMenuButton,
  al as SidebarMenuItem,
  sl as SidebarMenuSkeleton,
  il as SidebarMenuSub,
  ll as SidebarMenuSubButton,
  dl as SidebarMenuSubItem,
  $d as SidebarProvider,
  Yd as SidebarRail,
  qd as SidebarSeparator,
  Gd as SidebarTrigger,
  wt as Skeleton,
  cl as Slider,
  Ka as Spacer,
  ie as Spinner,
  La as SpinnerContainer,
  Va as SpinnerOverlay,
  pt as Stack,
  ml as Switch,
  fl as Table,
  vl as TableBody,
  wl as TableCaption,
  yl as TableCell,
  hl as TableFooter,
  xl as TableHead,
  gl as TableHeader,
  bl as TableRow,
  Nl as Tabs,
  kl as TabsContent,
  Mo as TabsList,
  Ro as TabsTrigger,
  jt as Textarea,
  Il as ThemeProvider,
  _l as ThemeToggle,
  Lt as TimePicker,
  ul as Toaster,
  Cl as Toggle,
  Sl as ToggleGroup,
  zl as ToggleGroupItem,
  Rt as Tooltip,
  Tt as TooltipContent,
  ut as TooltipProvider,
  _t as TooltipTrigger,
  F as Typography,
  Q as VStack,
  lr as Wrap,
  Jr as alertVariants,
  en as badgeVariants,
  Al as baseColors,
  ae as buttonVariants,
  Ea as checkboxVariants,
  o as cn,
  qr as countBadgeVariants,
  Ol as cva,
  Vt as dateTimePickerVariants,
  To as defaultDarkThemeColors,
  ra as defaultLightThemeColors,
  Ml as defineThemeColors,
  Dl as fontFamily,
  jl as fontSize,
  El as fontWeight,
  vr as inputVariants,
  Bl as isValidPhoneNumber,
  Gn as itemMediaVariants,
  $n as itemVariants,
  ao as navigationMenuTriggerStyle,
  Rr as phoneInputVariants,
  Pl as radius,
  oo as segmentControlVariants,
  so as segmentItemVariants,
  Ll as semanticColors,
  pl as showToast,
  So as sidebarMenuButtonVariants,
  Tl as spacing,
  Aa as spinnerVariants,
  zo as tabsListVariants,
  Io as tabsTriggerVariants,
  Cr as textareaVariants,
  _o as themeColorTokens,
  Pr as timePickerVariants,
  ta as toggleVariants,
  Oa as typographyVariants,
  Rl as useApplyTheme,
  Ge as useFormField,
  bo as useIsMobile,
  Ye as useSidebar,
  Do as useTheme
};
