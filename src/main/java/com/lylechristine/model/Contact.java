package com.lylechristine.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.bson.types.ObjectId;

@Data
@AllArgsConstructor
public class Contact {

    public ObjectId id;
    private String firstName;
    private String lastName;
    private String emailAddress;
    private String phoneNumber;
    private String jobTitle;
    private String company;
    private String profileLink;

    public Contact() {
        super();
    }

}
