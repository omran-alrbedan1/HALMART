import { TextInputProps, TouchableOpacityProps } from "react-native";

declare interface MarkerData {
  latitude: number;
  longitude: number;
  id: number;
  title: string;
  profile_image_url: string;
  car_image_url: string;
  car_seats: number;
  rating: number;
  first_name: string;
  last_name: string;
  time?: number;
  price?: string;
}

declare interface MapProps {
  destinationLatitude?: number;
  destinationLongitude?: number;
  onDriverTimesCalculated?: (driversWithTimes: MarkerData[]) => void;
  selectedDriver?: number | null;
  onMapReady?: () => void;
}

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
}

declare interface InputFieldProps extends TextInputProps {
  label?: string;
  icon?: any;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
}

export interface CategoryType {
  id: number;
  image: any;
  name: string;
}

export interface DishProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: ImageProps;
}

interface Restaurant {
  id: number;
  name: string;
  image: any;
  description: string;
  stars?: number;
  reviews: string | undefined;
  category: string | undefined;
  address: string;
  lat: number;
  lng: number;
  dishs?: DishProps[];
}
