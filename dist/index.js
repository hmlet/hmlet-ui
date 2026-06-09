import { jsxs as p, jsx as a, Fragment as ot } from "react/jsx-runtime";
import { MinusIcon as zt, CheckIcon as ge, Loader2 as Mt, SearchIcon as Ae, PackageOpen as le, ChevronDownIcon as Le, ChevronUpIcon as ca, ChevronRight as ve, ChevronLeft as Ce, CircleIcon as Ve, ChevronDown as Fe, Clock as Te, X as st, CalendarIcon as Pe, MoreHorizontal as ua, ArrowLeft as pa, ArrowRight as ma, XIcon as It, ChevronRightIcon as Oe, ChevronLeftIcon as fa, MoreHorizontalIcon as ga, GripVerticalIcon as va, PanelLeftIcon as ha, Sun as ba, Moon as xa } from "lucide-react";
import * as c from "react";
import q, { useState as bt, useEffect as _e, useCallback as ya, useMemo as wa, createContext as Na, useContext as ka } from "react";
import { Slot as J } from "@radix-ui/react-slot";
import { clsx as Ca } from "clsx";
import { twMerge as Sa } from "tailwind-merge";
import { cva as D } from "class-variance-authority";
import { cva as Yl } from "class-variance-authority";
import * as qe from "@radix-ui/react-checkbox";
import * as fe from "@radix-ui/react-tooltip";
import * as za from "@radix-ui/react-label";
import { DayPicker as Se } from "react-day-picker";
import * as we from "@radix-ui/react-popover";
import * as X from "@radix-ui/react-select";
import * as We from "@radix-ui/react-radio-group";
import Ma from "react-phone-number-input";
import { isValidPhoneNumber as Ul } from "react-phone-number-input";
import Rt from "react-phone-number-input/flags";
import * as ye from "@radix-ui/react-scroll-area";
import { OTPInput as Ia, OTPInputContext as Ra } from "input-otp";
import * as Ne from "@radix-ui/react-accordion";
import * as ne from "@radix-ui/react-alert-dialog";
import * as _a from "@radix-ui/react-aspect-ratio";
import * as it from "@radix-ui/react-avatar";
import * as _t from "@radix-ui/react-separator";
import Ta from "embla-carousel-react";
import * as dt from "recharts";
import * as lt from "@radix-ui/react-collapsible";
import { Command as ce } from "cmdk";
import * as B from "@radix-ui/react-dialog";
import * as H from "@radix-ui/react-context-menu";
import { Drawer as oe } from "vaul";
import * as U from "@radix-ui/react-dropdown-menu";
import { FormProvider as Pa, useFormContext as Da, useFormState as ja, Controller as Ea } from "react-hook-form";
import * as ke from "@radix-ui/react-hover-card";
import * as K from "@radix-ui/react-menubar";
import * as se from "@radix-ui/react-navigation-menu";
import * as xt from "@radix-ui/react-progress";
import * as ct from "react-resizable-panels";
import * as re from "@radix-ui/react-tabs";
import * as Me from "@radix-ui/react-slider";
import { useTheme as Aa } from "next-themes";
import { Toaster as La, toast as pe } from "sonner";
import * as yt from "@radix-ui/react-switch";
import * as Va from "@radix-ui/react-toggle";
import * as Tt from "@radix-ui/react-toggle-group";
function o(...e) {
  return Sa(Ca(e));
}
function Pt(e, t) {
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
const Fa = D(
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
      qe.Root,
      {
        ref: d,
        "data-slot": "checkbox",
        className: o(Fa({ variant: t, size: r }), e),
        checked: s,
        ...i,
        children: /* @__PURE__ */ a(
          qe.Indicator,
          {
            "data-slot": "checkbox-indicator",
            className: "flex items-center justify-center text-current transition-none",
            children: s === "indeterminate" ? /* @__PURE__ */ a(zt, { className: u }) : /* @__PURE__ */ a(ge, { className: u })
          }
        )
      }
    ),
    n && /* @__PURE__ */ a("span", { className: l, children: n })
  ] });
});
ut.displayName = qe.Root.displayName;
const Oa = D("inline-block shrink-0 animate-spin", {
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
    Mt,
    {
      ref: i,
      role: "status",
      "data-slot": "spinner",
      "aria-label": n,
      className: o(Oa({ variant: t, size: r }), e),
      ...s
    }
  )
);
ie.displayName = "Spinner";
const $a = c.forwardRef(({ className: e, children: t, text: r, ...n }, s) => /* @__PURE__ */ p(
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
$a.displayName = "SpinnerContainer";
const Ba = c.forwardRef(
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
Ba.displayName = "SpinnerOverlay";
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
function Dt({
  ...e
}) {
  return /* @__PURE__ */ a(pt, { children: /* @__PURE__ */ a(fe.Root, { "data-slot": "tooltip", ...e }) });
}
function jt({
  ...e
}) {
  return /* @__PURE__ */ a(fe.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function Et({
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
function Ga({
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
  emptyText: b = "No options",
  size: g = "md",
  isSearchable: h = !0,
  searchFn: y,
  searchPlaceholder: N = "Search..."
}) {
  const x = t !== void 0, [k, v] = c.useState(
    r || []
  ), S = x ? t : k, [T, _] = c.useState(!1), [P, j] = c.useState(""), E = Pt(P, 300), O = c.useRef(null), C = c.useRef(null);
  c.useEffect(() => {
    y && E !== void 0 && y(E);
  }, [E, y]);
  const R = c.useMemo(() => {
    if (!h || y || !P)
      return e;
    const w = P.toLowerCase();
    return e.filter((I) => (typeof I.label == "string" ? I.label : String(I.value)).toLowerCase().includes(w));
  }, [e, P, h, y]);
  c.useEffect(() => {
    T && h && O.current && O.current.focus(), T || j("");
  }, [T, h]), c.useEffect(() => {
    if (!T) return;
    function w(I) {
      C.current && !C.current.contains(I.target) && _(!1);
    }
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [T]);
  function A(w) {
    const M = S.includes(w) ? S.filter((L) => L !== w) : [...S, w];
    x || v(M), n?.(M);
  }
  function V() {
    i || _((w) => !w);
  }
  function z(w) {
    w.currentTarget.contains(w.relatedTarget) || _(!1);
  }
  return /* @__PURE__ */ p(
    "div",
    {
      className: o("relative", d),
      ref: C,
      tabIndex: -1,
      onBlur: z,
      children: [
        /* @__PURE__ */ a(pt, { children: /* @__PURE__ */ p(Dt, { children: [
          /* @__PURE__ */ a(jt, { asChild: !0, children: /* @__PURE__ */ p(
            "button",
            {
              type: "button",
              className: o(
                "border-input flex w-full items-center justify-between gap-2 rounded-md border bg-input-background whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
                g === "sm" && "px-2 py-1.5 text-xs h-9",
                g === "md" && "px-3 py-2 text-sm h-11",
                g === "lg" && "px-4 py-2.5 text-base h-12",
                i && "opacity-50 pointer-events-none"
              ),
              disabled: i,
              "aria-haspopup": "listbox",
              "aria-expanded": T,
              onClick: V,
              children: [
                /* @__PURE__ */ a(
                  "span",
                  {
                    className: "truncate block max-w-full",
                    style: { textOverflow: "ellipsis", overflow: "hidden" },
                    children: S.length === 0 ? /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: s }) : e.filter((M) => S.includes(M.value)).map(
                      (M) => typeof M.label == "string" ? M.label : String(M.value)
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
            Et,
            {
              sideOffset: 4,
              style: {
                maxWidth: "400px",
                whiteSpace: "normal",
                wordBreak: "break-word"
              },
              children: e.filter((w) => S.includes(w.value)).map(
                (w) => typeof w.label == "string" ? w.label : String(w.value)
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
              h && /* @__PURE__ */ a("div", { className: "p-2 border-b sticky top-0 bg-popover", children: /* @__PURE__ */ p("div", { className: "relative", children: [
                /* @__PURE__ */ a(Ae, { className: "absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
                /* @__PURE__ */ a(
                  "input",
                  {
                    ref: O,
                    type: "text",
                    className: o(
                      "w-full rounded-md border border-input bg-transparent pl-8 pr-2 outline-none focus:ring-2 focus:ring-ring/50",
                      g === "sm" && "py-1 text-xs",
                      g === "md" && "py-1.5 text-sm",
                      g === "lg" && "py-2 text-base"
                    ),
                    placeholder: N,
                    value: P,
                    onChange: (w) => j(w.target.value),
                    onClick: (w) => w.stopPropagation()
                  }
                )
              ] }) }),
              /* @__PURE__ */ a("div", { className: "overflow-auto flex-1", children: m ? /* @__PURE__ */ a("div", { className: "flex items-center justify-center py-6", children: /* @__PURE__ */ a(ie, { size: "md" }) }) : f?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 px-4 gap-2", children: /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  className: "text-destructive underline text-sm px-2 py-1 rounded hover:bg-destructive/10 transition-colors",
                  onClick: f.onClick,
                  children: f.text || "Error loading options. Click to retry."
                }
              ) }) : R.length === 0 ? /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center py-6 px-4 gap-2 text-muted-foreground", children: [
                /* @__PURE__ */ a(le, { className: "size-8 mb-2" }),
                /* @__PURE__ */ a("span", { children: P ? "No matches found" : b })
              ] }) : R.map((w) => {
                const I = S.includes(w.value);
                return /* @__PURE__ */ p(
                  "div",
                  {
                    className: o(
                      "flex items-center gap-2 cursor-pointer select-none hover:bg-accent hover:text-accent-foreground",
                      g === "sm" && "px-2 py-1.5 text-xs",
                      g === "md" && "px-3 py-2 text-sm",
                      g === "lg" && "px-4 py-2.5 text-base",
                      I && "bg-accent text-accent-foreground",
                      w.disabled && "opacity-50 pointer-events-none"
                    ),
                    onClick: () => !w.disabled && A(w.value),
                    "aria-selected": I,
                    role: "option",
                    tabIndex: -1,
                    children: [
                      l === "checkbox" ? /* @__PURE__ */ a(
                        ut,
                        {
                          checked: I,
                          tabIndex: -1,
                          className: "size-4 mr-2 pointer-events-none",
                          "aria-hidden": !0
                        }
                      ) : I && /* @__PURE__ */ a(ge, { className: "size-4 mr-2" }),
                      u ? u(w, I) : w.label
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
const Ya = D("", {
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
}), Ha = {
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
  const i = n ? J : r ?? Ha[t ?? "body-base"];
  return /* @__PURE__ */ a(
    i,
    {
      "data-slot": "typography",
      className: o(Ya({ variant: t }), e),
      ...s
    }
  );
}
function Z({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    za.Root,
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
const Ua = D("", {
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
}), At = q.forwardRef(
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
    display: b,
    children: g,
    ...h
  }, y) => /* @__PURE__ */ a(
    e,
    {
      ref: y,
      className: o(
        Ua({
          p: r,
          px: n,
          py: s,
          m: i,
          mx: d,
          my: l,
          shadow: u,
          width: m,
          height: f,
          display: b
        }),
        t
      ),
      ...h,
      children: g
    }
  )
);
At.displayName = "Box";
function $(e) {
  return e == null ? e : typeof e == "string" && /^\d+$/.test(e) ? Number(e) : e;
}
const Ka = D("flex", {
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
    mx: b,
    my: g,
    width: h,
    height: y,
    shadow: N,
    display: x,
    children: k,
    ...v
  }, S) => {
    const T = [0, 1, 2, 3, 4, 6, 8, 12, 16, 20];
    let _;
    if (n !== void 0) {
      const P = Number($(n));
      _ = T.includes(P) ? P : void 0;
    }
    return /* @__PURE__ */ a(
      e,
      {
        ref: S,
        className: o(
          Ka({
            direction: r,
            gap: _,
            align: s,
            justify: i,
            wrap: d,
            p: l,
            px: u,
            py: m,
            m: f,
            mx: b,
            my: g,
            width: h,
            height: y,
            shadow: N,
            display: x
          }),
          t
        ),
        ...v,
        children: k
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
const Xa = D("flex-wrap", {
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
}), qa = q.forwardRef(
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
    height: b,
    shadow: g,
    display: h,
    children: y,
    ...N
  }, x) => /* @__PURE__ */ a(
    e,
    {
      ref: x,
      className: o(
        Xa({
          gap: (() => {
            const k = [0, 1, 2, 3, 4, 6], v = typeof r == "number" ? r : r !== void 0 ? Number($(r)) : void 0;
            return k.includes(v) ? v : void 0;
          })(),
          align: n,
          p: s,
          px: i,
          py: d,
          m: l,
          mx: u,
          my: m,
          width: f,
          height: b,
          shadow: g,
          display: h
        }),
        t
      ),
      ...N,
      children: y
    }
  )
);
qa.displayName = "Inline";
const Wa = D("flex-1", {
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
}), Ja = q.forwardRef(
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
    display: b,
    ...g
  }, h) => /* @__PURE__ */ a(
    e,
    {
      ref: h,
      className: o(
        Wa({
          p: r,
          px: n,
          py: s,
          m: i,
          mx: d,
          my: l,
          width: u,
          height: m,
          shadow: f,
          display: b
        }),
        t
      ),
      "aria-hidden": "true",
      ...g
    }
  )
);
Ja.displayName = "Spacer";
const Za = D("grid", {
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
}), Qa = q.forwardRef(
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
    mx: b,
    my: g,
    children: h,
    ...y
  }, N) => /* @__PURE__ */ a(
    e,
    {
      ref: N,
      className: o(
        Za({
          columns: r,
          gap: n,
          autoFlow: s,
          alignItems: i,
          justifyItems: d,
          p: l,
          px: u,
          py: m,
          m: f,
          mx: b,
          my: g
        }),
        t
      ),
      ...y,
      children: h
    }
  )
);
Qa.displayName = "Grid";
const er = D("", {
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
}), tr = q.forwardRef(
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
    my: b,
    children: g,
    ...h
  }, y) => /* @__PURE__ */ a(
    e,
    {
      ref: y,
      className: o(
        er({
          colSpan: r == null ? void 0 : String(r),
          rowSpan: n == null ? void 0 : String(n),
          alignSelf: s,
          justifySelf: i,
          p: d,
          px: l,
          py: u,
          m,
          mx: f,
          my: b
        }),
        t
      ),
      ...h,
      children: g
    }
  )
);
tr.displayName = "GridItem";
const ar = D("mx-auto w-full", {
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
}), rr = q.forwardRef(
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
    shadow: b,
    display: g,
    children: h,
    ...y
  }, N) => /* @__PURE__ */ a(
    e,
    {
      ref: N,
      className: o(
        ar({
          maxWidth: r,
          p: n,
          px: s,
          py: i,
          m: d,
          mx: l,
          my: u,
          width: m,
          height: f,
          shadow: b,
          display: g
        }),
        t
      ),
      ...y,
      children: h
    }
  )
);
rr.displayName = "Container";
const nr = D("w-full", {
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
}), or = q.forwardRef(
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
    shadow: b,
    display: g,
    background: h,
    children: y,
    ...N
  }, x) => /* @__PURE__ */ a(
    e,
    {
      ref: x,
      className: o(
        nr({
          paddingY: r,
          p: n,
          px: s,
          py: i,
          m: d,
          mx: l,
          my: u,
          width: m,
          height: f,
          shadow: b,
          display: g,
          background: h
        }),
        t
      ),
      ...N,
      children: y
    }
  )
);
or.displayName = "Section";
const sr = D("items-center justify-center", {
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
}), ir = q.forwardRef(
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
    shadow: b,
    display: g,
    children: h,
    ...y
  }, N) => /* @__PURE__ */ a(
    e,
    {
      ref: N,
      className: o(
        sr({
          inline: r,
          height: n,
          p: s,
          px: i,
          py: d,
          m: l,
          mx: u,
          my: m,
          width: f,
          shadow: b,
          display: g
        }),
        t
      ),
      ...y,
      children: h
    }
  )
);
ir.displayName = "Center";
const dr = D("relative w-full overflow-hidden", {
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
}), lr = q.forwardRef(({ as: e = "div", className: t, ratio: r, children: n, ...s }, i) => /* @__PURE__ */ a(
  e,
  {
    ref: i,
    className: o(dr({ ratio: r }), t),
    ...s,
    children: n
  }
));
lr.displayName = "LayoutAspectRatio";
const cr = D("bg-border shrink-0", {
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
}), ur = q.forwardRef(
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
          cr({
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
ur.displayName = "Divider";
const pr = D("flex flex-wrap", {
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
}), mr = q.forwardRef(
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
    width: b,
    height: g,
    shadow: h,
    display: y,
    children: N,
    ...x
  }, k) => {
    const v = [0, 1, 2, 3, 4, 6];
    let S;
    if (r !== void 0) {
      const T = Number($(r));
      S = v.includes(T) ? T : void 0;
    }
    return /* @__PURE__ */ a(
      e,
      {
        ref: k,
        className: o(
          pr({
            gap: S,
            align: n,
            justify: s,
            p: i,
            px: d,
            py: l,
            m: u,
            mx: m,
            my: f,
            width: b,
            height: g,
            shadow: h,
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
mr.displayName = "Wrap";
const fr = D("", {
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
}), gr = q.forwardRef(
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
      className: o(fr({ horizontal: r, vertical: n, all: s }), t),
      ...d,
      children: i
    }
  )
);
gr.displayName = "Bleed";
const vr = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, disabled: i, ...d }) => /* @__PURE__ */ p(Q, { gap: "2", className: "group", "data-disabled": i, children: [
  e && /* @__PURE__ */ p(Z, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    Ga,
    {
      ...d,
      disabled: i,
      className: o(t && "border-destructive", s)
    }
  ),
  t && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-destructive", children: t }),
  r && !t && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-muted-foreground", children: r })
] }));
vr.displayName = "FormMultiselect";
function ts({
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
  }, m = "inline-flex items-center justify-center rounded-md font-medium uppercase tracking-wider transition-colors whitespace-nowrap", f = i || s ? "cursor-pointer hover:opacity-80" : "", b = `${m} ${d[r]} ${u[t]} ${f} ${n}`;
  return /* @__PURE__ */ p(At, { className: b, onClick: i, children: [
    /* @__PURE__ */ a("span", { className: l[r], children: e }),
    s && /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        onClick: (g) => {
          g.stopPropagation(), s();
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
function as({
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
const ae = D(
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
function hr({ className: e }) {
  return /* @__PURE__ */ a(
    Mt,
    {
      "aria-hidden": "true",
      className: o("animate-spin text-current", e)
    }
  );
}
function $e({
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
      children: s ? /* @__PURE__ */ p(ot, { children: [
        /* @__PURE__ */ a(hr, { className: "size-4" }),
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
function Be({
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
function rs({
  ...e
}) {
  return /* @__PURE__ */ a(we.Anchor, { "data-slot": "popover-anchor", ...e });
}
function Je({
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
function ns({
  ...e
}) {
  return /* @__PURE__ */ a(X.Group, { "data-slot": "select-group", ...e });
}
function Ze({
  ...e
}) {
  return /* @__PURE__ */ a(X.Value, { "data-slot": "select-value", ...e });
}
function Qe({
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
  const [f, b] = c.useState(""), g = Pt(f, 300), h = c.useRef(null);
  c.useEffect(() => {
    l && g !== void 0 && l(g);
  }, [g, l]);
  const y = c.useMemo(() => {
    if (!d || l || !f)
      return t;
    const x = f.toLowerCase();
    return c.Children.toArray(t).filter((k) => {
      if (c.isValidElement(k) && k.type === je) {
        const v = k, S = v.props.children;
        return (typeof S == "string" ? S : String(v.props.value || "")).toLowerCase().includes(x);
      }
      return !0;
    });
  }, [t, f, d, l]), N = c.Children.count(y) > 0;
  return c.useEffect(() => {
    if (d && h.current) {
      const x = setTimeout(() => {
        h.current?.focus();
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
        /* @__PURE__ */ a(br, {}),
        d && /* @__PURE__ */ a("div", { className: "p-2 border-b sticky top-0 bg-popover z-10", children: /* @__PURE__ */ p("div", { className: "relative", children: [
          /* @__PURE__ */ a(Ae, { className: "absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
          /* @__PURE__ */ a(
            "input",
            {
              ref: h,
              type: "text",
              className: "w-full rounded-md border border-input bg-transparent py-1.5 pl-8 pr-2 text-sm outline-none focus:ring-2 focus:ring-ring/50",
              placeholder: u,
              value: f,
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
              /* @__PURE__ */ a("span", { className: "text-xs", children: f ? "No matches found" : i })
            ] })
          }
        ),
        /* @__PURE__ */ a(xr, {})
      ]
    }
  ) });
}
function os({
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
function ss({
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
function br({
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
      children: /* @__PURE__ */ a(ca, { className: "size-4" })
    }
  );
}
function xr({
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
const yr = D(
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
      className: o(yr({ variant: t, size: r }), e),
      ref: i,
      ...s
    }
  )
);
de.displayName = "Input";
const Lt = (/* @__PURE__ */ new Date()).getFullYear(), wr = Lt - 100, Nr = Lt + 100, kr = [
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
function Cr(e) {
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
        Je,
        {
          isSearchable: !1,
          value: String(i),
          onValueChange: (m) => u(Number(m)),
          children: [
            /* @__PURE__ */ a(
              Qe,
              {
                size: "sm",
                className: "h-8 min-w-36 flex-1",
                "aria-label": "Calendar year",
                children: /* @__PURE__ */ a(Ze, { placeholder: "Year" })
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
      Je,
      {
        isSearchable: !1,
        value: String(d),
        onValueChange: (m) => s(new Date(i, Number(m), 1)),
        children: [
          /* @__PURE__ */ a(
            Qe,
            {
              size: "sm",
              className: "h-8 min-w-36 flex-1",
              "aria-label": "Calendar month",
              children: /* @__PURE__ */ a(Ze, { placeholder: "Month" })
            }
          ),
          /* @__PURE__ */ a(De, { className: "max-h-64", isSearchable: !1, children: kr.map((m, f) => /* @__PURE__ */ a(je, { value: String(f), children: m }, m)) })
        ]
      }
    )
  ] });
}
function gt(e, t) {
  return e != null && t != null ? { fromYear: e, toYear: t } : e != null ? { fromYear: e, toYear: e + 100 } : t != null ? { fromYear: t - 100, toYear: t } : { fromYear: wr, toYear: Nr };
}
function vt(e) {
  const { className: t, month: r, fromYear: n, toYear: s, onMonthChange: i, children: d } = e;
  return /* @__PURE__ */ p(
    Be,
    {
      align: "start",
      className: "p-0 w-auto bg-background border",
      onPointerDownOutside: (l) => {
        const u = l.target;
        (u.closest('[role="option"]') || u.closest('[role="listbox"]') || u.closest('[role="presentation"]')) && l.preventDefault();
      },
      children: [
        /* @__PURE__ */ a(
          Cr,
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
function Sr(e) {
  const t = wt(e.selected), [r, n] = c.useState(!1), [s, i] = c.useState(
    t
  ), [d, l] = c.useState(
    t ?? /* @__PURE__ */ new Date()
  );
  c.useEffect(() => {
    const v = wt(e.selected);
    i(v), v && l(v);
  }, [e.selected]);
  const {
    className: u,
    classNames: m,
    showOutsideDays: f = !0,
    fromYear: b,
    toYear: g,
    inputProps: h,
    onSelect: y,
    ...N
  } = e, x = gt(b, g), k = s ? s.toLocaleDateString() : void 0;
  return /* @__PURE__ */ p(he, { open: r, onOpenChange: n, children: [
    /* @__PURE__ */ a(be, { className: "w-full flex-1", children: /* @__PURE__ */ a(
      de,
      {
        readOnly: !0,
        value: k,
        ...h,
        placeholder: h?.placeholder || "Select date",
        onClick: (v) => {
          n(!0), h?.onClick?.(v);
        }
      }
    ) }),
    /* @__PURE__ */ a(
      vt,
      {
        className: u,
        month: d,
        fromYear: x.fromYear,
        toYear: x.toYear,
        onMonthChange: l,
        children: /* @__PURE__ */ a(
          Se,
          {
            showOutsideDays: f,
            month: d,
            onMonthChange: l,
            fromYear: x.fromYear,
            toYear: x.toYear,
            selected: s,
            onSelect: (v) => {
              i(v), v && l(v), n(!1), y?.(v);
            },
            classNames: ht(m),
            components: {
              IconLeft: ({ className: v, ...S }) => /* @__PURE__ */ a(Ce, { className: o("size-4", v), ...S }),
              IconRight: ({ className: v, ...S }) => /* @__PURE__ */ a(ve, { className: o("size-4", v), ...S })
            },
            ...N
          }
        )
      }
    )
  ] });
}
function zr(e) {
  const t = Nt(e.selected), [r, n] = c.useState(!1), [s, i] = c.useState(
    t
  ), [d, l] = c.useState(
    t?.[0] ?? /* @__PURE__ */ new Date()
  );
  c.useEffect(() => {
    const v = Nt(e.selected);
    i(v), v?.[0] && l(v[0]);
  }, [e.selected]);
  const {
    className: u,
    classNames: m,
    showOutsideDays: f = !0,
    fromYear: b,
    toYear: g,
    inputProps: h,
    onSelect: y,
    ...N
  } = e, x = gt(b, g), k = s && s.length > 0 ? s.map((v) => v.toLocaleDateString()).join(", ") : void 0;
  return /* @__PURE__ */ p(he, { open: r, onOpenChange: n, children: [
    /* @__PURE__ */ a(be, { className: "w-full flex-1", children: /* @__PURE__ */ a(
      de,
      {
        readOnly: !0,
        value: k,
        ...h,
        placeholder: h?.placeholder || "Select date(s)",
        onClick: (v) => {
          n(!0), h?.onClick?.(v);
        }
      }
    ) }),
    /* @__PURE__ */ a(
      vt,
      {
        className: u,
        month: d,
        fromYear: x.fromYear,
        toYear: x.toYear,
        onMonthChange: l,
        children: /* @__PURE__ */ a(
          Se,
          {
            showOutsideDays: f,
            month: d,
            onMonthChange: l,
            fromYear: x.fromYear,
            toYear: x.toYear,
            selected: s,
            onSelect: (v) => {
              i(v), v?.[0] && l(v[0]), n(!1), y?.(v);
            },
            classNames: ht(m),
            components: {
              IconLeft: ({ className: v, ...S }) => /* @__PURE__ */ a(Ce, { className: o("size-4", v), ...S }),
              IconRight: ({ className: v, ...S }) => /* @__PURE__ */ a(ve, { className: o("size-4", v), ...S })
            },
            ...N
          }
        )
      }
    )
  ] });
}
function Mr(e) {
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
    classNames: b,
    showOutsideDays: g = !0,
    fromYear: h,
    toYear: y,
    inputProps: N,
    onSelect: x,
    ...k
  } = e, v = gt(h, y);
  let S;
  s?.from && s?.to && (S = s.from?.toLocaleDateString() + " - " + s.to?.toLocaleDateString());
  const T = s?.from && !s?.to && u ? { from: s.from, to: u } : null;
  return /* @__PURE__ */ p(he, { open: r, onOpenChange: n, children: [
    /* @__PURE__ */ a(be, { className: "w-full flex-1", children: /* @__PURE__ */ a(
      de,
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
        fromYear: v.fromYear,
        toYear: v.toYear,
        onMonthChange: l,
        children: /* @__PURE__ */ a(
          Se,
          {
            showOutsideDays: g,
            month: d,
            onMonthChange: l,
            fromYear: v.fromYear,
            toYear: v.toYear,
            selected: s,
            onSelect: (_, P) => {
              if (s?.from && s?.to && P) {
                const j = { from: P, to: void 0 };
                i(j), x?.(j);
                return;
              }
              i(_), P && l(P), x?.(_), _?.from && _?.to && n(!1);
            },
            onDayMouseEnter: (_) => m(_),
            onDayMouseLeave: () => m(void 0),
            modifiers: {
              hoveredRange: T ? [T] : []
            },
            modifiersClassNames: {
              hoveredRange: "bg-accent/50 text-accent-foreground"
            },
            classNames: ht(b),
            components: {
              IconLeft: ({ className: _, ...P }) => /* @__PURE__ */ a(Ce, { className: o("size-4", _), ...P }),
              IconRight: ({ className: _, ...P }) => /* @__PURE__ */ a(ve, { className: o("size-4", _), ...P })
            },
            ...k
          }
        )
      }
    )
  ] });
}
function Ke(e) {
  return e.mode === "multiple" ? /* @__PURE__ */ a(
    zr,
    {
      ...e
    }
  ) : e.mode === "range" ? /* @__PURE__ */ a(Mr, { ...e }) : /* @__PURE__ */ a(Sr, { ...e });
}
const Ir = D(
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
      className: o(Ir({ variant: t }), e),
      ref: n,
      ...r
    }
  )
);
Vt.displayName = "Textarea";
function Rr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    We.Root,
    {
      "data-slot": "radio-group",
      className: o("grid gap-3", e),
      ...t
    }
  );
}
function _r({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    We.Item,
    {
      "data-slot": "radio-group-item",
      className: o(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        We.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ a(Ve, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
function Tr({
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
        /* @__PURE__ */ a(Pr, {}),
        /* @__PURE__ */ a(ye.Corner, {})
      ]
    }
  );
}
function Pr({
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
const Dr = D(
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
), jr = ({
  value: e,
  onChange: t,
  options: r,
  iconComponent: n,
  disabled: s,
  className: i,
  "aria-label": d
}) => {
  const [l, u] = c.useState(!1), [m, f] = c.useState(""), b = c.useRef(null), g = c.useMemo(() => {
    if (!m) return r;
    const h = m.toLowerCase();
    return r.filter(
      (y) => y.label.toLowerCase().includes(h)
    );
  }, [r, m]);
  return c.useEffect(() => {
    if (l) {
      const h = setTimeout(() => {
        b.current?.focus();
      }, 0);
      return () => clearTimeout(h);
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
          /* @__PURE__ */ a(Fe, { className: "size-3 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ p(
      Be,
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
                ref: b,
                type: "text",
                className: "w-full rounded-md border border-input bg-transparent py-1.5 pl-8 pr-2 text-sm outline-none focus:ring-2 focus:ring-ring/50 placeholder:text-muted-foreground/70",
                placeholder: "Search countries...",
                value: m,
                onChange: (h) => f(h.target.value),
                onKeyDown: (h) => {
                  h.key === "Enter" && (h.preventDefault(), g.length === 1 && (t(g[0].value), u(!1)));
                }
              }
            )
          ] }) }),
          /* @__PURE__ */ a(Tr, { className: "h-64", children: /* @__PURE__ */ a("div", { className: "p-1", children: g.length === 0 ? /* @__PURE__ */ a("div", { className: "py-6 text-center text-sm text-muted-foreground", children: "No countries found" }) : g.map((h) => {
            const y = h.value === e, N = h.value ? Rt[h.value] : null;
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
                  t(h.value), u(!1);
                },
                children: [
                  /* @__PURE__ */ a("span", { className: "flex items-center justify-center size-5 overflow-hidden rounded-sm bg-muted shrink-0", children: N ? /* @__PURE__ */ a(N, { title: h.label }) : /* @__PURE__ */ a("span", { className: "text-xs", children: "🌐" }) }),
                  /* @__PURE__ */ a("span", { className: "truncate", children: h.label }),
                  y && /* @__PURE__ */ a("span", { className: "ml-auto text-primary", children: "✓" })
                ]
              },
              h.value || "empty"
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
const Er = ({
  country: e,
  countryName: t
}) => {
  const r = e ? Rt[e] : null;
  return /* @__PURE__ */ a("span", { className: "flex items-center justify-center size-5 overflow-hidden rounded-sm bg-muted", children: r ? /* @__PURE__ */ a(r, { title: t ?? "" }) : /* @__PURE__ */ a("span", { className: "text-xs text-muted-foreground", children: "🌐" }) });
}, Ot = c.forwardRef(
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
    withCountryCallingCode: b = !0,
    inputProps: g,
    ...h
  }, y) => /* @__PURE__ */ a(
    "div",
    {
      ref: y,
      className: o(
        Dr({ variant: d, size: l }),
        "items-center px-3 gap-2",
        s && "opacity-50 cursor-not-allowed",
        i
      ),
      "data-slot": "phone-input",
      ...h,
      children: /* @__PURE__ */ a(
        Ma,
        {
          international: u,
          defaultCountry: r,
          country: m,
          value: e,
          onChange: (N) => t?.(N),
          onCountryChange: f,
          withCountryCallingCode: b,
          placeholder: n,
          disabled: s,
          countrySelectComponent: jr,
          inputComponent: Ft,
          flagComponent: Er,
          className: "flex items-center w-full",
          numberInputProps: g
        }
      )
    }
  )
);
Ot.displayName = "PhoneInput";
const Ar = D(
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
function Lr(e, t) {
  if (!t) return e;
  const [r, n] = e.split(":").map(Number), s = r >= 12 ? "PM" : "AM";
  return `${r % 12 || 12}:${n.toString().padStart(2, "0")} ${s}`;
}
function me(e) {
  return e.toString().padStart(2, "0");
}
const et = 250, G = et / 2, ee = 90, Ie = 62, Vr = 32;
function Fr({
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
  const b = c.useRef(null), g = c.useRef(!1), h = c.useRef({ x: 0, y: 0 }), y = m ? Ct(m) : 0, N = f ? Ct(f) : 1439;
  function x(z) {
    if (!b.current) return 0;
    const w = b.current.getBoundingClientRect(), I = w.left + w.width / 2, M = w.top + w.height / 2, L = z.clientX - I, ze = z.clientY - M;
    let Ue = Math.atan2(ze, L) * (180 / Math.PI) + 90;
    return Ue < 0 && (Ue += 360), Ue;
  }
  function k(z) {
    if (r === "hours")
      if (n) {
        let w = Math.round(z / 30) % 12;
        w === 0 && (w = 12);
        let I = w;
        s === "AM" ? I = w === 12 ? 0 : w : I = w === 12 ? 12 : w + 12;
        const M = I * 60 + t;
        M >= y && M <= N && i(I);
      } else {
        const w = v(), I = (ee + Ie) / 2;
        let M;
        w < I ? (M = Math.round(z / 30) % 12, M = M === 0 ? 0 : M + 12) : (M = Math.round(z / 30) % 12, M === 0 && (M = 12));
        const L = M * 60 + t;
        L >= y && L <= N && i(M);
      }
    else {
      const w = Math.round(z / 6) % 60, I = e * 60 + w;
      I >= y && I <= N && d(w);
    }
  }
  function v() {
    if (!b.current) return ee;
    const z = b.current.getBoundingClientRect(), w = z.left + z.width / 2, I = z.top + z.height / 2, M = h.current.x - w, L = h.current.y - I;
    return Math.sqrt(M * M + L * L);
  }
  function S(z) {
    g.current = !0, h.current = { x: z.clientX, y: z.clientY };
    const w = x(z);
    k(w);
  }
  function T(z) {
    if (!g.current) return;
    h.current = { x: z.clientX, y: z.clientY };
    const w = x(z);
    k(w);
  }
  function _() {
    g.current && (g.current = !1, r === "hours" && l("minutes"));
  }
  let P, j;
  r === "hours" ? (P = (n ? e % 12 : e) % 12 * 30, !n && (e === 0 || e > 12) ? j = Ie : j = ee) : (P = t * 6, j = ee);
  const E = (P - 90) * Math.PI / 180, O = G + j * Math.cos(E), C = G + j * Math.sin(E), R = [];
  if (n)
    for (let z = 1; z <= 12; z++) {
      const w = (z * 30 - 90) * Math.PI / 180;
      R.push({
        value: z,
        label: String(z),
        x: G + ee * Math.cos(w),
        y: G + ee * Math.sin(w),
        inner: !1
      });
    }
  else {
    for (let z = 1; z <= 12; z++) {
      const w = (z * 30 - 90) * Math.PI / 180;
      R.push({
        value: z,
        label: String(z),
        x: G + ee * Math.cos(w),
        y: G + ee * Math.sin(w),
        inner: !1
      });
    }
    for (let z = 0; z < 12; z++) {
      const w = z === 0 ? 0 : z + 12, I = (z * 30 - 90) * Math.PI / 180;
      R.push({
        value: w,
        label: me(w),
        x: G + Ie * Math.cos(I),
        y: G + Ie * Math.sin(I),
        inner: !0
      });
    }
  }
  const A = [];
  for (let z = 0; z < 12; z++) {
    const w = z * 5, I = (w * 6 - 90) * Math.PI / 180;
    A.push({
      value: w,
      label: me(w),
      x: G + ee * Math.cos(I),
      y: G + ee * Math.sin(I)
    });
  }
  const V = (z) => n ? e % 12 === z % 12 && (z !== 0 || e === 0 || e === 12) : e === z;
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
        width: et,
        height: et,
        className: "cursor-pointer select-none",
        onMouseDown: S,
        onMouseMove: T,
        onMouseUp: _,
        onMouseLeave: _,
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
              r: Vr / 2,
              className: "fill-primary"
            }
          ),
          r === "hours" ? R.map(({ value: z, label: w, x: I, y: M, inner: L }) => {
            const ze = V(z);
            return /* @__PURE__ */ a(
              "text",
              {
                x: I,
                y: M,
                textAnchor: "middle",
                dominantBaseline: "central",
                className: o(
                  "pointer-events-none text-[13px]",
                  L ? "font-normal" : "font-medium",
                  ze ? "fill-primary-foreground" : "fill-foreground"
                ),
                children: w
              },
              `h-${z}-${L ? "inner" : "outer"}`
            );
          }) : A.map(({ value: z, label: w, x: I, y: M }) => /* @__PURE__ */ a(
            "text",
            {
              x: I,
              y: M,
              textAnchor: "middle",
              dominantBaseline: "central",
              className: o(
                "pointer-events-none text-[13px] font-medium",
                t === z ? "fill-primary-foreground" : "fill-foreground"
              ),
              children: w
            },
            `m-${z}`
          ))
        ]
      }
    )
  ] });
}
const $t = c.forwardRef(
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
    placeholder: b = "Select time",
    use12Hours: g = !0
  }, h) => {
    const [y, N] = c.useState(!1), [x, k] = c.useState("hours"), v = c.useRef(null);
    c.useImperativeHandle(h, () => v.current);
    const S = n ? parseInt(n.split(":")[0], 10) : 0, T = n ? parseInt(n.split(":")[1], 10) : 0, [_, P] = c.useState(S), [j, E] = c.useState(T), [O, C] = c.useState(
      S >= 12 ? "PM" : "AM"
    );
    c.useEffect(() => {
      const M = n ? parseInt(n.split(":")[0], 10) : 0, L = n ? parseInt(n.split(":")[1], 10) : 0;
      P(M), E(L), C(M >= 12 ? "PM" : "AM");
    }, [n]), c.useEffect(() => {
      y && k("hours");
    }, [y]), c.useEffect(() => {
      function M(L) {
        v.current && !v.current.contains(L.target) && N(!1);
      }
      return document.addEventListener("mousedown", M), () => document.removeEventListener("mousedown", M);
    }, []), c.useEffect(() => {
      function M(L) {
        L.key === "Escape" && N(!1);
      }
      if (y)
        return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M);
    }, [y]);
    function R(M, L) {
      s?.(`${me(M)}:${me(L)}`);
    }
    function A(M) {
      P(M), R(M, j);
    }
    function V(M) {
      E(M), R(_, M);
    }
    function z(M) {
      C(M);
      let L = _;
      M === "AM" && _ >= 12 && (L = _ - 12), M === "PM" && _ < 12 && (L = _ + 12), P(L), R(L, j);
    }
    const w = (M) => {
      M.stopPropagation(), s?.(null);
    }, I = r === "sm" ? 14 : r === "lg" ? 18 : 16;
    return /* @__PURE__ */ p(
      "div",
      {
        ref: v,
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
              onClick: () => N((M) => !M),
              className: o(
                Ar({ variant: t, size: r }),
                "cursor-pointer select-none gap-2",
                e
              ),
              "aria-expanded": y,
              "aria-haspopup": "dialog",
              children: [
                /* @__PURE__ */ a(Te, { size: I, className: "shrink-0 text-muted-foreground" }),
                /* @__PURE__ */ a(
                  "span",
                  {
                    className: o(
                      "flex-1 text-left",
                      !n && "text-muted-foreground/70"
                    ),
                    children: n ? Lr(n, g) : b
                  }
                ),
                n ? /* @__PURE__ */ a(
                  "span",
                  {
                    role: "button",
                    tabIndex: 0,
                    onClick: w,
                    onKeyDown: (M) => {
                      (M.key === "Enter" || M.key === " ") && w(M);
                    },
                    className: "shrink-0 rounded-sm p-0.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
                    "aria-label": "Clear time",
                    children: /* @__PURE__ */ a(st, { size: I })
                  }
                ) : /* @__PURE__ */ a(
                  Fe,
                  {
                    size: I,
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
                Fr,
                {
                  hour: _,
                  minute: j,
                  mode: x,
                  use12Hours: g,
                  period: O,
                  onSelectHour: A,
                  onSelectMinute: V,
                  onModeChange: k,
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
$t.displayName = "TimePicker";
const Bt = D(
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
function tt(e, t, r) {
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
const at = 220, Y = at / 2, te = 85, Re = 58, Or = 28;
function rt({ hour: e, minute: t, use12Hours: r, onChange: n }) {
  const s = c.useRef(null), i = c.useRef(!1), d = c.useRef({ x: 0, y: 0 }), [l, u] = c.useState("hours"), [m, f] = c.useState(
    e >= 12 ? "PM" : "AM"
  );
  c.useEffect(() => {
    f(e >= 12 ? "PM" : "AM");
  }, [e]);
  function b(C) {
    if (!s.current) return 0;
    const R = s.current.getBoundingClientRect(), A = R.left + R.width / 2, V = R.top + R.height / 2, z = C.clientX - A, w = C.clientY - V;
    let I = Math.atan2(w, z) * (180 / Math.PI) + 90;
    return I < 0 && (I += 360), I;
  }
  function g() {
    if (!s.current) return te;
    const C = s.current.getBoundingClientRect(), R = C.left + C.width / 2, A = C.top + C.height / 2, V = d.current.x - R, z = d.current.y - A;
    return Math.sqrt(V * V + z * z);
  }
  function h(C) {
    if (l === "hours")
      if (r) {
        let R = Math.round(C / 30) % 12;
        R === 0 && (R = 12);
        let A = R;
        m === "AM" ? A = R === 12 ? 0 : R : A = R === 12 ? 12 : R + 12, n(A, t);
      } else {
        const R = g(), A = (te + Re) / 2;
        let V;
        R < A ? (V = Math.round(C / 30) % 12, V = V === 0 ? 0 : V + 12) : (V = Math.round(C / 30) % 12, V === 0 && (V = 12)), n(V, t);
      }
    else {
      const R = Math.round(C / 6) % 60;
      n(e, R);
    }
  }
  function y(C) {
    i.current = !0, d.current = { x: C.clientX, y: C.clientY }, h(b(C));
  }
  function N(C) {
    i.current && (d.current = { x: C.clientX, y: C.clientY }, h(b(C)));
  }
  function x() {
    i.current && (i.current = !1, l === "hours" && u("minutes"));
  }
  function k(C) {
    f(C);
    let R = e;
    C === "AM" && e >= 12 && (R = e - 12), C === "PM" && e < 12 && (R = e + 12), n(R, t);
  }
  let v, S;
  l === "hours" ? (v = (r ? e % 12 : e) % 12 * 30, !r && (e === 0 || e > 12) ? S = Re : S = te) : (v = t * 6, S = te);
  const T = (v - 90) * Math.PI / 180, _ = Y + S * Math.cos(T), P = Y + S * Math.sin(T), j = [];
  if (r)
    for (let C = 1; C <= 12; C++) {
      const R = (C * 30 - 90) * Math.PI / 180;
      j.push({
        value: C,
        label: String(C),
        x: Y + te * Math.cos(R),
        y: Y + te * Math.sin(R),
        inner: !1
      });
    }
  else {
    for (let C = 1; C <= 12; C++) {
      const R = (C * 30 - 90) * Math.PI / 180;
      j.push({
        value: C,
        label: String(C),
        x: Y + te * Math.cos(R),
        y: Y + te * Math.sin(R),
        inner: !1
      });
    }
    for (let C = 0; C < 12; C++) {
      const R = C === 0 ? 0 : C + 12, A = (C * 30 - 90) * Math.PI / 180;
      j.push({
        value: R,
        label: W(R),
        x: Y + Re * Math.cos(A),
        y: Y + Re * Math.sin(A),
        inner: !0
      });
    }
  }
  const E = [];
  for (let C = 0; C < 12; C++) {
    const R = C * 5, A = (R * 6 - 90) * Math.PI / 180;
    E.push({
      value: R,
      label: W(R),
      x: Y + te * Math.cos(A),
      y: Y + te * Math.sin(A)
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
            onClick: () => k("AM"),
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
            onClick: () => k("PM"),
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
        width: at,
        height: at,
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
              x2: _,
              y2: P,
              strokeWidth: 2,
              className: "stroke-primary"
            }
          ),
          /* @__PURE__ */ a(
            "circle",
            {
              cx: _,
              cy: P,
              r: Or / 2,
              className: "fill-primary"
            }
          ),
          l === "hours" ? j.map(({ value: C, label: R, x: A, y: V, inner: z }) => {
            const w = O(C);
            return /* @__PURE__ */ a(
              "text",
              {
                x: A,
                y: V,
                textAnchor: "middle",
                dominantBaseline: "central",
                className: o(
                  "pointer-events-none text-[12px]",
                  z ? "font-normal" : "font-medium",
                  w ? "fill-primary-foreground" : "fill-foreground"
                ),
                children: R
              },
              `h-${C}-${z ? "i" : "o"}`
            );
          }) : E.map(({ value: C, label: R, x: A, y: V }) => /* @__PURE__ */ a(
            "text",
            {
              x: A,
              y: V,
              textAnchor: "middle",
              dominantBaseline: "central",
              className: o(
                "pointer-events-none text-[12px] font-medium",
                t === C ? "fill-primary-foreground" : "fill-foreground"
              ),
              children: R
            },
            `m-${C}`
          ))
        ]
      }
    )
  ] });
}
const Gt = {
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
}, Yt = {
  IconLeft: ({ className: e, ...t }) => /* @__PURE__ */ a(Ce, { className: o("size-4", e), ...t }),
  IconRight: ({ className: e, ...t }) => /* @__PURE__ */ a(ve, { className: o("size-4", e), ...t })
};
function $r({
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
  calendarProps: b
}) {
  const [g, h] = c.useState(!1), [y, N] = c.useState("date"), x = n?.date, k = n?.hour ?? 0, v = n?.minute ?? 0;
  function S(E) {
    E && (s?.({ date: E, hour: k, minute: v }), N("time"));
  }
  function T(E, O) {
    s?.({ date: x ?? /* @__PURE__ */ new Date(), hour: E, minute: O });
  }
  function _(E) {
    E.stopPropagation(), E.preventDefault(), s?.(null);
  }
  const P = n ? `${xe(n.date)}, ${tt(n.hour, n.minute, f)}` : null, j = r === "sm" ? 14 : r === "lg" ? 18 : 16;
  return /* @__PURE__ */ p(he, { open: g, onOpenChange: h, children: [
    /* @__PURE__ */ a(be, { asChild: !0, disabled: i, children: /* @__PURE__ */ p(
      "button",
      {
        type: "button",
        disabled: i,
        className: o(
          Bt({ variant: t, size: r }),
          "cursor-pointer select-none gap-2",
          i && "pointer-events-none opacity-50",
          e
        ),
        "aria-expanded": g,
        "aria-haspopup": "dialog",
        ...l ? { id: l } : {},
        children: [
          /* @__PURE__ */ a(
            Pe,
            {
              size: j,
              className: "shrink-0 text-muted-foreground"
            }
          ),
          /* @__PURE__ */ a(
            "span",
            {
              className: o(
                "flex-1 text-left truncate",
                !P && "text-muted-foreground/70"
              ),
              children: P ?? m
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
              children: /* @__PURE__ */ a(st, { size: j })
            }
          ) : /* @__PURE__ */ a(
            Fe,
            {
              size: j,
              className: o(
                "shrink-0 text-muted-foreground transition-transform duration-200",
                g && "rotate-180"
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ p(Be, { align: "start", className: "w-auto p-0 bg-popover border", children: [
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
          onSelect: S,
          className: "p-3",
          classNames: Gt,
          components: Yt,
          ...b
        }
      ) : /* @__PURE__ */ a("div", { className: "p-3", children: /* @__PURE__ */ a(
        rt,
        {
          hour: k,
          minute: v,
          use12Hours: f,
          onChange: T
        }
      ) })
    ] })
  ] });
}
function Br({
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
  calendarProps: b
}) {
  const [g, h] = c.useState(!1), [y, N] = c.useState(
    "date"
  ), [x, k] = c.useState(), v = n?.from?.date, S = n?.to?.date, T = n?.from?.hour ?? 0, _ = n?.from?.minute ?? 0, P = n?.to?.hour ?? 0, j = n?.to?.minute ?? 0, E = v || S ? { from: v, to: S } : void 0, O = v && !S && x ? { from: v, to: x } : null;
  function C(I, M) {
    if (v && S && M) {
      s?.({
        from: { date: M, hour: 0, minute: 0 },
        to: void 0
      });
      return;
    }
    if (!I?.from) {
      s?.(null);
      return;
    }
    const L = {
      from: {
        date: I.from,
        hour: n?.from?.hour ?? 0,
        minute: n?.from?.minute ?? 0
      },
      to: I.to ? {
        date: I.to,
        hour: n?.to?.hour ?? 0,
        minute: n?.to?.minute ?? 0
      } : void 0
    };
    s?.(L), I.from && I.to && N("start-time");
  }
  function R(I, M) {
    s?.({
      from: {
        date: v ?? /* @__PURE__ */ new Date(),
        hour: I,
        minute: M
      },
      to: n?.to
    });
  }
  function A(I, M) {
    const L = {
      date: S ?? /* @__PURE__ */ new Date(),
      hour: I,
      minute: M
    };
    s?.({
      from: n?.from,
      to: L
    });
  }
  function V(I) {
    I.stopPropagation(), I.preventDefault(), s?.(null);
  }
  let z = null;
  if (n?.from) {
    const I = `${xe(n.from.date)}, ${tt(n.from.hour, n.from.minute, f)}`;
    if (n?.to) {
      const M = `${xe(n.to.date)}, ${tt(n.to.hour, n.to.minute, f)}`;
      z = `${I} – ${M}`;
    } else
      z = I;
  }
  const w = r === "sm" ? 14 : r === "lg" ? 18 : 16;
  return /* @__PURE__ */ p(he, { open: g, onOpenChange: h, children: [
    /* @__PURE__ */ a(be, { asChild: !0, disabled: i, children: /* @__PURE__ */ p(
      "button",
      {
        type: "button",
        disabled: i,
        className: o(
          Bt({ variant: t, size: r }),
          "cursor-pointer select-none gap-2",
          i && "pointer-events-none opacity-50",
          e
        ),
        "aria-expanded": g,
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
              onClick: V,
              onKeyDown: (I) => {
                (I.key === "Enter" || I.key === " ") && V(I);
              },
              className: "shrink-0 rounded-sm p-0.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
              "aria-label": "Clear",
              children: /* @__PURE__ */ a(st, { size: w })
            }
          ) : /* @__PURE__ */ a(
            Fe,
            {
              size: w,
              className: o(
                "shrink-0 text-muted-foreground transition-transform duration-200",
                g && "rotate-180"
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ p(Be, { align: "start", className: "w-auto p-0 bg-popover border", children: [
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
          onSelect: C,
          onDayMouseEnter: (I) => k(I),
          onDayMouseLeave: () => k(void 0),
          modifiers: {
            hoveredRange: O ? [O] : []
          },
          modifiersClassNames: {
            hoveredRange: "bg-accent/50 text-accent-foreground"
          },
          className: "p-3",
          classNames: Gt,
          components: Yt,
          ...b
        }
      ) : y === "start-time" ? /* @__PURE__ */ p("div", { className: "p-3", children: [
        /* @__PURE__ */ a("p", { className: "text-xs text-muted-foreground text-center mb-2", children: v ? xe(v) : "Select start date first" }),
        /* @__PURE__ */ a(
          rt,
          {
            hour: T,
            minute: _,
            use12Hours: f,
            onChange: R
          }
        )
      ] }) : /* @__PURE__ */ p("div", { className: "p-3", children: [
        /* @__PURE__ */ a("p", { className: "text-xs text-muted-foreground text-center mb-2", children: S ? xe(S) : "Select end date first" }),
        /* @__PURE__ */ a(
          rt,
          {
            hour: P,
            minute: j,
            use12Hours: f,
            onChange: A
          }
        )
      ] })
    ] })
  ] });
}
const Ht = c.forwardRef(
  (e) => e.mode === "range" ? /* @__PURE__ */ a(Br, { ...e }) : /* @__PURE__ */ a($r, { ...e })
);
Ht.displayName = "DateTimePicker";
function Gr({
  className: e,
  containerClassName: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    Ia,
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
function is({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "input-otp-group",
      className: o("flex items-center gap-1", e),
      ...t
    }
  );
}
function ds({
  index: e,
  className: t,
  ...r
}) {
  const n = c.useContext(Ra), { char: s, hasFakeCaret: i, isActive: d } = n?.slots[e] ?? {};
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
function ls({ ...e }) {
  return /* @__PURE__ */ a("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ a(zt, {}) });
}
const Yr = c.forwardRef(
  ({ label: e, error: t, helperText: r, icon: n, required: s, className: i, ...d }, l) => /* @__PURE__ */ p(Q, { gap: "2", children: [
    e && /* @__PURE__ */ p(Z, { children: [
      e,
      s && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    n ? /* @__PURE__ */ p(ft, { gap: "2", className: "relative", children: [
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
Yr.displayName = "FormInput";
const Hr = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, ...i }, d) => /* @__PURE__ */ p(Q, { gap: "2", children: [
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
Hr.displayName = "FormTextarea";
const Ur = c.forwardRef(
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
      emptyText: b = "No options",
      apiError: g,
      value: h,
      onValueChange: y,
      ...N
    } = e;
    return /* @__PURE__ */ p(Q, { gap: "2", className: "group", "data-disabled": l, children: [
      r && /* @__PURE__ */ p(Z, { children: [
        r,
        i && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
      ] }),
      /* @__PURE__ */ p(
        Je,
        {
          value: h,
          onValueChange: y,
          disabled: l,
          loading: f,
          emptyText: b,
          apiError: g,
          ...N,
          children: [
            /* @__PURE__ */ a(
              Qe,
              {
                ref: t,
                "aria-invalid": !!n,
                className: o(n && "border-destructive", d),
                children: /* @__PURE__ */ a(Ze, { placeholder: m })
              }
            ),
            /* @__PURE__ */ a(
              De,
              {
                hasOptions: u.length > 0,
                loading: f,
                apiError: g,
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
Ur.displayName = "FormSelect";
const Kr = c.forwardRef(
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
              Ke,
              {
                ...m,
                mode: "multiple",
                selected: l,
                onSelect: u
              }
            );
          case "range":
            return /* @__PURE__ */ a(
              Ke,
              {
                ...m,
                mode: "range",
                selected: l,
                onSelect: u
              }
            );
          default:
            return /* @__PURE__ */ a(
              Ke,
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
Kr.displayName = "FormCalendar";
const Xr = c.forwardRef((e, t) => {
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
Xr.displayName = "FormCheckbox";
const qr = c.forwardRef((e, t) => {
  const { label: r, error: n, helperText: s, required: i, className: d, options: l, ...u } = e;
  return /* @__PURE__ */ p(Q, { gap: "2", children: [
    r && /* @__PURE__ */ p(Z, { children: [
      r,
      i && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ a(
      Rr,
      {
        ref: t,
        "aria-invalid": !!n,
        className: o(n && "ring-2 ring-destructive/20", d),
        ...u,
        children: l.map((m) => /* @__PURE__ */ p(ft, { as: "label", gap: "2", className: "items-center", children: [
          /* @__PURE__ */ a(
            _r,
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
qr.displayName = "FormRadioGroup";
const Wr = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, ...i }, d) => /* @__PURE__ */ p(Q, { gap: "2", children: [
  e && /* @__PURE__ */ p(Z, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    Ot,
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
Wr.displayName = "FormPhoneInput";
const Jr = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, ...i }, d) => /* @__PURE__ */ p(Q, { gap: "2", children: [
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
Jr.displayName = "FormTimePicker";
const Zr = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, ...i }, d) => /* @__PURE__ */ p(Q, { gap: "2", children: [
  e && /* @__PURE__ */ p(Z, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    Ht,
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
Zr.displayName = "FormDateTimePicker";
function cs({
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
      Gr,
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
const Qr = D(
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
), en = c.forwardRef(
  ({ className: e, variant: t, size: r, count: n, ...s }, i) => /* @__PURE__ */ a(
    "span",
    {
      ref: i,
      className: o(Qr({ variant: t, size: r }), e),
      ...s,
      children: n
    }
  )
);
en.displayName = "CountBadge";
function us({
  ...e
}) {
  return /* @__PURE__ */ a(Ne.Root, { "data-slot": "accordion", ...e });
}
function ps({
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
function ms({
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
function fs({
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
const tn = D(
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
function gs({
  className: e,
  variant: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: o(tn({ variant: t }), e),
      ...r
    }
  );
}
function vs({ className: e, ...t }) {
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
function hs({ className: e, ...t }) {
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
function bs({
  ...e
}) {
  return /* @__PURE__ */ a(ne.Root, { "data-slot": "alert-dialog", ...e });
}
function xs({
  ...e
}) {
  return /* @__PURE__ */ a(ne.Trigger, { "data-slot": "alert-dialog-trigger", ...e });
}
function an({
  ...e
}) {
  return /* @__PURE__ */ a(ne.Portal, { "data-slot": "alert-dialog-portal", ...e });
}
function rn({
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
function ys({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(an, { children: [
    /* @__PURE__ */ a(rn, {}),
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
function ws({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: o("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function Ns({ className: e, ...t }) {
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
function ks({
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
function Cs({
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
function Ss({
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
function zs({
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
function Ms({
  ...e
}) {
  return /* @__PURE__ */ a(_a.Root, { "data-slot": "aspect-ratio", ...e });
}
function Is({
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
function Rs({
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
function _s({
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
const nn = D(
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
function Ts({
  className: e,
  variant: t,
  asChild: r = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    r ? J : "span",
    {
      "data-slot": "badge",
      className: o(nn({ variant: t }), e),
      ...n
    }
  );
}
function Ps({ ...e }) {
  return /* @__PURE__ */ a("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function Ds({ className: e, ...t }) {
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
function js({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: o("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function Es({
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
function As({ className: e, ...t }) {
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
function Ls({
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
function Vs({
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
        /* @__PURE__ */ a(ua, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
const on = c.forwardRef(
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
on.displayName = "ButtonGroup";
function Fs({
  className: e,
  orientation: t = "vertical",
  decorative: r = !0,
  ...n
}) {
  return /* @__PURE__ */ a(
    _t.Root,
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
function Os({
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
function sn({
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
  const f = $(e ?? "2"), b = t !== void 0 ? $(t) : void 0, g = r !== void 0 ? $(r) : void 0, h = b !== void 0 && b !== "none" ? `px-[var(--spacing-${b})]` : "", y = g !== void 0 && g !== "none" ? `py-[var(--spacing-${g})]` : "", N = f !== void 0 && f !== "none" && b === void 0 && g === void 0 ? `p-[var(--spacing-${f})]` : "", x = n !== void 0 ? $(n) : void 0, k = s !== void 0 ? $(s) : void 0, v = i !== void 0 ? $(i) : void 0, S = k !== void 0 && k !== "none" ? `mx-[var(--spacing-${k})]` : "", T = v !== void 0 && v !== "none" ? `my-[var(--spacing-${v})]` : "", _ = x !== void 0 && x !== "none" && k === void 0 && v === void 0 ? `m-[var(--spacing-${x})]` : "", j = d ? {
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
  }, O = {
    auto: "h-auto",
    full: "h-full",
    fit: "h-fit",
    screen: "h-screen"
  }, C = l ? E[l] : "", R = u ? O[u] : "";
  return [
    N,
    h,
    y,
    _,
    S,
    T,
    j,
    C,
    R,
    m || ""
  ].filter(Boolean).join(" ");
}
function $s({
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
  ...b
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card",
      className: o(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
        sn({ p: t, px: r, py: n, m: s, mx: i, my: d, shadow: l, w: u, h: m, display: f }),
        e
      ),
      ...b
    }
  );
}
function Bs({ className: e, ...t }) {
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
function Gs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "h4",
    {
      "data-slot": "card-title",
      className: o("leading-none", e),
      ...t
    }
  );
}
function Ys({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "card-description",
      className: o("text-muted-foreground", e),
      ...t
    }
  );
}
function Hs({ className: e, ...t }) {
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
function Us({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-content",
      className: o("px-6 [&:last-child]:pb-6", e),
      ...t
    }
  );
}
function Ks({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-footer",
      className: o("flex items-center px-6 pb-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const Ut = c.createContext(null);
function Ge() {
  const e = c.useContext(Ut);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function Xs({
  orientation: e = "horizontal",
  opts: t,
  setApi: r,
  plugins: n,
  className: s,
  children: i,
  ...d
}) {
  const [l, u] = Ta(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    n
  ), [m, f] = c.useState(!1), [b, g] = c.useState(!1), h = c.useCallback((k) => {
    k && (f(k.canScrollPrev()), g(k.canScrollNext()));
  }, []), y = c.useCallback(() => {
    u?.scrollPrev();
  }, [u]), N = c.useCallback(() => {
    u?.scrollNext();
  }, [u]), x = c.useCallback(
    (k) => {
      k.key === "ArrowLeft" ? (k.preventDefault(), y()) : k.key === "ArrowRight" && (k.preventDefault(), N());
    },
    [y, N]
  );
  return c.useEffect(() => {
    !u || !r || r(u);
  }, [u, r]), c.useEffect(() => {
    if (u)
      return h(u), u.on("reInit", h), u.on("select", h), () => {
        u?.off("select", h);
      };
  }, [u, h]), /* @__PURE__ */ a(
    Ut.Provider,
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
function qs({ className: e, ...t }) {
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
function Ws({ className: e, ...t }) {
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
function Js({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: s, scrollPrev: i, canScrollPrev: d } = Ge();
  return /* @__PURE__ */ p(
    $e,
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
        /* @__PURE__ */ a(pa, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function Zs({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: s, scrollNext: i, canScrollNext: d } = Ge();
  return /* @__PURE__ */ p(
    $e,
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
        /* @__PURE__ */ a(ma, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const dn = { light: "", dark: ".dark" }, Kt = c.createContext(null);
function Xt() {
  const e = c.useContext(Kt);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function Qs({
  id: e,
  className: t,
  children: r,
  config: n,
  ...s
}) {
  const i = c.useId(), d = `chart-${e || i.replace(/:/g, "")}`;
  return /* @__PURE__ */ a(Kt.Provider, { value: { config: n }, children: /* @__PURE__ */ p(
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
        /* @__PURE__ */ a(ln, { id: d, config: n }),
        /* @__PURE__ */ a(dt.ResponsiveContainer, { children: r })
      ]
    }
  ) });
}
const ln = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(
    ([, n]) => n.theme || n.color
  );
  return r.length ? /* @__PURE__ */ a(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(dn).map(
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
}, ei = dt.Tooltip;
function ti({
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
  nameKey: b,
  labelKey: g
}) {
  const { config: h } = Xt(), y = c.useMemo(() => {
    if (s || !t?.length)
      return null;
    const [x] = t, k = `${g || x?.dataKey || x?.name || "value"}`, v = nt(h, x, k), S = !g && typeof d == "string" ? h[d]?.label || d : v?.label;
    return l ? /* @__PURE__ */ a("div", { className: o("font-medium", u), children: l(S, t) }) : S ? /* @__PURE__ */ a("div", { className: o("font-medium", u), children: S }) : null;
  }, [
    d,
    l,
    t,
    s,
    u,
    h,
    g
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
        /* @__PURE__ */ a("div", { className: "grid gap-1.5", children: t.map((x, k) => {
          const v = `${b || x.name || x.dataKey || "value"}`, S = nt(h, x, v), T = f || x.payload.fill || x.color;
          return /* @__PURE__ */ a(
            "div",
            {
              className: o(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                n === "dot" && "items-center"
              ),
              children: m && x?.value !== void 0 && x.name ? m(x.value, x.name, x, k, x.payload) : /* @__PURE__ */ p(ot, { children: [
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
                        /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: S?.label || x.name })
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
const ai = dt.Legend;
function ri({
  className: e,
  hideIcon: t = !1,
  payload: r,
  verticalAlign: n = "bottom",
  nameKey: s
}) {
  const { config: i } = Xt();
  return r?.length ? /* @__PURE__ */ a(
    "div",
    {
      className: o(
        "flex items-center justify-center gap-4",
        n === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: r.map((d) => {
        const l = `${s || d.dataKey || "value"}`, u = nt(i, d, l);
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
function nt(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let s = r;
  return r in t && typeof t[r] == "string" ? s = t[r] : n && r in n && typeof n[r] == "string" && (s = n[r]), s in e ? e[s] : e[r];
}
function cn({
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
  const f = $(e), b = t !== void 0 ? $(t) : void 0, g = r !== void 0 ? $(r) : void 0, h = b !== void 0 && b !== "none" ? `px-[var(--spacing-${b})]` : "", y = g !== void 0 && g !== "none" ? `py-[var(--spacing-${g})]` : "", N = f !== void 0 && f !== "none" && b === void 0 && g === void 0 ? `p-[var(--spacing-${f})]` : "", x = n !== void 0 ? $(n) : void 0, k = s !== void 0 ? $(s) : void 0, v = i !== void 0 ? $(i) : void 0, S = k !== void 0 && k !== "none" ? `mx-[var(--spacing-${k})]` : "", T = v !== void 0 && v !== "none" ? `my-[var(--spacing-${v})]` : "", _ = x !== void 0 && x !== "none" && k === void 0 && v === void 0 ? `m-[var(--spacing-${x})]` : "", j = d ? {
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
  }, O = {
    auto: "h-auto",
    full: "h-full",
    fit: "h-fit",
    screen: "h-screen"
  }, C = l ? E[l] : "", R = u ? O[u] : "";
  return [
    N,
    h,
    y,
    _,
    S,
    T,
    j,
    C,
    R,
    m || ""
  ].filter(Boolean).join(" ");
}
function ni({
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
  ...b
}) {
  return /* @__PURE__ */ a(
    lt.Root,
    {
      "data-slot": "collapsible",
      className: o(
        cn({
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
      ...b
    }
  );
}
function oi(e) {
  return /* @__PURE__ */ a(
    lt.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      className: o("cursor-pointer", e.className),
      ...e
    }
  );
}
function si({
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
function un({ ...e }) {
  return /* @__PURE__ */ a(B.Root, { "data-slot": "dialog", ...e });
}
function ii({
  ...e
}) {
  return /* @__PURE__ */ a(B.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function pn({
  ...e
}) {
  return /* @__PURE__ */ a(B.Portal, { "data-slot": "dialog-portal", ...e });
}
function di({
  ...e
}) {
  return /* @__PURE__ */ a(B.Close, { "data-slot": "dialog-close", ...e });
}
function mn({
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
function fn({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(pn, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ a(mn, {}),
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
            /* @__PURE__ */ a(It, {}),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function gn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-header",
      className: o("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function li({ className: e, ...t }) {
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
function vn({
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
function hn({
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
function bn({
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
function ci({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: r,
  ...n
}) {
  return /* @__PURE__ */ p(un, { ...n, children: [
    /* @__PURE__ */ p(gn, { className: "sr-only", children: [
      /* @__PURE__ */ a(vn, { children: e }),
      /* @__PURE__ */ a(hn, { children: t })
    ] }),
    /* @__PURE__ */ a(fn, { className: "overflow-hidden p-0", children: /* @__PURE__ */ a(bn, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: r }) })
  ] });
}
function ui({
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
function pi({
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
function mi({
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
function fi({
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
function gi({
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
function vi({
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
function hi({ className: e, ...t }) {
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
function bi({
  ...e
}) {
  return /* @__PURE__ */ a(H.Root, { "data-slot": "context-menu", ...e });
}
function xi({
  ...e
}) {
  return /* @__PURE__ */ a(H.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function xn({
  ...e
}) {
  return /* @__PURE__ */ a(H.Group, { "data-slot": "context-menu-group", ...e });
}
function yi({
  ...e
}) {
  return /* @__PURE__ */ a(H.Portal, { "data-slot": "context-menu-portal", ...e });
}
function wi({
  ...e
}) {
  return /* @__PURE__ */ a(H.Sub, { "data-slot": "context-menu-sub", ...e });
}
function Ni({
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
function ki({
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
        /* @__PURE__ */ a(Oe, { className: "ml-auto" })
      ]
    }
  );
}
function Ci({
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
function Si({
  className: e,
  loading: t = !1,
  apiError: r,
  emptyText: n = "No Options",
  children: s,
  ...i
}) {
  const d = c.Children.toArray(s).some(
    (l) => c.isValidElement(l) && (l.type === yn || l.type === xn)
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
function yn({
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
function zi({
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
function Mi({
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
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(H.ItemIndicator, { children: /* @__PURE__ */ a(Ve, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Ii({
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
function Ri({
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
function _i({
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
function Ti({ ...e }) {
  return /* @__PURE__ */ a(oe.Root, { "data-slot": "drawer", ...e });
}
function Pi({
  ...e
}) {
  return /* @__PURE__ */ a(oe.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function wn({
  ...e
}) {
  return /* @__PURE__ */ a(oe.Portal, { "data-slot": "drawer-portal", ...e });
}
function Di({
  ...e
}) {
  return /* @__PURE__ */ a(oe.Close, { "data-slot": "drawer-close", ...e });
}
function Nn({
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
function ji({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "drawer-body", className: o("flex-1", e), ...t, children: t.children });
}
function Ei({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(wn, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ a(Nn, {}),
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
function Ai({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-header",
      className: o("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function Li({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-footer",
      className: o("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function Vi({
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
function Fi({
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
function Oi({
  ...e
}) {
  return /* @__PURE__ */ a(U.Root, { "data-slot": "dropdown-menu", ...e });
}
function $i({
  ...e
}) {
  return /* @__PURE__ */ a(U.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function Bi({
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
function Gi({
  className: e,
  sideOffset: t = 4,
  loading: r = !1,
  apiError: n,
  emptyText: s = "No Options",
  children: i,
  ...d
}) {
  const l = c.Children.toArray(i).some(
    (u) => c.isValidElement(u) && (u.type === Wt || u.type === qt)
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
function qt({
  ...e
}) {
  return /* @__PURE__ */ a(U.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function Wt({
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
function Yi({
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
function Hi({
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
function Ui({
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
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(U.ItemIndicator, { children: /* @__PURE__ */ a(Ve, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Ki({
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
function Xi({
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
function qi({
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
function Wi({
  ...e
}) {
  return /* @__PURE__ */ a(U.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function Ji({
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
        /* @__PURE__ */ a(Oe, { className: "ml-auto size-4" })
      ]
    }
  );
}
function Zi({
  className: e,
  loading: t = !1,
  apiError: r,
  emptyText: n = "No Options",
  children: s,
  ...i
}) {
  const d = c.Children.toArray(s).some(
    (l) => c.isValidElement(l) && (l.type === Wt || l.type === qt)
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
const kn = c.forwardRef(
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
kn.displayName = "Empty";
const Cn = c.forwardRef(
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
Cn.displayName = "EmptyHeader";
const Jt = c.forwardRef(
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
Jt.displayName = "EmptyMedia";
const Sn = c.forwardRef(
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
Sn.displayName = "EmptyTitle";
const zn = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
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
zn.displayName = "EmptyDescription";
const Zt = c.forwardRef(
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
Zt.displayName = "EmptyContent";
const Mn = c.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ a(
    Jt,
    {
      ref: r,
      "data-slot": "empty-icon",
      variant: "icon",
      className: e,
      ...t
    }
  )
);
Mn.displayName = "EmptyIcon";
const In = c.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ a(
    Zt,
    {
      ref: r,
      "data-slot": "empty-actions",
      className: e,
      ...t
    }
  )
);
In.displayName = "EmptyActions";
const Rn = c.forwardRef(
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
Rn.displayName = "FieldSet";
const _n = c.forwardRef(
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
_n.displayName = "FieldLegend";
const Tn = c.forwardRef(
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
Tn.displayName = "FieldGroup";
const Pn = c.forwardRef(
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
Pn.displayName = "Field";
const Dn = c.forwardRef(
  ({ className: e, children: t, required: r, asChild: n = !1, ...s }, i) => {
    if (n) {
      const d = c.Children.toArray(t).find(
        c.isValidElement
      );
      if (!d) return null;
      const l = d.props.children, u = r ? c.cloneElement(
        d,
        void 0,
        /* @__PURE__ */ p(ot, { children: [
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
Dn.displayName = "FieldLabel";
const jn = c.forwardRef(
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
jn.displayName = "FieldContent";
const En = c.forwardRef(
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
En.displayName = "FieldTitle";
const Qt = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
  "p",
  {
    ref: n,
    "data-slot": "field-description",
    className: o("text-body-sm text-muted-foreground", e),
    ...r,
    children: t
  }
));
Qt.displayName = "FieldDescription";
const An = c.forwardRef(
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
An.displayName = "FieldError";
const Ln = c.forwardRef(
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
Ln.displayName = "FieldSeparator";
const Vn = Qt;
Vn.displayName = "FieldHelpText";
const Fn = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "p",
  {
    ref: r,
    "data-slot": "field-error-text",
    role: "alert",
    className: o("text-body-sm text-destructive font-medium", e),
    ...t
  }
));
Fn.displayName = "FieldErrorText";
const Qi = Pa, ea = c.createContext(
  {}
), ed = ({
  ...e
}) => /* @__PURE__ */ a(ea.Provider, { value: { name: e.name }, children: /* @__PURE__ */ a(Ea, { ...e }) }), Ye = () => {
  const e = c.useContext(ea), t = c.useContext(ta), { getFieldState: r } = Da(), n = ja({ name: e.name }), s = r(e.name, n);
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
}, ta = c.createContext(
  {}
);
function td({ className: e, ...t }) {
  const r = c.useId();
  return /* @__PURE__ */ a(ta.Provider, { value: { id: r }, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "form-item",
      className: o("grid gap-2", e),
      ...t
    }
  ) });
}
function ad({
  className: e,
  ...t
}) {
  const { error: r, formItemId: n } = Ye();
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
function rd({ ...e }) {
  const { error: t, formItemId: r, formDescriptionId: n, formMessageId: s } = Ye();
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
function nd({ className: e, ...t }) {
  const { formDescriptionId: r } = Ye();
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
function od({ className: e, ...t }) {
  const { error: r, formMessageId: n } = Ye(), s = r ? String(r?.message ?? "") : t.children;
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
function sd({
  ...e
}) {
  return /* @__PURE__ */ a(ke.Root, { "data-slot": "hover-card", ...e });
}
function id({
  ...e
}) {
  return /* @__PURE__ */ a(ke.Trigger, { "data-slot": "hover-card-trigger", ...e });
}
function dd({
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
function ld({
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
const On = c.forwardRef(
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
On.displayName = "InputGroup";
const $n = c.forwardRef(
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
$n.displayName = "InputLeftAddon";
const Bn = c.forwardRef(
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
Bn.displayName = "InputRightAddon";
const Gn = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
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
Gn.displayName = "InputLeftElement";
const Yn = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
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
Yn.displayName = "InputRightElement";
function aa({
  className: e,
  orientation: t = "horizontal",
  decorative: r = !0,
  ...n
}) {
  return /* @__PURE__ */ a(
    _t.Root,
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
const Hn = D(
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
), Un = c.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...s }, i) => /* @__PURE__ */ a(
    n ? J : "div",
    {
      ref: i,
      "data-slot": "item",
      "data-variant": t,
      "data-size": r,
      className: o(Hn({ variant: t, size: r, className: e })),
      ...s
    }
  )
);
Un.displayName = "Item";
function cd({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-group",
      className: o("flex flex-col rounded-md border bg-card p-1", e),
      ...t
    }
  );
}
function ud({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    aa,
    {
      "data-slot": "item-separator",
      className: o("mx-2 w-auto", e),
      ...t
    }
  );
}
const Kn = D(
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
), Xn = c.forwardRef(
  ({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      "data-slot": "item-media",
      "data-variant": t,
      className: o(
        Kn({ variant: t }),
        "group-data-[size=default]/item:size-10 group-data-[size=sm]/item:size-8",
        e
      ),
      ...r
    }
  )
);
Xn.displayName = "ItemMedia";
const qn = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
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
qn.displayName = "ItemContent";
const Wn = c.forwardRef(
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
Wn.displayName = "ItemTitle";
const Jn = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "p",
  {
    ref: r,
    "data-slot": "item-description",
    className: o("text-body-sm text-muted-foreground", e),
    ...t
  }
));
Jn.displayName = "ItemDescription";
const Zn = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
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
Zn.displayName = "ItemActions";
const Qn = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
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
Qn.displayName = "ItemHeader";
const eo = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
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
eo.displayName = "ItemFooter";
const to = c.forwardRef(
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
to.displayName = "Kbd";
const ao = c.forwardRef(
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
ao.displayName = "KbdGroup";
function pd({
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
function md({
  ...e
}) {
  return /* @__PURE__ */ a(K.Menu, { "data-slot": "menubar-menu", ...e });
}
function ro({
  ...e
}) {
  return /* @__PURE__ */ a(K.Group, { "data-slot": "menubar-group", ...e });
}
function no({
  ...e
}) {
  return /* @__PURE__ */ a(K.Portal, { "data-slot": "menubar-portal", ...e });
}
function fd({
  ...e
}) {
  return /* @__PURE__ */ a(K.RadioGroup, { "data-slot": "menubar-radio-group", ...e });
}
function gd({
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
function vd({
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
    (f) => c.isValidElement(f) && (f.type === oo || f.type === ro)
  );
  return /* @__PURE__ */ a(no, { children: /* @__PURE__ */ a(
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
function oo({
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
function hd({
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
function bd({
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
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(K.ItemIndicator, { children: /* @__PURE__ */ a(Ve, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function xd({
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
function yd({
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
function wd({ className: e, ...t }) {
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
function Nd({
  ...e
}) {
  return /* @__PURE__ */ a(K.Sub, { "data-slot": "menubar-sub", ...e });
}
function kd({
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
        /* @__PURE__ */ a(Oe, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function Cd({
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
function Sd({
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
        r && /* @__PURE__ */ a(io, {})
      ]
    }
  );
}
function zd({
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
function Md({
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
const so = D(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function Id({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(
    se.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: o(so(), "group", e),
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
function Rd({
  className: e,
  loading: t = !1,
  apiError: r,
  emptyText: n = "No Options",
  children: s,
  ...i
}) {
  const d = c.Children.toArray(s).some(
    (l) => c.isValidElement(l) && l.type === lo
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
function io({
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
function lo({
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
function _d({
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
function Td({ className: e, ...t }) {
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
function Pd({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "pagination-content",
      className: o("flex flex-row items-center gap-1", e),
      ...t
    }
  );
}
function Dd({ ...e }) {
  return /* @__PURE__ */ a("li", { "data-slot": "pagination-item", ...e });
}
function ra({
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
function jd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    ra,
    {
      "aria-label": "Go to previous page",
      size: "md",
      className: o("gap-1 px-2.5 sm:pl-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a(fa, {}),
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function Ed({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    ra,
    {
      "aria-label": "Go to next page",
      size: "md",
      className: o("gap-1 px-2.5 sm:pr-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ a(Oe, {})
      ]
    }
  );
}
function Ad({
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
        /* @__PURE__ */ a(ga, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
function Ld({
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
function Vd({
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
function Fd({
  ...e
}) {
  return /* @__PURE__ */ a(ct.Panel, { "data-slot": "resizable-panel", ...e });
}
function Od({
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
      children: e && /* @__PURE__ */ a("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ a(va, { className: "size-2.5" }) })
    }
  );
}
const co = D(
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
), uo = D(
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
), po = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
  re.Root,
  {
    ref: n,
    className: o("flex flex-col gap-4", e),
    ...r,
    children: t
  }
));
po.displayName = "SegmentControl";
const mo = c.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
  re.List,
  {
    ref: n,
    className: o(co({ variant: t }), e),
    ...r
  }
));
mo.displayName = "SegmentControlList";
const fo = c.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
  re.Trigger,
  {
    ref: n,
    className: o(uo({ variant: t }), e),
    ...r
  }
));
fo.displayName = "SegmentControlItem";
const $d = re.Content;
function go({ ...e }) {
  return /* @__PURE__ */ a(B.Root, { "data-slot": "sheet", ...e });
}
function Bd({
  ...e
}) {
  return /* @__PURE__ */ a(B.Trigger, { "data-slot": "sheet-trigger", ...e });
}
function Gd({
  ...e
}) {
  return /* @__PURE__ */ a(B.Close, { "data-slot": "sheet-close", ...e });
}
function vo({
  ...e
}) {
  return /* @__PURE__ */ a(B.Portal, { "data-slot": "sheet-portal", ...e });
}
function ho({
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
function bo({
  className: e,
  children: t,
  side: r = "right",
  ...n
}) {
  return /* @__PURE__ */ p(vo, { children: [
    /* @__PURE__ */ a(ho, {}),
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
            /* @__PURE__ */ a(It, { className: "size-4" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function xo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-header",
      className: o("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function Yd({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-footer",
      className: o("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function yo({
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
function wo({
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
const Xe = 768;
function No() {
  const [e, t] = c.useState(void 0);
  return c.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${Xe - 1}px)`), n = () => {
      t(window.innerWidth < Xe);
    };
    return r.addEventListener("change", n), t(window.innerWidth < Xe), () => r.removeEventListener("change", n);
  }, []), !!e;
}
function St({ className: e, ...t }) {
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
const ko = "sidebar_state", Co = 3600 * 24 * 7, So = "16rem", zo = "18rem", Mo = "3rem", Io = "b", na = c.createContext(null);
function He() {
  const e = c.useContext(na);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function Hd({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: r,
  className: n,
  style: s,
  children: i,
  ...d
}) {
  const l = No(), [u, m] = c.useState(!1), [f, b] = c.useState(e), g = t ?? f, h = c.useCallback(
    (k) => {
      const v = typeof k == "function" ? k(g) : k;
      r ? r(v) : b(v), document.cookie = `${ko}=${v}; path=/; max-age=${Co}`;
    },
    [r, g]
  ), y = c.useCallback(() => l ? m((k) => !k) : h((k) => !k), [l, h, m]);
  c.useEffect(() => {
    const k = (v) => {
      v.key === Io && (v.metaKey || v.ctrlKey) && (v.preventDefault(), y());
    };
    return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [y]);
  const N = g ? "expanded" : "collapsed", x = c.useMemo(
    () => ({
      state: N,
      open: g,
      setOpen: h,
      isMobile: l,
      openMobile: u,
      setOpenMobile: m,
      toggleSidebar: y
    }),
    [N, g, h, l, u, m, y]
  );
  return /* @__PURE__ */ a(na.Provider, { value: x, children: /* @__PURE__ */ a(pt, { delayDuration: 0, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": So,
        "--sidebar-width-icon": Mo,
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
  const f = $(e), b = t !== void 0 ? $(t) : void 0, g = r !== void 0 ? $(r) : void 0, h = b !== void 0 && b !== "none" ? `px-[var(--spacing-${b})]` : "", y = g !== void 0 && g !== "none" ? `py-[var(--spacing-${g})]` : "", N = f !== void 0 && f !== "none" && b === void 0 && g === void 0 ? `p-[var(--spacing-${f})]` : "", x = n !== void 0 ? $(n) : void 0, k = s !== void 0 ? $(s) : void 0, v = i !== void 0 ? $(i) : void 0, S = k !== void 0 && k !== "none" ? `mx-[var(--spacing-${k})]` : "", T = v !== void 0 && v !== "none" ? `my-[var(--spacing-${v})]` : "", _ = x !== void 0 && x !== "none" && k === void 0 && v === void 0 ? `m-[var(--spacing-${x})]` : "", j = d ? {
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
  }, O = {
    auto: "h-auto",
    full: "h-full",
    fit: "h-fit",
    screen: "h-screen"
  }, C = l ? E[l] : "", R = u ? O[u] : "";
  return [
    N,
    h,
    y,
    _,
    S,
    T,
    j,
    C,
    R,
    m || ""
  ].filter(Boolean).join(" ");
}
function Ud({
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
  shadow: b,
  w: g,
  h,
  display: y,
  ...N
}) {
  const { isMobile: x, state: k, openMobile: v, setOpenMobile: S } = He(), T = ue({
    p: i,
    px: d,
    py: l,
    m: u,
    mx: m,
    my: f,
    shadow: b,
    w: g,
    h,
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
  ) : x ? /* @__PURE__ */ a(go, { open: v, onOpenChange: S, ...N, children: /* @__PURE__ */ p(
    bo,
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
        "--sidebar-width": zo
      },
      side: e,
      children: [
        /* @__PURE__ */ p(xo, { className: "sr-only", children: [
          /* @__PURE__ */ a(yo, { children: "Sidebar" }),
          /* @__PURE__ */ a(wo, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex h-full w-full flex-col", children: s })
      ]
    }
  ) }) : /* @__PURE__ */ p(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": k,
      "data-collapsible": k === "collapsed" ? r : "",
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
  display: f,
  onClick: b,
  ...g
}) {
  const { toggleSidebar: h } = He(), y = ue({
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
    $e,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: o("size-7 cursor-pointer", y, e),
      onClick: (N) => {
        b?.(N), h();
      },
      ...g,
      children: [
        /* @__PURE__ */ a(ha, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
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
  display: f,
  ...b
}) {
  const { toggleSidebar: g } = He(), h = ue({
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
      onClick: g,
      title: "Toggle Sidebar",
      className: o(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex cursor-pointer",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        h,
        e
      ),
      ...b
    }
  );
}
function qd({
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
  ...b
}) {
  const g = ue({
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
        g,
        e
      ),
      ...b
    }
  );
}
function Wd({
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
  ...b
}) {
  const g = ue({
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
    de,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: o(
        "bg-background h-8 w-full shadow-none",
        g,
        e
      ),
      ...b
    }
  );
}
function Jd({
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
  ...b
}) {
  const g = ue({
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
      className: o("flex flex-col gap-2 p-2", g, e),
      ...b
    }
  );
}
function Zd({
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
  ...b
}) {
  const g = ue({
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
      className: o("flex flex-col gap-2 p-2", g, e),
      ...b
    }
  );
}
function Qd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    aa,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: o("bg-sidebar-border mx-2 w-auto", e),
      ...t
    }
  );
}
function el({ className: e, ...t }) {
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
function tl({ className: e, ...t }) {
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
function al({
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
function rl({
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
function nl({
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
function ol({ className: e, ...t }) {
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
function sl({ className: e, ...t }) {
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
const Ro = D(
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
function il({
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
      className: o(Ro({ variant: r, size: n }), i),
      ...d
    }
  );
  return s ? (typeof s == "string" && (s = {
    children: s
  }), /* @__PURE__ */ p(Dt, { children: [
    /* @__PURE__ */ a(jt, { asChild: !0, children: f }),
    /* @__PURE__ */ a(
      Et,
      {
        side: "right",
        align: "center",
        hidden: m !== "collapsed" || u,
        ...s
      }
    )
  ] })) : f;
}
function dl({
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
function ll({ className: e, ...t }) {
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
function cl({
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
          St,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ a(
          St,
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
function ul({ className: e, ...t }) {
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
function pl({ className: e, ...t }) {
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
function ml({
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
function fl({
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
const gl = ({ ...e }) => {
  const { theme: t = "system" } = Aa();
  return /* @__PURE__ */ a(
    La,
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
function vl({
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
function hl({
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
function bl({ className: e, ...t }) {
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
function xl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "thead",
    {
      "data-slot": "table-header",
      className: o("[&_tr]:border-b", e),
      ...t
    }
  );
}
function yl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "table-body",
      className: o("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function wl({ className: e, ...t }) {
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
function Nl({ className: e, ...t }) {
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
function kl({ className: e, ...t }) {
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
function Cl({ className: e, ...t }) {
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
function Sl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "caption",
    {
      "data-slot": "table-caption",
      className: o("text-muted-foreground mt-4 text-sm", e),
      ...t
    }
  );
}
function zl({
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
const _o = D(
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
), To = c.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
  re.List,
  {
    ref: n,
    "data-slot": "tabs-list",
    className: o(_o({ variant: t }), e),
    ...r
  }
));
To.displayName = re.List.displayName;
const Po = D(
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
), Do = c.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
  re.Trigger,
  {
    ref: n,
    "data-slot": "tabs-trigger",
    className: o(Po({ variant: t }), e),
    ...r
  }
));
Do.displayName = re.Trigger.displayName;
function Ml({
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
const oa = D(
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
function Il({
  className: e,
  variant: t,
  size: r,
  ...n
}) {
  return /* @__PURE__ */ a(
    Va.Root,
    {
      "data-slot": "toggle",
      className: o(oa({ variant: t, size: r, className: e })),
      ...n
    }
  );
}
const sa = c.createContext({
  size: "default",
  variant: "default"
});
function Rl({
  className: e,
  variant: t,
  size: r,
  children: n,
  ...s
}) {
  return /* @__PURE__ */ a(
    Tt.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": t,
      "data-size": r,
      className: o(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        e
      ),
      ...s,
      children: /* @__PURE__ */ a(sa.Provider, { value: { variant: t, size: r }, children: n })
    }
  );
}
function _l({
  className: e,
  children: t,
  variant: r,
  size: n = "md",
  ...s
}) {
  const i = c.useContext(sa);
  return /* @__PURE__ */ a(
    Tt.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": i.variant || r,
      "data-size": i.size || n,
      className: o(
        oa({
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
const jo = [
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
function Tl(e) {
  return e;
}
const ia = {
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
}, Eo = {
  ...ia,
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
}, da = Na(void 0), la = "theme";
function Ao(e) {
  if (typeof window > "u")
    return null;
  const t = localStorage.getItem(e);
  return t === "light" || t === "dark" || t === "system" ? t : null;
}
function Pl({
  children: e,
  lightColors: t,
  darkColors: r,
  mode: n,
  defaultMode: s = "system",
  storageKey: i = la,
  onModeChange: d
}) {
  const l = t ?? ia, u = r ?? Eo, [m, f] = bt(() => Ao(i) ?? s), [b, g] = bt(!1), h = n !== void 0, y = h ? n : m;
  _e(() => {
    if (typeof window > "u")
      return;
    const v = window.matchMedia("(prefers-color-scheme: dark)"), S = () => g(v.matches);
    return S(), v.addEventListener("change", S), () => {
      v.removeEventListener("change", S);
    };
  }, []);
  const N = y === "system" ? b ? "dark" : "light" : y;
  _e(() => {
    if (typeof document > "u")
      return;
    const v = document.documentElement, S = N === "dark" ? u : l;
    for (const T of jo)
      v.style.setProperty(`--${T}`, S[T]);
    v.classList.toggle("dark", N === "dark");
  }, [N, u, l]), _e(() => {
    h || typeof window > "u" || localStorage.setItem(i, m);
  }, [m, h, i]);
  const x = ya(
    (v) => {
      h || f(v), d?.(v);
    },
    [h, d]
  ), k = wa(() => ({
    mode: y,
    resolvedMode: N,
    setMode: x
  }), [N, y, x]);
  return /* @__PURE__ */ a(da.Provider, { value: k, children: e });
}
function Lo() {
  const e = ka(da);
  if (!e)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}
function Dl() {
  _e(() => {
    if (typeof window > "u")
      return;
    const e = localStorage.getItem(la), t = document.documentElement;
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
function jl({
  LightIcon: e = xa,
  DarkIcon: t = ba,
  srText: r,
  iconSize: n = 20,
  className: s = "",
  iconClassName: i = ""
}) {
  const { resolvedMode: d, setMode: l } = Lo(), u = d === "dark";
  return /* @__PURE__ */ p(
    $e,
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
const El = {
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
}, Al = {
  none: "0px",
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  full: "9999px"
}, Ll = {
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
}, Vl = {
  xs: ["12px", "16px"],
  sm: ["14px", "20px"],
  base: ["16px", "24px"],
  lg: ["18px", "28px"],
  xl: ["20px", "28px"],
  "2xl": ["24px", "32px"],
  "3xl": ["30px", "36px"],
  "4xl": ["36px", "40px"]
}, Fl = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, Ol = {
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
}, $l = {
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
  us as Accordion,
  fs as AccordionContent,
  ps as AccordionItem,
  ms as AccordionTrigger,
  gs as Alert,
  hs as AlertDescription,
  bs as AlertDialog,
  Ss as AlertDialogAction,
  zs as AlertDialogCancel,
  ys as AlertDialogContent,
  Cs as AlertDialogDescription,
  Ns as AlertDialogFooter,
  ws as AlertDialogHeader,
  rn as AlertDialogOverlay,
  an as AlertDialogPortal,
  ks as AlertDialogTitle,
  xs as AlertDialogTrigger,
  vs as AlertTitle,
  Ms as AspectRatio,
  Is as Avatar,
  _s as AvatarFallback,
  Rs as AvatarImage,
  Ts as Badge,
  gr as Bleed,
  At as Box,
  Ps as Breadcrumb,
  Vs as BreadcrumbEllipsis,
  js as BreadcrumbItem,
  Es as BreadcrumbLink,
  Ds as BreadcrumbList,
  As as BreadcrumbPage,
  Ls as BreadcrumbSeparator,
  $e as Button,
  on as ButtonGroup,
  Fs as ButtonGroupSeparator,
  Os as ButtonGroupText,
  Ke as Calendar,
  $s as Card,
  Hs as CardAction,
  Us as CardContent,
  Ys as CardDescription,
  Ks as CardFooter,
  Bs as CardHeader,
  Gs as CardTitle,
  Xs as Carousel,
  qs as CarouselContent,
  Ws as CarouselItem,
  Zs as CarouselNext,
  Js as CarouselPrevious,
  ir as Center,
  Qs as ChartContainer,
  ai as ChartLegend,
  ri as ChartLegendContent,
  ln as ChartStyle,
  ei as ChartTooltip,
  ti as ChartTooltipContent,
  ut as Checkbox,
  ts as Chip,
  ni as Collapsible,
  si as CollapsibleContent,
  oi as CollapsibleTrigger,
  bn as Command,
  ci as CommandDialog,
  mi as CommandEmpty,
  fi as CommandGroup,
  ui as CommandInput,
  vi as CommandItem,
  pi as CommandList,
  gi as CommandSeparator,
  hi as CommandShortcut,
  rr as Container,
  bi as ContextMenu,
  zi as ContextMenuCheckboxItem,
  Si as ContextMenuContent,
  xn as ContextMenuGroup,
  yn as ContextMenuItem,
  Ii as ContextMenuLabel,
  yi as ContextMenuPortal,
  Ni as ContextMenuRadioGroup,
  Mi as ContextMenuRadioItem,
  Ri as ContextMenuSeparator,
  _i as ContextMenuShortcut,
  wi as ContextMenuSub,
  Ci as ContextMenuSubContent,
  ki as ContextMenuSubTrigger,
  xi as ContextMenuTrigger,
  en as CountBadge,
  la as DEFAULT_THEME_STORAGE_KEY,
  Ht as DateTimePicker,
  un as Dialog,
  di as DialogClose,
  fn as DialogContent,
  hn as DialogDescription,
  li as DialogFooter,
  gn as DialogHeader,
  mn as DialogOverlay,
  pn as DialogPortal,
  vn as DialogTitle,
  ii as DialogTrigger,
  ur as Divider,
  Ti as Drawer,
  ji as DrawerBody,
  Di as DrawerClose,
  Ei as DrawerContent,
  Fi as DrawerDescription,
  Li as DrawerFooter,
  Ai as DrawerHeader,
  Nn as DrawerOverlay,
  wn as DrawerPortal,
  Vi as DrawerTitle,
  Pi as DrawerTrigger,
  Oi as DropdownMenu,
  Yi as DropdownMenuCheckboxItem,
  Gi as DropdownMenuContent,
  qt as DropdownMenuGroup,
  Wt as DropdownMenuItem,
  Ki as DropdownMenuLabel,
  $i as DropdownMenuPortal,
  Hi as DropdownMenuRadioGroup,
  Ui as DropdownMenuRadioItem,
  Xi as DropdownMenuSeparator,
  qi as DropdownMenuShortcut,
  Wi as DropdownMenuSub,
  Zi as DropdownMenuSubContent,
  Ji as DropdownMenuSubTrigger,
  Bi as DropdownMenuTrigger,
  kn as Empty,
  In as EmptyActions,
  Zt as EmptyContent,
  zn as EmptyDescription,
  Cn as EmptyHeader,
  Mn as EmptyIcon,
  Jt as EmptyMedia,
  Sn as EmptyTitle,
  Pn as Field,
  jn as FieldContent,
  Qt as FieldDescription,
  An as FieldError,
  Fn as FieldErrorText,
  Tn as FieldGroup,
  Vn as FieldHelpText,
  Dn as FieldLabel,
  _n as FieldLegend,
  Ln as FieldSeparator,
  Rn as FieldSet,
  En as FieldTitle,
  Qi as Form,
  Kr as FormCalendar,
  Xr as FormCheckbox,
  rd as FormControl,
  Zr as FormDateTimePicker,
  nd as FormDescription,
  ed as FormField,
  Yr as FormInput,
  td as FormItem,
  ad as FormLabel,
  od as FormMessage,
  vr as FormMultiselect,
  cs as FormOTP,
  Wr as FormPhoneInput,
  qr as FormRadioGroup,
  Ur as FormSelect,
  Hr as FormTextarea,
  Jr as FormTimePicker,
  Qa as Grid,
  tr as GridItem,
  ft as HStack,
  sd as HoverCard,
  ld as HoverCardArrow,
  dd as HoverCardContent,
  id as HoverCardTrigger,
  as as Icon,
  qa as Inline,
  de as Input,
  On as InputGroup,
  $n as InputLeftAddon,
  Gn as InputLeftElement,
  Gr as InputOTP,
  is as InputOTPGroup,
  ls as InputOTPSeparator,
  ds as InputOTPSlot,
  Bn as InputRightAddon,
  Yn as InputRightElement,
  Un as Item,
  Zn as ItemActions,
  qn as ItemContent,
  Jn as ItemDescription,
  eo as ItemFooter,
  cd as ItemGroup,
  Qn as ItemHeader,
  Xn as ItemMedia,
  ud as ItemSeparator,
  Wn as ItemTitle,
  to as Kbd,
  ao as KbdGroup,
  Z as Label,
  lr as LayoutAspectRatio,
  pd as Menubar,
  hd as MenubarCheckboxItem,
  vd as MenubarContent,
  ro as MenubarGroup,
  oo as MenubarItem,
  xd as MenubarLabel,
  md as MenubarMenu,
  no as MenubarPortal,
  fd as MenubarRadioGroup,
  bd as MenubarRadioItem,
  yd as MenubarSeparator,
  wd as MenubarShortcut,
  Nd as MenubarSub,
  Cd as MenubarSubContent,
  kd as MenubarSubTrigger,
  gd as MenubarTrigger,
  Ga as Multiselect,
  Sd as NavigationMenu,
  Rd as NavigationMenuContent,
  _d as NavigationMenuIndicator,
  Md as NavigationMenuItem,
  lo as NavigationMenuLink,
  zd as NavigationMenuList,
  Id as NavigationMenuTrigger,
  io as NavigationMenuViewport,
  Td as Pagination,
  Pd as PaginationContent,
  Ad as PaginationEllipsis,
  Dd as PaginationItem,
  ra as PaginationLink,
  Ed as PaginationNext,
  jd as PaginationPrevious,
  Ot as PhoneInput,
  he as Popover,
  rs as PopoverAnchor,
  Be as PopoverContent,
  be as PopoverTrigger,
  Ld as Progress,
  Rr as RadioGroup,
  _r as RadioGroupItem,
  Od as ResizableHandle,
  Fd as ResizablePanel,
  Vd as ResizablePanelGroup,
  Tr as ScrollArea,
  Pr as ScrollBar,
  or as Section,
  po as SegmentControl,
  $d as SegmentControlContent,
  fo as SegmentControlItem,
  mo as SegmentControlList,
  Je as Select,
  De as SelectContent,
  ns as SelectGroup,
  je as SelectItem,
  os as SelectLabel,
  xr as SelectScrollDownButton,
  br as SelectScrollUpButton,
  ss as SelectSeparator,
  Qe as SelectTrigger,
  Ze as SelectValue,
  aa as Separator,
  go as Sheet,
  Gd as SheetClose,
  bo as SheetContent,
  wo as SheetDescription,
  Yd as SheetFooter,
  xo as SheetHeader,
  yo as SheetTitle,
  Bd as SheetTrigger,
  Ud as Sidebar,
  el as SidebarContent,
  Zd as SidebarFooter,
  tl as SidebarGroup,
  rl as SidebarGroupAction,
  nl as SidebarGroupContent,
  al as SidebarGroupLabel,
  Jd as SidebarHeader,
  Wd as SidebarInput,
  qd as SidebarInset,
  ol as SidebarMenu,
  dl as SidebarMenuAction,
  ll as SidebarMenuBadge,
  il as SidebarMenuButton,
  sl as SidebarMenuItem,
  cl as SidebarMenuSkeleton,
  ul as SidebarMenuSub,
  ml as SidebarMenuSubButton,
  pl as SidebarMenuSubItem,
  Hd as SidebarProvider,
  Xd as SidebarRail,
  Qd as SidebarSeparator,
  Kd as SidebarTrigger,
  St as Skeleton,
  fl as Slider,
  Ja as Spacer,
  ie as Spinner,
  $a as SpinnerContainer,
  Ba as SpinnerOverlay,
  mt as Stack,
  hl as Switch,
  bl as Table,
  yl as TableBody,
  Sl as TableCaption,
  Cl as TableCell,
  wl as TableFooter,
  kl as TableHead,
  xl as TableHeader,
  Nl as TableRow,
  zl as Tabs,
  Ml as TabsContent,
  To as TabsList,
  Do as TabsTrigger,
  Vt as Textarea,
  Pl as ThemeProvider,
  jl as ThemeToggle,
  $t as TimePicker,
  gl as Toaster,
  Il as Toggle,
  Rl as ToggleGroup,
  _l as ToggleGroupItem,
  Dt as Tooltip,
  Et as TooltipContent,
  pt as TooltipProvider,
  jt as TooltipTrigger,
  F as Typography,
  Q as VStack,
  mr as Wrap,
  tn as alertVariants,
  nn as badgeVariants,
  Ol as baseColors,
  ae as buttonVariants,
  Fa as checkboxVariants,
  o as cn,
  Qr as countBadgeVariants,
  Yl as cva,
  Bt as dateTimePickerVariants,
  Eo as defaultDarkThemeColors,
  ia as defaultLightThemeColors,
  Tl as defineThemeColors,
  Ll as fontFamily,
  Vl as fontSize,
  Fl as fontWeight,
  yr as inputVariants,
  Ul as isValidPhoneNumber,
  Kn as itemMediaVariants,
  Hn as itemVariants,
  so as navigationMenuTriggerStyle,
  Dr as phoneInputVariants,
  Al as radius,
  co as segmentControlVariants,
  uo as segmentItemVariants,
  $l as semanticColors,
  vl as showToast,
  Ro as sidebarMenuButtonVariants,
  El as spacing,
  Oa as spinnerVariants,
  _o as tabsListVariants,
  Po as tabsTriggerVariants,
  Ir as textareaVariants,
  jo as themeColorTokens,
  Ar as timePickerVariants,
  oa as toggleVariants,
  Ya as typographyVariants,
  Dl as useApplyTheme,
  Ye as useFormField,
  No as useIsMobile,
  He as useSidebar,
  Lo as useTheme
};
