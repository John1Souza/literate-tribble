import { Heart } from "lucide-react-native";
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
} from "react-native";

type ButtonVariant = "default" | "primary" | "secondary";

type ButtonProps = {
  title?: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  variant?: ButtonVariant;
  className?: string;
  textClassName?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-pink-100 text-pink-600",
  primary: "bg-pink-600 text-white",
  secondary: "bg-white border border-pink-600 text-pink-600",
};

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  title,
  onPress,
  textStyle,
  disabled = false,
  variant = "default",
  className,
  textClassName,
  children,
}) => (
  <TouchableOpacity
    className={`px-6 py-3 rounded-xl ${variantClasses[variant]} ${className}`}
    onPress={onPress}
    activeOpacity={0.7}
    disabled={disabled}
  >
    {children ? (
      children
    ) : (
      <Text className={`font-bold text-lg ${textClassName}`}>{title}</Text>
    )}
  </TouchableOpacity>
);

export default Button;
