import { jsxs as p, jsx as a, Fragment as Je } from "react/jsx-runtime";
import { MinusIcon as pt, CheckIcon as fe, Loader2 as mt, SearchIcon as Te, PackageOpen as le, ChevronRight as Ce, ChevronLeft as De, ChevronDownIcon as je, ChevronUpIcon as qt, CircleIcon as Ae, ChevronDown as Ee, Clock as Re, X as Qe, CalendarIcon as Pe, MoreHorizontal as Wt, ArrowLeft as Zt, ArrowRight as Jt, XIcon as gt, ChevronRightIcon as Le, ChevronLeftIcon as Qt, MoreHorizontalIcon as ea, GripVerticalIcon as ta, PanelLeftIcon as aa, Sun as ra, Moon as na } from "lucide-react";
import * as c from "react";
import q, { useEffect as ft, useState as oa } from "react";
import { Slot as Z } from "@radix-ui/react-slot";
import { clsx as sa } from "clsx";
import { twMerge as ia } from "tailwind-merge";
import { cva as P } from "class-variance-authority";
import { cva as bl } from "class-variance-authority";
import * as Ke from "@radix-ui/react-checkbox";
import * as ge from "@radix-ui/react-tooltip";
import * as da from "@radix-ui/react-label";
import { DayPicker as Se } from "react-day-picker";
import * as we from "@radix-ui/react-popover";
import * as Y from "@radix-ui/react-select";
import * as Ue from "@radix-ui/react-radio-group";
import la from "react-phone-number-input";
import { isValidPhoneNumber as yl } from "react-phone-number-input";
import vt from "react-phone-number-input/flags";
import * as ye from "@radix-ui/react-scroll-area";
import * as Ne from "@radix-ui/react-accordion";
import * as ne from "@radix-ui/react-alert-dialog";
import * as ca from "@radix-ui/react-aspect-ratio";
import * as et from "@radix-ui/react-avatar";
import * as xt from "@radix-ui/react-separator";
import ua from "embla-carousel-react";
import * as tt from "recharts";
import * as at from "@radix-ui/react-collapsible";
import { Command as ce } from "cmdk";
import * as B from "@radix-ui/react-dialog";
import * as K from "@radix-ui/react-context-menu";
import { Drawer as oe } from "vaul";
import * as U from "@radix-ui/react-dropdown-menu";
import { FormProvider as pa, useFormContext as ma, useFormState as ga, Controller as fa } from "react-hook-form";
import * as ke from "@radix-ui/react-hover-card";
import { OTPInput as va, OTPInputContext as xa } from "input-otp";
import * as X from "@radix-ui/react-menubar";
import * as se from "@radix-ui/react-navigation-menu";
import * as dt from "@radix-ui/react-progress";
import * as rt from "react-resizable-panels";
import * as re from "@radix-ui/react-tabs";
import * as _e from "@radix-ui/react-slider";
import { useTheme as ba } from "next-themes";
import { Toaster as ha, toast as pe } from "sonner";
import * as lt from "@radix-ui/react-switch";
import * as ya from "@radix-ui/react-toggle";
import * as bt from "@radix-ui/react-toggle-group";
function o(...e) {
  return ia(sa(e));
}
function ht(e, t) {
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
const wa = P(
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
), nt = c.forwardRef(({ className: e, variant: t, size: r, label: n, checked: s, ...i }, d) => {
  let l = "ml-2 align-middle select-none";
  r === "sm" ? l += " text-xs" : r === "lg" ? l += " text-base" : l += " text-sm";
  const u = o(
    r === "sm" ? "size-3" : r === "lg" ? "size-4" : "size-3.5"
  );
  return /* @__PURE__ */ p("label", { className: "inline-flex items-center cursor-pointer", children: [
    /* @__PURE__ */ a(
      Ke.Root,
      {
        ref: d,
        "data-slot": "checkbox",
        className: o(wa({ variant: t, size: r }), e),
        checked: s,
        ...i,
        children: /* @__PURE__ */ a(
          Ke.Indicator,
          {
            "data-slot": "checkbox-indicator",
            className: "flex items-center justify-center text-current transition-none",
            children: s === "indeterminate" ? /* @__PURE__ */ a(pt, { className: u }) : /* @__PURE__ */ a(fe, { className: u })
          }
        )
      }
    ),
    n && /* @__PURE__ */ a("span", { className: l, children: n })
  ] });
});
nt.displayName = Ke.Root.displayName;
const Na = P("inline-block shrink-0 animate-spin", {
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
    mt,
    {
      ref: i,
      role: "status",
      "data-slot": "spinner",
      "aria-label": n,
      className: o(Na({ variant: t, size: r }), e),
      ...s
    }
  )
);
ie.displayName = "Spinner";
const ka = c.forwardRef(({ className: e, children: t, text: r, ...n }, s) => /* @__PURE__ */ p(
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
ka.displayName = "SpinnerContainer";
const Ca = c.forwardRef(
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
Ca.displayName = "SpinnerOverlay";
function ot({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ a(
    ge.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function yt({
  ...e
}) {
  return /* @__PURE__ */ a(ot, { children: /* @__PURE__ */ a(ge.Root, { "data-slot": "tooltip", ...e }) });
}
function wt({
  ...e
}) {
  return /* @__PURE__ */ a(ge.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function Nt({
  className: e,
  sideOffset: t = 0,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ a(ge.Portal, { children: /* @__PURE__ */ p(
    ge.Content,
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
        /* @__PURE__ */ a(ge.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
function Sa({
  options: e,
  value: t,
  defaultValue: r,
  onChange: n,
  placeholder: s = "Select...",
  disabled: i,
  className: d,
  optionVariant: l = "default",
  renderOption: u,
  loading: g = !1,
  apiError: f,
  emptyText: x = "No options",
  size: m = "md",
  isSearchable: v = !0,
  searchFn: h,
  searchPlaceholder: w = "Search..."
}) {
  const b = t !== void 0, [k, _] = c.useState(
    r || []
  ), I = b ? t : k, [R, D] = c.useState(!1), [L, E] = c.useState(""), T = ht(L, 300), $ = c.useRef(null), N = c.useRef(null);
  c.useEffect(() => {
    h && T !== void 0 && h(T);
  }, [T, h]);
  const M = c.useMemo(() => {
    if (!v || h || !L)
      return e;
    const y = L.toLowerCase();
    return e.filter((z) => (typeof z.label == "string" ? z.label : String(z.value)).toLowerCase().includes(y));
  }, [e, L, v, h]);
  c.useEffect(() => {
    R && v && $.current && $.current.focus(), R || E("");
  }, [R, v]), c.useEffect(() => {
    if (!R) return;
    function y(z) {
      N.current && !N.current.contains(z.target) && D(!1);
    }
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, [R]);
  function j(y) {
    const S = I.includes(y) ? I.filter((A) => A !== y) : [...I, y];
    b || _(S), n?.(S);
  }
  function V() {
    i || D((y) => !y);
  }
  function C(y) {
    y.currentTarget.contains(y.relatedTarget) || D(!1);
  }
  return /* @__PURE__ */ p(
    "div",
    {
      className: o("relative", d),
      ref: N,
      tabIndex: -1,
      onBlur: C,
      children: [
        /* @__PURE__ */ a(ot, { children: /* @__PURE__ */ p(yt, { children: [
          /* @__PURE__ */ a(wt, { asChild: !0, children: /* @__PURE__ */ p(
            "button",
            {
              type: "button",
              className: o(
                "border-input flex w-full items-center justify-between gap-2 rounded-md border bg-input-background whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
                m === "sm" && "px-2 py-1.5 text-xs h-9",
                m === "md" && "px-3 py-2 text-sm h-11",
                m === "lg" && "px-4 py-2.5 text-base h-12",
                i && "opacity-50 pointer-events-none"
              ),
              disabled: i,
              "aria-haspopup": "listbox",
              "aria-expanded": R,
              onClick: V,
              children: [
                /* @__PURE__ */ a(
                  "span",
                  {
                    className: "truncate block max-w-full",
                    style: { textOverflow: "ellipsis", overflow: "hidden" },
                    children: I.length === 0 ? /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: s }) : e.filter((S) => I.includes(S.value)).map(
                      (S) => typeof S.label == "string" ? S.label : String(S.value)
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
          I.length > 0 && /* @__PURE__ */ a(
            Nt,
            {
              sideOffset: 4,
              style: {
                maxWidth: "400px",
                whiteSpace: "normal",
                wordBreak: "break-word"
              },
              children: e.filter((y) => I.includes(y.value)).map(
                (y) => typeof y.label == "string" ? y.label : String(y.value)
              ).join(", ")
            }
          )
        ] }) }),
        R && /* @__PURE__ */ p(
          "div",
          {
            className: "absolute left-0 right-0 z-10 mt-1 rounded-md border bg-popover shadow-md max-h-60 overflow-hidden flex flex-col",
            role: "listbox",
            children: [
              v && /* @__PURE__ */ a("div", { className: "p-2 border-b sticky top-0 bg-popover", children: /* @__PURE__ */ p("div", { className: "relative", children: [
                /* @__PURE__ */ a(Te, { className: "absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
                /* @__PURE__ */ a(
                  "input",
                  {
                    ref: $,
                    type: "text",
                    className: o(
                      "w-full rounded-md border border-input bg-transparent pl-8 pr-2 outline-none focus:ring-2 focus:ring-ring/50",
                      m === "sm" && "py-1 text-xs",
                      m === "md" && "py-1.5 text-sm",
                      m === "lg" && "py-2 text-base"
                    ),
                    placeholder: w,
                    value: L,
                    onChange: (y) => E(y.target.value),
                    onClick: (y) => y.stopPropagation()
                  }
                )
              ] }) }),
              /* @__PURE__ */ a("div", { className: "overflow-auto flex-1", children: g ? /* @__PURE__ */ a("div", { className: "flex items-center justify-center py-6", children: /* @__PURE__ */ a(ie, { size: "md" }) }) : f?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 px-4 gap-2", children: /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  className: "text-destructive underline text-sm px-2 py-1 rounded hover:bg-destructive/10 transition-colors",
                  onClick: f.onClick,
                  children: f.text || "Error loading options. Click to retry."
                }
              ) }) : M.length === 0 ? /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center py-6 px-4 gap-2 text-muted-foreground", children: [
                /* @__PURE__ */ a(le, { className: "size-8 mb-2" }),
                /* @__PURE__ */ a("span", { children: L ? "No matches found" : x })
              ] }) : M.map((y) => {
                const z = I.includes(y.value);
                return /* @__PURE__ */ p(
                  "div",
                  {
                    className: o(
                      "flex items-center gap-2 cursor-pointer select-none hover:bg-accent hover:text-accent-foreground",
                      m === "sm" && "px-2 py-1.5 text-xs",
                      m === "md" && "px-3 py-2 text-sm",
                      m === "lg" && "px-4 py-2.5 text-base",
                      z && "bg-accent text-accent-foreground",
                      y.disabled && "opacity-50 pointer-events-none"
                    ),
                    onClick: () => !y.disabled && j(y.value),
                    "aria-selected": z,
                    role: "option",
                    tabIndex: -1,
                    children: [
                      l === "checkbox" ? /* @__PURE__ */ a(
                        nt,
                        {
                          checked: z,
                          tabIndex: -1,
                          className: "size-4 mr-2 pointer-events-none",
                          "aria-hidden": !0
                        }
                      ) : z && /* @__PURE__ */ a(fe, { className: "size-4 mr-2" }),
                      u ? u(y, z) : y.label
                    ]
                  },
                  y.value
                );
              }) })
            ]
          }
        )
      ]
    }
  );
}
const za = P("", {
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
}), _a = {
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
  const i = n ? Z : r ?? _a[t ?? "body-base"];
  return /* @__PURE__ */ a(
    i,
    {
      "data-slot": "typography",
      className: o(za({ variant: t }), e),
      ...s
    }
  );
}
function Q({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    da.Root,
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
const Ma = P("", {
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
}), kt = q.forwardRef(
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
    width: g,
    height: f,
    display: x,
    children: m,
    ...v
  }, h) => /* @__PURE__ */ a(
    e,
    {
      ref: h,
      className: o(
        Ma({
          p: r,
          px: n,
          py: s,
          m: i,
          mx: d,
          my: l,
          shadow: u,
          width: g,
          height: f,
          display: x
        }),
        t
      ),
      ...v,
      children: m
    }
  )
);
kt.displayName = "Box";
function O(e) {
  return e == null ? e : typeof e == "string" && /^\d+$/.test(e) ? Number(e) : e;
}
const Ia = P("flex", {
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
}), st = q.forwardRef(
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
    py: g,
    m: f,
    mx: x,
    my: m,
    width: v,
    height: h,
    shadow: w,
    display: b,
    children: k,
    ..._
  }, I) => {
    const R = [0, 1, 2, 3, 4, 6, 8, 12, 16, 20];
    let D;
    if (n !== void 0) {
      const L = Number(O(n));
      D = R.includes(L) ? L : void 0;
    }
    return /* @__PURE__ */ a(
      e,
      {
        ref: I,
        className: o(
          Ia({
            direction: r,
            gap: D,
            align: s,
            justify: i,
            wrap: d,
            p: l,
            px: u,
            py: g,
            m: f,
            mx: x,
            my: m,
            width: v,
            height: h,
            shadow: w,
            display: b
          }),
          t
        ),
        ..._,
        children: k
      }
    );
  }
);
st.displayName = "Stack";
const it = q.forwardRef(
  ({ ...e }, t) => /* @__PURE__ */ a(st, { ref: t, direction: "horizontal", ...e })
);
it.displayName = "HStack";
const ee = q.forwardRef(
  ({ ...e }, t) => /* @__PURE__ */ a(st, { ref: t, direction: "vertical", ...e })
);
ee.displayName = "VStack";
const Ra = P("flex-wrap", {
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
}), Pa = q.forwardRef(
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
    my: g,
    width: f,
    height: x,
    shadow: m,
    display: v,
    children: h,
    ...w
  }, b) => /* @__PURE__ */ a(
    e,
    {
      ref: b,
      className: o(
        Ra({
          gap: (() => {
            const k = [0, 1, 2, 3, 4, 6], _ = typeof r == "number" ? r : r !== void 0 ? Number(O(r)) : void 0;
            return k.includes(_) ? _ : void 0;
          })(),
          align: n,
          p: s,
          px: i,
          py: d,
          m: l,
          mx: u,
          my: g,
          width: f,
          height: x,
          shadow: m,
          display: v
        }),
        t
      ),
      ...w,
      children: h
    }
  )
);
Pa.displayName = "Inline";
const Ta = P("flex-1", {
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
}), Da = q.forwardRef(
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
    height: g,
    shadow: f,
    display: x,
    ...m
  }, v) => /* @__PURE__ */ a(
    e,
    {
      ref: v,
      className: o(
        Ta({
          p: r,
          px: n,
          py: s,
          m: i,
          mx: d,
          my: l,
          width: u,
          height: g,
          shadow: f,
          display: x
        }),
        t
      ),
      "aria-hidden": "true",
      ...m
    }
  )
);
Da.displayName = "Spacer";
const ja = P("grid", {
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
}), Aa = q.forwardRef(
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
    py: g,
    m: f,
    mx: x,
    my: m,
    children: v,
    ...h
  }, w) => /* @__PURE__ */ a(
    e,
    {
      ref: w,
      className: o(
        ja({
          columns: r,
          gap: n,
          autoFlow: s,
          alignItems: i,
          justifyItems: d,
          p: l,
          px: u,
          py: g,
          m: f,
          mx: x,
          my: m
        }),
        t
      ),
      ...h,
      children: v
    }
  )
);
Aa.displayName = "Grid";
const Ea = P("", {
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
}), La = q.forwardRef(
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
    m: g,
    mx: f,
    my: x,
    children: m,
    ...v
  }, h) => /* @__PURE__ */ a(
    e,
    {
      ref: h,
      className: o(
        Ea({
          colSpan: r == null ? void 0 : String(r),
          rowSpan: n == null ? void 0 : String(n),
          alignSelf: s,
          justifySelf: i,
          p: d,
          px: l,
          py: u,
          m: g,
          mx: f,
          my: x
        }),
        t
      ),
      ...v,
      children: m
    }
  )
);
La.displayName = "GridItem";
const Va = P("mx-auto w-full", {
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
}), $a = q.forwardRef(
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
    width: g,
    height: f,
    shadow: x,
    display: m,
    children: v,
    ...h
  }, w) => /* @__PURE__ */ a(
    e,
    {
      ref: w,
      className: o(
        Va({
          maxWidth: r,
          p: n,
          px: s,
          py: i,
          m: d,
          mx: l,
          my: u,
          width: g,
          height: f,
          shadow: x,
          display: m
        }),
        t
      ),
      ...h,
      children: v
    }
  )
);
$a.displayName = "Container";
const Oa = P("w-full", {
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
}), Fa = q.forwardRef(
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
    width: g,
    height: f,
    shadow: x,
    display: m,
    background: v,
    children: h,
    ...w
  }, b) => /* @__PURE__ */ a(
    e,
    {
      ref: b,
      className: o(
        Oa({
          paddingY: r,
          p: n,
          px: s,
          py: i,
          m: d,
          mx: l,
          my: u,
          width: g,
          height: f,
          shadow: x,
          display: m,
          background: v
        }),
        t
      ),
      ...w,
      children: h
    }
  )
);
Fa.displayName = "Section";
const Ba = P("items-center justify-center", {
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
}), Ga = q.forwardRef(
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
    my: g,
    width: f,
    shadow: x,
    display: m,
    children: v,
    ...h
  }, w) => /* @__PURE__ */ a(
    e,
    {
      ref: w,
      className: o(
        Ba({
          inline: r,
          height: n,
          p: s,
          px: i,
          py: d,
          m: l,
          mx: u,
          my: g,
          width: f,
          shadow: x,
          display: m
        }),
        t
      ),
      ...h,
      children: v
    }
  )
);
Ga.displayName = "Center";
const Ha = P("relative w-full overflow-hidden", {
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
}), Ka = q.forwardRef(({ as: e = "div", className: t, ratio: r, children: n, ...s }, i) => /* @__PURE__ */ a(
  e,
  {
    ref: i,
    className: o(Ha({ ratio: r }), t),
    ...s,
    children: n
  }
));
Ka.displayName = "LayoutAspectRatio";
const Ua = P("bg-border shrink-0", {
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
}), Xa = q.forwardRef(
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
          Ua({
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
Xa.displayName = "Divider";
const Ya = P("flex flex-wrap", {
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
}), qa = q.forwardRef(
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
    mx: g,
    my: f,
    width: x,
    height: m,
    shadow: v,
    display: h,
    children: w,
    ...b
  }, k) => {
    const _ = [0, 1, 2, 3, 4, 6];
    let I;
    if (r !== void 0) {
      const R = Number(O(r));
      I = _.includes(R) ? R : void 0;
    }
    return /* @__PURE__ */ a(
      e,
      {
        ref: k,
        className: o(
          Ya({
            gap: I,
            align: n,
            justify: s,
            p: i,
            px: d,
            py: l,
            m: u,
            mx: g,
            my: f,
            width: x,
            height: m,
            shadow: v,
            display: h
          }),
          t
        ),
        ...b,
        children: w
      }
    );
  }
);
qa.displayName = "Wrap";
const Wa = P("", {
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
}), Za = q.forwardRef(
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
      className: o(Wa({ horizontal: r, vertical: n, all: s }), t),
      ...d,
      children: i
    }
  )
);
Za.displayName = "Bleed";
const Ja = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, disabled: i, ...d }) => /* @__PURE__ */ p(ee, { gap: "2", className: "group", "data-disabled": i, children: [
  e && /* @__PURE__ */ p(Q, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    Sa,
    {
      ...d,
      disabled: i,
      className: o(t && "border-destructive", s)
    }
  ),
  t && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-destructive", children: t }),
  r && !t && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-muted-foreground", children: r })
] }));
Ja.displayName = "FormMultiselect";
function Po({
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
  }, g = "inline-flex items-center justify-center rounded-md font-medium uppercase tracking-wider transition-colors whitespace-nowrap", f = i || s ? "cursor-pointer hover:opacity-80" : "", x = `${g} ${d[r]} ${u[t]} ${f} ${n}`;
  return /* @__PURE__ */ p(kt, { className: x, onClick: i, children: [
    /* @__PURE__ */ a("span", { className: l[r], children: e }),
    s && /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        onClick: (m) => {
          m.stopPropagation(), s();
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
function To({
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
const J = P(
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
function Qa({ className: e }) {
  return /* @__PURE__ */ a(
    mt,
    {
      "aria-hidden": "true",
      className: o("animate-spin text-current", e)
    }
  );
}
function Ve({
  className: e,
  variant: t,
  size: r,
  asChild: n = !1,
  loading: s = !1,
  loadingText: i,
  ...d
}) {
  const l = n ? Z : "button", u = d.disabled || s;
  return /* @__PURE__ */ a(
    l,
    {
      "data-slot": "button",
      "data-loading": s ? "" : void 0,
      "aria-busy": s || void 0,
      "aria-disabled": u || void 0,
      disabled: n ? void 0 : u,
      className: o(J({ variant: t, size: r, className: e })),
      ...d,
      children: s ? /* @__PURE__ */ p(Je, { children: [
        /* @__PURE__ */ a(Qa, { className: "size-4" }),
        i ?? d.children
      ] }) : d.children
    }
  );
}
function ve({
  ...e
}) {
  return /* @__PURE__ */ a(we.Root, { "data-slot": "popover", ...e });
}
function xe({
  ...e
}) {
  return /* @__PURE__ */ a(we.Trigger, { "data-slot": "popover-trigger", ...e });
}
function be({
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
function Do({
  ...e
}) {
  return /* @__PURE__ */ a(we.Anchor, { "data-slot": "popover-anchor", ...e });
}
const er = P(
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex w-full min-w-0 rounded-md border px-3 py-2 text-base bg-input-background transition-all duration-200 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
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
      className: o(er({ variant: t, size: r }), e),
      ref: i,
      ...s
    }
  )
);
de.displayName = "Input";
function tr(e) {
  const [t, r] = c.useState(!1), [n, s] = c.useState(
    e.selected
  );
  c.useEffect(() => {
    s(e.selected);
  }, [e.selected]);
  const {
    className: i,
    classNames: d,
    showOutsideDays: l = !0,
    inputProps: u,
    onSelect: g,
    ...f
  } = e, x = n ? n.toLocaleDateString() : void 0;
  return /* @__PURE__ */ p(ve, { open: t, onOpenChange: r, children: [
    /* @__PURE__ */ a(xe, { className: "w-full flex-1", children: /* @__PURE__ */ a(
      de,
      {
        readOnly: !0,
        value: x,
        ...u,
        placeholder: u?.placeholder || "Select date",
        onClick: (m) => {
          r(!0), u?.onClick?.(m);
        }
      }
    ) }),
    /* @__PURE__ */ a(be, { align: "start", className: "p-0 w-auto bg-background border", children: /* @__PURE__ */ a(
      Se,
      {
        showOutsideDays: l,
        selected: n,
        onSelect: (m) => {
          s(m), r(!1), g?.(m);
        },
        className: o("p-3", i),
        classNames: {
          ...d,
          months: "flex flex-col sm:flex-row gap-2",
          month: "flex flex-col gap-4",
          caption: "flex justify-center pt-1 relative items-center w-full",
          caption_label: "text-sm font-medium",
          nav: "flex items-center gap-1",
          nav_button: o(
            J({ variant: "outline" }),
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
            J({ variant: "ghost" }),
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
        },
        components: {
          IconLeft: ({ className: m, ...v }) => /* @__PURE__ */ a(De, { className: o("size-4", m), ...v }),
          IconRight: ({ className: m, ...v }) => /* @__PURE__ */ a(Ce, { className: o("size-4", m), ...v })
        },
        ...f
      }
    ) })
  ] });
}
function ar(e) {
  const [t, r] = c.useState(!1), [n, s] = c.useState(
    e.selected
  );
  c.useEffect(() => {
    s(e.selected);
  }, [e.selected]);
  const {
    className: i,
    classNames: d,
    showOutsideDays: l = !0,
    inputProps: u,
    onSelect: g,
    ...f
  } = e, x = n && n.length > 0 ? n.map((m) => m.toLocaleDateString()).join(", ") : void 0;
  return /* @__PURE__ */ p(ve, { open: t, onOpenChange: r, children: [
    /* @__PURE__ */ a(xe, { className: "w-full flex-1", children: /* @__PURE__ */ a(
      de,
      {
        readOnly: !0,
        value: x,
        ...u,
        placeholder: u?.placeholder || "Select date(s)",
        onClick: (m) => {
          r(!0), u?.onClick?.(m);
        }
      }
    ) }),
    /* @__PURE__ */ a(be, { align: "start", className: "p-0 w-auto bg-background border", children: /* @__PURE__ */ a(
      Se,
      {
        showOutsideDays: l,
        selected: n,
        onSelect: (m) => {
          s(m), r(!1), g?.(m);
        },
        className: o("p-3", i),
        classNames: {
          ...d,
          months: "flex flex-col sm:flex-row gap-2",
          month: "flex flex-col gap-4",
          caption: "flex justify-center pt-1 relative items-center w-full",
          caption_label: "text-sm font-medium",
          nav: "flex items-center gap-1",
          nav_button: o(
            J({ variant: "outline" }),
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
            J({ variant: "ghost" }),
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
        },
        components: {
          IconLeft: ({ className: m, ...v }) => /* @__PURE__ */ a(De, { className: o("size-4", m), ...v }),
          IconRight: ({ className: m, ...v }) => /* @__PURE__ */ a(Ce, { className: o("size-4", m), ...v })
        },
        ...f
      }
    ) })
  ] });
}
function rr(e) {
  const [t, r] = c.useState(!1), [n, s] = c.useState(
    e.selected
  ), [i, d] = c.useState();
  c.useEffect(() => {
    s(e.selected);
  }, [e.selected]);
  const {
    className: l,
    classNames: u,
    showOutsideDays: g = !0,
    inputProps: f,
    onSelect: x,
    ...m
  } = e;
  let v;
  n?.from && n?.to && (v = n.from.toLocaleDateString() + " - " + n.to.toLocaleDateString());
  const h = n?.from && !n?.to && i ? { from: n.from, to: i } : null;
  return /* @__PURE__ */ p(ve, { open: t, onOpenChange: r, children: [
    /* @__PURE__ */ a(xe, { className: "w-full flex-1", children: /* @__PURE__ */ a(
      de,
      {
        readOnly: !0,
        value: v || void 0,
        ...f,
        placeholder: f?.placeholder || "Select date range",
        onClick: (w) => {
          r(!0), f?.onClick?.(w);
        }
      }
    ) }),
    /* @__PURE__ */ a(be, { align: "start", className: "p-0 w-auto bg-background border", children: /* @__PURE__ */ a(
      Se,
      {
        showOutsideDays: g,
        selected: n,
        onSelect: (w, b) => {
          if (n?.from && n?.to && b) {
            const k = { from: b, to: void 0 };
            s(k), x?.(k);
            return;
          }
          s(w), x?.(w), w?.from && w?.to && r(!1);
        },
        onDayMouseEnter: (w) => d(w),
        onDayMouseLeave: () => d(void 0),
        modifiers: {
          hoveredRange: h ? [h] : []
        },
        modifiersClassNames: {
          hoveredRange: "bg-accent/50 text-accent-foreground"
        },
        className: o("p-3", l),
        classNames: {
          ...u,
          months: "flex flex-col sm:flex-row gap-2",
          month: "flex flex-col gap-4",
          caption: "flex justify-center pt-1 relative items-center w-full",
          caption_label: "text-sm font-medium",
          nav: "flex items-center gap-1",
          nav_button: o(
            J({ variant: "outline" }),
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
            J({ variant: "ghost" }),
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
        },
        components: {
          IconLeft: ({ className: w, ...b }) => /* @__PURE__ */ a(De, { className: o("size-4", w), ...b }),
          IconRight: ({ className: w, ...b }) => /* @__PURE__ */ a(Ce, { className: o("size-4", w), ...b })
        },
        ...m
      }
    ) })
  ] });
}
function Ge(e) {
  return e.mode === "multiple" ? /* @__PURE__ */ a(
    ar,
    {
      ...e
    }
  ) : e.mode === "range" ? /* @__PURE__ */ a(rr, { ...e }) : /* @__PURE__ */ a(tr, { ...e });
}
const nr = P(
  "resize-none placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex min-h-16 w-full rounded-md border px-3 py-2 text-base bg-input-background transition-all duration-200 outline-none disabled:cursor-not-allowed disabled:opacity-50",
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
), Ct = c.forwardRef(
  ({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
    "textarea",
    {
      "data-slot": "textarea",
      className: o(nr({ variant: t }), e),
      ref: n,
      ...r
    }
  )
);
Ct.displayName = "Textarea";
function or({
  loading: e = !1,
  apiError: t,
  emptyText: r = "No Options",
  isSearchable: n = !0,
  searchFn: s,
  searchPlaceholder: i = "Search...",
  children: d,
  ...l
}) {
  return /* @__PURE__ */ a(Y.Root, { "data-slot": "select", ...l, children: c.Children.map(d, (u) => {
    if (c.isValidElement(u) && u.type === St) {
      const g = u;
      return c.cloneElement(g, {
        loading: e,
        apiError: t,
        emptyText: r,
        isSearchable: n,
        searchFn: s,
        searchPlaceholder: i,
        children: g.props.children || d
      });
    }
    return u;
  }) });
}
function jo({
  ...e
}) {
  return /* @__PURE__ */ a(Y.Group, { "data-slot": "select-group", ...e });
}
function sr({
  ...e
}) {
  return /* @__PURE__ */ a(Y.Value, { "data-slot": "select-value", ...e });
}
function ir({
  className: e,
  size: t = "md",
  children: r,
  ...n
}) {
  const s = t === "sm" ? "h-9 text-sm" : t === "lg" ? "h-12 text-lg" : "h-11 text-base";
  return /* @__PURE__ */ p(
    Y.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: o(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        s,
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ a(Y.Icon, { asChild: !0, children: /* @__PURE__ */ a(je, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function St({
  className: e,
  children: t,
  position: r = "popper",
  loading: n = !1,
  apiError: s,
  emptyText: i = "No Options",
  isSearchable: d = !0,
  searchFn: l,
  searchPlaceholder: u = "Search...",
  ...g
}) {
  const [f, x] = c.useState(""), m = ht(f, 300), v = c.useRef(null);
  c.useEffect(() => {
    l && m !== void 0 && l(m);
  }, [m, l]);
  const h = c.useMemo(() => {
    if (!d || l || !f)
      return t;
    const b = f.toLowerCase();
    return c.Children.toArray(t).filter((k) => {
      if (c.isValidElement(k) && k.type === zt) {
        const _ = k, I = _.props.children;
        return (typeof I == "string" ? I : String(_.props.value || "")).toLowerCase().includes(b);
      }
      return !0;
    });
  }, [t, f, d, l]), w = c.Children.count(h) > 0;
  return c.useEffect(() => {
    if (d && v.current) {
      const b = setTimeout(() => {
        v.current?.focus();
      }, 0);
      return () => clearTimeout(b);
    }
  }, [d]), /* @__PURE__ */ a(Y.Portal, { children: /* @__PURE__ */ p(
    Y.Content,
    {
      "data-slot": "select-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: r,
      ...g,
      children: [
        /* @__PURE__ */ a(dr, {}),
        d && /* @__PURE__ */ a("div", { className: "p-2 border-b sticky top-0 bg-popover z-10", children: /* @__PURE__ */ p("div", { className: "relative", children: [
          /* @__PURE__ */ a(Te, { className: "absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
          /* @__PURE__ */ a(
            "input",
            {
              ref: v,
              type: "text",
              className: "w-full rounded-md border border-input bg-transparent py-1.5 pl-8 pr-2 text-sm outline-none focus:ring-2 focus:ring-ring/50",
              placeholder: u,
              value: f,
              onChange: (b) => x(b.target.value),
              onClick: (b) => b.stopPropagation(),
              onKeyDown: (b) => {
                b.key !== "Escape" && b.key !== "Tab" && b.stopPropagation();
              }
            }
          )
        ] }) }),
        /* @__PURE__ */ a(
          Y.Viewport,
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
            ) }) : w ? h : /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground gap-2", children: [
              /* @__PURE__ */ a(le, { className: "size-8 opacity-60" }),
              /* @__PURE__ */ a("span", { className: "text-xs", children: f ? "No matches found" : i })
            ] })
          }
        ),
        /* @__PURE__ */ a(lr, {})
      ]
    }
  ) });
}
function Ao({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Y.Label,
    {
      "data-slot": "select-label",
      className: o("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...t
    }
  );
}
function zt({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(
    Y.Item,
    {
      "data-slot": "select-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(Y.ItemIndicator, { children: /* @__PURE__ */ a(fe, { className: "size-4" }) }) }),
        /* @__PURE__ */ a(Y.ItemText, { children: t })
      ]
    }
  );
}
function Eo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Y.Separator,
    {
      "data-slot": "select-separator",
      className: o("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function dr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Y.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: o(
        "flex cursor-pointer items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(qt, { className: "size-4" })
    }
  );
}
function lr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Y.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: o(
        "flex cursor-pointer items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(je, { className: "size-4" })
    }
  );
}
function cr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Ue.Root,
    {
      "data-slot": "radio-group",
      className: o("grid gap-3", e),
      ...t
    }
  );
}
function ur({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Ue.Item,
    {
      "data-slot": "radio-group-item",
      className: o(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        Ue.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ a(Ae, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
function pr({
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
        /* @__PURE__ */ a(mr, {}),
        /* @__PURE__ */ a(ye.Corner, {})
      ]
    }
  );
}
function mr({
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
const gr = P(
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
), fr = ({
  value: e,
  onChange: t,
  options: r,
  iconComponent: n,
  disabled: s,
  className: i,
  "aria-label": d
}) => {
  const [l, u] = c.useState(!1), [g, f] = c.useState(""), x = c.useRef(null), m = c.useMemo(() => {
    if (!g) return r;
    const v = g.toLowerCase();
    return r.filter(
      (h) => h.label.toLowerCase().includes(v)
    );
  }, [r, g]);
  return c.useEffect(() => {
    if (l) {
      const v = setTimeout(() => {
        x.current?.focus();
      }, 0);
      return () => clearTimeout(v);
    } else
      f("");
  }, [l]), /* @__PURE__ */ p(ve, { open: l, onOpenChange: u, children: [
    /* @__PURE__ */ a(xe, { asChild: !0, disabled: s, children: /* @__PURE__ */ p(
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
          /* @__PURE__ */ a(Ee, { className: "size-3 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ p(
      be,
      {
        className: "w-64 p-0",
        align: "start",
        side: "bottom",
        sideOffset: 8,
        children: [
          /* @__PURE__ */ a("div", { className: "p-2 border-b sticky top-0 bg-popover z-10", children: /* @__PURE__ */ p("div", { className: "relative", children: [
            /* @__PURE__ */ a(Te, { className: "absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
            /* @__PURE__ */ a(
              "input",
              {
                ref: x,
                type: "text",
                className: "w-full rounded-md border border-input bg-transparent py-1.5 pl-8 pr-2 text-sm outline-none focus:ring-2 focus:ring-ring/50 placeholder:text-muted-foreground",
                placeholder: "Search countries...",
                value: g,
                onChange: (v) => f(v.target.value),
                onKeyDown: (v) => {
                  v.key === "Enter" && (v.preventDefault(), m.length === 1 && (t(m[0].value), u(!1)));
                }
              }
            )
          ] }) }),
          /* @__PURE__ */ a(pr, { className: "h-64", children: /* @__PURE__ */ a("div", { className: "p-1", children: m.length === 0 ? /* @__PURE__ */ a("div", { className: "py-6 text-center text-sm text-muted-foreground", children: "No countries found" }) : m.map((v) => {
            const h = v.value === e, w = v.value ? vt[v.value] : null;
            return /* @__PURE__ */ p(
              "button",
              {
                type: "button",
                className: o(
                  "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none cursor-pointer",
                  "hover:bg-accent hover:text-accent-foreground",
                  "focus:bg-accent focus:text-accent-foreground",
                  h && "bg-accent/50"
                ),
                onClick: () => {
                  t(v.value), u(!1);
                },
                children: [
                  /* @__PURE__ */ a("span", { className: "flex items-center justify-center size-5 overflow-hidden rounded-sm bg-muted shrink-0", children: w ? /* @__PURE__ */ a(w, { title: v.label }) : /* @__PURE__ */ a("span", { className: "text-xs", children: "🌐" }) }),
                  /* @__PURE__ */ a("span", { className: "truncate", children: v.label }),
                  h && /* @__PURE__ */ a("span", { className: "ml-auto text-primary", children: "✓" })
                ]
              },
              v.value || "empty"
            );
          }) }) })
        ]
      }
    )
  ] });
}, _t = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "input",
  {
    ref: r,
    className: o(
      "flex-1 bg-transparent outline-none placeholder:text-muted-foreground px-2",
      e
    ),
    ...t
  }
));
_t.displayName = "PhoneInputField";
const vr = ({
  country: e,
  countryName: t
}) => {
  const r = e ? vt[e] : null;
  return /* @__PURE__ */ a("span", { className: "flex items-center justify-center size-5 overflow-hidden rounded-sm bg-muted", children: r ? /* @__PURE__ */ a(r, { title: t ?? "" }) : /* @__PURE__ */ a("span", { className: "text-xs text-muted-foreground", children: "🌐" }) });
}, Mt = c.forwardRef(
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
    country: g,
    onCountryChange: f,
    withCountryCallingCode: x = !0,
    inputProps: m,
    ...v
  }, h) => /* @__PURE__ */ a(
    "div",
    {
      ref: h,
      className: o(
        gr({ variant: d, size: l }),
        "items-center px-3 gap-2",
        s && "opacity-50 cursor-not-allowed",
        i
      ),
      "data-slot": "phone-input",
      ...v,
      children: /* @__PURE__ */ a(
        la,
        {
          international: u,
          defaultCountry: r,
          country: g,
          value: e,
          onChange: (w) => t?.(w),
          onCountryChange: f,
          withCountryCallingCode: x,
          placeholder: n,
          disabled: s,
          countrySelectComponent: fr,
          inputComponent: _t,
          flagComponent: vr,
          className: "flex items-center w-full",
          numberInputProps: m
        }
      )
    }
  )
);
Mt.displayName = "PhoneInput";
const xr = P(
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
function ct(e) {
  const [t, r] = e.split(":").map(Number);
  return t * 60 + r;
}
function br(e, t) {
  if (!t) return e;
  const [r, n] = e.split(":").map(Number), s = r >= 12 ? "PM" : "AM";
  return `${r % 12 || 12}:${n.toString().padStart(2, "0")} ${s}`;
}
function me(e) {
  return e.toString().padStart(2, "0");
}
const Xe = 250, G = Xe / 2, te = 90, Me = 62, hr = 32;
function yr({
  hour: e,
  minute: t,
  mode: r,
  use12Hours: n,
  period: s,
  onSelectHour: i,
  onSelectMinute: d,
  onModeChange: l,
  onPeriodChange: u,
  minTime: g,
  maxTime: f
}) {
  const x = c.useRef(null), m = c.useRef(!1), v = c.useRef({ x: 0, y: 0 }), h = g ? ct(g) : 0, w = f ? ct(f) : 1439;
  function b(C) {
    if (!x.current) return 0;
    const y = x.current.getBoundingClientRect(), z = y.left + y.width / 2, S = y.top + y.height / 2, A = C.clientX - z, ze = C.clientY - S;
    let Be = Math.atan2(ze, A) * (180 / Math.PI) + 90;
    return Be < 0 && (Be += 360), Be;
  }
  function k(C) {
    if (r === "hours")
      if (n) {
        let y = Math.round(C / 30) % 12;
        y === 0 && (y = 12);
        let z = y;
        s === "AM" ? z = y === 12 ? 0 : y : z = y === 12 ? 12 : y + 12;
        const S = z * 60 + t;
        S >= h && S <= w && i(z);
      } else {
        const y = _(), z = (te + Me) / 2;
        let S;
        y < z ? (S = Math.round(C / 30) % 12, S = S === 0 ? 0 : S + 12) : (S = Math.round(C / 30) % 12, S === 0 && (S = 12));
        const A = S * 60 + t;
        A >= h && A <= w && i(S);
      }
    else {
      const y = Math.round(C / 6) % 60, z = e * 60 + y;
      z >= h && z <= w && d(y);
    }
  }
  function _() {
    if (!x.current) return te;
    const C = x.current.getBoundingClientRect(), y = C.left + C.width / 2, z = C.top + C.height / 2, S = v.current.x - y, A = v.current.y - z;
    return Math.sqrt(S * S + A * A);
  }
  function I(C) {
    m.current = !0, v.current = { x: C.clientX, y: C.clientY };
    const y = b(C);
    k(y);
  }
  function R(C) {
    if (!m.current) return;
    v.current = { x: C.clientX, y: C.clientY };
    const y = b(C);
    k(y);
  }
  function D() {
    m.current && (m.current = !1, r === "hours" && l("minutes"));
  }
  let L, E;
  r === "hours" ? (L = (n ? e % 12 : e) % 12 * 30, !n && (e === 0 || e > 12) ? E = Me : E = te) : (L = t * 6, E = te);
  const T = (L - 90) * Math.PI / 180, $ = G + E * Math.cos(T), N = G + E * Math.sin(T), M = [];
  if (n)
    for (let C = 1; C <= 12; C++) {
      const y = (C * 30 - 90) * Math.PI / 180;
      M.push({
        value: C,
        label: String(C),
        x: G + te * Math.cos(y),
        y: G + te * Math.sin(y),
        inner: !1
      });
    }
  else {
    for (let C = 1; C <= 12; C++) {
      const y = (C * 30 - 90) * Math.PI / 180;
      M.push({
        value: C,
        label: String(C),
        x: G + te * Math.cos(y),
        y: G + te * Math.sin(y),
        inner: !1
      });
    }
    for (let C = 0; C < 12; C++) {
      const y = C === 0 ? 0 : C + 12, z = (C * 30 - 90) * Math.PI / 180;
      M.push({
        value: y,
        label: me(y),
        x: G + Me * Math.cos(z),
        y: G + Me * Math.sin(z),
        inner: !0
      });
    }
  }
  const j = [];
  for (let C = 0; C < 12; C++) {
    const y = C * 5, z = (y * 6 - 90) * Math.PI / 180;
    j.push({
      value: y,
      label: me(y),
      x: G + te * Math.cos(z),
      y: G + te * Math.sin(z)
    });
  }
  const V = (C) => n ? e % 12 === C % 12 && (C !== 0 || e === 0 || e === 12) : e === C;
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
        width: Xe,
        height: Xe,
        className: "cursor-pointer select-none",
        onMouseDown: I,
        onMouseMove: R,
        onMouseUp: D,
        onMouseLeave: D,
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
              x2: $,
              y2: N,
              strokeWidth: 2,
              className: "stroke-primary"
            }
          ),
          /* @__PURE__ */ a(
            "circle",
            {
              cx: $,
              cy: N,
              r: hr / 2,
              className: "fill-primary"
            }
          ),
          r === "hours" ? M.map(({ value: C, label: y, x: z, y: S, inner: A }) => {
            const ze = V(C);
            return /* @__PURE__ */ a(
              "text",
              {
                x: z,
                y: S,
                textAnchor: "middle",
                dominantBaseline: "central",
                className: o(
                  "pointer-events-none text-[13px]",
                  A ? "font-normal" : "font-medium",
                  ze ? "fill-primary-foreground" : "fill-foreground"
                ),
                children: y
              },
              `h-${C}-${A ? "inner" : "outer"}`
            );
          }) : j.map(({ value: C, label: y, x: z, y: S }) => /* @__PURE__ */ a(
            "text",
            {
              x: z,
              y: S,
              textAnchor: "middle",
              dominantBaseline: "central",
              className: o(
                "pointer-events-none text-[13px] font-medium",
                t === C ? "fill-primary-foreground" : "fill-foreground"
              ),
              children: y
            },
            `m-${C}`
          ))
        ]
      }
    )
  ] });
}
const It = c.forwardRef(
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
    minTime: g,
    maxTime: f,
    placeholder: x = "Select time",
    use12Hours: m = !0
  }, v) => {
    const [h, w] = c.useState(!1), [b, k] = c.useState("hours"), _ = c.useRef(null);
    c.useImperativeHandle(v, () => _.current);
    const I = n ? parseInt(n.split(":")[0], 10) : 0, R = n ? parseInt(n.split(":")[1], 10) : 0, [D, L] = c.useState(I), [E, T] = c.useState(R), [$, N] = c.useState(
      I >= 12 ? "PM" : "AM"
    );
    c.useEffect(() => {
      const S = n ? parseInt(n.split(":")[0], 10) : 0, A = n ? parseInt(n.split(":")[1], 10) : 0;
      L(S), T(A), N(S >= 12 ? "PM" : "AM");
    }, [n]), c.useEffect(() => {
      h && k("hours");
    }, [h]), c.useEffect(() => {
      function S(A) {
        _.current && !_.current.contains(A.target) && w(!1);
      }
      return document.addEventListener("mousedown", S), () => document.removeEventListener("mousedown", S);
    }, []), c.useEffect(() => {
      function S(A) {
        A.key === "Escape" && w(!1);
      }
      if (h)
        return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S);
    }, [h]);
    function M(S, A) {
      s?.(`${me(S)}:${me(A)}`);
    }
    function j(S) {
      L(S), M(S, E);
    }
    function V(S) {
      T(S), M(D, S);
    }
    function C(S) {
      N(S);
      let A = D;
      S === "AM" && D >= 12 && (A = D - 12), S === "PM" && D < 12 && (A = D + 12), L(A), M(A, E);
    }
    const y = (S) => {
      S.stopPropagation(), s?.(null);
    }, z = r === "sm" ? 14 : r === "lg" ? 18 : 16;
    return /* @__PURE__ */ p(
      "div",
      {
        ref: _,
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
              onClick: () => w((S) => !S),
              className: o(
                xr({ variant: t, size: r }),
                "cursor-pointer select-none gap-2",
                e
              ),
              "aria-expanded": h,
              "aria-haspopup": "dialog",
              children: [
                /* @__PURE__ */ a(Re, { size: z, className: "shrink-0 text-muted-foreground" }),
                /* @__PURE__ */ a(
                  "span",
                  {
                    className: o(
                      "flex-1 text-left",
                      !n && "text-muted-foreground"
                    ),
                    children: n ? br(n, m) : x
                  }
                ),
                n ? /* @__PURE__ */ a(
                  "span",
                  {
                    role: "button",
                    tabIndex: 0,
                    onClick: y,
                    onKeyDown: (S) => {
                      (S.key === "Enter" || S.key === " ") && y(S);
                    },
                    className: "shrink-0 rounded-sm p-0.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
                    "aria-label": "Clear time",
                    children: /* @__PURE__ */ a(Qe, { size: z })
                  }
                ) : /* @__PURE__ */ a(
                  Ee,
                  {
                    size: z,
                    className: o(
                      "shrink-0 text-muted-foreground transition-transform duration-200",
                      h && "rotate-180"
                    )
                  }
                )
              ]
            }
          ),
          h && /* @__PURE__ */ a(
            "div",
            {
              role: "dialog",
              "aria-label": "Select time",
              className: "absolute z-50 mt-1 rounded-md border border-input bg-popover text-popover-foreground shadow-md",
              children: /* @__PURE__ */ a(
                yr,
                {
                  hour: D,
                  minute: E,
                  mode: b,
                  use12Hours: m,
                  period: $,
                  onSelectHour: j,
                  onSelectMinute: V,
                  onModeChange: k,
                  onPeriodChange: C,
                  minTime: g,
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
It.displayName = "TimePicker";
const Rt = P(
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
function Ye(e, t, r) {
  if (!r) return `${W(e)}:${W(t)}`;
  const n = e >= 12 ? "PM" : "AM";
  return `${e % 12 || 12}:${W(t)} ${n}`;
}
function he(e) {
  return e.toLocaleDateString(void 0, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}
const qe = 220, H = qe / 2, ae = 85, Ie = 58, wr = 28;
function We({ hour: e, minute: t, use12Hours: r, onChange: n }) {
  const s = c.useRef(null), i = c.useRef(!1), d = c.useRef({ x: 0, y: 0 }), [l, u] = c.useState("hours"), [g, f] = c.useState(
    e >= 12 ? "PM" : "AM"
  );
  c.useEffect(() => {
    f(e >= 12 ? "PM" : "AM");
  }, [e]);
  function x(N) {
    if (!s.current) return 0;
    const M = s.current.getBoundingClientRect(), j = M.left + M.width / 2, V = M.top + M.height / 2, C = N.clientX - j, y = N.clientY - V;
    let z = Math.atan2(y, C) * (180 / Math.PI) + 90;
    return z < 0 && (z += 360), z;
  }
  function m() {
    if (!s.current) return ae;
    const N = s.current.getBoundingClientRect(), M = N.left + N.width / 2, j = N.top + N.height / 2, V = d.current.x - M, C = d.current.y - j;
    return Math.sqrt(V * V + C * C);
  }
  function v(N) {
    if (l === "hours")
      if (r) {
        let M = Math.round(N / 30) % 12;
        M === 0 && (M = 12);
        let j = M;
        g === "AM" ? j = M === 12 ? 0 : M : j = M === 12 ? 12 : M + 12, n(j, t);
      } else {
        const M = m(), j = (ae + Ie) / 2;
        let V;
        M < j ? (V = Math.round(N / 30) % 12, V = V === 0 ? 0 : V + 12) : (V = Math.round(N / 30) % 12, V === 0 && (V = 12)), n(V, t);
      }
    else {
      const M = Math.round(N / 6) % 60;
      n(e, M);
    }
  }
  function h(N) {
    i.current = !0, d.current = { x: N.clientX, y: N.clientY }, v(x(N));
  }
  function w(N) {
    i.current && (d.current = { x: N.clientX, y: N.clientY }, v(x(N)));
  }
  function b() {
    i.current && (i.current = !1, l === "hours" && u("minutes"));
  }
  function k(N) {
    f(N);
    let M = e;
    N === "AM" && e >= 12 && (M = e - 12), N === "PM" && e < 12 && (M = e + 12), n(M, t);
  }
  let _, I;
  l === "hours" ? (_ = (r ? e % 12 : e) % 12 * 30, !r && (e === 0 || e > 12) ? I = Ie : I = ae) : (_ = t * 6, I = ae);
  const R = (_ - 90) * Math.PI / 180, D = H + I * Math.cos(R), L = H + I * Math.sin(R), E = [];
  if (r)
    for (let N = 1; N <= 12; N++) {
      const M = (N * 30 - 90) * Math.PI / 180;
      E.push({
        value: N,
        label: String(N),
        x: H + ae * Math.cos(M),
        y: H + ae * Math.sin(M),
        inner: !1
      });
    }
  else {
    for (let N = 1; N <= 12; N++) {
      const M = (N * 30 - 90) * Math.PI / 180;
      E.push({
        value: N,
        label: String(N),
        x: H + ae * Math.cos(M),
        y: H + ae * Math.sin(M),
        inner: !1
      });
    }
    for (let N = 0; N < 12; N++) {
      const M = N === 0 ? 0 : N + 12, j = (N * 30 - 90) * Math.PI / 180;
      E.push({
        value: M,
        label: W(M),
        x: H + Ie * Math.cos(j),
        y: H + Ie * Math.sin(j),
        inner: !0
      });
    }
  }
  const T = [];
  for (let N = 0; N < 12; N++) {
    const M = N * 5, j = (M * 6 - 90) * Math.PI / 180;
    T.push({
      value: M,
      label: W(M),
      x: H + ae * Math.cos(j),
      y: H + ae * Math.sin(j)
    });
  }
  const $ = (N) => r ? e % 12 === N % 12 && (N !== 0 || e === 0 || e === 12) : e === N;
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
              g === "AM" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground"
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
              g === "PM" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground"
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
        width: qe,
        height: qe,
        className: "cursor-pointer select-none",
        onMouseDown: h,
        onMouseMove: w,
        onMouseUp: b,
        onMouseLeave: b,
        children: [
          /* @__PURE__ */ a(
            "circle",
            {
              cx: H,
              cy: H,
              r: H - 2,
              className: "fill-muted/50"
            }
          ),
          /* @__PURE__ */ a(
            "circle",
            {
              cx: H,
              cy: H,
              r: 3,
              className: "fill-primary"
            }
          ),
          /* @__PURE__ */ a(
            "line",
            {
              x1: H,
              y1: H,
              x2: D,
              y2: L,
              strokeWidth: 2,
              className: "stroke-primary"
            }
          ),
          /* @__PURE__ */ a(
            "circle",
            {
              cx: D,
              cy: L,
              r: wr / 2,
              className: "fill-primary"
            }
          ),
          l === "hours" ? E.map(({ value: N, label: M, x: j, y: V, inner: C }) => {
            const y = $(N);
            return /* @__PURE__ */ a(
              "text",
              {
                x: j,
                y: V,
                textAnchor: "middle",
                dominantBaseline: "central",
                className: o(
                  "pointer-events-none text-[12px]",
                  C ? "font-normal" : "font-medium",
                  y ? "fill-primary-foreground" : "fill-foreground"
                ),
                children: M
              },
              `h-${N}-${C ? "i" : "o"}`
            );
          }) : T.map(({ value: N, label: M, x: j, y: V }) => /* @__PURE__ */ a(
            "text",
            {
              x: j,
              y: V,
              textAnchor: "middle",
              dominantBaseline: "central",
              className: o(
                "pointer-events-none text-[12px] font-medium",
                t === N ? "fill-primary-foreground" : "fill-foreground"
              ),
              children: M
            },
            `m-${N}`
          ))
        ]
      }
    )
  ] });
}
const Pt = {
  months: "flex flex-col sm:flex-row gap-2",
  month: "flex flex-col gap-4",
  caption: "flex justify-center pt-1 relative items-center w-full",
  caption_label: "text-sm font-medium",
  nav: "flex items-center gap-1",
  nav_button: o(
    J({ variant: "outline" }),
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
    J({ variant: "ghost" }),
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
}, Tt = {
  IconLeft: ({ className: e, ...t }) => /* @__PURE__ */ a(De, { className: o("size-4", e), ...t }),
  IconRight: ({ className: e, ...t }) => /* @__PURE__ */ a(Ce, { className: o("size-4", e), ...t })
};
function Nr({
  className: e,
  variant: t = "default",
  size: r = "md",
  value: n,
  onChange: s,
  disabled: i,
  name: d,
  id: l,
  required: u,
  placeholder: g = "Select date & time",
  use12Hours: f = !0,
  calendarProps: x
}) {
  const [m, v] = c.useState(!1), [h, w] = c.useState("date"), b = n?.date, k = n?.hour ?? 0, _ = n?.minute ?? 0;
  function I(T) {
    T && (s?.({ date: T, hour: k, minute: _ }), w("time"));
  }
  function R(T, $) {
    s?.({ date: b ?? /* @__PURE__ */ new Date(), hour: T, minute: $ });
  }
  function D(T) {
    T.stopPropagation(), T.preventDefault(), s?.(null);
  }
  const L = n ? `${he(n.date)}, ${Ye(n.hour, n.minute, f)}` : null, E = r === "sm" ? 14 : r === "lg" ? 18 : 16;
  return /* @__PURE__ */ p(ve, { open: m, onOpenChange: v, children: [
    /* @__PURE__ */ a(xe, { asChild: !0, disabled: i, children: /* @__PURE__ */ p(
      "button",
      {
        type: "button",
        disabled: i,
        className: o(
          Rt({ variant: t, size: r }),
          "cursor-pointer select-none gap-2",
          i && "pointer-events-none opacity-50",
          e
        ),
        "aria-expanded": m,
        "aria-haspopup": "dialog",
        ...l ? { id: l } : {},
        children: [
          /* @__PURE__ */ a(
            Pe,
            {
              size: E,
              className: "shrink-0 text-muted-foreground"
            }
          ),
          /* @__PURE__ */ a(
            "span",
            {
              className: o(
                "flex-1 text-left truncate",
                !L && "text-muted-foreground"
              ),
              children: L ?? g
            }
          ),
          n ? /* @__PURE__ */ a(
            "span",
            {
              role: "button",
              tabIndex: 0,
              onClick: D,
              onKeyDown: (T) => {
                (T.key === "Enter" || T.key === " ") && D(T);
              },
              className: "shrink-0 rounded-sm p-0.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
              "aria-label": "Clear",
              children: /* @__PURE__ */ a(Qe, { size: E })
            }
          ) : /* @__PURE__ */ a(
            Ee,
            {
              size: E,
              className: o(
                "shrink-0 text-muted-foreground transition-transform duration-200",
                m && "rotate-180"
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ p(be, { align: "start", className: "w-auto p-0 bg-popover border", children: [
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
            onClick: () => w("date"),
            className: o(
              "flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors",
              h === "date" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"
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
            onClick: () => w("time"),
            className: o(
              "flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors",
              h === "time" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"
            ),
            children: [
              /* @__PURE__ */ a(Re, { size: 14 }),
              "Time"
            ]
          }
        )
      ] }),
      h === "date" ? /* @__PURE__ */ a(
        Se,
        {
          mode: "single",
          showOutsideDays: !0,
          selected: b,
          onSelect: I,
          className: "p-3",
          classNames: Pt,
          components: Tt,
          ...x
        }
      ) : /* @__PURE__ */ a("div", { className: "p-3", children: /* @__PURE__ */ a(
        We,
        {
          hour: k,
          minute: _,
          use12Hours: f,
          onChange: R
        }
      ) })
    ] })
  ] });
}
function kr({
  className: e,
  variant: t = "default",
  size: r = "md",
  value: n,
  onChange: s,
  disabled: i,
  name: d,
  id: l,
  required: u,
  placeholder: g = "Select date & time range",
  use12Hours: f = !0,
  calendarProps: x
}) {
  const [m, v] = c.useState(!1), [h, w] = c.useState(
    "date"
  ), [b, k] = c.useState(), _ = n?.from?.date, I = n?.to?.date, R = n?.from?.hour ?? 0, D = n?.from?.minute ?? 0, L = n?.to?.hour ?? 0, E = n?.to?.minute ?? 0, T = _ || I ? { from: _, to: I } : void 0, $ = _ && !I && b ? { from: _, to: b } : null;
  function N(z, S) {
    if (_ && I && S) {
      s?.({
        from: { date: S, hour: 0, minute: 0 },
        to: void 0
      });
      return;
    }
    if (!z?.from) {
      s?.(null);
      return;
    }
    const A = {
      from: {
        date: z.from,
        hour: n?.from?.hour ?? 0,
        minute: n?.from?.minute ?? 0
      },
      to: z.to ? {
        date: z.to,
        hour: n?.to?.hour ?? 0,
        minute: n?.to?.minute ?? 0
      } : void 0
    };
    s?.(A), z.from && z.to && w("start-time");
  }
  function M(z, S) {
    s?.({
      from: {
        date: _ ?? /* @__PURE__ */ new Date(),
        hour: z,
        minute: S
      },
      to: n?.to
    });
  }
  function j(z, S) {
    const A = {
      date: I ?? /* @__PURE__ */ new Date(),
      hour: z,
      minute: S
    };
    s?.({
      from: n?.from,
      to: A
    });
  }
  function V(z) {
    z.stopPropagation(), z.preventDefault(), s?.(null);
  }
  let C = null;
  if (n?.from) {
    const z = `${he(n.from.date)}, ${Ye(n.from.hour, n.from.minute, f)}`;
    if (n?.to) {
      const S = `${he(n.to.date)}, ${Ye(n.to.hour, n.to.minute, f)}`;
      C = `${z} – ${S}`;
    } else
      C = z;
  }
  const y = r === "sm" ? 14 : r === "lg" ? 18 : 16;
  return /* @__PURE__ */ p(ve, { open: m, onOpenChange: v, children: [
    /* @__PURE__ */ a(xe, { asChild: !0, disabled: i, children: /* @__PURE__ */ p(
      "button",
      {
        type: "button",
        disabled: i,
        className: o(
          Rt({ variant: t, size: r }),
          "cursor-pointer select-none gap-2",
          i && "pointer-events-none opacity-50",
          e
        ),
        "aria-expanded": m,
        "aria-haspopup": "dialog",
        ...l ? { id: l } : {},
        children: [
          /* @__PURE__ */ a(
            Pe,
            {
              size: y,
              className: "shrink-0 text-muted-foreground"
            }
          ),
          /* @__PURE__ */ a(
            "span",
            {
              className: o(
                "flex-1 text-left truncate",
                !C && "text-muted-foreground"
              ),
              children: C ?? g
            }
          ),
          n ? /* @__PURE__ */ a(
            "span",
            {
              role: "button",
              tabIndex: 0,
              onClick: V,
              onKeyDown: (z) => {
                (z.key === "Enter" || z.key === " ") && V(z);
              },
              className: "shrink-0 rounded-sm p-0.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
              "aria-label": "Clear",
              children: /* @__PURE__ */ a(Qe, { size: y })
            }
          ) : /* @__PURE__ */ a(
            Ee,
            {
              size: y,
              className: o(
                "shrink-0 text-muted-foreground transition-transform duration-200",
                m && "rotate-180"
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ p(be, { align: "start", className: "w-auto p-0 bg-popover border", children: [
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
            onClick: () => w("date"),
            className: o(
              "flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors",
              h === "date" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"
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
            onClick: () => w("start-time"),
            className: o(
              "flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors",
              h === "start-time" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"
            ),
            children: [
              /* @__PURE__ */ a(Re, { size: 14 }),
              "Start"
            ]
          }
        ),
        /* @__PURE__ */ p(
          "button",
          {
            type: "button",
            onClick: () => w("end-time"),
            className: o(
              "flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors",
              h === "end-time" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"
            ),
            children: [
              /* @__PURE__ */ a(Re, { size: 14 }),
              "End"
            ]
          }
        )
      ] }),
      h === "date" ? /* @__PURE__ */ a(
        Se,
        {
          mode: "range",
          numberOfMonths: 2,
          showOutsideDays: !0,
          selected: T,
          onSelect: N,
          onDayMouseEnter: (z) => k(z),
          onDayMouseLeave: () => k(void 0),
          modifiers: {
            hoveredRange: $ ? [$] : []
          },
          modifiersClassNames: {
            hoveredRange: "bg-accent/50 text-accent-foreground"
          },
          className: "p-3",
          classNames: Pt,
          components: Tt,
          ...x
        }
      ) : h === "start-time" ? /* @__PURE__ */ p("div", { className: "p-3", children: [
        /* @__PURE__ */ a("p", { className: "text-xs text-muted-foreground text-center mb-2", children: _ ? he(_) : "Select start date first" }),
        /* @__PURE__ */ a(
          We,
          {
            hour: R,
            minute: D,
            use12Hours: f,
            onChange: M
          }
        )
      ] }) : /* @__PURE__ */ p("div", { className: "p-3", children: [
        /* @__PURE__ */ a("p", { className: "text-xs text-muted-foreground text-center mb-2", children: I ? he(I) : "Select end date first" }),
        /* @__PURE__ */ a(
          We,
          {
            hour: L,
            minute: E,
            use12Hours: f,
            onChange: j
          }
        )
      ] })
    ] })
  ] });
}
const Dt = c.forwardRef(
  (e) => e.mode === "range" ? /* @__PURE__ */ a(kr, { ...e }) : /* @__PURE__ */ a(Nr, { ...e })
);
Dt.displayName = "DateTimePicker";
const Cr = c.forwardRef(
  ({ label: e, error: t, helperText: r, icon: n, required: s, className: i, ...d }, l) => /* @__PURE__ */ p(ee, { gap: "2", children: [
    e && /* @__PURE__ */ p(Q, { children: [
      e,
      s && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    n ? /* @__PURE__ */ p(it, { gap: "2", className: "relative", children: [
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
    t && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-destructive", children: t }),
    r && !t && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-muted-foreground", children: r })
  ] })
);
Cr.displayName = "FormInput";
const Sr = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, ...i }, d) => /* @__PURE__ */ p(ee, { gap: "2", children: [
  e && /* @__PURE__ */ p(Q, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    Ct,
    {
      ref: d,
      className: o(t && "border-destructive", s),
      ...i
    }
  ),
  t && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-destructive", children: t }),
  r && !t && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-muted-foreground", children: r })
] }));
Sr.displayName = "FormTextarea";
const zr = c.forwardRef(
  (e, t) => {
    const {
      label: r,
      error: n,
      helperText: s,
      required: i,
      className: d,
      disabled: l,
      options: u,
      placeholder: g = "Select...",
      loading: f = !1,
      emptyText: x = "No options",
      apiError: m,
      value: v,
      onValueChange: h,
      ...w
    } = e;
    return /* @__PURE__ */ p(ee, { gap: "2", className: "group", "data-disabled": l, children: [
      r && /* @__PURE__ */ p(Q, { children: [
        r,
        i && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
      ] }),
      /* @__PURE__ */ p(
        or,
        {
          value: v,
          onValueChange: h,
          disabled: l,
          loading: f,
          emptyText: x,
          apiError: m,
          ...w,
          children: [
            /* @__PURE__ */ a(
              ir,
              {
                ref: t,
                "aria-invalid": !!n,
                className: o(n && "border-destructive", d),
                children: /* @__PURE__ */ a(sr, { placeholder: g })
              }
            ),
            /* @__PURE__ */ a(
              St,
              {
                hasOptions: u.length > 0,
                loading: f,
                apiError: m,
                emptyText: x,
                children: u.map((b) => /* @__PURE__ */ a(
                  zt,
                  {
                    value: b.value,
                    disabled: b.disabled,
                    children: b.label
                  },
                  b.value
                ))
              }
            )
          ]
        }
      ),
      n && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-destructive", children: n }),
      s && !n && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-muted-foreground", children: s })
    ] });
  }
);
zr.displayName = "FormSelect";
const _r = c.forwardRef(
  (e, t) => {
    const {
      label: r,
      error: n,
      helperText: s,
      required: i,
      className: d,
      value: l,
      onChange: u,
      ...g
    } = e;
    return /* @__PURE__ */ p(ee, { gap: "2", children: [
      r && /* @__PURE__ */ p(Q, { children: [
        r,
        i && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
      ] }),
      /* @__PURE__ */ a("div", { ref: t, className: d, children: (() => {
        switch (e.mode) {
          case "multiple":
            return /* @__PURE__ */ a(
              Ge,
              {
                ...g,
                mode: "multiple",
                selected: l,
                onSelect: u
              }
            );
          case "range":
            return /* @__PURE__ */ a(
              Ge,
              {
                ...g,
                mode: "range",
                selected: l,
                onSelect: u
              }
            );
          default:
            return /* @__PURE__ */ a(
              Ge,
              {
                ...g,
                mode: "single",
                selected: l,
                onSelect: u
              }
            );
        }
      })() }),
      n && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-destructive", children: n }),
      s && !n && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-muted-foreground", children: s })
    ] });
  }
);
_r.displayName = "FormCalendar";
const Mr = c.forwardRef((e, t) => {
  const {
    label: r,
    checkboxLabel: n,
    error: s,
    helperText: i,
    required: d,
    className: l,
    ...u
  } = e;
  return /* @__PURE__ */ p(ee, { gap: "2", children: [
    r && /* @__PURE__ */ p(Q, { children: [
      r,
      d && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ a(
      nt,
      {
        ref: t,
        label: n,
        variant: s ? "error" : u.variant,
        className: o(l),
        ...u
      }
    ),
    s && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-destructive", children: s }),
    i && !s && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-muted-foreground", children: i })
  ] });
});
Mr.displayName = "FormCheckbox";
const Ir = c.forwardRef((e, t) => {
  const { label: r, error: n, helperText: s, required: i, className: d, options: l, ...u } = e;
  return /* @__PURE__ */ p(ee, { gap: "2", children: [
    r && /* @__PURE__ */ p(Q, { children: [
      r,
      i && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ a(
      cr,
      {
        ref: t,
        "aria-invalid": !!n,
        className: o(n && "ring-2 ring-destructive/20", d),
        ...u,
        children: l.map((g) => /* @__PURE__ */ p(it, { as: "label", gap: "2", className: "items-center", children: [
          /* @__PURE__ */ a(
            ur,
            {
              value: g.value,
              disabled: g.disabled,
              "aria-label": typeof g.label == "string" ? g.label : void 0
            }
          ),
          /* @__PURE__ */ a("span", { children: g.label })
        ] }, g.value))
      }
    ),
    n && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-destructive", children: n }),
    s && !n && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-muted-foreground", children: s })
  ] });
});
Ir.displayName = "FormRadioGroup";
const Rr = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, ...i }, d) => /* @__PURE__ */ p(ee, { gap: "2", children: [
  e && /* @__PURE__ */ p(Q, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    Mt,
    {
      ref: d,
      variant: t ? "error" : "default",
      className: o(s),
      ...i
    }
  ),
  t && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-destructive", children: t }),
  r && !t && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-muted-foreground", children: r })
] }));
Rr.displayName = "FormPhoneInput";
const Pr = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, ...i }, d) => /* @__PURE__ */ p(ee, { gap: "2", children: [
  e && /* @__PURE__ */ p(Q, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    It,
    {
      ref: d,
      variant: t ? "error" : "default",
      className: o(s),
      ...i
    }
  ),
  t && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-destructive", children: t }),
  r && !t && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-muted-foreground", children: r })
] }));
Pr.displayName = "FormTimePicker";
const Tr = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, ...i }, d) => /* @__PURE__ */ p(ee, { gap: "2", children: [
  e && /* @__PURE__ */ p(Q, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    Dt,
    {
      ref: d,
      variant: t ? "error" : "default",
      className: o(s),
      ...i
    }
  ),
  t && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-destructive", children: t }),
  r && !t && /* @__PURE__ */ a(F, { variant: "body-sm", className: "text-muted-foreground", children: r })
] }));
Tr.displayName = "FormDateTimePicker";
const Dr = P(
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
), jr = c.forwardRef(
  ({ className: e, variant: t, size: r, count: n, ...s }, i) => /* @__PURE__ */ a(
    "span",
    {
      ref: i,
      className: o(Dr({ variant: t, size: r }), e),
      ...s,
      children: n
    }
  )
);
jr.displayName = "CountBadge";
function Lo({
  ...e
}) {
  return /* @__PURE__ */ a(Ne.Root, { "data-slot": "accordion", ...e });
}
function Vo({
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
function $o({
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
        /* @__PURE__ */ a(je, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function Oo({
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
const Ar = P(
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
function Fo({
  className: e,
  variant: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: o(Ar({ variant: t }), e),
      ...r
    }
  );
}
function Bo({ className: e, ...t }) {
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
function Go({ className: e, ...t }) {
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
function Ho({
  ...e
}) {
  return /* @__PURE__ */ a(ne.Root, { "data-slot": "alert-dialog", ...e });
}
function Ko({
  ...e
}) {
  return /* @__PURE__ */ a(ne.Trigger, { "data-slot": "alert-dialog-trigger", ...e });
}
function Er({
  ...e
}) {
  return /* @__PURE__ */ a(ne.Portal, { "data-slot": "alert-dialog-portal", ...e });
}
function Lr({
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
function Uo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(Er, { children: [
    /* @__PURE__ */ a(Lr, {}),
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
function Xo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: o("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function Yo({ className: e, ...t }) {
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
function qo({
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
function Wo({
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
function Zo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ne.Action,
    {
      className: o(J(), e),
      ...t
    }
  );
}
function Jo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ne.Cancel,
    {
      className: o(J({ variant: "outline" }), e),
      ...t
    }
  );
}
function Qo({
  ...e
}) {
  return /* @__PURE__ */ a(ca.Root, { "data-slot": "aspect-ratio", ...e });
}
function es({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    et.Root,
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
function ts({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    et.Image,
    {
      "data-slot": "avatar-image",
      className: o("aspect-square size-full", e),
      ...t
    }
  );
}
function as({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    et.Fallback,
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
const Vr = P(
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
function rs({
  className: e,
  variant: t,
  asChild: r = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    r ? Z : "span",
    {
      "data-slot": "badge",
      className: o(Vr({ variant: t }), e),
      ...n
    }
  );
}
function ns({ ...e }) {
  return /* @__PURE__ */ a("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function os({ className: e, ...t }) {
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
function ss({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: o("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function is({
  asChild: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    e ? Z : "a",
    {
      "data-slot": "breadcrumb-link",
      className: o("hover:text-foreground transition-colors", t),
      ...r
    }
  );
}
function ds({ className: e, ...t }) {
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
function ls({
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
      children: e ?? /* @__PURE__ */ a(Ce, {})
    }
  );
}
function cs({
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
        /* @__PURE__ */ a(Wt, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
const $r = c.forwardRef(
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
$r.displayName = "ButtonGroup";
function us({
  className: e,
  orientation: t = "vertical",
  decorative: r = !0,
  ...n
}) {
  return /* @__PURE__ */ a(
    xt.Root,
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
function ps({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? Z : "span",
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
function Or({
  p: e,
  px: t,
  py: r,
  m: n,
  mx: s,
  my: i,
  shadow: d,
  w: l,
  h: u,
  display: g
}) {
  const f = O(e ?? "2"), x = t !== void 0 ? O(t) : void 0, m = r !== void 0 ? O(r) : void 0, v = x !== void 0 && x !== "none" ? `px-[var(--spacing-${x})]` : "", h = m !== void 0 && m !== "none" ? `py-[var(--spacing-${m})]` : "", w = f !== void 0 && f !== "none" && x === void 0 && m === void 0 ? `p-[var(--spacing-${f})]` : "", b = n !== void 0 ? O(n) : void 0, k = s !== void 0 ? O(s) : void 0, _ = i !== void 0 ? O(i) : void 0, I = k !== void 0 && k !== "none" ? `mx-[var(--spacing-${k})]` : "", R = _ !== void 0 && _ !== "none" ? `my-[var(--spacing-${_})]` : "", D = b !== void 0 && b !== "none" && k === void 0 && _ === void 0 ? `m-[var(--spacing-${b})]` : "", E = d ? {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    inner: "shadow-inner",
    outline: "shadow-outline",
    default: "shadow"
  }[d] : "", T = {
    auto: "w-auto",
    full: "w-full",
    fit: "w-fit",
    screen: "w-screen"
  }, $ = {
    auto: "h-auto",
    full: "h-full",
    fit: "h-fit",
    screen: "h-screen"
  }, N = l ? T[l] : "", M = u ? $[u] : "";
  return [
    w,
    v,
    h,
    D,
    I,
    R,
    E,
    N,
    M,
    g || ""
  ].filter(Boolean).join(" ");
}
function ms({
  className: e,
  p: t,
  px: r,
  py: n,
  m: s,
  mx: i,
  my: d,
  shadow: l,
  w: u,
  h: g,
  display: f,
  ...x
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card",
      className: o(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
        Or({ p: t, px: r, py: n, m: s, mx: i, my: d, shadow: l, w: u, h: g, display: f }),
        e
      ),
      ...x
    }
  );
}
function gs({ className: e, ...t }) {
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
function fs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "h4",
    {
      "data-slot": "card-title",
      className: o("leading-none", e),
      ...t
    }
  );
}
function vs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "card-description",
      className: o("text-muted-foreground", e),
      ...t
    }
  );
}
function xs({ className: e, ...t }) {
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
function bs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-content",
      className: o("px-6 [&:last-child]:pb-6", e),
      ...t
    }
  );
}
function hs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-footer",
      className: o("flex items-center px-6 pb-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const jt = c.createContext(null);
function $e() {
  const e = c.useContext(jt);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function ys({
  orientation: e = "horizontal",
  opts: t,
  setApi: r,
  plugins: n,
  className: s,
  children: i,
  ...d
}) {
  const [l, u] = ua(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    n
  ), [g, f] = c.useState(!1), [x, m] = c.useState(!1), v = c.useCallback((k) => {
    k && (f(k.canScrollPrev()), m(k.canScrollNext()));
  }, []), h = c.useCallback(() => {
    u?.scrollPrev();
  }, [u]), w = c.useCallback(() => {
    u?.scrollNext();
  }, [u]), b = c.useCallback(
    (k) => {
      k.key === "ArrowLeft" ? (k.preventDefault(), h()) : k.key === "ArrowRight" && (k.preventDefault(), w());
    },
    [h, w]
  );
  return c.useEffect(() => {
    !u || !r || r(u);
  }, [u, r]), c.useEffect(() => {
    if (u)
      return v(u), u.on("reInit", v), u.on("select", v), () => {
        u?.off("select", v);
      };
  }, [u, v]), /* @__PURE__ */ a(
    jt.Provider,
    {
      value: {
        carouselRef: l,
        api: u,
        opts: t,
        orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: h,
        scrollNext: w,
        canScrollPrev: g,
        canScrollNext: x
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          onKeyDownCapture: b,
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
function ws({ className: e, ...t }) {
  const { carouselRef: r, orientation: n } = $e();
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
function Ns({ className: e, ...t }) {
  const { orientation: r } = $e();
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
function ks({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: s, scrollPrev: i, canScrollPrev: d } = $e();
  return /* @__PURE__ */ p(
    Ve,
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
        /* @__PURE__ */ a(Zt, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function Cs({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: s, scrollNext: i, canScrollNext: d } = $e();
  return /* @__PURE__ */ p(
    Ve,
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
        /* @__PURE__ */ a(Jt, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const Fr = { light: "", dark: ".dark" }, At = c.createContext(null);
function Et() {
  const e = c.useContext(At);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function Ss({
  id: e,
  className: t,
  children: r,
  config: n,
  ...s
}) {
  const i = c.useId(), d = `chart-${e || i.replace(/:/g, "")}`;
  return /* @__PURE__ */ a(At.Provider, { value: { config: n }, children: /* @__PURE__ */ p(
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
        /* @__PURE__ */ a(Br, { id: d, config: n }),
        /* @__PURE__ */ a(tt.ResponsiveContainer, { children: r })
      ]
    }
  ) });
}
const Br = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(
    ([, n]) => n.theme || n.color
  );
  return r.length ? /* @__PURE__ */ a(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(Fr).map(
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
}, zs = tt.Tooltip;
function _s({
  active: e,
  payload: t,
  className: r,
  indicator: n = "dot",
  hideLabel: s = !1,
  hideIndicator: i = !1,
  label: d,
  labelFormatter: l,
  labelClassName: u,
  formatter: g,
  color: f,
  nameKey: x,
  labelKey: m
}) {
  const { config: v } = Et(), h = c.useMemo(() => {
    if (s || !t?.length)
      return null;
    const [b] = t, k = `${m || b?.dataKey || b?.name || "value"}`, _ = Ze(v, b, k), I = !m && typeof d == "string" ? v[d]?.label || d : _?.label;
    return l ? /* @__PURE__ */ a("div", { className: o("font-medium", u), children: l(I, t) }) : I ? /* @__PURE__ */ a("div", { className: o("font-medium", u), children: I }) : null;
  }, [
    d,
    l,
    t,
    s,
    u,
    v,
    m
  ]);
  if (!e || !t?.length)
    return null;
  const w = t.length === 1 && n !== "dot";
  return /* @__PURE__ */ p(
    "div",
    {
      className: o(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        r
      ),
      children: [
        w ? null : h,
        /* @__PURE__ */ a("div", { className: "grid gap-1.5", children: t.map((b, k) => {
          const _ = `${x || b.name || b.dataKey || "value"}`, I = Ze(v, b, _), R = f || b.payload.fill || b.color;
          return /* @__PURE__ */ a(
            "div",
            {
              className: o(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                n === "dot" && "items-center"
              ),
              children: g && b?.value !== void 0 && b.name ? g(b.value, b.name, b, k, b.payload) : /* @__PURE__ */ p(Je, { children: [
                I?.icon ? /* @__PURE__ */ a(I.icon, {}) : !i && /* @__PURE__ */ a(
                  "div",
                  {
                    className: o(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": n === "dot",
                        "w-1": n === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                        "my-0.5": w && n === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": R,
                      "--color-border": R
                    }
                  }
                ),
                /* @__PURE__ */ p(
                  "div",
                  {
                    className: o(
                      "flex flex-1 justify-between leading-none",
                      w ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ p("div", { className: "grid gap-1.5", children: [
                        w ? h : null,
                        /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: I?.label || b.name })
                      ] }),
                      b.value && /* @__PURE__ */ a("span", { className: "text-foreground font-mono font-medium tabular-nums", children: b.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            b.dataKey
          );
        }) })
      ]
    }
  );
}
const Ms = tt.Legend;
function Is({
  className: e,
  hideIcon: t = !1,
  payload: r,
  verticalAlign: n = "bottom",
  nameKey: s
}) {
  const { config: i } = Et();
  return r?.length ? /* @__PURE__ */ a(
    "div",
    {
      className: o(
        "flex items-center justify-center gap-4",
        n === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: r.map((d) => {
        const l = `${s || d.dataKey || "value"}`, u = Ze(i, d, l);
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
function Ze(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let s = r;
  return r in t && typeof t[r] == "string" ? s = t[r] : n && r in n && typeof n[r] == "string" && (s = n[r]), s in e ? e[s] : e[r];
}
function Gr({
  p: e,
  px: t,
  py: r,
  m: n,
  mx: s,
  my: i,
  shadow: d,
  w: l,
  h: u,
  display: g
}) {
  const f = O(e), x = t !== void 0 ? O(t) : void 0, m = r !== void 0 ? O(r) : void 0, v = x !== void 0 && x !== "none" ? `px-[var(--spacing-${x})]` : "", h = m !== void 0 && m !== "none" ? `py-[var(--spacing-${m})]` : "", w = f !== void 0 && f !== "none" && x === void 0 && m === void 0 ? `p-[var(--spacing-${f})]` : "", b = n !== void 0 ? O(n) : void 0, k = s !== void 0 ? O(s) : void 0, _ = i !== void 0 ? O(i) : void 0, I = k !== void 0 && k !== "none" ? `mx-[var(--spacing-${k})]` : "", R = _ !== void 0 && _ !== "none" ? `my-[var(--spacing-${_})]` : "", D = b !== void 0 && b !== "none" && k === void 0 && _ === void 0 ? `m-[var(--spacing-${b})]` : "", E = d ? {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    inner: "shadow-inner",
    outline: "shadow-outline",
    default: "shadow"
  }[d] : "", T = {
    auto: "w-auto",
    full: "w-full",
    fit: "w-fit",
    screen: "w-screen"
  }, $ = {
    auto: "h-auto",
    full: "h-full",
    fit: "h-fit",
    screen: "h-screen"
  }, N = l ? T[l] : "", M = u ? $[u] : "";
  return [
    w,
    v,
    h,
    D,
    I,
    R,
    E,
    N,
    M,
    g || ""
  ].filter(Boolean).join(" ");
}
function Rs({
  className: e,
  p: t,
  px: r,
  py: n,
  m: s,
  mx: i,
  my: d,
  shadow: l,
  w: u,
  h: g,
  display: f,
  ...x
}) {
  return /* @__PURE__ */ a(
    at.Root,
    {
      "data-slot": "collapsible",
      className: o(
        Gr({
          p: t,
          px: r,
          py: n,
          m: s,
          mx: i,
          my: d,
          shadow: l,
          w: u,
          h: g,
          display: f
        }),
        e
      ),
      ...x
    }
  );
}
function Ps(e) {
  return /* @__PURE__ */ a(
    at.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      className: o("cursor-pointer", e.className),
      ...e
    }
  );
}
function Ts({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    at.CollapsibleContent,
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
function Hr({ ...e }) {
  return /* @__PURE__ */ a(B.Root, { "data-slot": "dialog", ...e });
}
function Ds({
  ...e
}) {
  return /* @__PURE__ */ a(B.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function Kr({
  ...e
}) {
  return /* @__PURE__ */ a(B.Portal, { "data-slot": "dialog-portal", ...e });
}
function js({
  ...e
}) {
  return /* @__PURE__ */ a(B.Close, { "data-slot": "dialog-close", ...e });
}
function Ur({
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
function Xr({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(Kr, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ a(Ur, {}),
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
            /* @__PURE__ */ a(gt, {}),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function Yr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-header",
      className: o("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function As({ className: e, ...t }) {
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
function qr({
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
function Wr({
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
function Zr({
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
function Es({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: r,
  ...n
}) {
  return /* @__PURE__ */ p(Hr, { ...n, children: [
    /* @__PURE__ */ p(Yr, { className: "sr-only", children: [
      /* @__PURE__ */ a(qr, { children: e }),
      /* @__PURE__ */ a(Wr, { children: t })
    ] }),
    /* @__PURE__ */ a(Xr, { className: "overflow-hidden p-0", children: /* @__PURE__ */ a(Zr, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: r }) })
  ] });
}
function Ls({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ a(Te, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ a(
          ce.Input,
          {
            "data-slot": "command-input",
            className: o(
              "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              e
            ),
            ...t
          }
        )
      ]
    }
  );
}
function Vs({
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
function $s({
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
function Os({
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
function Fs({
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
function Bs({
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
function Gs({ className: e, ...t }) {
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
function Hs({
  ...e
}) {
  return /* @__PURE__ */ a(K.Root, { "data-slot": "context-menu", ...e });
}
function Ks({
  ...e
}) {
  return /* @__PURE__ */ a(K.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function Jr({
  ...e
}) {
  return /* @__PURE__ */ a(K.Group, { "data-slot": "context-menu-group", ...e });
}
function Us({
  ...e
}) {
  return /* @__PURE__ */ a(K.Portal, { "data-slot": "context-menu-portal", ...e });
}
function Xs({
  ...e
}) {
  return /* @__PURE__ */ a(K.Sub, { "data-slot": "context-menu-sub", ...e });
}
function Ys({
  ...e
}) {
  return /* @__PURE__ */ a(
    K.RadioGroup,
    {
      "data-slot": "context-menu-radio-group",
      ...e
    }
  );
}
function qs({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    K.SubTrigger,
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
        /* @__PURE__ */ a(Le, { className: "ml-auto" })
      ]
    }
  );
}
function Ws({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    K.SubContent,
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
function Zs({
  className: e,
  loading: t = !1,
  apiError: r,
  emptyText: n = "No Options",
  children: s,
  ...i
}) {
  const d = c.Children.toArray(s).some(
    (l) => c.isValidElement(l) && (l.type === Qr || l.type === Jr)
  );
  return /* @__PURE__ */ a(K.Portal, { children: /* @__PURE__ */ a(
    K.Content,
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
function Qr({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    K.Item,
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
function Js({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    K.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(K.ItemIndicator, { children: /* @__PURE__ */ a(fe, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function Qs({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(
    K.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(K.ItemIndicator, { children: /* @__PURE__ */ a(Ae, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function ei({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    K.Label,
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
function ti({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    K.Separator,
    {
      "data-slot": "context-menu-separator",
      className: o("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function ai({
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
function ri({ ...e }) {
  return /* @__PURE__ */ a(oe.Root, { "data-slot": "drawer", ...e });
}
function ni({
  ...e
}) {
  return /* @__PURE__ */ a(oe.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function en({
  ...e
}) {
  return /* @__PURE__ */ a(oe.Portal, { "data-slot": "drawer-portal", ...e });
}
function oi({
  ...e
}) {
  return /* @__PURE__ */ a(oe.Close, { "data-slot": "drawer-close", ...e });
}
function tn({
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
function si({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "drawer-body", className: o("flex-1", e), ...t, children: t.children });
}
function ii({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(en, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ a(tn, {}),
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
function di({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-header",
      className: o("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function li({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-footer",
      className: o("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function ci({
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
function ui({
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
function pi({
  ...e
}) {
  return /* @__PURE__ */ a(U.Root, { "data-slot": "dropdown-menu", ...e });
}
function mi({
  ...e
}) {
  return /* @__PURE__ */ a(U.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function gi({
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
function fi({
  className: e,
  sideOffset: t = 4,
  loading: r = !1,
  apiError: n,
  emptyText: s = "No Options",
  children: i,
  ...d
}) {
  const l = c.Children.toArray(i).some(
    (u) => c.isValidElement(u) && (u.type === Vt || u.type === Lt)
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
function Lt({
  ...e
}) {
  return /* @__PURE__ */ a(U.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function Vt({
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
function vi({
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
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(U.ItemIndicator, { children: /* @__PURE__ */ a(fe, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function xi({
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
function bi({
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
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(U.ItemIndicator, { children: /* @__PURE__ */ a(Ae, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function hi({
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
function yi({
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
function wi({
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
function Ni({
  ...e
}) {
  return /* @__PURE__ */ a(U.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function ki({
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
        /* @__PURE__ */ a(Le, { className: "ml-auto size-4" })
      ]
    }
  );
}
function Ci({
  className: e,
  loading: t = !1,
  apiError: r,
  emptyText: n = "No Options",
  children: s,
  ...i
}) {
  const d = c.Children.toArray(s).some(
    (l) => c.isValidElement(l) && (l.type === Vt || l.type === Lt)
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
const an = c.forwardRef(
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
an.displayName = "Empty";
const rn = c.forwardRef(
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
rn.displayName = "EmptyHeader";
const $t = c.forwardRef(
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
$t.displayName = "EmptyMedia";
const nn = c.forwardRef(
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
nn.displayName = "EmptyTitle";
const on = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
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
on.displayName = "EmptyDescription";
const Ot = c.forwardRef(
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
Ot.displayName = "EmptyContent";
const sn = c.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ a(
    $t,
    {
      ref: r,
      "data-slot": "empty-icon",
      variant: "icon",
      className: e,
      ...t
    }
  )
);
sn.displayName = "EmptyIcon";
const dn = c.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ a(
    Ot,
    {
      ref: r,
      "data-slot": "empty-actions",
      className: e,
      ...t
    }
  )
);
dn.displayName = "EmptyActions";
const ln = c.forwardRef(
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
ln.displayName = "FieldSet";
const cn = c.forwardRef(
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
cn.displayName = "FieldLegend";
const un = c.forwardRef(
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
un.displayName = "FieldGroup";
const pn = c.forwardRef(
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
  }, g) => /* @__PURE__ */ a(
    "div",
    {
      ref: g,
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
pn.displayName = "Field";
const mn = c.forwardRef(
  ({ className: e, children: t, required: r, asChild: n = !1, ...s }, i) => {
    if (n) {
      const d = c.Children.toArray(t).find(
        c.isValidElement
      );
      if (!d) return null;
      const l = d.props.children, u = r ? c.cloneElement(
        d,
        void 0,
        /* @__PURE__ */ p(Je, { children: [
          l,
          /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
        ] })
      ) : d;
      return /* @__PURE__ */ a(
        Z,
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
mn.displayName = "FieldLabel";
const gn = c.forwardRef(
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
gn.displayName = "FieldContent";
const fn = c.forwardRef(
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
fn.displayName = "FieldTitle";
const Ft = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
  "p",
  {
    ref: n,
    "data-slot": "field-description",
    className: o("text-body-sm text-muted-foreground", e),
    ...r,
    children: t
  }
));
Ft.displayName = "FieldDescription";
const vn = c.forwardRef(
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
        children: Array.isArray(l) ? l.length === 1 ? /* @__PURE__ */ a("p", { children: l[0] }) : /* @__PURE__ */ a("ul", { className: "list-disc pl-5", children: l.map((u, g) => /* @__PURE__ */ a("li", { children: u }, `${u}-${g}`)) }) : l
      }
    ) : null;
  }
);
vn.displayName = "FieldError";
const xn = c.forwardRef(
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
xn.displayName = "FieldSeparator";
const bn = Ft;
bn.displayName = "FieldHelpText";
const hn = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "p",
  {
    ref: r,
    "data-slot": "field-error-text",
    role: "alert",
    className: o("text-body-sm text-destructive font-medium", e),
    ...t
  }
));
hn.displayName = "FieldErrorText";
const Si = pa, Bt = c.createContext(
  {}
), zi = ({
  ...e
}) => /* @__PURE__ */ a(Bt.Provider, { value: { name: e.name }, children: /* @__PURE__ */ a(fa, { ...e }) }), Oe = () => {
  const e = c.useContext(Bt), t = c.useContext(Gt), { getFieldState: r } = ma(), n = ga({ name: e.name }), s = r(e.name, n);
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
}, Gt = c.createContext(
  {}
);
function _i({ className: e, ...t }) {
  const r = c.useId();
  return /* @__PURE__ */ a(Gt.Provider, { value: { id: r }, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "form-item",
      className: o("grid gap-2", e),
      ...t
    }
  ) });
}
function Mi({
  className: e,
  ...t
}) {
  const { error: r, formItemId: n } = Oe();
  return /* @__PURE__ */ a(
    Q,
    {
      "data-slot": "form-label",
      "data-error": !!r,
      className: o("data-[error=true]:text-destructive", e),
      htmlFor: n,
      ...t
    }
  );
}
function Ii({ ...e }) {
  const { error: t, formItemId: r, formDescriptionId: n, formMessageId: s } = Oe();
  return /* @__PURE__ */ a(
    Z,
    {
      "data-slot": "form-control",
      id: r,
      "aria-describedby": t ? `${n} ${s}` : `${n}`,
      "aria-invalid": !!t,
      ...e
    }
  );
}
function Ri({ className: e, ...t }) {
  const { formDescriptionId: r } = Oe();
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
function Pi({ className: e, ...t }) {
  const { error: r, formMessageId: n } = Oe(), s = r ? String(r?.message ?? "") : t.children;
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
function Ti({
  ...e
}) {
  return /* @__PURE__ */ a(ke.Root, { "data-slot": "hover-card", ...e });
}
function Di({
  ...e
}) {
  return /* @__PURE__ */ a(ke.Trigger, { "data-slot": "hover-card-trigger", ...e });
}
function ji({
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
function Ai({
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
const yn = c.forwardRef(
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
yn.displayName = "InputGroup";
const wn = c.forwardRef(
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
wn.displayName = "InputLeftAddon";
const Nn = c.forwardRef(
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
Nn.displayName = "InputRightAddon";
const kn = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
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
kn.displayName = "InputLeftElement";
const Cn = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
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
Cn.displayName = "InputRightElement";
function Ei({
  className: e,
  containerClassName: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    va,
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
function Li({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "input-otp-group",
      className: o("flex items-center gap-1", e),
      ...t
    }
  );
}
function Vi({
  index: e,
  className: t,
  ...r
}) {
  const n = c.useContext(xa), { char: s, hasFakeCaret: i, isActive: d } = n?.slots[e] ?? {};
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": d,
      className: o(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm bg-input-background transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
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
function $i({ ...e }) {
  return /* @__PURE__ */ a("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ a(pt, {}) });
}
function Ht({
  className: e,
  orientation: t = "horizontal",
  decorative: r = !0,
  ...n
}) {
  return /* @__PURE__ */ a(
    xt.Root,
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
const Sn = P(
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
), zn = c.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...s }, i) => /* @__PURE__ */ a(
    n ? Z : "div",
    {
      ref: i,
      "data-slot": "item",
      "data-variant": t,
      "data-size": r,
      className: o(Sn({ variant: t, size: r, className: e })),
      ...s
    }
  )
);
zn.displayName = "Item";
function Oi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-group",
      className: o("flex flex-col rounded-md border bg-card p-1", e),
      ...t
    }
  );
}
function Fi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Ht,
    {
      "data-slot": "item-separator",
      className: o("mx-2 w-auto", e),
      ...t
    }
  );
}
const _n = P(
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
), Mn = c.forwardRef(
  ({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      "data-slot": "item-media",
      "data-variant": t,
      className: o(
        _n({ variant: t }),
        "group-data-[size=default]/item:size-10 group-data-[size=sm]/item:size-8",
        e
      ),
      ...r
    }
  )
);
Mn.displayName = "ItemMedia";
const In = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
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
In.displayName = "ItemContent";
const Rn = c.forwardRef(
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
Rn.displayName = "ItemTitle";
const Pn = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "p",
  {
    ref: r,
    "data-slot": "item-description",
    className: o("text-body-sm text-muted-foreground", e),
    ...t
  }
));
Pn.displayName = "ItemDescription";
const Tn = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
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
Tn.displayName = "ItemActions";
const Dn = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
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
Dn.displayName = "ItemHeader";
const jn = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
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
jn.displayName = "ItemFooter";
const An = c.forwardRef(
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
An.displayName = "Kbd";
const En = c.forwardRef(
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
En.displayName = "KbdGroup";
function Bi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    X.Root,
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
function Gi({
  ...e
}) {
  return /* @__PURE__ */ a(X.Menu, { "data-slot": "menubar-menu", ...e });
}
function Ln({
  ...e
}) {
  return /* @__PURE__ */ a(X.Group, { "data-slot": "menubar-group", ...e });
}
function Vn({
  ...e
}) {
  return /* @__PURE__ */ a(X.Portal, { "data-slot": "menubar-portal", ...e });
}
function Hi({
  ...e
}) {
  return /* @__PURE__ */ a(X.RadioGroup, { "data-slot": "menubar-radio-group", ...e });
}
function Ki({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    X.Trigger,
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
function Ui({
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
  const g = c.Children.toArray(l).some(
    (f) => c.isValidElement(f) && (f.type === $n || f.type === Ln)
  );
  return /* @__PURE__ */ a(Vn, { children: /* @__PURE__ */ a(
    X.Content,
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
      ) }) : g ? l : /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground gap-2", children: [
        /* @__PURE__ */ a(le, { className: "size-8 opacity-60" }),
        /* @__PURE__ */ a("span", { className: "text-xs", children: d })
      ] })
    }
  ) });
}
function $n({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    X.Item,
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
function Xi({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    X.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(X.ItemIndicator, { children: /* @__PURE__ */ a(fe, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function Yi({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(
    X.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(X.ItemIndicator, { children: /* @__PURE__ */ a(Ae, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function qi({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    X.Label,
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
function Wi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    X.Separator,
    {
      "data-slot": "menubar-separator",
      className: o("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Zi({ className: e, ...t }) {
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
function Ji({
  ...e
}) {
  return /* @__PURE__ */ a(X.Sub, { "data-slot": "menubar-sub", ...e });
}
function Qi({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    X.SubTrigger,
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
        /* @__PURE__ */ a(Le, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function ed({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    X.SubContent,
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
function td({
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
        r && /* @__PURE__ */ a(Fn, {})
      ]
    }
  );
}
function ad({
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
function rd({
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
const On = P(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function nd({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(
    se.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: o(On(), "group", e),
      ...r,
      children: [
        t,
        " ",
        /* @__PURE__ */ a(
          je,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function od({
  className: e,
  loading: t = !1,
  apiError: r,
  emptyText: n = "No Options",
  children: s,
  ...i
}) {
  const d = c.Children.toArray(s).some(
    (l) => c.isValidElement(l) && l.type === Bn
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
function Fn({
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
function Bn({
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
function sd({
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
function id({ className: e, ...t }) {
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
function dd({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "pagination-content",
      className: o("flex flex-row items-center gap-1", e),
      ...t
    }
  );
}
function ld({ ...e }) {
  return /* @__PURE__ */ a("li", { "data-slot": "pagination-item", ...e });
}
function Kt({
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
        J({
          variant: t ? "outline" : "ghost",
          size: r
        }),
        e
      ),
      ...n
    }
  );
}
function cd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    Kt,
    {
      "aria-label": "Go to previous page",
      size: "md",
      className: o("gap-1 px-2.5 sm:pl-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a(Qt, {}),
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function ud({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    Kt,
    {
      "aria-label": "Go to next page",
      size: "md",
      className: o("gap-1 px-2.5 sm:pr-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ a(Le, {})
      ]
    }
  );
}
function pd({
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
        /* @__PURE__ */ a(ea, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
function md({
  className: e,
  value: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    dt.Root,
    {
      "data-slot": "progress",
      className: o(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        e
      ),
      ...r,
      children: /* @__PURE__ */ a(
        dt.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function gd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    rt.PanelGroup,
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
function fd({
  ...e
}) {
  return /* @__PURE__ */ a(rt.Panel, { "data-slot": "resizable-panel", ...e });
}
function vd({
  withHandle: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    rt.PanelResizeHandle,
    {
      "data-slot": "resizable-handle",
      className: o(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        t
      ),
      ...r,
      children: e && /* @__PURE__ */ a("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ a(ta, { className: "size-2.5" }) })
    }
  );
}
const Gn = P(
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
), Hn = P(
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
), Kn = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
  re.Root,
  {
    ref: n,
    className: o("flex flex-col gap-4", e),
    ...r,
    children: t
  }
));
Kn.displayName = "SegmentControl";
const Un = c.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
  re.List,
  {
    ref: n,
    className: o(Gn({ variant: t }), e),
    ...r
  }
));
Un.displayName = "SegmentControlList";
const Xn = c.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
  re.Trigger,
  {
    ref: n,
    className: o(Hn({ variant: t }), e),
    ...r
  }
));
Xn.displayName = "SegmentControlItem";
const xd = re.Content;
function Yn({ ...e }) {
  return /* @__PURE__ */ a(B.Root, { "data-slot": "sheet", ...e });
}
function bd({
  ...e
}) {
  return /* @__PURE__ */ a(B.Trigger, { "data-slot": "sheet-trigger", ...e });
}
function hd({
  ...e
}) {
  return /* @__PURE__ */ a(B.Close, { "data-slot": "sheet-close", ...e });
}
function qn({
  ...e
}) {
  return /* @__PURE__ */ a(B.Portal, { "data-slot": "sheet-portal", ...e });
}
function Wn({
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
function Zn({
  className: e,
  children: t,
  side: r = "right",
  ...n
}) {
  return /* @__PURE__ */ p(qn, { children: [
    /* @__PURE__ */ a(Wn, {}),
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
            /* @__PURE__ */ a(gt, { className: "size-4" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function Jn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-header",
      className: o("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function yd({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-footer",
      className: o("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function Qn({
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
function eo({
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
const He = 768;
function to() {
  const [e, t] = c.useState(void 0);
  return c.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${He - 1}px)`), n = () => {
      t(window.innerWidth < He);
    };
    return r.addEventListener("change", n), t(window.innerWidth < He), () => r.removeEventListener("change", n);
  }, []), !!e;
}
function ut({ className: e, ...t }) {
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
const ao = "sidebar_state", ro = 3600 * 24 * 7, no = "16rem", oo = "18rem", so = "3rem", io = "b", Ut = c.createContext(null);
function Fe() {
  const e = c.useContext(Ut);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function wd({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: r,
  className: n,
  style: s,
  children: i,
  ...d
}) {
  const l = to(), [u, g] = c.useState(!1), [f, x] = c.useState(e), m = t ?? f, v = c.useCallback(
    (k) => {
      const _ = typeof k == "function" ? k(m) : k;
      r ? r(_) : x(_), document.cookie = `${ao}=${_}; path=/; max-age=${ro}`;
    },
    [r, m]
  ), h = c.useCallback(() => l ? g((k) => !k) : v((k) => !k), [l, v, g]);
  c.useEffect(() => {
    const k = (_) => {
      _.key === io && (_.metaKey || _.ctrlKey) && (_.preventDefault(), h());
    };
    return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [h]);
  const w = m ? "expanded" : "collapsed", b = c.useMemo(
    () => ({
      state: w,
      open: m,
      setOpen: v,
      isMobile: l,
      openMobile: u,
      setOpenMobile: g,
      toggleSidebar: h
    }),
    [w, m, v, l, u, g, h]
  );
  return /* @__PURE__ */ a(Ut.Provider, { value: b, children: /* @__PURE__ */ a(ot, { delayDuration: 0, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": no,
        "--sidebar-width-icon": so,
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
  display: g
}) {
  const f = O(e), x = t !== void 0 ? O(t) : void 0, m = r !== void 0 ? O(r) : void 0, v = x !== void 0 && x !== "none" ? `px-[var(--spacing-${x})]` : "", h = m !== void 0 && m !== "none" ? `py-[var(--spacing-${m})]` : "", w = f !== void 0 && f !== "none" && x === void 0 && m === void 0 ? `p-[var(--spacing-${f})]` : "", b = n !== void 0 ? O(n) : void 0, k = s !== void 0 ? O(s) : void 0, _ = i !== void 0 ? O(i) : void 0, I = k !== void 0 && k !== "none" ? `mx-[var(--spacing-${k})]` : "", R = _ !== void 0 && _ !== "none" ? `my-[var(--spacing-${_})]` : "", D = b !== void 0 && b !== "none" && k === void 0 && _ === void 0 ? `m-[var(--spacing-${b})]` : "", E = d ? {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    inner: "shadow-inner",
    outline: "shadow-outline",
    default: "shadow"
  }[d] : "", T = {
    auto: "w-auto",
    full: "w-full",
    fit: "w-fit",
    screen: "w-screen"
  }, $ = {
    auto: "h-auto",
    full: "h-full",
    fit: "h-fit",
    screen: "h-screen"
  }, N = l ? T[l] : "", M = u ? $[u] : "";
  return [
    w,
    v,
    h,
    D,
    I,
    R,
    E,
    N,
    M,
    g || ""
  ].filter(Boolean).join(" ");
}
function Nd({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: r = "offcanvas",
  className: n,
  children: s,
  p: i,
  px: d,
  py: l,
  m: u,
  mx: g,
  my: f,
  shadow: x,
  w: m,
  h: v,
  display: h,
  ...w
}) {
  const { isMobile: b, state: k, openMobile: _, setOpenMobile: I } = Fe(), R = ue({
    p: i,
    px: d,
    py: l,
    m: u,
    mx: g,
    my: f,
    shadow: x,
    w: m,
    h: v,
    display: h
  });
  return r === "none" ? /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar",
      className: o(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        R,
        n
      ),
      ...w,
      children: s
    }
  ) : b ? /* @__PURE__ */ a(Yn, { open: _, onOpenChange: I, ...w, children: /* @__PURE__ */ p(
    Zn,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: o(
        "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
        R,
        n
      ),
      style: {
        "--sidebar-width": oo
      },
      side: e,
      children: [
        /* @__PURE__ */ p(Jn, { className: "sr-only", children: [
          /* @__PURE__ */ a(Qn, { children: "Sidebar" }),
          /* @__PURE__ */ a(eo, { children: "Displays the mobile sidebar." })
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
              R,
              n
            ),
            ...w,
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
function kd({
  className: e,
  p: t,
  px: r,
  py: n,
  m: s,
  mx: i,
  my: d,
  shadow: l,
  w: u,
  h: g,
  display: f,
  onClick: x,
  ...m
}) {
  const { toggleSidebar: v } = Fe(), h = ue({
    p: t,
    px: r,
    py: n,
    m: s,
    mx: i,
    my: d,
    shadow: l,
    w: u,
    h: g,
    display: f
  });
  return /* @__PURE__ */ p(
    Ve,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: o("size-7 cursor-pointer", h, e),
      onClick: (w) => {
        x?.(w), v();
      },
      ...m,
      children: [
        /* @__PURE__ */ a(aa, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function Cd({
  className: e,
  p: t,
  px: r,
  py: n,
  m: s,
  mx: i,
  my: d,
  shadow: l,
  w: u,
  h: g,
  display: f,
  ...x
}) {
  const { toggleSidebar: m } = Fe(), v = ue({
    p: t,
    px: r,
    py: n,
    m: s,
    mx: i,
    my: d,
    shadow: l,
    w: u,
    h: g,
    display: f
  });
  return /* @__PURE__ */ a(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: m,
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
      ...x
    }
  );
}
function Sd({
  className: e,
  p: t,
  px: r,
  py: n,
  m: s,
  mx: i,
  my: d,
  shadow: l,
  w: u,
  h: g,
  display: f,
  ...x
}) {
  const m = ue({
    p: t,
    px: r,
    py: n,
    m: s,
    mx: i,
    my: d,
    shadow: l,
    w: u,
    h: g,
    display: f
  });
  return /* @__PURE__ */ a(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: o(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        m,
        e
      ),
      ...x
    }
  );
}
function zd({
  className: e,
  p: t,
  px: r,
  py: n,
  m: s,
  mx: i,
  my: d,
  shadow: l,
  w: u,
  h: g,
  display: f,
  ...x
}) {
  const m = ue({
    p: t,
    px: r,
    py: n,
    m: s,
    mx: i,
    my: d,
    shadow: l,
    w: u,
    h: g,
    display: f
  });
  return /* @__PURE__ */ a(
    de,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: o(
        "bg-background h-8 w-full shadow-none",
        m,
        e
      ),
      ...x
    }
  );
}
function _d({
  className: e,
  p: t,
  px: r,
  py: n,
  m: s,
  mx: i,
  my: d,
  shadow: l,
  w: u,
  h: g,
  display: f,
  ...x
}) {
  const m = ue({
    p: t,
    px: r,
    py: n,
    m: s,
    mx: i,
    my: d,
    shadow: l,
    w: u,
    h: g,
    display: f
  });
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: o("flex flex-col gap-2 p-2", m, e),
      ...x
    }
  );
}
function Md({
  className: e,
  p: t,
  px: r,
  py: n,
  m: s,
  mx: i,
  my: d,
  shadow: l,
  w: u,
  h: g,
  display: f,
  ...x
}) {
  const m = ue({
    p: t,
    px: r,
    py: n,
    m: s,
    mx: i,
    my: d,
    shadow: l,
    w: u,
    h: g,
    display: f
  });
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: o("flex flex-col gap-2 p-2", m, e),
      ...x
    }
  );
}
function Id({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Ht,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: o("bg-sidebar-border mx-2 w-auto", e),
      ...t
    }
  );
}
function Rd({ className: e, ...t }) {
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
function Pd({ className: e, ...t }) {
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
function Td({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? Z : "div",
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
function Dd({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? Z : "button",
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
function jd({
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
function Ad({ className: e, ...t }) {
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
function Ed({ className: e, ...t }) {
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
const lo = P(
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
function Ld({
  asChild: e = !1,
  isActive: t = !1,
  variant: r = "default",
  size: n = "default",
  tooltip: s,
  className: i,
  ...d
}) {
  const l = e ? Z : "button", { isMobile: u, state: g } = Fe(), f = /* @__PURE__ */ a(
    l,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": n,
      "data-active": t,
      className: o(lo({ variant: r, size: n }), i),
      ...d
    }
  );
  return s ? (typeof s == "string" && (s = {
    children: s
  }), /* @__PURE__ */ p(yt, { children: [
    /* @__PURE__ */ a(wt, { asChild: !0, children: f }),
    /* @__PURE__ */ a(
      Nt,
      {
        side: "right",
        align: "center",
        hidden: g !== "collapsed" || u,
        ...s
      }
    )
  ] })) : f;
}
function Vd({
  className: e,
  asChild: t = !1,
  showOnHover: r = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    t ? Z : "button",
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
function $d({ className: e, ...t }) {
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
function Od({
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
          ut,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ a(
          ut,
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
function Fd({ className: e, ...t }) {
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
function Bd({ className: e, ...t }) {
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
function Gd({
  asChild: e = !1,
  size: t = "md",
  isActive: r = !1,
  className: n,
  ...s
}) {
  return /* @__PURE__ */ a(
    e ? Z : "a",
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
function Hd({
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
    _e.Root,
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
          _e.Track,
          {
            "data-slot": "slider-track",
            className: o(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-4 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ a(
              _e.Range,
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
          _e.Thumb,
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
const Kd = ({ ...e }) => {
  const { theme: t = "system" } = ba();
  return /* @__PURE__ */ a(
    ha,
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
function Ud({
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
function Xd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    lt.Root,
    {
      "data-slot": "switch",
      className: o(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-switch-background focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        lt.Thumb,
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
function Yd({ className: e, ...t }) {
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
function qd({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "thead",
    {
      "data-slot": "table-header",
      className: o("[&_tr]:border-b", e),
      ...t
    }
  );
}
function Wd({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "table-body",
      className: o("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function Zd({ className: e, ...t }) {
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
function Jd({ className: e, ...t }) {
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
function Qd({ className: e, ...t }) {
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
function el({ className: e, ...t }) {
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
function tl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "caption",
    {
      "data-slot": "table-caption",
      className: o("text-muted-foreground mt-4 text-sm", e),
      ...t
    }
  );
}
function al({
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
const co = P(
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
), uo = c.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
  re.List,
  {
    ref: n,
    "data-slot": "tabs-list",
    className: o(co({ variant: t }), e),
    ...r
  }
));
uo.displayName = re.List.displayName;
const po = P(
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
), mo = c.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
  re.Trigger,
  {
    ref: n,
    "data-slot": "tabs-trigger",
    className: o(po({ variant: t }), e),
    ...r
  }
));
mo.displayName = re.Trigger.displayName;
function rl({
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
const Xt = P(
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
function nl({
  className: e,
  variant: t,
  size: r,
  ...n
}) {
  return /* @__PURE__ */ a(
    ya.Root,
    {
      "data-slot": "toggle",
      className: o(Xt({ variant: t, size: r, className: e })),
      ...n
    }
  );
}
const Yt = c.createContext({
  size: "default",
  variant: "default"
});
function ol({
  className: e,
  variant: t,
  size: r,
  children: n,
  ...s
}) {
  return /* @__PURE__ */ a(
    bt.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": t,
      "data-size": r,
      className: o(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        e
      ),
      ...s,
      children: /* @__PURE__ */ a(Yt.Provider, { value: { variant: t, size: r }, children: n })
    }
  );
}
function sl({
  className: e,
  children: t,
  variant: r,
  size: n = "md",
  ...s
}) {
  const i = c.useContext(Yt);
  return /* @__PURE__ */ a(
    bt.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": i.variant || r,
      "data-size": i.size || n,
      className: o(
        Xt({
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
function il() {
  ft(() => {
    if (typeof window < "u") {
      const e = localStorage.getItem("theme"), t = document.documentElement;
      e === "dark" ? t.classList.add("dark") : t.classList.remove("dark");
    }
  }, []);
}
function dl({
  LightIcon: e = na,
  DarkIcon: t = ra,
  srText: r,
  iconSize: n = 20,
  className: s = "",
  iconClassName: i = ""
}) {
  const [d, l] = oa(() => {
    if (typeof window < "u") {
      const u = localStorage.getItem("theme");
      if (u === "dark") return !0;
      if (u === "light") return !1;
    }
    return !1;
  });
  return ft(() => {
    const u = document.documentElement;
    d ? (u.classList.add("dark"), localStorage.setItem("theme", "dark")) : (u.classList.remove("dark"), localStorage.setItem("theme", "light"));
  }, [d]), /* @__PURE__ */ p(
    Ve,
    {
      variant: "outline",
      size: "icon",
      onClick: () => l(!d),
      className: `rounded-full ${s}`,
      children: [
        d ? /* @__PURE__ */ a(t, { size: n, className: i }) : /* @__PURE__ */ a(e, { size: n, className: i }),
        r ? /* @__PURE__ */ a("span", { className: "sr-only", children: r }) : null
      ]
    }
  );
}
const ll = {
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
}, cl = {
  none: "0px",
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  full: "9999px"
}, ul = {
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
}, pl = {
  xs: ["12px", "16px"],
  sm: ["14px", "20px"],
  base: ["16px", "24px"],
  lg: ["18px", "28px"],
  xl: ["20px", "28px"],
  "2xl": ["24px", "32px"],
  "3xl": ["30px", "36px"],
  "4xl": ["36px", "40px"]
}, ml = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, gl = {
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
}, fl = {
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
  Lo as Accordion,
  Oo as AccordionContent,
  Vo as AccordionItem,
  $o as AccordionTrigger,
  Fo as Alert,
  Go as AlertDescription,
  Ho as AlertDialog,
  Zo as AlertDialogAction,
  Jo as AlertDialogCancel,
  Uo as AlertDialogContent,
  Wo as AlertDialogDescription,
  Yo as AlertDialogFooter,
  Xo as AlertDialogHeader,
  Lr as AlertDialogOverlay,
  Er as AlertDialogPortal,
  qo as AlertDialogTitle,
  Ko as AlertDialogTrigger,
  Bo as AlertTitle,
  Qo as AspectRatio,
  es as Avatar,
  as as AvatarFallback,
  ts as AvatarImage,
  rs as Badge,
  Za as Bleed,
  kt as Box,
  ns as Breadcrumb,
  cs as BreadcrumbEllipsis,
  ss as BreadcrumbItem,
  is as BreadcrumbLink,
  os as BreadcrumbList,
  ds as BreadcrumbPage,
  ls as BreadcrumbSeparator,
  Ve as Button,
  $r as ButtonGroup,
  us as ButtonGroupSeparator,
  ps as ButtonGroupText,
  Ge as Calendar,
  ms as Card,
  xs as CardAction,
  bs as CardContent,
  vs as CardDescription,
  hs as CardFooter,
  gs as CardHeader,
  fs as CardTitle,
  ys as Carousel,
  ws as CarouselContent,
  Ns as CarouselItem,
  Cs as CarouselNext,
  ks as CarouselPrevious,
  Ga as Center,
  Ss as ChartContainer,
  Ms as ChartLegend,
  Is as ChartLegendContent,
  Br as ChartStyle,
  zs as ChartTooltip,
  _s as ChartTooltipContent,
  nt as Checkbox,
  Po as Chip,
  Rs as Collapsible,
  Ts as CollapsibleContent,
  Ps as CollapsibleTrigger,
  Zr as Command,
  Es as CommandDialog,
  $s as CommandEmpty,
  Os as CommandGroup,
  Ls as CommandInput,
  Bs as CommandItem,
  Vs as CommandList,
  Fs as CommandSeparator,
  Gs as CommandShortcut,
  $a as Container,
  Hs as ContextMenu,
  Js as ContextMenuCheckboxItem,
  Zs as ContextMenuContent,
  Jr as ContextMenuGroup,
  Qr as ContextMenuItem,
  ei as ContextMenuLabel,
  Us as ContextMenuPortal,
  Ys as ContextMenuRadioGroup,
  Qs as ContextMenuRadioItem,
  ti as ContextMenuSeparator,
  ai as ContextMenuShortcut,
  Xs as ContextMenuSub,
  Ws as ContextMenuSubContent,
  qs as ContextMenuSubTrigger,
  Ks as ContextMenuTrigger,
  jr as CountBadge,
  Dt as DateTimePicker,
  Hr as Dialog,
  js as DialogClose,
  Xr as DialogContent,
  Wr as DialogDescription,
  As as DialogFooter,
  Yr as DialogHeader,
  Ur as DialogOverlay,
  Kr as DialogPortal,
  qr as DialogTitle,
  Ds as DialogTrigger,
  Xa as Divider,
  ri as Drawer,
  si as DrawerBody,
  oi as DrawerClose,
  ii as DrawerContent,
  ui as DrawerDescription,
  li as DrawerFooter,
  di as DrawerHeader,
  tn as DrawerOverlay,
  en as DrawerPortal,
  ci as DrawerTitle,
  ni as DrawerTrigger,
  pi as DropdownMenu,
  vi as DropdownMenuCheckboxItem,
  fi as DropdownMenuContent,
  Lt as DropdownMenuGroup,
  Vt as DropdownMenuItem,
  hi as DropdownMenuLabel,
  mi as DropdownMenuPortal,
  xi as DropdownMenuRadioGroup,
  bi as DropdownMenuRadioItem,
  yi as DropdownMenuSeparator,
  wi as DropdownMenuShortcut,
  Ni as DropdownMenuSub,
  Ci as DropdownMenuSubContent,
  ki as DropdownMenuSubTrigger,
  gi as DropdownMenuTrigger,
  an as Empty,
  dn as EmptyActions,
  Ot as EmptyContent,
  on as EmptyDescription,
  rn as EmptyHeader,
  sn as EmptyIcon,
  $t as EmptyMedia,
  nn as EmptyTitle,
  pn as Field,
  gn as FieldContent,
  Ft as FieldDescription,
  vn as FieldError,
  hn as FieldErrorText,
  un as FieldGroup,
  bn as FieldHelpText,
  mn as FieldLabel,
  cn as FieldLegend,
  xn as FieldSeparator,
  ln as FieldSet,
  fn as FieldTitle,
  Si as Form,
  _r as FormCalendar,
  Mr as FormCheckbox,
  Ii as FormControl,
  Tr as FormDateTimePicker,
  Ri as FormDescription,
  zi as FormField,
  Cr as FormInput,
  _i as FormItem,
  Mi as FormLabel,
  Pi as FormMessage,
  Ja as FormMultiselect,
  Rr as FormPhoneInput,
  Ir as FormRadioGroup,
  zr as FormSelect,
  Sr as FormTextarea,
  Pr as FormTimePicker,
  Aa as Grid,
  La as GridItem,
  it as HStack,
  Ti as HoverCard,
  Ai as HoverCardArrow,
  ji as HoverCardContent,
  Di as HoverCardTrigger,
  To as Icon,
  Pa as Inline,
  de as Input,
  yn as InputGroup,
  wn as InputLeftAddon,
  kn as InputLeftElement,
  Ei as InputOTP,
  Li as InputOTPGroup,
  $i as InputOTPSeparator,
  Vi as InputOTPSlot,
  Nn as InputRightAddon,
  Cn as InputRightElement,
  zn as Item,
  Tn as ItemActions,
  In as ItemContent,
  Pn as ItemDescription,
  jn as ItemFooter,
  Oi as ItemGroup,
  Dn as ItemHeader,
  Mn as ItemMedia,
  Fi as ItemSeparator,
  Rn as ItemTitle,
  An as Kbd,
  En as KbdGroup,
  Q as Label,
  Ka as LayoutAspectRatio,
  Bi as Menubar,
  Xi as MenubarCheckboxItem,
  Ui as MenubarContent,
  Ln as MenubarGroup,
  $n as MenubarItem,
  qi as MenubarLabel,
  Gi as MenubarMenu,
  Vn as MenubarPortal,
  Hi as MenubarRadioGroup,
  Yi as MenubarRadioItem,
  Wi as MenubarSeparator,
  Zi as MenubarShortcut,
  Ji as MenubarSub,
  ed as MenubarSubContent,
  Qi as MenubarSubTrigger,
  Ki as MenubarTrigger,
  Sa as Multiselect,
  td as NavigationMenu,
  od as NavigationMenuContent,
  sd as NavigationMenuIndicator,
  rd as NavigationMenuItem,
  Bn as NavigationMenuLink,
  ad as NavigationMenuList,
  nd as NavigationMenuTrigger,
  Fn as NavigationMenuViewport,
  id as Pagination,
  dd as PaginationContent,
  pd as PaginationEllipsis,
  ld as PaginationItem,
  Kt as PaginationLink,
  ud as PaginationNext,
  cd as PaginationPrevious,
  Mt as PhoneInput,
  ve as Popover,
  Do as PopoverAnchor,
  be as PopoverContent,
  xe as PopoverTrigger,
  md as Progress,
  cr as RadioGroup,
  ur as RadioGroupItem,
  vd as ResizableHandle,
  fd as ResizablePanel,
  gd as ResizablePanelGroup,
  pr as ScrollArea,
  mr as ScrollBar,
  Fa as Section,
  Kn as SegmentControl,
  xd as SegmentControlContent,
  Xn as SegmentControlItem,
  Un as SegmentControlList,
  or as Select,
  St as SelectContent,
  jo as SelectGroup,
  zt as SelectItem,
  Ao as SelectLabel,
  lr as SelectScrollDownButton,
  dr as SelectScrollUpButton,
  Eo as SelectSeparator,
  ir as SelectTrigger,
  sr as SelectValue,
  Ht as Separator,
  Yn as Sheet,
  hd as SheetClose,
  Zn as SheetContent,
  eo as SheetDescription,
  yd as SheetFooter,
  Jn as SheetHeader,
  Qn as SheetTitle,
  bd as SheetTrigger,
  Nd as Sidebar,
  Rd as SidebarContent,
  Md as SidebarFooter,
  Pd as SidebarGroup,
  Dd as SidebarGroupAction,
  jd as SidebarGroupContent,
  Td as SidebarGroupLabel,
  _d as SidebarHeader,
  zd as SidebarInput,
  Sd as SidebarInset,
  Ad as SidebarMenu,
  Vd as SidebarMenuAction,
  $d as SidebarMenuBadge,
  Ld as SidebarMenuButton,
  Ed as SidebarMenuItem,
  Od as SidebarMenuSkeleton,
  Fd as SidebarMenuSub,
  Gd as SidebarMenuSubButton,
  Bd as SidebarMenuSubItem,
  wd as SidebarProvider,
  Cd as SidebarRail,
  Id as SidebarSeparator,
  kd as SidebarTrigger,
  ut as Skeleton,
  Hd as Slider,
  Da as Spacer,
  ie as Spinner,
  ka as SpinnerContainer,
  Ca as SpinnerOverlay,
  st as Stack,
  Xd as Switch,
  Yd as Table,
  Wd as TableBody,
  tl as TableCaption,
  el as TableCell,
  Zd as TableFooter,
  Qd as TableHead,
  qd as TableHeader,
  Jd as TableRow,
  al as Tabs,
  rl as TabsContent,
  uo as TabsList,
  mo as TabsTrigger,
  Ct as Textarea,
  dl as ThemeToggle,
  It as TimePicker,
  Kd as Toaster,
  nl as Toggle,
  ol as ToggleGroup,
  sl as ToggleGroupItem,
  yt as Tooltip,
  Nt as TooltipContent,
  ot as TooltipProvider,
  wt as TooltipTrigger,
  F as Typography,
  ee as VStack,
  qa as Wrap,
  Ar as alertVariants,
  Vr as badgeVariants,
  gl as baseColors,
  J as buttonVariants,
  wa as checkboxVariants,
  o as cn,
  Dr as countBadgeVariants,
  bl as cva,
  Rt as dateTimePickerVariants,
  ul as fontFamily,
  pl as fontSize,
  ml as fontWeight,
  er as inputVariants,
  yl as isValidPhoneNumber,
  _n as itemMediaVariants,
  Sn as itemVariants,
  On as navigationMenuTriggerStyle,
  gr as phoneInputVariants,
  cl as radius,
  Gn as segmentControlVariants,
  Hn as segmentItemVariants,
  fl as semanticColors,
  Ud as showToast,
  lo as sidebarMenuButtonVariants,
  ll as spacing,
  Na as spinnerVariants,
  co as tabsListVariants,
  po as tabsTriggerVariants,
  nr as textareaVariants,
  xr as timePickerVariants,
  Xt as toggleVariants,
  za as typographyVariants,
  il as useApplyTheme,
  Oe as useFormField,
  to as useIsMobile,
  Fe as useSidebar
};
