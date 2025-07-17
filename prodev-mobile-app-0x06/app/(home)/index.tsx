import PropertyListing from "@/components/PropertyListing";
import { styles } from "@/styles/_homestyle";
import { Feather } from "@expo/vector-icons";
import {
    View,
    Text,
    TextInput,
    Image,
    ScrollView,
    Dimensions,
    TouchableHighlight,
    StatusBar,
    SafeAreaView,
} from "react-native";
import { FILTERS, SAMPLE_DATA } from "@/constants/data";

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#0C8057" }}>
            <StatusBar backgroundColor="#0C8057" barStyle="light-content" />

            <View style={styles.container}>
                <View style={styles.searchGroup}>
                    <View style={styles.searchFormGroup}>
                        <View style={styles.searchControlGroup}>
                            <Text style={styles.searchFormText}>Where to?</Text>
                            <TextInput
                                style={{ ...styles.searchControl, ...styles.searchFormText }}
                                placeholder="Location . Date . Add guest"
                                placeholderTextColor="#ccc"
                            />
                        </View>
                        <View style={styles.searchButton}>
                            <Feather name="search" size={24} color="white" />
                        </View>
                    </View>
                </View>

                <View style={{ height: 72, backgroundColor: "white" }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.filterGroup}>
                            {FILTERS.map((filter, index) => (
                                <View style={styles.filterContainer} key={index}>
                                    <Image
                                        style={{ flex: 1 }}
                                        source={require("@/assets/images/mansion.png")}
                                        resizeMode="contain"
                                    />
                                    <Text>{filter}</Text>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </View>

                <ScrollView style={styles.listingContainer}>
                    <PropertyListing listings={SAMPLE_DATA} />
                    <View style={styles.paginationContainer}>
                        <TouchableHighlight style={styles.showMoreButton}>
                            <Text style={styles.showMoreButtonText}>Show more</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default Home;
