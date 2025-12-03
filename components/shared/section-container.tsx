"use client";

import classNames from "classnames";
import React from "react";

export type SectionVariant = "white" | "gray" | "mint" | "sky" | "transparent";

export const SECTION_VARIANT_STYLES: Record<
  SectionVariant,
  { containerClass: string; dashColor: string }
> = {
  white: {
    containerClass: "bg-white border-[#EAECF0]",
    dashColor: "#F2F4F7",
  },
  gray: {
    containerClass: "bg-[#F9FAFB] border-[#EAECF0]",
    dashColor: "#E4E7EC",
  },
  mint: {
    containerClass: "bg-[#F4FBF9] border-[#B9DFD1]",
    dashColor: "#D1EAE1",
  },
  sky: {
    containerClass: "bg-[#F0FBFF] border-[rgba(89,213,251,0.3)]",
    dashColor: "#D1EAE1",
  },
  transparent: {
    containerClass: "bg-transparent border-[#EAECF0]",
    dashColor: "#F2F4F7",
  },
};

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
  variant?: SectionVariant;
  outerClassName?: string;
  sectionClassName?: string;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  withDashedWrapper?: boolean;
  dashedWrapperClassName?: string;
  dashedWrapperStyle?: React.CSSProperties;
}

export default function SectionContainer({
  id,
  children,
  variant = "white",
  outerClassName,
  sectionClassName,
  containerClassName,
  containerStyle,
  withDashedWrapper = false,
  dashedWrapperClassName,
  dashedWrapperStyle,
}: SectionContainerProps) {
  const outerClasses = classNames("relative z-10 px-1 lg:px-4 lg:py-0", outerClassName);
  const sectionClasses = sectionClassName ?? "py-4 lg:py-4";
  const containerClasses = classNames(
    "rounded-[24px] lg:rounded-[32px] lg:px-[80px] px-3 border-[0.5px]",
    SECTION_VARIANT_STYLES[variant].containerClass,
    containerClassName
  );
  const dashedWrapperInlineStyle = {
    ...dashedWrapperStyle,
    "--dash-color": SECTION_VARIANT_STYLES[variant].dashColor,
  } as React.CSSProperties;

  const content = withDashedWrapper ? (
    <div className={classNames("custom-dashed-border", dashedWrapperClassName)} style={dashedWrapperInlineStyle}>
      {children}
    </div>
  ) : (
    children
  );

  return (
    <div id={id} className={outerClasses}>
      <section className={sectionClasses}>
        <div className={containerClasses} style={containerStyle}>
          {content}
        </div>
      </section>
    </div>
  );
}

