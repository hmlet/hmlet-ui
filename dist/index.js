import { jsxs as p, jsx as a, Fragment as Ve } from "react/jsx-runtime";
import { MinusIcon as Pt, CheckIcon as Ne, Loader2 as jt, SearchIcon as Be, PackageOpen as fe, ChevronDownIcon as Ye, ChevronUpIcon as ha, ChevronRight as ge, ChevronLeft as ke, CircleIcon as Ge, ChevronDown as Ue, Clock as Ae, X as He, CalendarIcon as Le, Upload as ba, FileText as xa, Film as ya, ImageIcon as wa, Play as Na, MoreHorizontal as ka, ArrowLeft as Ca, ArrowRight as Sa, XIcon as Et, ChevronRightIcon as Ke, ChevronLeftIcon as za, MoreHorizontalIcon as Ma, GripVerticalIcon as Ia, PanelLeftIcon as Ra, Sun as _a, Moon as Ta } from "lucide-react";
import * as c from "react";
import Q, { useState as Ct, useEffect as Ee, useCallback as Da, useMemo as Pa, createContext as ja, useContext as Ea } from "react";
import { Slot as te } from "@radix-ui/react-slot";
import { clsx as Aa } from "clsx";
import { twMerge as La } from "tailwind-merge";
import { cva as O } from "class-variance-authority";
import { cva as sc } from "class-variance-authority";
import * as rt from "@radix-ui/react-checkbox";
import * as we from "@radix-ui/react-tooltip";
import * as Oa from "@radix-ui/react-label";
import { DayPicker as Te } from "react-day-picker";
import * as Ie from "@radix-ui/react-popover";
import * as Z from "@radix-ui/react-select";
import * as nt from "@radix-ui/react-radio-group";
import $a from "react-phone-number-input";
import { isValidPhoneNumber as dc } from "react-phone-number-input";
import At from "react-phone-number-input/flags";
import * as Me from "@radix-ui/react-scroll-area";
import { OTPInput as Fa, OTPInputContext as Va } from "input-otp";
import * as Re from "@radix-ui/react-accordion";
import * as le from "@radix-ui/react-alert-dialog";
import * as Ba from "@radix-ui/react-aspect-ratio";
import * as mt from "@radix-ui/react-avatar";
import * as Lt from "@radix-ui/react-separator";
import Ya from "embla-carousel-react";
import * as ft from "recharts";
import * as gt from "@radix-ui/react-collapsible";
import { Command as ve } from "cmdk";
import * as H from "@radix-ui/react-dialog";
import * as q from "@radix-ui/react-context-menu";
import { Drawer as ue } from "vaul";
import * as W from "@radix-ui/react-dropdown-menu";
import { FormProvider as Ga, useFormContext as Ua, useFormState as Ha, Controller as Ka } from "react-hook-form";
import * as _e from "@radix-ui/react-hover-card";
import * as J from "@radix-ui/react-menubar";
import * as pe from "@radix-ui/react-navigation-menu";
import * as St from "@radix-ui/react-progress";
import * as vt from "react-resizable-panels";
import * as de from "@radix-ui/react-tabs";
import * as De from "@radix-ui/react-slider";
import { useTheme as Xa } from "next-themes";
import { Toaster as qa, toast as xe } from "sonner";
import * as zt from "@radix-ui/react-switch";
import * as Wa from "@radix-ui/react-toggle";
import * as Ot from "@radix-ui/react-toggle-group";
function o(...e) {
  return La(Aa(e));
}
function $t(e, t) {
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
const Ja = O(
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
), ht = c.forwardRef(({ className: e, variant: t, size: r, label: n, checked: s, ...i }, d) => {
  let l = "ml-2 align-middle select-none";
  r === "sm" ? l += " text-xs" : r === "lg" ? l += " text-base" : l += " text-sm";
  const u = o(
    r === "sm" ? "size-3" : r === "lg" ? "size-4" : "size-3.5"
  );
  return /* @__PURE__ */ p("label", { className: "inline-flex items-center cursor-pointer", children: [
    /* @__PURE__ */ a(
      rt.Root,
      {
        ref: d,
        "data-slot": "checkbox",
        className: o(Ja({ variant: t, size: r }), e),
        checked: s,
        ...i,
        children: /* @__PURE__ */ a(
          rt.Indicator,
          {
            "data-slot": "checkbox-indicator",
            className: "flex items-center justify-center text-current transition-none",
            children: s === "indeterminate" ? /* @__PURE__ */ a(Pt, { className: u }) : /* @__PURE__ */ a(Ne, { className: u })
          }
        )
      }
    ),
    n && /* @__PURE__ */ a("span", { className: l, children: n })
  ] });
});
ht.displayName = rt.Root.displayName;
const Za = O("inline-block shrink-0 animate-spin", {
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
}), me = c.forwardRef(
  ({ className: e, variant: t, size: r, label: n = "Loading...", ...s }, i) => /* @__PURE__ */ a(
    jt,
    {
      ref: i,
      role: "status",
      "data-slot": "spinner",
      "aria-label": n,
      className: o(Za({ variant: t, size: r }), e),
      ...s
    }
  )
);
me.displayName = "Spinner";
const Qa = c.forwardRef(({ className: e, children: t, text: r, ...n }, s) => /* @__PURE__ */ p(
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
Qa.displayName = "SpinnerContainer";
const er = c.forwardRef(
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
er.displayName = "SpinnerOverlay";
function bt({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ a(
    we.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function Ft({
  ...e
}) {
  return /* @__PURE__ */ a(bt, { children: /* @__PURE__ */ a(we.Root, { "data-slot": "tooltip", ...e }) });
}
function Vt({
  ...e
}) {
  return /* @__PURE__ */ a(we.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function Bt({
  className: e,
  sideOffset: t = 0,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ a(we.Portal, { children: /* @__PURE__ */ p(
    we.Content,
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
        /* @__PURE__ */ a(we.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
function tr({
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
  searchPlaceholder: w = "Search..."
}) {
  const h = t !== void 0, [k, g] = c.useState(
    r || []
  ), C = h ? t : k, [T, _] = c.useState(!1), [D, L] = c.useState(""), j = $t(D, 300), F = c.useRef(null), S = c.useRef(null);
  c.useEffect(() => {
    y && j !== void 0 && y(j);
  }, [j, y]);
  const R = c.useMemo(() => {
    if (!b || y || !D)
      return e;
    const N = D.toLowerCase();
    return e.filter((I) => (typeof I.label == "string" ? I.label : String(I.value)).toLowerCase().includes(N));
  }, [e, D, b, y]);
  c.useEffect(() => {
    T && b && F.current && F.current.focus(), T || L("");
  }, [T, b]), c.useEffect(() => {
    if (!T) return;
    function N(I) {
      S.current && !S.current.contains(I.target) && _(!1);
    }
    return document.addEventListener("mousedown", N), () => document.removeEventListener("mousedown", N);
  }, [T]);
  function A(N) {
    const z = C.includes(N) ? C.filter((E) => E !== N) : [...C, N];
    h || g(z), n?.(z);
  }
  function V() {
    i || _((N) => !N);
  }
  function M(N) {
    N.currentTarget.contains(N.relatedTarget) || _(!1);
  }
  return /* @__PURE__ */ p(
    "div",
    {
      className: o("relative", d),
      ref: S,
      tabIndex: -1,
      onBlur: M,
      children: [
        /* @__PURE__ */ a(bt, { children: /* @__PURE__ */ p(Ft, { children: [
          /* @__PURE__ */ a(Vt, { asChild: !0, children: /* @__PURE__ */ p(
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
              onClick: V,
              children: [
                /* @__PURE__ */ a(
                  "span",
                  {
                    className: "truncate block max-w-full",
                    style: { textOverflow: "ellipsis", overflow: "hidden" },
                    children: C.length === 0 ? /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: s }) : e.filter((z) => C.includes(z.value)).map(
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
          C.length > 0 && /* @__PURE__ */ a(
            Bt,
            {
              sideOffset: 4,
              style: {
                maxWidth: "400px",
                whiteSpace: "normal",
                wordBreak: "break-word"
              },
              children: e.filter((N) => C.includes(N.value)).map(
                (N) => typeof N.label == "string" ? N.label : String(N.value)
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
                /* @__PURE__ */ a(Be, { className: "absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
                /* @__PURE__ */ a(
                  "input",
                  {
                    ref: F,
                    type: "text",
                    className: o(
                      "w-full rounded-md border border-input bg-transparent pl-8 pr-2 outline-none focus:ring-2 focus:ring-ring/50",
                      v === "sm" && "py-1 text-xs",
                      v === "md" && "py-1.5 text-sm",
                      v === "lg" && "py-2 text-base"
                    ),
                    placeholder: w,
                    value: D,
                    onChange: (N) => L(N.target.value),
                    onClick: (N) => N.stopPropagation()
                  }
                )
              ] }) }),
              /* @__PURE__ */ a("div", { className: "overflow-auto flex-1", children: m ? /* @__PURE__ */ a("div", { className: "flex items-center justify-center py-6", children: /* @__PURE__ */ a(me, { size: "md" }) }) : f?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 px-4 gap-2", children: /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  className: "text-destructive underline text-sm px-2 py-1 rounded hover:bg-destructive/10 transition-colors",
                  onClick: f.onClick,
                  children: f.text || "Error loading options. Click to retry."
                }
              ) }) : R.length === 0 ? /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center py-6 px-4 gap-2 text-muted-foreground", children: [
                /* @__PURE__ */ a(fe, { className: "size-8 mb-2" }),
                /* @__PURE__ */ a("span", { children: D ? "No matches found" : x })
              ] }) : R.map((N) => {
                const I = C.includes(N.value);
                return /* @__PURE__ */ p(
                  "div",
                  {
                    className: o(
                      "flex items-center gap-2 cursor-pointer select-none hover:bg-accent hover:text-accent-foreground",
                      v === "sm" && "px-2 py-1.5 text-xs",
                      v === "md" && "px-3 py-2 text-sm",
                      v === "lg" && "px-4 py-2.5 text-base",
                      I && "bg-accent text-accent-foreground",
                      N.disabled && "opacity-50 pointer-events-none"
                    ),
                    onClick: () => !N.disabled && A(N.value),
                    "aria-selected": I,
                    role: "option",
                    tabIndex: -1,
                    children: [
                      l === "checkbox" ? /* @__PURE__ */ a(
                        ht,
                        {
                          checked: I,
                          tabIndex: -1,
                          className: "size-4 mr-2 pointer-events-none",
                          "aria-hidden": !0
                        }
                      ) : I && /* @__PURE__ */ a(Ne, { className: "size-4 mr-2" }),
                      u ? u(N, I) : N.label
                    ]
                  },
                  N.value
                );
              }) })
            ]
          }
        )
      ]
    }
  );
}
const ar = O("", {
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
}), rr = {
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
function Y({
  className: e,
  variant: t,
  as: r,
  asChild: n = !1,
  ...s
}) {
  const i = n ? te : r ?? rr[t ?? "body-base"];
  return /* @__PURE__ */ a(
    i,
    {
      "data-slot": "typography",
      className: o(ar({ variant: t }), e),
      ...s
    }
  );
}
function ae({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Oa.Root,
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
const nr = O("", {
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
}), Yt = Q.forwardRef(
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
        nr({
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
Yt.displayName = "Box";
function U(e) {
  return e == null ? e : typeof e == "string" && /^\d+$/.test(e) ? Number(e) : e;
}
const or = O("flex", {
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
}), xt = Q.forwardRef(
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
    shadow: w,
    display: h,
    children: k,
    ...g
  }, C) => {
    const T = [0, 1, 2, 3, 4, 6, 8, 12, 16, 20];
    let _;
    if (n !== void 0) {
      const D = Number(U(n));
      _ = T.includes(D) ? D : void 0;
    }
    return /* @__PURE__ */ a(
      e,
      {
        ref: C,
        className: o(
          or({
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
            shadow: w,
            display: h
          }),
          t
        ),
        ...g,
        children: k
      }
    );
  }
);
xt.displayName = "Stack";
const yt = Q.forwardRef(
  ({ ...e }, t) => /* @__PURE__ */ a(xt, { ref: t, direction: "horizontal", ...e })
);
yt.displayName = "HStack";
const re = Q.forwardRef(
  ({ ...e }, t) => /* @__PURE__ */ a(xt, { ref: t, direction: "vertical", ...e })
);
re.displayName = "VStack";
const sr = O("flex-wrap", {
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
}), ir = Q.forwardRef(
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
    ...w
  }, h) => /* @__PURE__ */ a(
    e,
    {
      ref: h,
      className: o(
        sr({
          gap: (() => {
            const k = [0, 1, 2, 3, 4, 6], g = typeof r == "number" ? r : r !== void 0 ? Number(U(r)) : void 0;
            return k.includes(g) ? g : void 0;
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
      ...w,
      children: y
    }
  )
);
ir.displayName = "Inline";
const dr = O("flex-1", {
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
}), lr = Q.forwardRef(
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
        dr({
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
lr.displayName = "Spacer";
const cr = O("grid", {
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
}), ur = Q.forwardRef(
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
  }, w) => /* @__PURE__ */ a(
    e,
    {
      ref: w,
      className: o(
        cr({
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
ur.displayName = "Grid";
const pr = O("", {
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
}), mr = Q.forwardRef(
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
        pr({
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
mr.displayName = "GridItem";
const fr = O("mx-auto w-full", {
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
}), gr = Q.forwardRef(
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
  }, w) => /* @__PURE__ */ a(
    e,
    {
      ref: w,
      className: o(
        fr({
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
gr.displayName = "Container";
const vr = O("w-full", {
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
}), hr = Q.forwardRef(
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
    ...w
  }, h) => /* @__PURE__ */ a(
    e,
    {
      ref: h,
      className: o(
        vr({
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
      ...w,
      children: y
    }
  )
);
hr.displayName = "Section";
const br = O("items-center justify-center", {
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
}), xr = Q.forwardRef(
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
  }, w) => /* @__PURE__ */ a(
    e,
    {
      ref: w,
      className: o(
        br({
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
xr.displayName = "Center";
const yr = O("relative w-full overflow-hidden", {
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
}), wr = Q.forwardRef(({ as: e = "div", className: t, ratio: r, children: n, ...s }, i) => /* @__PURE__ */ a(
  e,
  {
    ref: i,
    className: o(yr({ ratio: r }), t),
    ...s,
    children: n
  }
));
wr.displayName = "LayoutAspectRatio";
const Nr = O("bg-border shrink-0", {
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
}), kr = Q.forwardRef(
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
          Nr({
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
kr.displayName = "Divider";
const Cr = O("flex flex-wrap", {
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
}), Sr = Q.forwardRef(
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
    children: w,
    ...h
  }, k) => {
    const g = [0, 1, 2, 3, 4, 6];
    let C;
    if (r !== void 0) {
      const T = Number(U(r));
      C = g.includes(T) ? T : void 0;
    }
    return /* @__PURE__ */ a(
      e,
      {
        ref: k,
        className: o(
          Cr({
            gap: C,
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
        children: w
      }
    );
  }
);
Sr.displayName = "Wrap";
const zr = O("", {
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
}), Mr = Q.forwardRef(
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
      className: o(zr({ horizontal: r, vertical: n, all: s }), t),
      ...d,
      children: i
    }
  )
);
Mr.displayName = "Bleed";
const Ir = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, disabled: i, ...d }) => /* @__PURE__ */ p(re, { gap: "2", className: "group", "data-disabled": i, children: [
  e && /* @__PURE__ */ p(ae, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    tr,
    {
      ...d,
      disabled: i,
      className: o(t && "border-destructive", s)
    }
  ),
  t && /* @__PURE__ */ a(Y, { variant: "body-sm", className: "text-destructive", children: t }),
  r && !t && /* @__PURE__ */ a(Y, { variant: "body-sm", className: "text-muted-foreground", children: r })
] }));
Ir.displayName = "FormMultiselect";
function hs({
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
  return /* @__PURE__ */ p(Yt, { className: x, onClick: i, children: [
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
function bs({
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
const ie = O(
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
function Rr({ className: e }) {
  return /* @__PURE__ */ a(
    jt,
    {
      "aria-hidden": "true",
      className: o("animate-spin text-current", e)
    }
  );
}
function Xe({
  className: e,
  variant: t,
  size: r,
  asChild: n = !1,
  loading: s = !1,
  loadingText: i,
  ...d
}) {
  const l = n ? te : "button", u = d.disabled || s;
  return /* @__PURE__ */ a(
    l,
    {
      "data-slot": "button",
      "data-loading": s ? "" : void 0,
      "aria-busy": s || void 0,
      "aria-disabled": u || void 0,
      disabled: n ? void 0 : u,
      className: o(ie({ variant: t, size: r, className: e })),
      ...d,
      children: s ? /* @__PURE__ */ p(Ve, { children: [
        /* @__PURE__ */ a(Rr, { className: "size-4" }),
        i ?? d.children
      ] }) : d.children
    }
  );
}
function Ce({
  ...e
}) {
  return /* @__PURE__ */ a(Ie.Root, { "data-slot": "popover", ...e });
}
function Se({
  ...e
}) {
  return /* @__PURE__ */ a(Ie.Trigger, { "data-slot": "popover-trigger", ...e });
}
function qe({
  className: e,
  align: t = "center",
  sideOffset: r = 4,
  ...n
}) {
  return /* @__PURE__ */ a(Ie.Portal, { children: /* @__PURE__ */ a(
    Ie.Content,
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
function xs({
  ...e
}) {
  return /* @__PURE__ */ a(Ie.Anchor, { "data-slot": "popover-anchor", ...e });
}
function ot({
  loading: e = !1,
  apiError: t,
  emptyText: r = "No Options",
  isSearchable: n = !0,
  searchFn: s,
  searchPlaceholder: i = "Search...",
  children: d,
  ...l
}) {
  return /* @__PURE__ */ a(Z.Root, { "data-slot": "select", ...l, children: c.Children.map(d, (u) => {
    if (c.isValidElement(u) && u.type === Oe) {
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
function ys({
  ...e
}) {
  return /* @__PURE__ */ a(Z.Group, { "data-slot": "select-group", ...e });
}
function st({
  ...e
}) {
  return /* @__PURE__ */ a(Z.Value, { "data-slot": "select-value", ...e });
}
function it({
  className: e,
  size: t = "md",
  children: r,
  ...n
}) {
  const s = t === "sm" ? "h-9 text-sm" : t === "lg" ? "h-12 text-lg" : "h-11 text-base";
  return /* @__PURE__ */ p(
    Z.Trigger,
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
        /* @__PURE__ */ a(Z.Icon, { asChild: !0, children: /* @__PURE__ */ a(Ye, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function Oe({
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
  const [f, x] = c.useState(""), v = $t(f, 300), b = c.useRef(null);
  c.useEffect(() => {
    l && v !== void 0 && l(v);
  }, [v, l]);
  const y = c.useMemo(() => {
    if (!d || l || !f)
      return t;
    const h = f.toLowerCase();
    return c.Children.toArray(t).filter((k) => {
      if (c.isValidElement(k) && k.type === $e) {
        const g = k, C = g.props.children;
        return (typeof C == "string" ? C : String(g.props.value || "")).toLowerCase().includes(h);
      }
      return !0;
    });
  }, [t, f, d, l]), w = c.Children.count(y) > 0;
  return c.useEffect(() => {
    if (!d) return;
    const h = setTimeout(() => {
      b.current?.focus();
    }, 100);
    return () => clearTimeout(h);
  }, [d]), /* @__PURE__ */ a(Z.Portal, { children: /* @__PURE__ */ p(
    Z.Content,
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
        /* @__PURE__ */ a(_r, {}),
        d && /* @__PURE__ */ a("div", { className: "p-2 border-b sticky top-0 bg-popover z-10", children: /* @__PURE__ */ p("div", { className: "relative", children: [
          /* @__PURE__ */ a(Be, { className: "absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
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
                const k = h.relatedTarget, g = h.currentTarget.closest(
                  '[data-slot="select-content"]'
                );
                g && k && g.contains(k) && h.currentTarget.focus();
              }
            }
          )
        ] }) }),
        /* @__PURE__ */ a(
          Z.Viewport,
          {
            className: o(
              "p-1",
              r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: n ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground", children: /* @__PURE__ */ a(me, {}) }) : s?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6", children: /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                className: "text-destructive underline text-sm px-2 py-1 rounded hover:bg-destructive/10",
                onClick: s.onClick,
                children: s.text || "Error"
              }
            ) }) : w ? y : /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground gap-2", children: [
              /* @__PURE__ */ a(fe, { className: "size-8 opacity-60" }),
              /* @__PURE__ */ a("span", { className: "text-xs", children: f ? "No matches found" : i })
            ] })
          }
        ),
        /* @__PURE__ */ a(Tr, {})
      ]
    }
  ) });
}
function ws({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Z.Label,
    {
      "data-slot": "select-label",
      className: o("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...t
    }
  );
}
function $e({
  className: e,
  children: t,
  itemText: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    Z.Item,
    {
      "data-slot": "select-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground [&_[data-select-subtext]]:text-muted-foreground data-[highlighted]:[&_[data-select-subtext]]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(Z.ItemIndicator, { children: /* @__PURE__ */ a(Ne, { className: "size-4" }) }) }),
        r ? /* @__PURE__ */ a("span", { className: "sr-only", children: /* @__PURE__ */ a(Z.ItemText, { children: r }) }) : /* @__PURE__ */ a(Z.ItemText, { children: t }),
        r ? t : null
      ]
    }
  );
}
function Ns({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Z.Separator,
    {
      "data-slot": "select-separator",
      className: o("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function _r({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Z.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: o(
        "flex cursor-pointer items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(ha, { className: "size-4" })
    }
  );
}
function Tr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Z.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: o(
        "flex cursor-pointer items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(Ye, { className: "size-4" })
    }
  );
}
const Dr = O(
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
), ce = c.forwardRef(
  ({ className: e, variant: t, size: r = "md", type: n, ...s }, i) => /* @__PURE__ */ a(
    "input",
    {
      placeholder: "name",
      type: n,
      "data-slot": "input",
      className: o(Dr({ variant: t, size: r }), e),
      ref: i,
      ...s
    }
  )
);
ce.displayName = "Input";
const Gt = (/* @__PURE__ */ new Date()).getFullYear(), Pr = Gt - 100, jr = Gt + 100, Er = [
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
function Fe(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function Mt(e) {
  return Fe(e) ? e : void 0;
}
function It(e) {
  if (!Array.isArray(e))
    return;
  const t = e.filter(Fe);
  return t.length > 0 ? t : void 0;
}
function Rt(e) {
  if (!e || typeof e != "object")
    return;
  const t = e, r = Fe(t.from) ? t.from : void 0, n = Fe(t.to) ? t.to : void 0;
  if (!(!r && !n))
    return { from: r, to: n };
}
function Ar(e) {
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
          className: o(ie({ variant: "outline" }), "size-8 p-0"),
          onClick: () => u(i - 1),
          disabled: i <= r,
          "aria-label": "Previous year",
          children: /* @__PURE__ */ a(ke, { className: "size-4" })
        }
      ),
      /* @__PURE__ */ p(
        ot,
        {
          isSearchable: !1,
          value: String(i),
          onValueChange: (m) => u(Number(m)),
          children: [
            /* @__PURE__ */ a(
              it,
              {
                size: "sm",
                className: "h-8 min-w-36 flex-1",
                "aria-label": "Calendar year",
                children: /* @__PURE__ */ a(st, { placeholder: "Year" })
              }
            ),
            /* @__PURE__ */ a(Oe, { isSearchable: !1, className: "max-h-64", children: l.map((m) => /* @__PURE__ */ a($e, { value: String(m), children: m }, m)) })
          ]
        }
      ),
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: o(ie({ variant: "outline" }), "size-8 p-0"),
          onClick: () => u(i + 1),
          disabled: i >= n,
          "aria-label": "Next year",
          children: /* @__PURE__ */ a(ge, { className: "size-4" })
        }
      )
    ] }),
    /* @__PURE__ */ p(
      ot,
      {
        isSearchable: !1,
        value: String(d),
        onValueChange: (m) => s(new Date(i, Number(m), 1)),
        children: [
          /* @__PURE__ */ a(
            it,
            {
              size: "sm",
              className: "h-8 min-w-36 flex-1",
              "aria-label": "Calendar month",
              children: /* @__PURE__ */ a(st, { placeholder: "Month" })
            }
          ),
          /* @__PURE__ */ a(Oe, { className: "max-h-64", isSearchable: !1, children: Er.map((m, f) => /* @__PURE__ */ a($e, { value: String(f), children: m }, m)) })
        ]
      }
    )
  ] });
}
function wt(e, t) {
  return e != null && t != null ? { fromYear: e, toYear: t } : e != null ? { fromYear: e, toYear: e + 100 } : t != null ? { fromYear: t - 100, toYear: t } : { fromYear: Pr, toYear: jr };
}
function Nt(e) {
  const { className: t, month: r, fromYear: n, toYear: s, onMonthChange: i, children: d } = e;
  return /* @__PURE__ */ p(
    qe,
    {
      align: "start",
      className: "p-0 w-auto bg-background border",
      onPointerDownOutside: (l) => {
        const u = l.target;
        (u.closest('[role="option"]') || u.closest('[role="listbox"]') || u.closest('[role="presentation"]')) && l.preventDefault();
      },
      children: [
        /* @__PURE__ */ a(
          Ar,
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
const kt = (e) => ({
  ...e,
  months: "flex flex-col sm:flex-row gap-2",
  month: "flex flex-col gap-4",
  caption: o("hidden", e?.caption),
  caption_label: "text-sm font-medium",
  nav: "flex items-center gap-1",
  nav_button: o(
    ie({ variant: "outline" }),
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
    ie({ variant: "ghost" }),
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
function Lr(e) {
  const t = Mt(e.selected), [r, n] = c.useState(!1), [s, i] = c.useState(
    t
  ), [d, l] = c.useState(
    t ?? /* @__PURE__ */ new Date()
  );
  c.useEffect(() => {
    const g = Mt(e.selected);
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
    ...w
  } = e, h = wt(x, v), k = s ? s.toLocaleDateString() : void 0;
  return /* @__PURE__ */ p(Ce, { open: r, onOpenChange: n, children: [
    /* @__PURE__ */ a(Se, { className: "w-full flex-1", children: /* @__PURE__ */ a(
      ce,
      {
        readOnly: !0,
        value: k,
        ...b,
        placeholder: b?.placeholder || "Select date",
        onClick: (g) => {
          n(!0), b?.onClick?.(g);
        }
      }
    ) }),
    /* @__PURE__ */ a(
      Nt,
      {
        className: u,
        month: d,
        fromYear: h.fromYear,
        toYear: h.toYear,
        onMonthChange: l,
        children: /* @__PURE__ */ a(
          Te,
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
            classNames: kt(m),
            components: {
              IconLeft: ({ className: g, ...C }) => /* @__PURE__ */ a(ke, { className: o("size-4", g), ...C }),
              IconRight: ({ className: g, ...C }) => /* @__PURE__ */ a(ge, { className: o("size-4", g), ...C })
            },
            ...w
          }
        )
      }
    )
  ] });
}
function Or(e) {
  const t = It(e.selected), [r, n] = c.useState(!1), [s, i] = c.useState(
    t
  ), [d, l] = c.useState(
    t?.[0] ?? /* @__PURE__ */ new Date()
  );
  c.useEffect(() => {
    const g = It(e.selected);
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
    ...w
  } = e, h = wt(x, v), k = s && s.length > 0 ? s.map((g) => g.toLocaleDateString()).join(", ") : void 0;
  return /* @__PURE__ */ p(Ce, { open: r, onOpenChange: n, children: [
    /* @__PURE__ */ a(Se, { className: "w-full flex-1", children: /* @__PURE__ */ a(
      ce,
      {
        readOnly: !0,
        value: k,
        ...b,
        placeholder: b?.placeholder || "Select date(s)",
        onClick: (g) => {
          n(!0), b?.onClick?.(g);
        }
      }
    ) }),
    /* @__PURE__ */ a(
      Nt,
      {
        className: u,
        month: d,
        fromYear: h.fromYear,
        toYear: h.toYear,
        onMonthChange: l,
        children: /* @__PURE__ */ a(
          Te,
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
            classNames: kt(m),
            components: {
              IconLeft: ({ className: g, ...C }) => /* @__PURE__ */ a(ke, { className: o("size-4", g), ...C }),
              IconRight: ({ className: g, ...C }) => /* @__PURE__ */ a(ge, { className: o("size-4", g), ...C })
            },
            ...w
          }
        )
      }
    )
  ] });
}
function $r(e) {
  const t = Rt(e.selected), [r, n] = c.useState(!1), [s, i] = c.useState(
    t
  ), [d, l] = c.useState(
    t?.from ?? /* @__PURE__ */ new Date()
  ), [u, m] = c.useState();
  c.useEffect(() => {
    const _ = Rt(e.selected);
    i(_), _?.from && l(_.from);
  }, [e.selected]);
  const {
    className: f,
    classNames: x,
    showOutsideDays: v = !0,
    fromYear: b,
    toYear: y,
    inputProps: w,
    onSelect: h,
    ...k
  } = e, g = wt(b, y);
  let C;
  s?.from && s?.to && (C = s.from?.toLocaleDateString() + " - " + s.to?.toLocaleDateString());
  const T = s?.from && !s?.to && u ? { from: s.from, to: u } : null;
  return /* @__PURE__ */ p(Ce, { open: r, onOpenChange: n, children: [
    /* @__PURE__ */ a(Se, { className: "w-full flex-1", children: /* @__PURE__ */ a(
      ce,
      {
        readOnly: !0,
        value: C || void 0,
        ...w,
        placeholder: w?.placeholder || "Select date range",
        onClick: (_) => {
          n(!0), w?.onClick?.(_);
        }
      }
    ) }),
    /* @__PURE__ */ a(
      Nt,
      {
        className: f,
        month: d,
        fromYear: g.fromYear,
        toYear: g.toYear,
        onMonthChange: l,
        children: /* @__PURE__ */ a(
          Te,
          {
            showOutsideDays: v,
            month: d,
            onMonthChange: l,
            fromYear: g.fromYear,
            toYear: g.toYear,
            selected: s,
            onSelect: (_, D) => {
              if (s?.from && s?.to && D) {
                const L = { from: D, to: void 0 };
                i(L), h?.(L);
                return;
              }
              i(_), D && l(D), h?.(_), _?.from && _?.to && n(!1);
            },
            onDayMouseEnter: (_) => m(_),
            onDayMouseLeave: () => m(void 0),
            modifiers: {
              hoveredRange: T ? [T] : []
            },
            modifiersClassNames: {
              hoveredRange: "bg-accent/50 text-accent-foreground"
            },
            classNames: kt(x),
            components: {
              IconLeft: ({ className: _, ...D }) => /* @__PURE__ */ a(ke, { className: o("size-4", _), ...D }),
              IconRight: ({ className: _, ...D }) => /* @__PURE__ */ a(ge, { className: o("size-4", _), ...D })
            },
            ...k
          }
        )
      }
    )
  ] });
}
function et(e) {
  return e.mode === "multiple" ? /* @__PURE__ */ a(
    Or,
    {
      ...e
    }
  ) : e.mode === "range" ? /* @__PURE__ */ a($r, { ...e }) : /* @__PURE__ */ a(Lr, { ...e });
}
const Fr = O(
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
), Ut = c.forwardRef(
  ({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
    "textarea",
    {
      "data-slot": "textarea",
      className: o(Fr({ variant: t }), e),
      ref: n,
      ...r
    }
  )
);
Ut.displayName = "Textarea";
function Vr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    nt.Root,
    {
      "data-slot": "radio-group",
      className: o("grid gap-3", e),
      ...t
    }
  );
}
function Br({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    nt.Item,
    {
      "data-slot": "radio-group-item",
      className: o(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        nt.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ a(Ge, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
function Yr({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(
    Me.Root,
    {
      "data-slot": "scroll-area",
      className: o("relative", e),
      ...r,
      children: [
        /* @__PURE__ */ a(
          Me.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: t
          }
        ),
        /* @__PURE__ */ a(Gr, {}),
        /* @__PURE__ */ a(Me.Corner, {})
      ]
    }
  );
}
function Gr({
  className: e,
  orientation: t = "vertical",
  ...r
}) {
  return /* @__PURE__ */ a(
    Me.ScrollAreaScrollbar,
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
        Me.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
const Ur = O(
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
), Hr = ({
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
  }, [l]), /* @__PURE__ */ p(Ce, { open: l, onOpenChange: u, children: [
    /* @__PURE__ */ a(Se, { asChild: !0, disabled: s, children: /* @__PURE__ */ p(
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
          /* @__PURE__ */ a(Ue, { className: "size-3 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ p(
      qe,
      {
        className: "w-64 p-0",
        align: "start",
        side: "bottom",
        sideOffset: 8,
        children: [
          /* @__PURE__ */ a("div", { className: "p-2 border-b sticky top-0 bg-popover z-10", children: /* @__PURE__ */ p("div", { className: "relative", children: [
            /* @__PURE__ */ a(Be, { className: "absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
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
          /* @__PURE__ */ a(Yr, { className: "h-64", children: /* @__PURE__ */ a("div", { className: "p-1", children: v.length === 0 ? /* @__PURE__ */ a("div", { className: "py-6 text-center text-sm text-muted-foreground", children: "No countries found" }) : v.map((b) => {
            const y = b.value === e, w = b.value ? At[b.value] : null;
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
                  /* @__PURE__ */ a("span", { className: "flex items-center justify-center size-5 overflow-hidden rounded-sm bg-muted shrink-0", children: w ? /* @__PURE__ */ a(w, { title: b.label }) : /* @__PURE__ */ a("span", { className: "text-xs", children: "🌐" }) }),
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
}, Ht = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
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
Ht.displayName = "PhoneInputField";
const Kr = ({
  country: e,
  countryName: t
}) => {
  const r = e ? At[e] : null;
  return /* @__PURE__ */ a("span", { className: "flex items-center justify-center size-5 overflow-hidden rounded-sm bg-muted", children: r ? /* @__PURE__ */ a(r, { title: t ?? "" }) : /* @__PURE__ */ a("span", { className: "text-xs text-muted-foreground", children: "🌐" }) });
}, Kt = c.forwardRef(
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
        Ur({ variant: d, size: l }),
        "items-center px-3 gap-2",
        s && "opacity-50 cursor-not-allowed",
        i
      ),
      "data-slot": "phone-input",
      ...b,
      children: /* @__PURE__ */ a(
        $a,
        {
          international: u,
          defaultCountry: r,
          country: m,
          value: e,
          onChange: (w) => t?.(w),
          onCountryChange: f,
          withCountryCallingCode: x,
          placeholder: n,
          disabled: s,
          countrySelectComponent: Hr,
          inputComponent: Ht,
          flagComponent: Kr,
          className: "flex items-center w-full",
          numberInputProps: v
        }
      )
    }
  )
);
Kt.displayName = "PhoneInput";
const Xr = O(
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
function _t(e) {
  const [t, r] = e.split(":").map(Number);
  return t * 60 + r;
}
function qr(e, t) {
  if (!t) return e;
  const [r, n] = e.split(":").map(Number), s = r >= 12 ? "PM" : "AM";
  return `${r % 12 || 12}:${n.toString().padStart(2, "0")} ${s}`;
}
function ye(e) {
  return e.toString().padStart(2, "0");
}
const dt = 250, K = dt / 2, oe = 90, Pe = 62, Wr = 32;
function Jr({
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
  const x = c.useRef(null), v = c.useRef(!1), b = c.useRef({ x: 0, y: 0 }), y = m ? _t(m) : 0, w = f ? _t(f) : 1439;
  function h(M) {
    if (!x.current) return 0;
    const N = x.current.getBoundingClientRect(), I = N.left + N.width / 2, z = N.top + N.height / 2, E = M.clientX - I, P = M.clientY - z;
    let $ = Math.atan2(P, E) * (180 / Math.PI) + 90;
    return $ < 0 && ($ += 360), $;
  }
  function k(M) {
    if (r === "hours")
      if (n) {
        let N = Math.round(M / 30) % 12;
        N === 0 && (N = 12);
        let I = N;
        s === "AM" ? I = N === 12 ? 0 : N : I = N === 12 ? 12 : N + 12;
        const z = I * 60 + t;
        z >= y && z <= w && i(I);
      } else {
        const N = g(), I = (oe + Pe) / 2;
        let z;
        N < I ? (z = Math.round(M / 30) % 12, z = z === 0 ? 0 : z + 12) : (z = Math.round(M / 30) % 12, z === 0 && (z = 12));
        const E = z * 60 + t;
        E >= y && E <= w && i(z);
      }
    else {
      const N = Math.round(M / 6) % 60, I = e * 60 + N;
      I >= y && I <= w && d(N);
    }
  }
  function g() {
    if (!x.current) return oe;
    const M = x.current.getBoundingClientRect(), N = M.left + M.width / 2, I = M.top + M.height / 2, z = b.current.x - N, E = b.current.y - I;
    return Math.sqrt(z * z + E * E);
  }
  function C(M) {
    v.current = !0, b.current = { x: M.clientX, y: M.clientY };
    const N = h(M);
    k(N);
  }
  function T(M) {
    if (!v.current) return;
    b.current = { x: M.clientX, y: M.clientY };
    const N = h(M);
    k(N);
  }
  function _() {
    v.current && (v.current = !1, r === "hours" && l("minutes"));
  }
  let D, L;
  r === "hours" ? (D = (n ? e % 12 : e) % 12 * 30, !n && (e === 0 || e > 12) ? L = Pe : L = oe) : (D = t * 6, L = oe);
  const j = (D - 90) * Math.PI / 180, F = K + L * Math.cos(j), S = K + L * Math.sin(j), R = [];
  if (n)
    for (let M = 1; M <= 12; M++) {
      const N = (M * 30 - 90) * Math.PI / 180;
      R.push({
        value: M,
        label: String(M),
        x: K + oe * Math.cos(N),
        y: K + oe * Math.sin(N),
        inner: !1
      });
    }
  else {
    for (let M = 1; M <= 12; M++) {
      const N = (M * 30 - 90) * Math.PI / 180;
      R.push({
        value: M,
        label: String(M),
        x: K + oe * Math.cos(N),
        y: K + oe * Math.sin(N),
        inner: !1
      });
    }
    for (let M = 0; M < 12; M++) {
      const N = M === 0 ? 0 : M + 12, I = (M * 30 - 90) * Math.PI / 180;
      R.push({
        value: N,
        label: ye(N),
        x: K + Pe * Math.cos(I),
        y: K + Pe * Math.sin(I),
        inner: !0
      });
    }
  }
  const A = [];
  for (let M = 0; M < 12; M++) {
    const N = M * 5, I = (N * 6 - 90) * Math.PI / 180;
    A.push({
      value: N,
      label: ye(N),
      x: K + oe * Math.cos(I),
      y: K + oe * Math.sin(I)
    });
  }
  const V = (M) => n ? e % 12 === M % 12 && (M !== 0 || e === 0 || e === 12) : e === M;
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
          children: ye(n ? e % 12 || 12 : e)
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
          children: ye(t)
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
        width: dt,
        height: dt,
        className: "cursor-pointer select-none",
        onMouseDown: C,
        onMouseMove: T,
        onMouseUp: _,
        onMouseLeave: _,
        children: [
          /* @__PURE__ */ a(
            "circle",
            {
              cx: K,
              cy: K,
              r: K - 2,
              className: "fill-muted/50"
            }
          ),
          /* @__PURE__ */ a(
            "circle",
            {
              cx: K,
              cy: K,
              r: 3,
              className: "fill-primary"
            }
          ),
          /* @__PURE__ */ a(
            "line",
            {
              x1: K,
              y1: K,
              x2: F,
              y2: S,
              strokeWidth: 2,
              className: "stroke-primary"
            }
          ),
          /* @__PURE__ */ a(
            "circle",
            {
              cx: F,
              cy: S,
              r: Wr / 2,
              className: "fill-primary"
            }
          ),
          r === "hours" ? R.map(({ value: M, label: N, x: I, y: z, inner: E }) => {
            const P = V(M);
            return /* @__PURE__ */ a(
              "text",
              {
                x: I,
                y: z,
                textAnchor: "middle",
                dominantBaseline: "central",
                className: o(
                  "pointer-events-none text-[13px]",
                  E ? "font-normal" : "font-medium",
                  P ? "fill-primary-foreground" : "fill-foreground"
                ),
                children: N
              },
              `h-${M}-${E ? "inner" : "outer"}`
            );
          }) : A.map(({ value: M, label: N, x: I, y: z }) => /* @__PURE__ */ a(
            "text",
            {
              x: I,
              y: z,
              textAnchor: "middle",
              dominantBaseline: "central",
              className: o(
                "pointer-events-none text-[13px] font-medium",
                t === M ? "fill-primary-foreground" : "fill-foreground"
              ),
              children: N
            },
            `m-${M}`
          ))
        ]
      }
    )
  ] });
}
const Xt = c.forwardRef(
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
    const [y, w] = c.useState(!1), [h, k] = c.useState("hours"), g = c.useRef(null);
    c.useImperativeHandle(b, () => g.current);
    const C = n ? parseInt(n.split(":")[0], 10) : 0, T = n ? parseInt(n.split(":")[1], 10) : 0, [_, D] = c.useState(C), [L, j] = c.useState(T), [F, S] = c.useState(
      C >= 12 ? "PM" : "AM"
    );
    c.useEffect(() => {
      const z = n ? parseInt(n.split(":")[0], 10) : 0, E = n ? parseInt(n.split(":")[1], 10) : 0;
      D(z), j(E), S(z >= 12 ? "PM" : "AM");
    }, [n]), c.useEffect(() => {
      y && k("hours");
    }, [y]), c.useEffect(() => {
      function z(E) {
        g.current && !g.current.contains(E.target) && w(!1);
      }
      return document.addEventListener("mousedown", z), () => document.removeEventListener("mousedown", z);
    }, []), c.useEffect(() => {
      function z(E) {
        E.key === "Escape" && w(!1);
      }
      if (y)
        return document.addEventListener("keydown", z), () => document.removeEventListener("keydown", z);
    }, [y]);
    function R(z, E) {
      s?.(`${ye(z)}:${ye(E)}`);
    }
    function A(z) {
      D(z), R(z, L);
    }
    function V(z) {
      j(z), R(_, z);
    }
    function M(z) {
      S(z);
      let E = _;
      z === "AM" && _ >= 12 && (E = _ - 12), z === "PM" && _ < 12 && (E = _ + 12), D(E), R(E, L);
    }
    const N = (z) => {
      z.stopPropagation(), s?.(null);
    }, I = r === "sm" ? 14 : r === "lg" ? 18 : 16;
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
              onClick: () => w((z) => !z),
              className: o(
                Xr({ variant: t, size: r }),
                "cursor-pointer select-none gap-2",
                e
              ),
              "aria-expanded": y,
              "aria-haspopup": "dialog",
              children: [
                /* @__PURE__ */ a(Ae, { size: I, className: "shrink-0 text-muted-foreground" }),
                /* @__PURE__ */ a(
                  "span",
                  {
                    className: o(
                      "flex-1 text-left",
                      !n && "text-muted-foreground/70"
                    ),
                    children: n ? qr(n, v) : x
                  }
                ),
                n ? /* @__PURE__ */ a(
                  "span",
                  {
                    role: "button",
                    tabIndex: 0,
                    onClick: N,
                    onKeyDown: (z) => {
                      (z.key === "Enter" || z.key === " ") && N(z);
                    },
                    className: "shrink-0 rounded-sm p-0.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
                    "aria-label": "Clear time",
                    children: /* @__PURE__ */ a(He, { size: I })
                  }
                ) : /* @__PURE__ */ a(
                  Ue,
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
                Jr,
                {
                  hour: _,
                  minute: L,
                  mode: h,
                  use12Hours: v,
                  period: F,
                  onSelectHour: A,
                  onSelectMinute: V,
                  onModeChange: k,
                  onPeriodChange: M,
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
Xt.displayName = "TimePicker";
const qt = O(
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
function ee(e) {
  return e.toString().padStart(2, "0");
}
function lt(e, t, r) {
  if (!r) return `${ee(e)}:${ee(t)}`;
  const n = e >= 12 ? "PM" : "AM";
  return `${e % 12 || 12}:${ee(t)} ${n}`;
}
function ze(e) {
  return e?.toLocaleDateString(void 0, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}
const ct = 220, X = ct / 2, se = 85, je = 58, Zr = 28;
function ut({ hour: e, minute: t, use12Hours: r, onChange: n }) {
  const s = c.useRef(null), i = c.useRef(!1), d = c.useRef({ x: 0, y: 0 }), [l, u] = c.useState("hours"), [m, f] = c.useState(
    e >= 12 ? "PM" : "AM"
  );
  c.useEffect(() => {
    f(e >= 12 ? "PM" : "AM");
  }, [e]);
  function x(S) {
    if (!s.current) return 0;
    const R = s.current.getBoundingClientRect(), A = R.left + R.width / 2, V = R.top + R.height / 2, M = S.clientX - A, N = S.clientY - V;
    let I = Math.atan2(N, M) * (180 / Math.PI) + 90;
    return I < 0 && (I += 360), I;
  }
  function v() {
    if (!s.current) return se;
    const S = s.current.getBoundingClientRect(), R = S.left + S.width / 2, A = S.top + S.height / 2, V = d.current.x - R, M = d.current.y - A;
    return Math.sqrt(V * V + M * M);
  }
  function b(S) {
    if (l === "hours")
      if (r) {
        let R = Math.round(S / 30) % 12;
        R === 0 && (R = 12);
        let A = R;
        m === "AM" ? A = R === 12 ? 0 : R : A = R === 12 ? 12 : R + 12, n(A, t);
      } else {
        const R = v(), A = (se + je) / 2;
        let V;
        R < A ? (V = Math.round(S / 30) % 12, V = V === 0 ? 0 : V + 12) : (V = Math.round(S / 30) % 12, V === 0 && (V = 12)), n(V, t);
      }
    else {
      const R = Math.round(S / 6) % 60;
      n(e, R);
    }
  }
  function y(S) {
    i.current = !0, d.current = { x: S.clientX, y: S.clientY }, b(x(S));
  }
  function w(S) {
    i.current && (d.current = { x: S.clientX, y: S.clientY }, b(x(S)));
  }
  function h() {
    i.current && (i.current = !1, l === "hours" && u("minutes"));
  }
  function k(S) {
    f(S);
    let R = e;
    S === "AM" && e >= 12 && (R = e - 12), S === "PM" && e < 12 && (R = e + 12), n(R, t);
  }
  let g, C;
  l === "hours" ? (g = (r ? e % 12 : e) % 12 * 30, !r && (e === 0 || e > 12) ? C = je : C = se) : (g = t * 6, C = se);
  const T = (g - 90) * Math.PI / 180, _ = X + C * Math.cos(T), D = X + C * Math.sin(T), L = [];
  if (r)
    for (let S = 1; S <= 12; S++) {
      const R = (S * 30 - 90) * Math.PI / 180;
      L.push({
        value: S,
        label: String(S),
        x: X + se * Math.cos(R),
        y: X + se * Math.sin(R),
        inner: !1
      });
    }
  else {
    for (let S = 1; S <= 12; S++) {
      const R = (S * 30 - 90) * Math.PI / 180;
      L.push({
        value: S,
        label: String(S),
        x: X + se * Math.cos(R),
        y: X + se * Math.sin(R),
        inner: !1
      });
    }
    for (let S = 0; S < 12; S++) {
      const R = S === 0 ? 0 : S + 12, A = (S * 30 - 90) * Math.PI / 180;
      L.push({
        value: R,
        label: ee(R),
        x: X + je * Math.cos(A),
        y: X + je * Math.sin(A),
        inner: !0
      });
    }
  }
  const j = [];
  for (let S = 0; S < 12; S++) {
    const R = S * 5, A = (R * 6 - 90) * Math.PI / 180;
    j.push({
      value: R,
      label: ee(R),
      x: X + se * Math.cos(A),
      y: X + se * Math.sin(A)
    });
  }
  const F = (S) => r ? e % 12 === S % 12 && (S !== 0 || e === 0 || e === 12) : e === S;
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
          children: ee(r ? e % 12 || 12 : e)
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
          children: ee(t)
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
        width: ct,
        height: ct,
        className: "cursor-pointer select-none",
        onMouseDown: y,
        onMouseMove: w,
        onMouseUp: h,
        onMouseLeave: h,
        children: [
          /* @__PURE__ */ a(
            "circle",
            {
              cx: X,
              cy: X,
              r: X - 2,
              className: "fill-muted/50"
            }
          ),
          /* @__PURE__ */ a(
            "circle",
            {
              cx: X,
              cy: X,
              r: 3,
              className: "fill-primary"
            }
          ),
          /* @__PURE__ */ a(
            "line",
            {
              x1: X,
              y1: X,
              x2: _,
              y2: D,
              strokeWidth: 2,
              className: "stroke-primary"
            }
          ),
          /* @__PURE__ */ a(
            "circle",
            {
              cx: _,
              cy: D,
              r: Zr / 2,
              className: "fill-primary"
            }
          ),
          l === "hours" ? L.map(({ value: S, label: R, x: A, y: V, inner: M }) => {
            const N = F(S);
            return /* @__PURE__ */ a(
              "text",
              {
                x: A,
                y: V,
                textAnchor: "middle",
                dominantBaseline: "central",
                className: o(
                  "pointer-events-none text-[12px]",
                  M ? "font-normal" : "font-medium",
                  N ? "fill-primary-foreground" : "fill-foreground"
                ),
                children: R
              },
              `h-${S}-${M ? "i" : "o"}`
            );
          }) : j.map(({ value: S, label: R, x: A, y: V }) => /* @__PURE__ */ a(
            "text",
            {
              x: A,
              y: V,
              textAnchor: "middle",
              dominantBaseline: "central",
              className: o(
                "pointer-events-none text-[12px] font-medium",
                t === S ? "fill-primary-foreground" : "fill-foreground"
              ),
              children: R
            },
            `m-${S}`
          ))
        ]
      }
    )
  ] });
}
const Wt = {
  months: "flex flex-col sm:flex-row gap-2",
  month: "flex flex-col gap-4",
  caption: "flex justify-center pt-1 relative items-center w-full",
  caption_label: "text-sm font-medium",
  nav: "flex items-center gap-1",
  nav_button: o(
    ie({ variant: "outline" }),
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
    ie({ variant: "ghost" }),
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
}, Jt = {
  IconLeft: ({ className: e, ...t }) => /* @__PURE__ */ a(ke, { className: o("size-4", e), ...t }),
  IconRight: ({ className: e, ...t }) => /* @__PURE__ */ a(ge, { className: o("size-4", e), ...t })
};
function Qr({
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
  const [v, b] = c.useState(!1), [y, w] = c.useState("date"), h = n?.date, k = n?.hour ?? 0, g = n?.minute ?? 0;
  function C(j) {
    j && (s?.({ date: j, hour: k, minute: g }), w("time"));
  }
  function T(j, F) {
    s?.({ date: h ?? /* @__PURE__ */ new Date(), hour: j, minute: F });
  }
  function _(j) {
    j.stopPropagation(), j.preventDefault(), s?.(null);
  }
  const D = n ? `${ze(n.date)}, ${lt(n.hour, n.minute, f)}` : null, L = r === "sm" ? 14 : r === "lg" ? 18 : 16;
  return /* @__PURE__ */ p(Ce, { open: v, onOpenChange: b, children: [
    /* @__PURE__ */ a(Se, { asChild: !0, disabled: i, children: /* @__PURE__ */ p(
      "button",
      {
        type: "button",
        disabled: i,
        className: o(
          qt({ variant: t, size: r }),
          "cursor-pointer select-none gap-2",
          i && "pointer-events-none opacity-50",
          e
        ),
        "aria-expanded": v,
        "aria-haspopup": "dialog",
        ...l ? { id: l } : {},
        children: [
          /* @__PURE__ */ a(
            Le,
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
                !D && "text-muted-foreground/70"
              ),
              children: D ?? m
            }
          ),
          n ? /* @__PURE__ */ a(
            "span",
            {
              role: "button",
              tabIndex: 0,
              onClick: _,
              onKeyDown: (j) => {
                (j.key === "Enter" || j.key === " ") && _(j);
              },
              className: "shrink-0 rounded-sm p-0.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
              "aria-label": "Clear",
              children: /* @__PURE__ */ a(He, { size: L })
            }
          ) : /* @__PURE__ */ a(
            Ue,
            {
              size: L,
              className: o(
                "shrink-0 text-muted-foreground transition-transform duration-200",
                v && "rotate-180"
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ p(qe, { align: "start", className: "w-auto p-0 bg-popover border", children: [
      d && /* @__PURE__ */ a(
        "input",
        {
          type: "hidden",
          name: d,
          value: n ? `${n.date.toISOString().split("T")[0]}T${ee(n.hour)}:${ee(n.minute)}` : ""
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
              y === "date" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"
            ),
            children: [
              /* @__PURE__ */ a(Le, { size: 14 }),
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
              y === "time" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"
            ),
            children: [
              /* @__PURE__ */ a(Ae, { size: 14 }),
              "Time"
            ]
          }
        )
      ] }),
      y === "date" ? /* @__PURE__ */ a(
        Te,
        {
          mode: "single",
          showOutsideDays: !0,
          selected: h,
          onSelect: C,
          className: "p-3",
          classNames: Wt,
          components: Jt,
          ...x
        }
      ) : /* @__PURE__ */ a("div", { className: "p-3", children: /* @__PURE__ */ a(
        ut,
        {
          hour: k,
          minute: g,
          use12Hours: f,
          onChange: T
        }
      ) })
    ] })
  ] });
}
function en({
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
  const [v, b] = c.useState(!1), [y, w] = c.useState(
    "date"
  ), [h, k] = c.useState(), g = n?.from?.date, C = n?.to?.date, T = n?.from?.hour ?? 0, _ = n?.from?.minute ?? 0, D = n?.to?.hour ?? 0, L = n?.to?.minute ?? 0, j = g || C ? { from: g, to: C } : void 0, F = g && !C && h ? { from: g, to: h } : null;
  function S(I, z) {
    if (g && C && z) {
      s?.({
        from: { date: z, hour: 0, minute: 0 },
        to: void 0
      });
      return;
    }
    if (!I?.from) {
      s?.(null);
      return;
    }
    const E = {
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
    s?.(E), I.from && I.to && w("start-time");
  }
  function R(I, z) {
    s?.({
      from: {
        date: g ?? /* @__PURE__ */ new Date(),
        hour: I,
        minute: z
      },
      to: n?.to
    });
  }
  function A(I, z) {
    const E = {
      date: C ?? /* @__PURE__ */ new Date(),
      hour: I,
      minute: z
    };
    s?.({
      from: n?.from,
      to: E
    });
  }
  function V(I) {
    I.stopPropagation(), I.preventDefault(), s?.(null);
  }
  let M = null;
  if (n?.from) {
    const I = `${ze(n.from.date)}, ${lt(n.from.hour, n.from.minute, f)}`;
    if (n?.to) {
      const z = `${ze(n.to.date)}, ${lt(n.to.hour, n.to.minute, f)}`;
      M = `${I} – ${z}`;
    } else
      M = I;
  }
  const N = r === "sm" ? 14 : r === "lg" ? 18 : 16;
  return /* @__PURE__ */ p(Ce, { open: v, onOpenChange: b, children: [
    /* @__PURE__ */ a(Se, { asChild: !0, disabled: i, children: /* @__PURE__ */ p(
      "button",
      {
        type: "button",
        disabled: i,
        className: o(
          qt({ variant: t, size: r }),
          "cursor-pointer select-none gap-2",
          i && "pointer-events-none opacity-50",
          e
        ),
        "aria-expanded": v,
        "aria-haspopup": "dialog",
        ...l ? { id: l } : {},
        children: [
          /* @__PURE__ */ a(
            Le,
            {
              size: N,
              className: "shrink-0 text-muted-foreground"
            }
          ),
          /* @__PURE__ */ a(
            "span",
            {
              className: o(
                "flex-1 text-left truncate",
                !M && "text-muted-foreground/70"
              ),
              children: M ?? m
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
              children: /* @__PURE__ */ a(He, { size: N })
            }
          ) : /* @__PURE__ */ a(
            Ue,
            {
              size: N,
              className: o(
                "shrink-0 text-muted-foreground transition-transform duration-200",
                v && "rotate-180"
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ p(qe, { align: "start", className: "w-auto p-0 bg-popover border", children: [
      d && /* @__PURE__ */ a(
        "input",
        {
          type: "hidden",
          name: d,
          value: n?.from && n?.to ? `${n.from.date.toISOString().split("T")[0]}T${ee(n.from.hour)}:${ee(n.from.minute)}/${n.to.date.toISOString().split("T")[0]}T${ee(n.to.hour)}:${ee(n.to.minute)}` : ""
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
              y === "date" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"
            ),
            children: [
              /* @__PURE__ */ a(Le, { size: 14 }),
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
              y === "start-time" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"
            ),
            children: [
              /* @__PURE__ */ a(Ae, { size: 14 }),
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
              y === "end-time" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"
            ),
            children: [
              /* @__PURE__ */ a(Ae, { size: 14 }),
              "End"
            ]
          }
        )
      ] }),
      y === "date" ? /* @__PURE__ */ a(
        Te,
        {
          mode: "range",
          numberOfMonths: 2,
          showOutsideDays: !0,
          selected: j,
          onSelect: S,
          onDayMouseEnter: (I) => k(I),
          onDayMouseLeave: () => k(void 0),
          modifiers: {
            hoveredRange: F ? [F] : []
          },
          modifiersClassNames: {
            hoveredRange: "bg-accent/50 text-accent-foreground"
          },
          className: "p-3",
          classNames: Wt,
          components: Jt,
          ...x
        }
      ) : y === "start-time" ? /* @__PURE__ */ p("div", { className: "p-3", children: [
        /* @__PURE__ */ a("p", { className: "text-xs text-muted-foreground text-center mb-2", children: g ? ze(g) : "Select start date first" }),
        /* @__PURE__ */ a(
          ut,
          {
            hour: T,
            minute: _,
            use12Hours: f,
            onChange: R
          }
        )
      ] }) : /* @__PURE__ */ p("div", { className: "p-3", children: [
        /* @__PURE__ */ a("p", { className: "text-xs text-muted-foreground text-center mb-2", children: C ? ze(C) : "Select end date first" }),
        /* @__PURE__ */ a(
          ut,
          {
            hour: D,
            minute: L,
            use12Hours: f,
            onChange: A
          }
        )
      ] })
    ] })
  ] });
}
const Zt = c.forwardRef(
  (e) => e.mode === "range" ? /* @__PURE__ */ a(en, { ...e }) : /* @__PURE__ */ a(Qr, { ...e })
);
Zt.displayName = "DateTimePicker";
function tn({
  className: e,
  containerClassName: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    Fa,
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
function ks({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "input-otp-group",
      className: o("flex items-center gap-1", e),
      ...t
    }
  );
}
function Cs({
  index: e,
  className: t,
  ...r
}) {
  const n = c.useContext(Va), { char: s, hasFakeCaret: i, isActive: d } = n?.slots[e] ?? {};
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
function Ss({ ...e }) {
  return /* @__PURE__ */ a("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ a(Pt, {}) });
}
const an = c.forwardRef(
  ({ label: e, error: t, helperText: r, icon: n, required: s, className: i, ...d }, l) => /* @__PURE__ */ p(re, { gap: "2", children: [
    e && /* @__PURE__ */ p(ae, { children: [
      e,
      s && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    n ? /* @__PURE__ */ p(yt, { gap: "2", className: "relative", children: [
      /* @__PURE__ */ a(n, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" }),
      /* @__PURE__ */ a(
        ce,
        {
          ref: l,
          className: o("pl-10", t && "border-destructive", i),
          ...d
        }
      )
    ] }) : /* @__PURE__ */ a(
      ce,
      {
        ref: l,
        className: o(t && "border-destructive", i),
        ...d
      }
    ),
    t && /* @__PURE__ */ a(
      Y,
      {
        variant: "body-sm",
        className: "text-destructive first-letter:uppercase",
        children: t
      }
    ),
    r && !t && /* @__PURE__ */ a(
      Y,
      {
        variant: "body-sm",
        className: "text-muted-foreground first-letter:uppercase",
        children: r
      }
    )
  ] })
);
an.displayName = "FormInput";
const rn = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, ...i }, d) => /* @__PURE__ */ p(re, { gap: "2", children: [
  e && /* @__PURE__ */ p(ae, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    Ut,
    {
      ref: d,
      className: o(t && "border-destructive", s),
      ...i
    }
  ),
  t && /* @__PURE__ */ a(
    Y,
    {
      variant: "body-sm",
      className: "text-destructive first-letter:uppercase",
      children: t
    }
  ),
  r && !t && /* @__PURE__ */ a(
    Y,
    {
      variant: "body-sm",
      className: "text-muted-foreground first-letter:uppercase",
      children: r
    }
  )
] }));
rn.displayName = "FormTextarea";
function nn(e) {
  const t = [e.label, e.subtext].filter((r) => typeof r == "string").map((r) => r.trim()).filter(Boolean);
  return t.length > 0 ? t.join(" ") : void 0;
}
const on = c.forwardRef(
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
      ...w
    } = e;
    return /* @__PURE__ */ p(re, { gap: "2", className: "group", "data-disabled": l, children: [
      r && /* @__PURE__ */ p(ae, { children: [
        r,
        i && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
      ] }),
      /* @__PURE__ */ p(
        ot,
        {
          value: b,
          onValueChange: y,
          disabled: l,
          loading: f,
          emptyText: x,
          apiError: v,
          ...w,
          children: [
            /* @__PURE__ */ a(
              it,
              {
                ref: t,
                "aria-invalid": !!n,
                className: o(n && "border-destructive", d),
                children: /* @__PURE__ */ a(st, { placeholder: m })
              }
            ),
            /* @__PURE__ */ a(
              Oe,
              {
                hasOptions: u.length > 0,
                loading: f,
                apiError: v,
                emptyText: x,
                children: u.map((h) => /* @__PURE__ */ a(
                  $e,
                  {
                    value: h.value,
                    disabled: h.disabled,
                    textValue: nn(h),
                    itemText: h.label,
                    children: /* @__PURE__ */ p("div", { className: "flex min-w-0 flex-col", children: [
                      /* @__PURE__ */ a("span", { children: h.label }),
                      h.subtext ? /* @__PURE__ */ a("span", { "data-select-subtext": !0, className: "text-xs line-clamp-2", children: h.subtext }) : null
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
        Y,
        {
          variant: "body-sm",
          className: "text-destructive first-letter:uppercase",
          children: n
        }
      ),
      s && !n && /* @__PURE__ */ a(
        Y,
        {
          variant: "body-sm",
          className: "text-muted-foreground first-letter:uppercase",
          children: s
        }
      )
    ] });
  }
);
on.displayName = "FormSelect";
const sn = c.forwardRef(
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
    return /* @__PURE__ */ p(re, { gap: "2", children: [
      r && /* @__PURE__ */ p(ae, { children: [
        r,
        i && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
      ] }),
      /* @__PURE__ */ a("div", { ref: t, className: d, children: (() => {
        switch (e.mode) {
          case "multiple":
            return /* @__PURE__ */ a(
              et,
              {
                ...m,
                mode: "multiple",
                selected: l,
                onSelect: u
              }
            );
          case "range":
            return /* @__PURE__ */ a(
              et,
              {
                ...m,
                mode: "range",
                selected: l,
                onSelect: u
              }
            );
          default:
            return /* @__PURE__ */ a(
              et,
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
        Y,
        {
          variant: "body-sm",
          className: "text-destructive first-letter:uppercase",
          children: n
        }
      ),
      s && !n && /* @__PURE__ */ a(
        Y,
        {
          variant: "body-sm",
          className: "text-muted-foreground first-letter:uppercase",
          children: s
        }
      )
    ] });
  }
);
sn.displayName = "FormCalendar";
const dn = c.forwardRef((e, t) => {
  const {
    label: r,
    checkboxLabel: n,
    error: s,
    helperText: i,
    required: d,
    className: l,
    ...u
  } = e;
  return /* @__PURE__ */ p(re, { gap: "2", children: [
    r && /* @__PURE__ */ p(ae, { children: [
      r,
      d && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ a(
      ht,
      {
        ref: t,
        label: n,
        variant: s ? "error" : u.variant,
        className: o(l),
        ...u
      }
    ),
    s && /* @__PURE__ */ a(
      Y,
      {
        variant: "body-sm",
        className: "text-destructive first-letter:uppercase",
        children: s
      }
    ),
    i && !s && /* @__PURE__ */ a(
      Y,
      {
        variant: "body-sm",
        className: "text-muted-foreground first-letter:uppercase",
        children: i
      }
    )
  ] });
});
dn.displayName = "FormCheckbox";
const ln = c.forwardRef((e, t) => {
  const { label: r, error: n, helperText: s, required: i, className: d, options: l, ...u } = e;
  return /* @__PURE__ */ p(re, { gap: "2", children: [
    r && /* @__PURE__ */ p(ae, { children: [
      r,
      i && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ a(
      Vr,
      {
        ref: t,
        "aria-invalid": !!n,
        className: o(n && "ring-2 ring-destructive/20", d),
        ...u,
        children: l.map((m) => /* @__PURE__ */ p(yt, { as: "label", gap: "2", className: "items-center", children: [
          /* @__PURE__ */ a(
            Br,
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
      Y,
      {
        variant: "body-sm",
        className: "text-destructive first-letter:uppercase",
        children: n
      }
    ),
    s && !n && /* @__PURE__ */ a(
      Y,
      {
        variant: "body-sm",
        className: "text-muted-foreground first-letter:uppercase",
        children: s
      }
    )
  ] });
});
ln.displayName = "FormRadioGroup";
const cn = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, ...i }, d) => /* @__PURE__ */ p(re, { gap: "2", children: [
  e && /* @__PURE__ */ p(ae, { children: [
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
    Y,
    {
      variant: "body-sm",
      className: "text-destructive first-letter:uppercase",
      children: t
    }
  ),
  r && !t && /* @__PURE__ */ a(
    Y,
    {
      variant: "body-sm",
      className: "text-muted-foreground first-letter:uppercase",
      children: r
    }
  )
] }));
cn.displayName = "FormPhoneInput";
const un = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, ...i }, d) => /* @__PURE__ */ p(re, { gap: "2", children: [
  e && /* @__PURE__ */ p(ae, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    Xt,
    {
      ref: d,
      variant: t ? "error" : "default",
      className: o(s),
      ...i
    }
  ),
  t && /* @__PURE__ */ a(
    Y,
    {
      variant: "body-sm",
      className: "text-destructive first-letter:uppercase",
      children: t
    }
  ),
  r && !t && /* @__PURE__ */ a(
    Y,
    {
      variant: "body-sm",
      className: "text-muted-foreground first-letter:uppercase",
      children: r
    }
  )
] }));
un.displayName = "FormTimePicker";
const pn = c.forwardRef(({ label: e, error: t, helperText: r, required: n, className: s, ...i }, d) => /* @__PURE__ */ p(re, { gap: "2", children: [
  e && /* @__PURE__ */ p(ae, { children: [
    e,
    n && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
  ] }),
  /* @__PURE__ */ a(
    Zt,
    {
      ref: d,
      variant: t ? "error" : "default",
      className: o(s),
      ...i
    }
  ),
  t && /* @__PURE__ */ a(
    Y,
    {
      variant: "body-sm",
      className: "text-destructive first-letter:uppercase",
      children: t
    }
  ),
  r && !t && /* @__PURE__ */ a(
    Y,
    {
      variant: "body-sm",
      className: "text-muted-foreground first-letter:uppercase",
      children: r
    }
  )
] }));
pn.displayName = "FormDateTimePicker";
function zs({
  label: e,
  error: t,
  helperText: r,
  required: n,
  className: s,
  ...i
}) {
  return /* @__PURE__ */ p(re, { gap: "2", children: [
    e && /* @__PURE__ */ p(ae, { children: [
      e,
      n && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ a(
      tn,
      {
        "aria-invalid": !!t,
        className: o(t && "border-destructive", s),
        ...i
      }
    ),
    t && /* @__PURE__ */ a(
      Y,
      {
        variant: "body-sm",
        className: "text-destructive first-letter:uppercase",
        children: t
      }
    ),
    r && !t && /* @__PURE__ */ a(
      Y,
      {
        variant: "body-sm",
        className: "text-muted-foreground first-letter:uppercase",
        children: r
      }
    )
  ] });
}
function mn(e) {
  return e ? Array.isArray(e) ? e : Array.from(e) : [];
}
function tt(e) {
  const t = new DataTransfer();
  return e.forEach((r) => t.items.add(r)), t.files;
}
function Tt(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(0)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
const fn = c.forwardRef(
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
    const [w, h] = c.useState(
      []
    ), [k, g] = c.useState(""), C = c.useRef(null), T = c.useCallback(
      (P) => {
        C.current = P, typeof y == "function" ? y(P) : y && (y.current = P);
      },
      [y]
    );
    c.useEffect(() => {
      const P = mn(f);
      if (P.length === 0) {
        h((B) => (B.forEach((ne) => URL.revokeObjectURL(ne.url)), [])), g(""), C.current && (C.current.value = "");
        return;
      }
      const $ = w.map((B) => B.file);
      P.length === $.length && P.every((B, ne) => B === $[ne]) || (w.forEach((B) => URL.revokeObjectURL(B.url)), h(P.map((B) => ({ file: B, url: URL.createObjectURL(B) }))));
    }, [f]), c.useEffect(() => () => {
      w.forEach((P) => URL.revokeObjectURL(P.url));
    }, []);
    function _(P) {
      const $ = P.find((G) => G.size > i);
      return $ ? `"${$.name}" exceeds the ${Tt(i)} size limit.` : d && l !== void 0 && P.length > l ? `You can upload at most ${l} file${l === 1 ? "" : "s"}.` : "";
    }
    function D(P) {
      const $ = P.target.files;
      if (!$ || $.length === 0) return;
      const G = Array.from($), B = d ? [...w.map((be) => be.file), ...G] : G, ne = _(B);
      if (g(ne), C.current && (C.current.value = ""), ne) return;
      w.forEach((be) => URL.revokeObjectURL(be.url));
      const Qe = B.map((be) => ({
        file: be,
        url: URL.createObjectURL(be)
      }));
      h(Qe), x?.(tt(B));
    }
    function L(P) {
      const $ = w.filter((B, ne) => ne !== P);
      h((B) => (URL.revokeObjectURL(B[P].url), $));
      const G = tt($.map((B) => B.file));
      x?.($.length > 0 ? G : null), C.current && (C.current.value = "");
    }
    function j(P, $) {
      P !== $ && h((G) => {
        const B = [...G], [ne] = B.splice(P, 1);
        return B.splice($, 0, ne), x?.(tt(B.map((Qe) => Qe.file))), B;
      });
    }
    const [F, S] = c.useState(null), [R, A] = c.useState(
      null
    );
    function V(P) {
      return ($) => {
        S(P), $.dataTransfer.effectAllowed = "move", $.dataTransfer.setData("text/plain", String(P));
      };
    }
    function M(P) {
      return ($) => {
        $.preventDefault(), !(F === null || F === P) && A(P);
      };
    }
    function N(P) {
      return ($) => {
        $.preventDefault(), F !== null && F !== P && j(F, P), S(null), A(null);
      };
    }
    function I() {
      S(null), A(null);
    }
    const z = t || k, E = v;
    return /* @__PURE__ */ p(re, { gap: "2", children: [
      e && /* @__PURE__ */ p(ae, { children: [
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
            E ? "cursor-not-allowed opacity-50 border-muted" : z ? "border-destructive bg-destructive/5 hover:bg-destructive/10" : "border-input bg-muted/30 hover:bg-muted/60",
            s
          ),
          children: [
            /* @__PURE__ */ a(
              ba,
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
                    Tt(i),
                    " per file"
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ a(
              ce,
              {
                ...b,
                ref: T,
                type: "file",
                accept: u,
                multiple: d,
                disabled: E,
                className: "sr-only",
                "aria-invalid": !!z,
                onChange: D
              }
            )
          ]
        }
      ),
      w.length > 0 && /* @__PURE__ */ a(
        "div",
        {
          className: o(
            "grid gap-2",
            m ? "grid-cols-3" : "grid-cols-4 sm:grid-cols-5 md:grid-cols-6"
          ),
          children: w.map(({ file: P, url: $ }, G) => /* @__PURE__ */ a(
            gn,
            {
              url: $,
              name: P.name,
              type: P.type,
              onRemove: () => L(G),
              mobile: m,
              disabled: E,
              draggable: !E && w.length > 1,
              isDragging: F === G,
              isDragOver: R === G,
              onDragStart: V(G),
              onDragOver: M(G),
              onDrop: N(G),
              onDragEnd: I,
              canMoveLeft: G > 0,
              canMoveRight: G < w.length - 1,
              onMoveLeft: () => j(G, G - 1),
              onMoveRight: () => j(G, G + 1)
            },
            $
          ))
        }
      ),
      z && /* @__PURE__ */ a(
        Y,
        {
          variant: "body-sm",
          className: "text-destructive first-letter:uppercase",
          children: z
        }
      ),
      r && !z && /* @__PURE__ */ a(
        Y,
        {
          variant: "body-sm",
          className: "text-muted-foreground first-letter:uppercase",
          children: r
        }
      )
    ] });
  }
);
fn.displayName = "FormMedia";
function gn({
  url: e,
  name: t,
  type: r,
  onRemove: n,
  mobile: s,
  disabled: i,
  draggable: d,
  isDragging: l,
  isDragOver: u,
  onDragStart: m,
  onDragOver: f,
  onDrop: x,
  onDragEnd: v,
  canMoveLeft: b,
  canMoveRight: y,
  onMoveLeft: w,
  onMoveRight: h
}) {
  const [k, g] = c.useState(!1), C = r.startsWith("image/"), T = r.startsWith("video/"), _ = r === "application/pdf";
  return /* @__PURE__ */ p(
    "div",
    {
      draggable: d,
      onDragStart: m,
      onDragOver: f,
      onDrop: x,
      onDragEnd: v,
      className: o(
        "group relative aspect-square rounded-md overflow-hidden",
        "border border-border bg-muted",
        s ? "rounded-lg" : "rounded-md",
        d && "cursor-grab active:cursor-grabbing",
        l && "opacity-40",
        u && "ring-2 ring-primary ring-offset-1"
      ),
      children: [
        k || !(C || T) ? (
          /* Fallback tile: PDFs, unrecognised types, or media that failed to load */
          /* @__PURE__ */ p("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-1 p-1", children: [
            _ ? /* @__PURE__ */ a(xa, { className: "size-5 text-muted-foreground" }) : T ? /* @__PURE__ */ a(ya, { className: "size-5 text-muted-foreground" }) : /* @__PURE__ */ a(wa, { className: "size-5 text-muted-foreground" }),
            /* @__PURE__ */ a("span", { className: "text-[10px] text-muted-foreground text-center line-clamp-2 break-all leading-tight", children: t })
          ] })
        ) : T ? /* @__PURE__ */ p(Ve, { children: [
          /* @__PURE__ */ a(
            "video",
            {
              src: e,
              muted: !0,
              playsInline: !0,
              preload: "metadata",
              onError: () => g(!0),
              className: "absolute inset-0 w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ a("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ a("div", { className: "flex items-center justify-center rounded-full bg-background/70 size-6", children: /* @__PURE__ */ a(Na, { className: "size-3 text-foreground fill-current" }) }) })
        ] }) : /* @__PURE__ */ a(
          "img",
          {
            src: e,
            alt: t,
            onError: () => g(!0),
            className: "absolute inset-0 w-full h-full object-cover"
          }
        ),
        !i && /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            "aria-label": `Remove ${t}`,
            onClick: n,
            className: o(
              "absolute top-1 right-1 z-10",
              "flex items-center justify-center",
              "rounded-full bg-background/80 backdrop-blur-sm",
              "text-foreground shadow-sm",
              "transition-opacity",
              s ? "size-6 opacity-100" : "size-5 opacity-0 group-hover:opacity-100",
              // hover reveal on desktop
              "hover:bg-destructive hover:text-destructive-foreground",
              "focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring"
            ),
            children: /* @__PURE__ */ a(He, { className: s ? "size-3.5" : "size-3" })
          }
        ),
        !i && (b || y) && /* @__PURE__ */ p(
          "div",
          {
            className: o(
              "absolute bottom-1 left-1 right-1 z-10",
              "flex items-center justify-center gap-1",
              "transition-opacity",
              s ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            ),
            children: [
              /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  "aria-label": `Move ${t} left`,
                  onClick: w,
                  disabled: !b,
                  className: o(
                    "flex items-center justify-center",
                    "rounded-full bg-background/80 backdrop-blur-sm",
                    "text-foreground shadow-sm",
                    s ? "size-6" : "size-5",
                    "disabled:opacity-30 disabled:pointer-events-none",
                    "hover:bg-accent",
                    "focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring"
                  ),
                  children: /* @__PURE__ */ a(ke, { className: s ? "size-3.5" : "size-3" })
                }
              ),
              /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  "aria-label": `Move ${t} right`,
                  onClick: h,
                  disabled: !y,
                  className: o(
                    "flex items-center justify-center",
                    "rounded-full bg-background/80 backdrop-blur-sm",
                    "text-foreground shadow-sm",
                    s ? "size-6" : "size-5",
                    "disabled:opacity-30 disabled:pointer-events-none",
                    "hover:bg-accent",
                    "focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring"
                  ),
                  children: /* @__PURE__ */ a(ge, { className: s ? "size-3.5" : "size-3" })
                }
              )
            ]
          }
        )
      ]
    }
  );
}
const vn = O(
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
), hn = c.forwardRef(
  ({ className: e, variant: t, size: r, count: n, ...s }, i) => /* @__PURE__ */ a(
    "span",
    {
      ref: i,
      className: o(vn({ variant: t, size: r }), e),
      ...s,
      children: n
    }
  )
);
hn.displayName = "CountBadge";
function Ms({
  ...e
}) {
  return /* @__PURE__ */ a(Re.Root, { "data-slot": "accordion", ...e });
}
function Is({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Re.Item,
    {
      "data-slot": "accordion-item",
      className: o("border-b last:border-b-0", e),
      ...t
    }
  );
}
function Rs({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ a(Re.Header, { className: "flex", children: /* @__PURE__ */ p(
    Re.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: o(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ a(Ye, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function _s({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    Re.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...r,
      children: /* @__PURE__ */ a("div", { className: o("pt-0 pb-4", e), children: t })
    }
  );
}
const bn = O(
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
function Ts({
  className: e,
  variant: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: o(bn({ variant: t }), e),
      ...r
    }
  );
}
function Ds({ className: e, ...t }) {
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
function Ps({ className: e, ...t }) {
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
function js({
  ...e
}) {
  return /* @__PURE__ */ a(le.Root, { "data-slot": "alert-dialog", ...e });
}
function Es({
  ...e
}) {
  return /* @__PURE__ */ a(le.Trigger, { "data-slot": "alert-dialog-trigger", ...e });
}
function xn({
  ...e
}) {
  return /* @__PURE__ */ a(le.Portal, { "data-slot": "alert-dialog-portal", ...e });
}
function yn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    le.Overlay,
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
function As({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(xn, { children: [
    /* @__PURE__ */ a(yn, {}),
    /* @__PURE__ */ a(
      le.Content,
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
function Ls({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: o("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function Os({ className: e, ...t }) {
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
function $s({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    le.Title,
    {
      "data-slot": "alert-dialog-title",
      className: o("text-lg font-semibold", e),
      ...t
    }
  );
}
function Fs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    le.Description,
    {
      "data-slot": "alert-dialog-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Vs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    le.Action,
    {
      className: o(ie(), e),
      ...t
    }
  );
}
function Bs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    le.Cancel,
    {
      className: o(ie({ variant: "outline" }), e),
      ...t
    }
  );
}
function Ys({
  ...e
}) {
  return /* @__PURE__ */ a(Ba.Root, { "data-slot": "aspect-ratio", ...e });
}
function Gs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    mt.Root,
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
function Us({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    mt.Image,
    {
      "data-slot": "avatar-image",
      className: o("aspect-square size-full", e),
      ...t
    }
  );
}
function Hs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    mt.Fallback,
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
const wn = O(
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
function Ks({
  className: e,
  variant: t,
  asChild: r = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    r ? te : "span",
    {
      "data-slot": "badge",
      className: o(wn({ variant: t }), e),
      ...n
    }
  );
}
function Xs({ ...e }) {
  return /* @__PURE__ */ a("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function qs({ className: e, ...t }) {
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
function Ws({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: o("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function Js({
  asChild: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    e ? te : "a",
    {
      "data-slot": "breadcrumb-link",
      className: o("hover:text-foreground transition-colors", t),
      ...r
    }
  );
}
function Zs({ className: e, ...t }) {
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
function Qs({
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
      children: e ?? /* @__PURE__ */ a(ge, {})
    }
  );
}
function ei({
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
        /* @__PURE__ */ a(ka, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
const Nn = c.forwardRef(
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
Nn.displayName = "ButtonGroup";
function ti({
  className: e,
  orientation: t = "vertical",
  decorative: r = !0,
  ...n
}) {
  return /* @__PURE__ */ a(
    Lt.Root,
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
function ai({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? te : "span",
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
function kn({
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
  const f = U(e ?? "2"), x = t !== void 0 ? U(t) : void 0, v = r !== void 0 ? U(r) : void 0, b = x !== void 0 && x !== "none" ? `px-[var(--spacing-${x})]` : "", y = v !== void 0 && v !== "none" ? `py-[var(--spacing-${v})]` : "", w = f !== void 0 && f !== "none" && x === void 0 && v === void 0 ? `p-[var(--spacing-${f})]` : "", h = n !== void 0 ? U(n) : void 0, k = s !== void 0 ? U(s) : void 0, g = i !== void 0 ? U(i) : void 0, C = k !== void 0 && k !== "none" ? `mx-[var(--spacing-${k})]` : "", T = g !== void 0 && g !== "none" ? `my-[var(--spacing-${g})]` : "", _ = h !== void 0 && h !== "none" && k === void 0 && g === void 0 ? `m-[var(--spacing-${h})]` : "", L = d ? {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    inner: "shadow-inner",
    outline: "shadow-outline",
    default: "shadow"
  }[d] : "", j = {
    auto: "w-auto",
    full: "w-full",
    fit: "w-fit",
    screen: "w-screen"
  }, F = {
    auto: "h-auto",
    full: "h-full",
    fit: "h-fit",
    screen: "h-screen"
  }, S = l ? j[l] : "", R = u ? F[u] : "";
  return [
    w,
    b,
    y,
    _,
    C,
    T,
    L,
    S,
    R,
    m || ""
  ].filter(Boolean).join(" ");
}
function ri({
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
        kn({ p: t, px: r, py: n, m: s, mx: i, my: d, shadow: l, w: u, h: m, display: f }),
        e
      ),
      ...x
    }
  );
}
function ni({ className: e, ...t }) {
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
function oi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "h4",
    {
      "data-slot": "card-title",
      className: o("leading-none", e),
      ...t
    }
  );
}
function si({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "card-description",
      className: o("text-muted-foreground", e),
      ...t
    }
  );
}
function ii({ className: e, ...t }) {
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
function di({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-content",
      className: o("px-6 [&:last-child]:pb-6", e),
      ...t
    }
  );
}
function li({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-footer",
      className: o("flex items-center px-6 pb-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const Qt = c.createContext(null);
function We() {
  const e = c.useContext(Qt);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function ci({
  orientation: e = "horizontal",
  opts: t,
  setApi: r,
  plugins: n,
  className: s,
  children: i,
  ...d
}) {
  const [l, u] = Ya(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    n
  ), [m, f] = c.useState(!1), [x, v] = c.useState(!1), b = c.useCallback((k) => {
    k && (f(k.canScrollPrev()), v(k.canScrollNext()));
  }, []), y = c.useCallback(() => {
    u?.scrollPrev();
  }, [u]), w = c.useCallback(() => {
    u?.scrollNext();
  }, [u]), h = c.useCallback(
    (k) => {
      k.key === "ArrowLeft" ? (k.preventDefault(), y()) : k.key === "ArrowRight" && (k.preventDefault(), w());
    },
    [y, w]
  );
  return c.useEffect(() => {
    !u || !r || r(u);
  }, [u, r]), c.useEffect(() => {
    if (u)
      return b(u), u.on("reInit", b), u.on("select", b), () => {
        u?.off("select", b);
      };
  }, [u, b]), /* @__PURE__ */ a(
    Qt.Provider,
    {
      value: {
        carouselRef: l,
        api: u,
        opts: t,
        orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: y,
        scrollNext: w,
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
function ui({ className: e, ...t }) {
  const { carouselRef: r, orientation: n } = We();
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
function pi({ className: e, ...t }) {
  const { orientation: r } = We();
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
function mi({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: s, scrollPrev: i, canScrollPrev: d } = We();
  return /* @__PURE__ */ p(
    Xe,
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
        /* @__PURE__ */ a(Ca, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function fi({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: s, scrollNext: i, canScrollNext: d } = We();
  return /* @__PURE__ */ p(
    Xe,
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
        /* @__PURE__ */ a(Sa, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const Cn = { light: "", dark: ".dark" }, ea = c.createContext(null);
function ta() {
  const e = c.useContext(ea);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function gi({
  id: e,
  className: t,
  children: r,
  config: n,
  ...s
}) {
  const i = c.useId(), d = `chart-${e || i.replace(/:/g, "")}`;
  return /* @__PURE__ */ a(ea.Provider, { value: { config: n }, children: /* @__PURE__ */ p(
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
        /* @__PURE__ */ a(Sn, { id: d, config: n }),
        /* @__PURE__ */ a(ft.ResponsiveContainer, { children: r })
      ]
    }
  ) });
}
const Sn = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(
    ([, n]) => n.theme || n.color
  );
  return r.length ? /* @__PURE__ */ a(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(Cn).map(
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
}, vi = ft.Tooltip;
function hi({
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
  const { config: b } = ta(), y = c.useMemo(() => {
    if (s || !t?.length)
      return null;
    const [h] = t, k = `${v || h?.dataKey || h?.name || "value"}`, g = pt(b, h, k), C = !v && typeof d == "string" ? b[d]?.label || d : g?.label;
    return l ? /* @__PURE__ */ a("div", { className: o("font-medium", u), children: l(C, t) }) : C ? /* @__PURE__ */ a("div", { className: o("font-medium", u), children: C }) : null;
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
  const w = t.length === 1 && n !== "dot";
  return /* @__PURE__ */ p(
    "div",
    {
      className: o(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        r
      ),
      children: [
        w ? null : y,
        /* @__PURE__ */ a("div", { className: "grid gap-1.5", children: t.map((h, k) => {
          const g = `${x || h.name || h.dataKey || "value"}`, C = pt(b, h, g), T = f || h.payload.fill || h.color;
          return /* @__PURE__ */ a(
            "div",
            {
              className: o(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                n === "dot" && "items-center"
              ),
              children: m && h?.value !== void 0 && h.name ? m(h.value, h.name, h, k, h.payload) : /* @__PURE__ */ p(Ve, { children: [
                C?.icon ? /* @__PURE__ */ a(C.icon, {}) : !i && /* @__PURE__ */ a(
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
                      w ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ p("div", { className: "grid gap-1.5", children: [
                        w ? y : null,
                        /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: C?.label || h.name })
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
const bi = ft.Legend;
function xi({
  className: e,
  hideIcon: t = !1,
  payload: r,
  verticalAlign: n = "bottom",
  nameKey: s
}) {
  const { config: i } = ta();
  return r?.length ? /* @__PURE__ */ a(
    "div",
    {
      className: o(
        "flex items-center justify-center gap-4",
        n === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: r.map((d) => {
        const l = `${s || d.dataKey || "value"}`, u = pt(i, d, l);
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
function pt(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let s = r;
  return r in t && typeof t[r] == "string" ? s = t[r] : n && r in n && typeof n[r] == "string" && (s = n[r]), s in e ? e[s] : e[r];
}
function zn({
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
  const f = U(e), x = t !== void 0 ? U(t) : void 0, v = r !== void 0 ? U(r) : void 0, b = x !== void 0 && x !== "none" ? `px-[var(--spacing-${x})]` : "", y = v !== void 0 && v !== "none" ? `py-[var(--spacing-${v})]` : "", w = f !== void 0 && f !== "none" && x === void 0 && v === void 0 ? `p-[var(--spacing-${f})]` : "", h = n !== void 0 ? U(n) : void 0, k = s !== void 0 ? U(s) : void 0, g = i !== void 0 ? U(i) : void 0, C = k !== void 0 && k !== "none" ? `mx-[var(--spacing-${k})]` : "", T = g !== void 0 && g !== "none" ? `my-[var(--spacing-${g})]` : "", _ = h !== void 0 && h !== "none" && k === void 0 && g === void 0 ? `m-[var(--spacing-${h})]` : "", L = d ? {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    inner: "shadow-inner",
    outline: "shadow-outline",
    default: "shadow"
  }[d] : "", j = {
    auto: "w-auto",
    full: "w-full",
    fit: "w-fit",
    screen: "w-screen"
  }, F = {
    auto: "h-auto",
    full: "h-full",
    fit: "h-fit",
    screen: "h-screen"
  }, S = l ? j[l] : "", R = u ? F[u] : "";
  return [
    w,
    b,
    y,
    _,
    C,
    T,
    L,
    S,
    R,
    m || ""
  ].filter(Boolean).join(" ");
}
function yi({
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
    gt.Root,
    {
      "data-slot": "collapsible",
      className: o(
        zn({
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
function wi(e) {
  return /* @__PURE__ */ a(
    gt.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      className: o("cursor-pointer", e.className),
      ...e
    }
  );
}
function Ni({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    gt.CollapsibleContent,
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
function Mn({ ...e }) {
  return /* @__PURE__ */ a(H.Root, { "data-slot": "dialog", ...e });
}
function ki({
  ...e
}) {
  return /* @__PURE__ */ a(H.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function In({
  ...e
}) {
  return /* @__PURE__ */ a(H.Portal, { "data-slot": "dialog-portal", ...e });
}
function Ci({
  ...e
}) {
  return /* @__PURE__ */ a(H.Close, { "data-slot": "dialog-close", ...e });
}
function Rn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    H.Overlay,
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
function _n({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(In, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ a(Rn, {}),
    /* @__PURE__ */ p(
      H.Content,
      {
        "data-slot": "dialog-content",
        className: o(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...r,
        children: [
          t,
          /* @__PURE__ */ p(H.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [
            /* @__PURE__ */ a(Et, {}),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function Tn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-header",
      className: o("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function Si({ className: e, ...t }) {
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
function Dn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    H.Title,
    {
      "data-slot": "dialog-title",
      className: o("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function Pn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    H.Description,
    {
      "data-slot": "dialog-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function jn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ve,
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
function zi({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: r,
  ...n
}) {
  return /* @__PURE__ */ p(Mn, { ...n, children: [
    /* @__PURE__ */ p(Tn, { className: "sr-only", children: [
      /* @__PURE__ */ a(Dn, { children: e }),
      /* @__PURE__ */ a(Pn, { children: t })
    ] }),
    /* @__PURE__ */ a(_n, { className: "overflow-hidden p-0", children: /* @__PURE__ */ a(jn, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: r }) })
  ] });
}
function Mi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ a(Be, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ a(
          ve.Input,
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
function Ii({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ve.List,
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
function Ri({
  ...e
}) {
  return /* @__PURE__ */ a(
    ve.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function _i({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ve.Group,
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
function Ti({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ve.Separator,
    {
      "data-slot": "command-separator",
      className: o("bg-border -mx-1 h-px", e),
      ...t
    }
  );
}
function Di({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ve.Item,
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
function Pi({ className: e, ...t }) {
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
function ji({
  ...e
}) {
  return /* @__PURE__ */ a(q.Root, { "data-slot": "context-menu", ...e });
}
function Ei({
  ...e
}) {
  return /* @__PURE__ */ a(q.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function En({
  ...e
}) {
  return /* @__PURE__ */ a(q.Group, { "data-slot": "context-menu-group", ...e });
}
function Ai({
  ...e
}) {
  return /* @__PURE__ */ a(q.Portal, { "data-slot": "context-menu-portal", ...e });
}
function Li({
  ...e
}) {
  return /* @__PURE__ */ a(q.Sub, { "data-slot": "context-menu-sub", ...e });
}
function Oi({
  ...e
}) {
  return /* @__PURE__ */ a(
    q.RadioGroup,
    {
      "data-slot": "context-menu-radio-group",
      ...e
    }
  );
}
function $i({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    q.SubTrigger,
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
        /* @__PURE__ */ a(Ke, { className: "ml-auto" })
      ]
    }
  );
}
function Fi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    q.SubContent,
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
function Vi({
  className: e,
  loading: t = !1,
  apiError: r,
  emptyText: n = "No Options",
  children: s,
  ...i
}) {
  const d = c.Children.toArray(s).some(
    (l) => c.isValidElement(l) && (l.type === An || l.type === En)
  );
  return /* @__PURE__ */ a(q.Portal, { children: /* @__PURE__ */ a(
    q.Content,
    {
      "data-slot": "context-menu-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...i,
      children: t ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground", children: /* @__PURE__ */ a(me, {}) }) : r?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6", children: /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: "text-destructive underline text-sm px-2 py-1 rounded hover:bg-destructive/10",
          onClick: r.onClick,
          children: r.text || "Error"
        }
      ) }) : d ? s : /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground gap-2", children: [
        /* @__PURE__ */ a(fe, { className: "size-8 opacity-60" }),
        /* @__PURE__ */ a("span", { className: "text-xs", children: n })
      ] })
    }
  ) });
}
function An({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    q.Item,
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
function Bi({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    q.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(q.ItemIndicator, { children: /* @__PURE__ */ a(Ne, { className: "size-4" }) }) }),
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
    q.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(q.ItemIndicator, { children: /* @__PURE__ */ a(Ge, { className: "size-2 fill-current" }) }) }),
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
    q.Label,
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
function Ui({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    q.Separator,
    {
      "data-slot": "context-menu-separator",
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
      "data-slot": "context-menu-shortcut",
      className: o(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
function Ki({ ...e }) {
  return /* @__PURE__ */ a(ue.Root, { "data-slot": "drawer", ...e });
}
function Xi({
  ...e
}) {
  return /* @__PURE__ */ a(ue.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function Ln({
  ...e
}) {
  return /* @__PURE__ */ a(ue.Portal, { "data-slot": "drawer-portal", ...e });
}
function qi({
  ...e
}) {
  return /* @__PURE__ */ a(ue.Close, { "data-slot": "drawer-close", ...e });
}
function On({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ue.Overlay,
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
function Wi({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "drawer-body", className: o("flex-1", e), ...t, children: t.children });
}
function Ji({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(Ln, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ a(On, {}),
    /* @__PURE__ */ p(
      ue.Content,
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
function Zi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-header",
      className: o("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function Qi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-footer",
      className: o("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function ed({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ue.Title,
    {
      "data-slot": "drawer-title",
      className: o("text-foreground font-semibold", e),
      ...t
    }
  );
}
function td({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ue.Description,
    {
      "data-slot": "drawer-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function ad({
  ...e
}) {
  return /* @__PURE__ */ a(W.Root, { "data-slot": "dropdown-menu", ...e });
}
function rd({
  ...e
}) {
  return /* @__PURE__ */ a(W.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function nd({
  ...e
}) {
  return /* @__PURE__ */ a(
    W.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function od({
  className: e,
  sideOffset: t = 4,
  loading: r = !1,
  apiError: n,
  emptyText: s = "No Options",
  children: i,
  ...d
}) {
  const l = c.Children.toArray(i).some(
    (u) => c.isValidElement(u) && (u.type === ra || u.type === aa)
  );
  return /* @__PURE__ */ a(W.Portal, { children: /* @__PURE__ */ a(
    W.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...d,
      children: r ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground", children: /* @__PURE__ */ a(me, {}) }) : n?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6", children: /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: "text-destructive underline text-sm px-2 py-1 rounded hover:bg-destructive/10",
          onClick: n.onClick,
          children: n.text || "Error"
        }
      ) }) : l ? i : /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground gap-2", children: [
        /* @__PURE__ */ a(fe, { className: "size-8 opacity-60" }),
        /* @__PURE__ */ a("span", { className: "text-xs", children: s })
      ] })
    }
  ) });
}
function aa({
  ...e
}) {
  return /* @__PURE__ */ a(W.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function ra({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    W.Item,
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
function sd({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    W.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(W.ItemIndicator, { children: /* @__PURE__ */ a(Ne, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function id({
  ...e
}) {
  return /* @__PURE__ */ a(
    W.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...e
    }
  );
}
function dd({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(
    W.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(W.ItemIndicator, { children: /* @__PURE__ */ a(Ge, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function ld({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    W.Label,
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
function cd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    W.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: o("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function ud({
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
function pd({
  ...e
}) {
  return /* @__PURE__ */ a(W.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function md({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    W.SubTrigger,
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
        /* @__PURE__ */ a(Ke, { className: "ml-auto size-4" })
      ]
    }
  );
}
function fd({
  className: e,
  loading: t = !1,
  apiError: r,
  emptyText: n = "No Options",
  children: s,
  ...i
}) {
  const d = c.Children.toArray(s).some(
    (l) => c.isValidElement(l) && (l.type === ra || l.type === aa)
  );
  return /* @__PURE__ */ a(
    W.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...i,
      children: t ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground", children: /* @__PURE__ */ a(me, {}) }) : r?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6", children: /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: "text-destructive underline text-sm px-2 py-1 rounded hover:bg-destructive/10",
          onClick: r.onClick,
          children: r.text || "Error"
        }
      ) }) : d ? s : /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground gap-2", children: [
        /* @__PURE__ */ a(fe, { className: "size-8 opacity-60" }),
        /* @__PURE__ */ a("span", { className: "text-xs", children: n })
      ] })
    }
  );
}
const $n = c.forwardRef(
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
$n.displayName = "Empty";
const Fn = c.forwardRef(
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
Fn.displayName = "EmptyHeader";
const na = c.forwardRef(
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
na.displayName = "EmptyMedia";
const Vn = c.forwardRef(
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
Vn.displayName = "EmptyTitle";
const Bn = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
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
Bn.displayName = "EmptyDescription";
const oa = c.forwardRef(
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
oa.displayName = "EmptyContent";
const Yn = c.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ a(
    na,
    {
      ref: r,
      "data-slot": "empty-icon",
      variant: "icon",
      className: e,
      ...t
    }
  )
);
Yn.displayName = "EmptyIcon";
const Gn = c.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ a(
    oa,
    {
      ref: r,
      "data-slot": "empty-actions",
      className: e,
      ...t
    }
  )
);
Gn.displayName = "EmptyActions";
const Un = c.forwardRef(
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
Un.displayName = "FieldSet";
const Hn = c.forwardRef(
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
Hn.displayName = "FieldLegend";
const Kn = c.forwardRef(
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
Kn.displayName = "FieldGroup";
const Xn = c.forwardRef(
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
Xn.displayName = "Field";
const qn = c.forwardRef(
  ({ className: e, children: t, required: r, asChild: n = !1, ...s }, i) => {
    if (n) {
      const d = c.Children.toArray(t).find(
        c.isValidElement
      );
      if (!d) return null;
      const l = d.props.children, u = r ? c.cloneElement(
        d,
        void 0,
        /* @__PURE__ */ p(Ve, { children: [
          l,
          /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
        ] })
      ) : d;
      return /* @__PURE__ */ a(
        te,
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
qn.displayName = "FieldLabel";
const Wn = c.forwardRef(
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
Wn.displayName = "FieldContent";
const Jn = c.forwardRef(
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
Jn.displayName = "FieldTitle";
const sa = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
  "p",
  {
    ref: n,
    "data-slot": "field-description",
    className: o("text-body-sm text-muted-foreground", e),
    ...r,
    children: t
  }
));
sa.displayName = "FieldDescription";
const Zn = c.forwardRef(
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
Zn.displayName = "FieldError";
const Qn = c.forwardRef(
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
Qn.displayName = "FieldSeparator";
const eo = sa;
eo.displayName = "FieldHelpText";
const to = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "p",
  {
    ref: r,
    "data-slot": "field-error-text",
    role: "alert",
    className: o("text-body-sm text-destructive font-medium", e),
    ...t
  }
));
to.displayName = "FieldErrorText";
const gd = Ga, ia = c.createContext(
  {}
), vd = ({
  ...e
}) => /* @__PURE__ */ a(ia.Provider, { value: { name: e.name }, children: /* @__PURE__ */ a(Ka, { ...e }) }), Je = () => {
  const e = c.useContext(ia), t = c.useContext(da), { getFieldState: r } = Ua(), n = Ha({ name: e.name }), s = r(e.name, n);
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
}, da = c.createContext(
  {}
);
function hd({ className: e, ...t }) {
  const r = c.useId();
  return /* @__PURE__ */ a(da.Provider, { value: { id: r }, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "form-item",
      className: o("grid gap-2", e),
      ...t
    }
  ) });
}
function bd({
  className: e,
  ...t
}) {
  const { error: r, formItemId: n } = Je();
  return /* @__PURE__ */ a(
    ae,
    {
      "data-slot": "form-label",
      "data-error": !!r,
      className: o("data-[error=true]:text-destructive", e),
      htmlFor: n,
      ...t
    }
  );
}
function xd({ ...e }) {
  const { error: t, formItemId: r, formDescriptionId: n, formMessageId: s } = Je();
  return /* @__PURE__ */ a(
    te,
    {
      "data-slot": "form-control",
      id: r,
      "aria-describedby": t ? `${n} ${s}` : `${n}`,
      "aria-invalid": !!t,
      ...e
    }
  );
}
function yd({ className: e, ...t }) {
  const { formDescriptionId: r } = Je();
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
function wd({ className: e, ...t }) {
  const { error: r, formMessageId: n } = Je(), s = r ? String(r?.message ?? "") : t.children;
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
function Nd({
  ...e
}) {
  return /* @__PURE__ */ a(_e.Root, { "data-slot": "hover-card", ...e });
}
function kd({
  ...e
}) {
  return /* @__PURE__ */ a(_e.Trigger, { "data-slot": "hover-card-trigger", ...e });
}
function Cd({
  className: e,
  align: t = "center",
  sideOffset: r = 4,
  ...n
}) {
  return /* @__PURE__ */ a(_e.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ a(
    _e.Content,
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
function Sd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    _e.Arrow,
    {
      "data-slot": "hover-card-arrow",
      className: o("fill-popover", e),
      ...t
    }
  );
}
const ao = c.forwardRef(
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
ao.displayName = "InputGroup";
const ro = c.forwardRef(
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
ro.displayName = "InputLeftAddon";
const no = c.forwardRef(
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
no.displayName = "InputRightAddon";
const oo = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
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
oo.displayName = "InputLeftElement";
const so = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
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
so.displayName = "InputRightElement";
function la({
  className: e,
  orientation: t = "horizontal",
  decorative: r = !0,
  ...n
}) {
  return /* @__PURE__ */ a(
    Lt.Root,
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
const io = O(
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
), lo = c.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...s }, i) => /* @__PURE__ */ a(
    n ? te : "div",
    {
      ref: i,
      "data-slot": "item",
      "data-variant": t,
      "data-size": r,
      className: o(io({ variant: t, size: r, className: e })),
      ...s
    }
  )
);
lo.displayName = "Item";
function zd({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-group",
      className: o("flex flex-col rounded-md border bg-card p-1", e),
      ...t
    }
  );
}
function Md({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    la,
    {
      "data-slot": "item-separator",
      className: o("mx-2 w-auto", e),
      ...t
    }
  );
}
const co = O(
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
), uo = c.forwardRef(
  ({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      "data-slot": "item-media",
      "data-variant": t,
      className: o(
        co({ variant: t }),
        "group-data-[size=default]/item:size-10 group-data-[size=sm]/item:size-8",
        e
      ),
      ...r
    }
  )
);
uo.displayName = "ItemMedia";
const po = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
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
po.displayName = "ItemContent";
const mo = c.forwardRef(
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
mo.displayName = "ItemTitle";
const fo = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "p",
  {
    ref: r,
    "data-slot": "item-description",
    className: o("text-body-sm text-muted-foreground", e),
    ...t
  }
));
fo.displayName = "ItemDescription";
const go = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
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
go.displayName = "ItemActions";
const vo = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
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
vo.displayName = "ItemHeader";
const ho = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
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
ho.displayName = "ItemFooter";
const bo = c.forwardRef(
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
bo.displayName = "Kbd";
const xo = c.forwardRef(
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
xo.displayName = "KbdGroup";
function Id({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    J.Root,
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
function Rd({
  ...e
}) {
  return /* @__PURE__ */ a(J.Menu, { "data-slot": "menubar-menu", ...e });
}
function yo({
  ...e
}) {
  return /* @__PURE__ */ a(J.Group, { "data-slot": "menubar-group", ...e });
}
function wo({
  ...e
}) {
  return /* @__PURE__ */ a(J.Portal, { "data-slot": "menubar-portal", ...e });
}
function _d({
  ...e
}) {
  return /* @__PURE__ */ a(J.RadioGroup, { "data-slot": "menubar-radio-group", ...e });
}
function Td({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    J.Trigger,
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
function Dd({
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
    (f) => c.isValidElement(f) && (f.type === No || f.type === yo)
  );
  return /* @__PURE__ */ a(wo, { children: /* @__PURE__ */ a(
    J.Content,
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
      children: s ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground", children: /* @__PURE__ */ a(me, {}) }) : i?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6", children: /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: "text-destructive underline text-sm px-2 py-1 rounded hover:bg-destructive/10",
          onClick: i.onClick,
          children: i.text || "Error"
        }
      ) }) : m ? l : /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground gap-2", children: [
        /* @__PURE__ */ a(fe, { className: "size-8 opacity-60" }),
        /* @__PURE__ */ a("span", { className: "text-xs", children: d })
      ] })
    }
  ) });
}
function No({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    J.Item,
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
function Pd({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    J.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(J.ItemIndicator, { children: /* @__PURE__ */ a(Ne, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function jd({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(
    J.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(J.ItemIndicator, { children: /* @__PURE__ */ a(Ge, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Ed({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    J.Label,
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
function Ad({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    J.Separator,
    {
      "data-slot": "menubar-separator",
      className: o("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Ld({ className: e, ...t }) {
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
function Od({
  ...e
}) {
  return /* @__PURE__ */ a(J.Sub, { "data-slot": "menubar-sub", ...e });
}
function $d({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ p(
    J.SubTrigger,
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
        /* @__PURE__ */ a(Ke, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function Fd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    J.SubContent,
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
function Vd({
  className: e,
  children: t,
  viewport: r = !0,
  ...n
}) {
  return /* @__PURE__ */ p(
    pe.Root,
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
        r && /* @__PURE__ */ a(Co, {})
      ]
    }
  );
}
function Bd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    pe.List,
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
function Yd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    pe.Item,
    {
      "data-slot": "navigation-menu-item",
      className: o("relative", e),
      ...t
    }
  );
}
const ko = O(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function Gd({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ p(
    pe.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: o(ko(), "group", e),
      ...r,
      children: [
        t,
        " ",
        /* @__PURE__ */ a(
          Ye,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function Ud({
  className: e,
  loading: t = !1,
  apiError: r,
  emptyText: n = "No Options",
  children: s,
  ...i
}) {
  const d = c.Children.toArray(s).some(
    (l) => c.isValidElement(l) && l.type === So
  );
  return /* @__PURE__ */ a(
    pe.Content,
    {
      "data-slot": "navigation-menu-content",
      className: o(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        e
      ),
      ...i,
      children: t ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground", children: /* @__PURE__ */ a(me, {}) }) : r?.error ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-6", children: /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: "text-destructive underline text-sm px-2 py-1 rounded hover:bg-destructive/10",
          onClick: r.onClick,
          children: r.text || "Error"
        }
      ) }) : d ? s : /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center py-6 text-muted-foreground gap-2", children: [
        /* @__PURE__ */ a(fe, { className: "size-8 opacity-60" }),
        /* @__PURE__ */ a("span", { className: "text-xs", children: n })
      ] })
    }
  );
}
function Co({
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
        pe.Viewport,
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
function So({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    pe.Link,
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
function Hd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    pe.Indicator,
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
function Kd({ className: e, ...t }) {
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
function Xd({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "pagination-content",
      className: o("flex flex-row items-center gap-1", e),
      ...t
    }
  );
}
function qd({ ...e }) {
  return /* @__PURE__ */ a("li", { "data-slot": "pagination-item", ...e });
}
function ca({
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
        ie({
          variant: t ? "outline" : "ghost",
          size: r
        }),
        e
      ),
      ...n
    }
  );
}
function Wd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    ca,
    {
      "aria-label": "Go to previous page",
      size: "md",
      className: o("gap-1 px-2.5 sm:pl-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a(za, {}),
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function Jd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    ca,
    {
      "aria-label": "Go to next page",
      size: "md",
      className: o("gap-1 px-2.5 sm:pr-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ a(Ke, {})
      ]
    }
  );
}
function Zd({
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
        /* @__PURE__ */ a(Ma, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
function Qd({
  className: e,
  value: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    St.Root,
    {
      "data-slot": "progress",
      className: o(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        e
      ),
      ...r,
      children: /* @__PURE__ */ a(
        St.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function el({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    vt.PanelGroup,
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
function tl({
  ...e
}) {
  return /* @__PURE__ */ a(vt.Panel, { "data-slot": "resizable-panel", ...e });
}
function al({
  withHandle: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    vt.PanelResizeHandle,
    {
      "data-slot": "resizable-handle",
      className: o(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        t
      ),
      ...r,
      children: e && /* @__PURE__ */ a("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ a(Ia, { className: "size-2.5" }) })
    }
  );
}
const zo = O(
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
), Mo = O(
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
), Io = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(
  de.Root,
  {
    ref: n,
    className: o("flex flex-col gap-4", e),
    ...r,
    children: t
  }
));
Io.displayName = "SegmentControl";
const Ro = c.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
  de.List,
  {
    ref: n,
    className: o(zo({ variant: t }), e),
    ...r
  }
));
Ro.displayName = "SegmentControlList";
const _o = c.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
  de.Trigger,
  {
    ref: n,
    className: o(Mo({ variant: t }), e),
    ...r
  }
));
_o.displayName = "SegmentControlItem";
const rl = de.Content;
function To({ ...e }) {
  return /* @__PURE__ */ a(H.Root, { "data-slot": "sheet", ...e });
}
function nl({
  ...e
}) {
  return /* @__PURE__ */ a(H.Trigger, { "data-slot": "sheet-trigger", ...e });
}
function ol({
  ...e
}) {
  return /* @__PURE__ */ a(H.Close, { "data-slot": "sheet-close", ...e });
}
function Do({
  ...e
}) {
  return /* @__PURE__ */ a(H.Portal, { "data-slot": "sheet-portal", ...e });
}
function Po({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    H.Overlay,
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
function jo({
  className: e,
  children: t,
  side: r = "right",
  ...n
}) {
  return /* @__PURE__ */ p(Do, { children: [
    /* @__PURE__ */ a(Po, {}),
    /* @__PURE__ */ p(
      H.Content,
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
          /* @__PURE__ */ p(H.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ a(Et, { className: "size-4" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function Eo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-header",
      className: o("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function sl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-footer",
      className: o("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function Ao({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    H.Title,
    {
      "data-slot": "sheet-title",
      className: o("text-foreground font-semibold", e),
      ...t
    }
  );
}
function Lo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    H.Description,
    {
      "data-slot": "sheet-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const at = 768;
function Oo() {
  const [e, t] = c.useState(void 0);
  return c.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${at - 1}px)`), n = () => {
      t(window.innerWidth < at);
    };
    return r.addEventListener("change", n), t(window.innerWidth < at), () => r.removeEventListener("change", n);
  }, []), !!e;
}
function Dt({ className: e, ...t }) {
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
const $o = "sidebar_state", Fo = 3600 * 24 * 7, Vo = "16rem", Bo = "18rem", Yo = "3rem", Go = "b", ua = c.createContext(null);
function Ze() {
  const e = c.useContext(ua);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function il({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: r,
  className: n,
  style: s,
  children: i,
  ...d
}) {
  const l = Oo(), [u, m] = c.useState(!1), [f, x] = c.useState(e), v = t ?? f, b = c.useCallback(
    (k) => {
      const g = typeof k == "function" ? k(v) : k;
      r ? r(g) : x(g), document.cookie = `${$o}=${g}; path=/; max-age=${Fo}`;
    },
    [r, v]
  ), y = c.useCallback(() => l ? m((k) => !k) : b((k) => !k), [l, b, m]);
  c.useEffect(() => {
    const k = (g) => {
      g.key === Go && (g.metaKey || g.ctrlKey) && (g.preventDefault(), y());
    };
    return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [y]);
  const w = v ? "expanded" : "collapsed", h = c.useMemo(
    () => ({
      state: w,
      open: v,
      setOpen: b,
      isMobile: l,
      openMobile: u,
      setOpenMobile: m,
      toggleSidebar: y
    }),
    [w, v, b, l, u, m, y]
  );
  return /* @__PURE__ */ a(ua.Provider, { value: h, children: /* @__PURE__ */ a(bt, { delayDuration: 0, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": Vo,
        "--sidebar-width-icon": Yo,
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
function he({
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
  const f = U(e), x = t !== void 0 ? U(t) : void 0, v = r !== void 0 ? U(r) : void 0, b = x !== void 0 && x !== "none" ? `px-[var(--spacing-${x})]` : "", y = v !== void 0 && v !== "none" ? `py-[var(--spacing-${v})]` : "", w = f !== void 0 && f !== "none" && x === void 0 && v === void 0 ? `p-[var(--spacing-${f})]` : "", h = n !== void 0 ? U(n) : void 0, k = s !== void 0 ? U(s) : void 0, g = i !== void 0 ? U(i) : void 0, C = k !== void 0 && k !== "none" ? `mx-[var(--spacing-${k})]` : "", T = g !== void 0 && g !== "none" ? `my-[var(--spacing-${g})]` : "", _ = h !== void 0 && h !== "none" && k === void 0 && g === void 0 ? `m-[var(--spacing-${h})]` : "", L = d ? {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    inner: "shadow-inner",
    outline: "shadow-outline",
    default: "shadow"
  }[d] : "", j = {
    auto: "w-auto",
    full: "w-full",
    fit: "w-fit",
    screen: "w-screen"
  }, F = {
    auto: "h-auto",
    full: "h-full",
    fit: "h-fit",
    screen: "h-screen"
  }, S = l ? j[l] : "", R = u ? F[u] : "";
  return [
    w,
    b,
    y,
    _,
    C,
    T,
    L,
    S,
    R,
    m || ""
  ].filter(Boolean).join(" ");
}
function dl({
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
  ...w
}) {
  const { isMobile: h, state: k, openMobile: g, setOpenMobile: C } = Ze(), T = he({
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
      ...w,
      children: s
    }
  ) : h ? /* @__PURE__ */ a(To, { open: g, onOpenChange: C, ...w, children: /* @__PURE__ */ p(
    jo,
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
        "--sidebar-width": Bo
      },
      side: e,
      children: [
        /* @__PURE__ */ p(Eo, { className: "sr-only", children: [
          /* @__PURE__ */ a(Ao, { children: "Sidebar" }),
          /* @__PURE__ */ a(Lo, { children: "Displays the mobile sidebar." })
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
function ll({
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
  const { toggleSidebar: b } = Ze(), y = he({
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
    Xe,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: o("size-7 cursor-pointer", y, e),
      onClick: (w) => {
        x?.(w), b();
      },
      ...v,
      children: [
        /* @__PURE__ */ a(Ra, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function cl({
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
  const { toggleSidebar: v } = Ze(), b = he({
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
function ul({
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
  const v = he({
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
function pl({
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
  const v = he({
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
    ce,
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
function ml({
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
  const v = he({
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
function fl({
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
  const v = he({
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
function gl({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    la,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: o("bg-sidebar-border mx-2 w-auto", e),
      ...t
    }
  );
}
function vl({ className: e, ...t }) {
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
function hl({ className: e, ...t }) {
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
function bl({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? te : "div",
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
function xl({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? te : "button",
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
function yl({
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
function wl({ className: e, ...t }) {
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
function Nl({ className: e, ...t }) {
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
const Uo = O(
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
function kl({
  asChild: e = !1,
  isActive: t = !1,
  variant: r = "default",
  size: n = "default",
  tooltip: s,
  className: i,
  ...d
}) {
  const l = e ? te : "button", { isMobile: u, state: m } = Ze(), f = /* @__PURE__ */ a(
    l,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": n,
      "data-active": t,
      className: o(Uo({ variant: r, size: n }), i),
      ...d
    }
  );
  return s ? (typeof s == "string" && (s = {
    children: s
  }), /* @__PURE__ */ p(Ft, { children: [
    /* @__PURE__ */ a(Vt, { asChild: !0, children: f }),
    /* @__PURE__ */ a(
      Bt,
      {
        side: "right",
        align: "center",
        hidden: m !== "collapsed" || u,
        ...s
      }
    )
  ] })) : f;
}
function Cl({
  className: e,
  asChild: t = !1,
  showOnHover: r = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    t ? te : "button",
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
function Sl({ className: e, ...t }) {
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
function zl({
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
          Dt,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ a(
          Dt,
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
function Ml({ className: e, ...t }) {
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
function Il({ className: e, ...t }) {
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
function Rl({
  asChild: e = !1,
  size: t = "md",
  isActive: r = !1,
  className: n,
  ...s
}) {
  return /* @__PURE__ */ a(
    e ? te : "a",
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
function _l({
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
    De.Root,
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
          De.Track,
          {
            "data-slot": "slider-track",
            className: o(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-4 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ a(
              De.Range,
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
          De.Thumb,
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
const Tl = ({ ...e }) => {
  const { theme: t = "system" } = Xa();
  return /* @__PURE__ */ a(
    qa,
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
function Dl({
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
      return xe.success(t, u);
    case "info":
      return xe.info(t, u);
    case "warning":
      return xe.warning(t, u);
    case "error":
      return xe.error(t, u);
    case "loading":
      return xe.loading(t, u);
    default:
      return xe(t, u);
  }
}
function Pl({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    zt.Root,
    {
      "data-slot": "switch",
      className: o(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-switch-background focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        zt.Thumb,
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
function jl({ className: e, ...t }) {
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
function El({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "thead",
    {
      "data-slot": "table-header",
      className: o("[&_tr]:border-b", e),
      ...t
    }
  );
}
function Al({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "table-body",
      className: o("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function Ll({ className: e, ...t }) {
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
function Ol({ className: e, ...t }) {
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
function $l({ className: e, ...t }) {
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
function Fl({ className: e, ...t }) {
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
function Vl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "caption",
    {
      "data-slot": "table-caption",
      className: o("text-muted-foreground mt-4 text-sm", e),
      ...t
    }
  );
}
function Bl({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    de.Root,
    {
      "data-slot": "tabs",
      className: o("flex flex-col gap-2", e),
      ...t
    }
  );
}
const Ho = O(
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
), Ko = c.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
  de.List,
  {
    ref: n,
    "data-slot": "tabs-list",
    className: o(Ho({ variant: t }), e),
    ...r
  }
));
Ko.displayName = de.List.displayName;
const Xo = O(
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
), qo = c.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a(
  de.Trigger,
  {
    ref: n,
    "data-slot": "tabs-trigger",
    className: o(Xo({ variant: t }), e),
    ...r
  }
));
qo.displayName = de.Trigger.displayName;
function Yl({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    de.Content,
    {
      "data-slot": "tabs-content",
      className: o("flex-1 outline-none", e),
      ...t
    }
  );
}
const pa = O(
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
function Gl({
  className: e,
  variant: t,
  size: r,
  ...n
}) {
  return /* @__PURE__ */ a(
    Wa.Root,
    {
      "data-slot": "toggle",
      className: o(pa({ variant: t, size: r, className: e })),
      ...n
    }
  );
}
const ma = c.createContext({
  size: "default",
  variant: "default"
});
function Ul({
  className: e,
  variant: t,
  size: r,
  children: n,
  ...s
}) {
  return /* @__PURE__ */ a(
    Ot.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": t,
      "data-size": r,
      className: o(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        e
      ),
      ...s,
      children: /* @__PURE__ */ a(ma.Provider, { value: { variant: t, size: r }, children: n })
    }
  );
}
function Hl({
  className: e,
  children: t,
  variant: r,
  size: n = "md",
  ...s
}) {
  const i = c.useContext(ma);
  return /* @__PURE__ */ a(
    Ot.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": i.variant || r,
      "data-size": i.size || n,
      className: o(
        pa({
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
const Wo = [
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
function Kl(e) {
  return e;
}
const fa = {
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
}, Jo = {
  ...fa,
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
}, ga = ja(void 0), va = "theme";
function Zo(e) {
  if (typeof window > "u")
    return null;
  const t = localStorage.getItem(e);
  return t === "light" || t === "dark" || t === "system" ? t : null;
}
function Xl({
  children: e,
  lightColors: t,
  darkColors: r,
  mode: n,
  defaultMode: s = "system",
  storageKey: i = va,
  onModeChange: d
}) {
  const l = t ?? fa, u = r ?? Jo, [m, f] = Ct(() => Zo(i) ?? s), [x, v] = Ct(!1), b = n !== void 0, y = b ? n : m;
  Ee(() => {
    if (typeof window > "u")
      return;
    const g = window.matchMedia("(prefers-color-scheme: dark)"), C = () => v(g.matches);
    return C(), g.addEventListener("change", C), () => {
      g.removeEventListener("change", C);
    };
  }, []);
  const w = y === "system" ? x ? "dark" : "light" : y;
  Ee(() => {
    if (typeof document > "u")
      return;
    const g = document.documentElement, C = w === "dark" ? u : l;
    for (const T of Wo)
      g.style.setProperty(`--${T}`, C[T]);
    g.classList.toggle("dark", w === "dark");
  }, [w, u, l]), Ee(() => {
    b || typeof window > "u" || localStorage.setItem(i, m);
  }, [m, b, i]);
  const h = Da(
    (g) => {
      b || f(g), d?.(g);
    },
    [b, d]
  ), k = Pa(() => ({
    mode: y,
    resolvedMode: w,
    setMode: h
  }), [w, y, h]);
  return /* @__PURE__ */ a(ga.Provider, { value: k, children: e });
}
function Qo() {
  const e = Ea(ga);
  if (!e)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}
function ql() {
  Ee(() => {
    if (typeof window > "u")
      return;
    const e = localStorage.getItem(va), t = document.documentElement;
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
function Wl({
  LightIcon: e = Ta,
  DarkIcon: t = _a,
  srText: r,
  iconSize: n = 20,
  className: s = "",
  iconClassName: i = ""
}) {
  const { resolvedMode: d, setMode: l } = Qo(), u = d === "dark";
  return /* @__PURE__ */ p(
    Xe,
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
const Jl = {
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
}, Zl = {
  none: "0px",
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  full: "9999px"
}, Ql = {
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
}, ec = {
  xs: ["12px", "16px"],
  sm: ["14px", "20px"],
  base: ["16px", "24px"],
  lg: ["18px", "28px"],
  xl: ["20px", "28px"],
  "2xl": ["24px", "32px"],
  "3xl": ["30px", "36px"],
  "4xl": ["36px", "40px"]
}, tc = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, ac = {
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
}, rc = {
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
  Ms as Accordion,
  _s as AccordionContent,
  Is as AccordionItem,
  Rs as AccordionTrigger,
  Ts as Alert,
  Ps as AlertDescription,
  js as AlertDialog,
  Vs as AlertDialogAction,
  Bs as AlertDialogCancel,
  As as AlertDialogContent,
  Fs as AlertDialogDescription,
  Os as AlertDialogFooter,
  Ls as AlertDialogHeader,
  yn as AlertDialogOverlay,
  xn as AlertDialogPortal,
  $s as AlertDialogTitle,
  Es as AlertDialogTrigger,
  Ds as AlertTitle,
  Ys as AspectRatio,
  Gs as Avatar,
  Hs as AvatarFallback,
  Us as AvatarImage,
  Ks as Badge,
  Mr as Bleed,
  Yt as Box,
  Xs as Breadcrumb,
  ei as BreadcrumbEllipsis,
  Ws as BreadcrumbItem,
  Js as BreadcrumbLink,
  qs as BreadcrumbList,
  Zs as BreadcrumbPage,
  Qs as BreadcrumbSeparator,
  Xe as Button,
  Nn as ButtonGroup,
  ti as ButtonGroupSeparator,
  ai as ButtonGroupText,
  et as Calendar,
  ri as Card,
  ii as CardAction,
  di as CardContent,
  si as CardDescription,
  li as CardFooter,
  ni as CardHeader,
  oi as CardTitle,
  ci as Carousel,
  ui as CarouselContent,
  pi as CarouselItem,
  fi as CarouselNext,
  mi as CarouselPrevious,
  xr as Center,
  gi as ChartContainer,
  bi as ChartLegend,
  xi as ChartLegendContent,
  Sn as ChartStyle,
  vi as ChartTooltip,
  hi as ChartTooltipContent,
  ht as Checkbox,
  hs as Chip,
  yi as Collapsible,
  Ni as CollapsibleContent,
  wi as CollapsibleTrigger,
  jn as Command,
  zi as CommandDialog,
  Ri as CommandEmpty,
  _i as CommandGroup,
  Mi as CommandInput,
  Di as CommandItem,
  Ii as CommandList,
  Ti as CommandSeparator,
  Pi as CommandShortcut,
  gr as Container,
  ji as ContextMenu,
  Bi as ContextMenuCheckboxItem,
  Vi as ContextMenuContent,
  En as ContextMenuGroup,
  An as ContextMenuItem,
  Gi as ContextMenuLabel,
  Ai as ContextMenuPortal,
  Oi as ContextMenuRadioGroup,
  Yi as ContextMenuRadioItem,
  Ui as ContextMenuSeparator,
  Hi as ContextMenuShortcut,
  Li as ContextMenuSub,
  Fi as ContextMenuSubContent,
  $i as ContextMenuSubTrigger,
  Ei as ContextMenuTrigger,
  hn as CountBadge,
  va as DEFAULT_THEME_STORAGE_KEY,
  Zt as DateTimePicker,
  Mn as Dialog,
  Ci as DialogClose,
  _n as DialogContent,
  Pn as DialogDescription,
  Si as DialogFooter,
  Tn as DialogHeader,
  Rn as DialogOverlay,
  In as DialogPortal,
  Dn as DialogTitle,
  ki as DialogTrigger,
  kr as Divider,
  Ki as Drawer,
  Wi as DrawerBody,
  qi as DrawerClose,
  Ji as DrawerContent,
  td as DrawerDescription,
  Qi as DrawerFooter,
  Zi as DrawerHeader,
  On as DrawerOverlay,
  Ln as DrawerPortal,
  ed as DrawerTitle,
  Xi as DrawerTrigger,
  ad as DropdownMenu,
  sd as DropdownMenuCheckboxItem,
  od as DropdownMenuContent,
  aa as DropdownMenuGroup,
  ra as DropdownMenuItem,
  ld as DropdownMenuLabel,
  rd as DropdownMenuPortal,
  id as DropdownMenuRadioGroup,
  dd as DropdownMenuRadioItem,
  cd as DropdownMenuSeparator,
  ud as DropdownMenuShortcut,
  pd as DropdownMenuSub,
  fd as DropdownMenuSubContent,
  md as DropdownMenuSubTrigger,
  nd as DropdownMenuTrigger,
  $n as Empty,
  Gn as EmptyActions,
  oa as EmptyContent,
  Bn as EmptyDescription,
  Fn as EmptyHeader,
  Yn as EmptyIcon,
  na as EmptyMedia,
  Vn as EmptyTitle,
  Xn as Field,
  Wn as FieldContent,
  sa as FieldDescription,
  Zn as FieldError,
  to as FieldErrorText,
  Kn as FieldGroup,
  eo as FieldHelpText,
  qn as FieldLabel,
  Hn as FieldLegend,
  Qn as FieldSeparator,
  Un as FieldSet,
  Jn as FieldTitle,
  gd as Form,
  sn as FormCalendar,
  dn as FormCheckbox,
  xd as FormControl,
  pn as FormDateTimePicker,
  yd as FormDescription,
  vd as FormField,
  an as FormInput,
  hd as FormItem,
  bd as FormLabel,
  fn as FormMedia,
  wd as FormMessage,
  Ir as FormMultiselect,
  zs as FormOTP,
  cn as FormPhoneInput,
  ln as FormRadioGroup,
  on as FormSelect,
  rn as FormTextarea,
  un as FormTimePicker,
  ur as Grid,
  mr as GridItem,
  yt as HStack,
  Nd as HoverCard,
  Sd as HoverCardArrow,
  Cd as HoverCardContent,
  kd as HoverCardTrigger,
  bs as Icon,
  ir as Inline,
  ce as Input,
  ao as InputGroup,
  ro as InputLeftAddon,
  oo as InputLeftElement,
  tn as InputOTP,
  ks as InputOTPGroup,
  Ss as InputOTPSeparator,
  Cs as InputOTPSlot,
  no as InputRightAddon,
  so as InputRightElement,
  lo as Item,
  go as ItemActions,
  po as ItemContent,
  fo as ItemDescription,
  ho as ItemFooter,
  zd as ItemGroup,
  vo as ItemHeader,
  uo as ItemMedia,
  Md as ItemSeparator,
  mo as ItemTitle,
  bo as Kbd,
  xo as KbdGroup,
  ae as Label,
  wr as LayoutAspectRatio,
  Id as Menubar,
  Pd as MenubarCheckboxItem,
  Dd as MenubarContent,
  yo as MenubarGroup,
  No as MenubarItem,
  Ed as MenubarLabel,
  Rd as MenubarMenu,
  wo as MenubarPortal,
  _d as MenubarRadioGroup,
  jd as MenubarRadioItem,
  Ad as MenubarSeparator,
  Ld as MenubarShortcut,
  Od as MenubarSub,
  Fd as MenubarSubContent,
  $d as MenubarSubTrigger,
  Td as MenubarTrigger,
  tr as Multiselect,
  Vd as NavigationMenu,
  Ud as NavigationMenuContent,
  Hd as NavigationMenuIndicator,
  Yd as NavigationMenuItem,
  So as NavigationMenuLink,
  Bd as NavigationMenuList,
  Gd as NavigationMenuTrigger,
  Co as NavigationMenuViewport,
  Kd as Pagination,
  Xd as PaginationContent,
  Zd as PaginationEllipsis,
  qd as PaginationItem,
  ca as PaginationLink,
  Jd as PaginationNext,
  Wd as PaginationPrevious,
  Kt as PhoneInput,
  Ce as Popover,
  xs as PopoverAnchor,
  qe as PopoverContent,
  Se as PopoverTrigger,
  Qd as Progress,
  Vr as RadioGroup,
  Br as RadioGroupItem,
  al as ResizableHandle,
  tl as ResizablePanel,
  el as ResizablePanelGroup,
  Yr as ScrollArea,
  Gr as ScrollBar,
  hr as Section,
  Io as SegmentControl,
  rl as SegmentControlContent,
  _o as SegmentControlItem,
  Ro as SegmentControlList,
  ot as Select,
  Oe as SelectContent,
  ys as SelectGroup,
  $e as SelectItem,
  ws as SelectLabel,
  Tr as SelectScrollDownButton,
  _r as SelectScrollUpButton,
  Ns as SelectSeparator,
  it as SelectTrigger,
  st as SelectValue,
  la as Separator,
  To as Sheet,
  ol as SheetClose,
  jo as SheetContent,
  Lo as SheetDescription,
  sl as SheetFooter,
  Eo as SheetHeader,
  Ao as SheetTitle,
  nl as SheetTrigger,
  dl as Sidebar,
  vl as SidebarContent,
  fl as SidebarFooter,
  hl as SidebarGroup,
  xl as SidebarGroupAction,
  yl as SidebarGroupContent,
  bl as SidebarGroupLabel,
  ml as SidebarHeader,
  pl as SidebarInput,
  ul as SidebarInset,
  wl as SidebarMenu,
  Cl as SidebarMenuAction,
  Sl as SidebarMenuBadge,
  kl as SidebarMenuButton,
  Nl as SidebarMenuItem,
  zl as SidebarMenuSkeleton,
  Ml as SidebarMenuSub,
  Rl as SidebarMenuSubButton,
  Il as SidebarMenuSubItem,
  il as SidebarProvider,
  cl as SidebarRail,
  gl as SidebarSeparator,
  ll as SidebarTrigger,
  Dt as Skeleton,
  _l as Slider,
  lr as Spacer,
  me as Spinner,
  Qa as SpinnerContainer,
  er as SpinnerOverlay,
  xt as Stack,
  Pl as Switch,
  jl as Table,
  Al as TableBody,
  Vl as TableCaption,
  Fl as TableCell,
  Ll as TableFooter,
  $l as TableHead,
  El as TableHeader,
  Ol as TableRow,
  Bl as Tabs,
  Yl as TabsContent,
  Ko as TabsList,
  qo as TabsTrigger,
  Ut as Textarea,
  Xl as ThemeProvider,
  Wl as ThemeToggle,
  Xt as TimePicker,
  Tl as Toaster,
  Gl as Toggle,
  Ul as ToggleGroup,
  Hl as ToggleGroupItem,
  Ft as Tooltip,
  Bt as TooltipContent,
  bt as TooltipProvider,
  Vt as TooltipTrigger,
  Y as Typography,
  re as VStack,
  Sr as Wrap,
  bn as alertVariants,
  wn as badgeVariants,
  ac as baseColors,
  ie as buttonVariants,
  Ja as checkboxVariants,
  o as cn,
  vn as countBadgeVariants,
  sc as cva,
  qt as dateTimePickerVariants,
  Jo as defaultDarkThemeColors,
  fa as defaultLightThemeColors,
  Kl as defineThemeColors,
  Ql as fontFamily,
  ec as fontSize,
  tc as fontWeight,
  Dr as inputVariants,
  dc as isValidPhoneNumber,
  co as itemMediaVariants,
  io as itemVariants,
  ko as navigationMenuTriggerStyle,
  Ur as phoneInputVariants,
  Zl as radius,
  zo as segmentControlVariants,
  Mo as segmentItemVariants,
  rc as semanticColors,
  Dl as showToast,
  Uo as sidebarMenuButtonVariants,
  Jl as spacing,
  Za as spinnerVariants,
  Ho as tabsListVariants,
  Xo as tabsTriggerVariants,
  Fr as textareaVariants,
  Wo as themeColorTokens,
  Xr as timePickerVariants,
  pa as toggleVariants,
  ar as typographyVariants,
  ql as useApplyTheme,
  Je as useFormField,
  Oo as useIsMobile,
  Ze as useSidebar,
  Qo as useTheme
};
